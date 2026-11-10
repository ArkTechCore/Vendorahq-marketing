
import "server-only";

import nodemailer from "nodemailer";

export type ContactInquiry = {
  inquiryType: "early-access" | "demo" | "sales";
  fullName: string;
  email: string;
  company: string;
  phone: string;
  product: string;
  storeCount: string;
  message: string;
  consent: boolean;
};

export type SendInquiryResult =
  | { success: true }
  | { success: false; error: "NOT_CONFIGURED" | "DELIVERY_FAILED" };

function getMailConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const portText = process.env.SMTP_PORT?.trim();
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;
  const from = process.env.SMTP_FROM?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!host || !portText || !user || !password || !from || !to) {
    return null;
  }

  const port = Number(portText);

  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    return null;
  }

  return {
    host,
    port,
    user,
    password,
    from,
    to,
  };
}

function getInquiryLabel(type: ContactInquiry["inquiryType"]) {
  switch (type) {
    case "early-access":
      return "Early Access";
    case "demo":
      return "Demo Request";
    case "sales":
      return "Sales Inquiry";
  }
}

export async function sendContactInquiry(
  inquiry: ContactInquiry
): Promise<SendInquiryResult> {
  const config = getMailConfig();

  if (!config) {
    return {
      success: false,
      error: "NOT_CONFIGURED",
    };
  }

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: {
      user: config.user,
      pass: config.password,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const label = getInquiryLabel(inquiry.inquiryType);

  const body = [
    "NEW VENDORAHQ WEBSITE INQUIRY",
    "================================",
    "",
    `Inquiry Type: ${label}`,
    `Product: ${inquiry.product}`,
    "",
    "CUSTOMER DETAILS",
    "--------------------------------",
    `Full Name: ${inquiry.fullName}`,
    `Email: ${inquiry.email}`,
    `Company: ${inquiry.company}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Store Count: ${inquiry.storeCount}`,
    "",
    "CUSTOMER MESSAGE",
    "--------------------------------",
    inquiry.message,
    "",
    `Contact Consent: ${inquiry.consent ? "Yes" : "No"}`,
    "",
    "Submitted through VendoraHQ website.",
  ].join("\n");

  try {
    const info = await transporter.sendMail({
      from: config.from,
      to: config.to,
      replyTo: {
        name: inquiry.fullName,
        address: inquiry.email,
      },
      subject: `[VendoraHQ] ${label} - ${inquiry.product}`,
      text: body,
    });

    if (!info.accepted.includes(config.to)) {
      return {
        success: false,
        error: "DELIVERY_FAILED",
      };
    }

    return { success: true };
  } catch (error) {
    console.error(
      "VendoraHQ inquiry delivery failed:",
      error instanceof Error ? error.name : "Unknown error"
    );

    return {
      success: false,
      error: "DELIVERY_FAILED",
    };
  } finally {
    transporter.close();
  }
}
