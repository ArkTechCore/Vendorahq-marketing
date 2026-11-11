
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vendorahq.app";

  const routes = [
    "",
    "/about",
    "/founder",
    "/products/pos",
    "/products/kiosk",
    "/products/loyalty",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}