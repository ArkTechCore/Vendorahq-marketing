
import { NextRequest, NextResponse } from "next/server";
import {
  sendContactInquiry,
  type ContactInquiry,
} from "@/lib/email";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;

const inquiryTypes = new Set([
  "early-access",
  "demo",
  "sales",
]);

const products = new Set([
  "VendoraPOS",
  "VendoraKiosk",
  "VendoraLoyalty",
  "Multiple Products",
]);

const storeCounts = new Set([
  "1",
  "2-5",
  "6-20",
  "21+",
  "Planning",
]);

const emailPattern =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimit = new Map<
  string,
  { count: number; resetAt: number }
>();

function isText(
  value: unknown,
  min: number,
  max: number
): value is string {
  return (
    typeof value === "string" &&
    value.trim().length >= min &&
    value.trim().length <= max
  );
}

function validateInquiry(
  value: unknown
): ContactInquiry | null {
  if (
    !value ||
    typeof value !== "object" ||
    Array.isArray(value)
  ) {
    return null;
  }

  const data = value as Record<string, unknown>;

  if (
    !inquiryTypes.has(String(data.inquiryType)) ||
    !isText(data.fullName, 2, 120) ||
    !isText(data.email, 5, 254) ||
    !emailPattern.test(data.email.trim()) ||
    !isText(data.company, 2, 160) ||
    !isText(data.message, 10, 3000) ||
    !products.has(String(data.product)) ||
    !storeCounts.has(String(data.storeCount)) ||
    data.consent !== true
  ) {
    return null;
  }

  if (
    data.phone !== undefined &&
    data.phone !== null &&
    (typeof data.phone !== "string" ||
      data.phone.length > 40)
  ) {
    return null;
  }

  return {
    inquiryType: data.inquiryType as ContactInquiry["inquiryType"],
    fullName: data.fullName.trim(),
    email: data.email.trim(),
    company: data.company.trim(),
    phone:
      typeof data.phone === "string"
        ? data.phone.trim()
        : "",
    product: data.product as string,
    storeCount: data.storeCount as string,
    message: data.message.trim(),
    consent: true,
  };
}

function jsonResponse(
  message: string,
  status: number
) {
  return NextResponse.json(
    { message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const contentType =
    request.headers.get("content-type") ?? "";

  if (
    !contentType.toLowerCase().startsWith(
      "application/json"
    )
  ) {
    return jsonResponse(
      "Expected a JSON request.",
      415
    );
  }

  const declaredLength = Number(
    request.headers.get("content-length") ?? "0"
  );

  if (
    !Number.isFinite(declaredLength) ||
    declaredLength > MAX_BODY_BYTES
  ) {
    return jsonResponse(
      "Request is too large.",
      413
    );
  }

  // Limit the actual body size even if Content-Length
  // is missing or inaccurate.
  let bodyText = "";

  try {
    const reader = request.body?.getReader();

    if (!reader) {
      return jsonResponse(
        "Request body is required.",
        400
      );
    }

    const decoder = new TextDecoder();
    let totalBytes = 0;

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      totalBytes += value.byteLength;

      if (totalBytes > MAX_BODY_BYTES) {
        await reader.cancel();

        return jsonResponse(
          "Request is too large.",
          413
        );
      }

      bodyText += decoder.decode(value, {
        stream: true,
      });
    }

    bodyText += decoder.decode();
  } catch {
    return jsonResponse(
      "Unable to read request.",
      400
    );
  }

  let parsed: unknown;

  try {
    parsed = JSON.parse(bodyText);
  } catch {
    return jsonResponse(
      "Invalid JSON.",
      400
    );
  }

  const inquiry = validateInquiry(parsed);

  if (!inquiry) {
    return jsonResponse(
      "Please check the form fields and try again.",
      400
    );
  }

  // A simple honeypot field. The frontend will
  // include an invisible field named "website".
  if (
    parsed &&
    typeof parsed === "object" &&
    "website" in parsed &&
    Boolean(
      (parsed as Record<string, unknown>).website
    )
  ) {
    return NextResponse.json(
      {
        message:
          "Your inquiry has been received.",
      },
      { status: 200 }
    );
  }

  // Basic per-instance throttling.
  // Production requires a shared, durable limiter
  // because Netlify may run multiple instances.
  const now = Date.now();
  const forwardedFor =
    request.headers.get("x-forwarded-for");

  const clientId =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  const previous = rateLimit.get(clientId);

  if (!previous || now >= previous.resetAt) {
    rateLimit.set(clientId, {
      count: 1,
      resetAt: now + 15 * 60 * 1000,
    });
  } else {
    if (previous.count >= 5) {
      return jsonResponse(
        "Too many requests. Please try again later.",
        429
      );
    }

    previous.count += 1;
  }

  const result = await sendContactInquiry(inquiry);

  if (!result.success) {
    if (result.error === "NOT_CONFIGURED") {
      console.error(
        "VendoraHQ contact SMTP is not configured."
      );

      return jsonResponse(
        "Contact service is temporarily unavailable.",
        503
      );
    }

    return jsonResponse(
      "Unable to send your inquiry right now. Please try again later.",
      502
    );
  }

  return NextResponse.json(
    {
      message:
        "Your inquiry has been sent successfully.",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
