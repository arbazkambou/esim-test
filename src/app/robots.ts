import type { MetadataRoute } from "next";

const env = process.env.NEXT_PUBLIC_ENV || "development";

export default function robots(): MetadataRoute.Robots {
  const rules = [
    {
      userAgent: "*",
      disallow: env === "production" ? "/cdn-cgi/" : "/",
      allow: env === "production" ? "/" : undefined,
    },
  ];

  return {
    rules,
    sitemap: env === "production" ? "https://esimcard.com/sitemap.xml" : "",
  };
}
