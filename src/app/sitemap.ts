import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/profile";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/work/${study.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
