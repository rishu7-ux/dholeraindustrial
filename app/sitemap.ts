import type { MetadataRoute } from "next";
import { getIndustrialBlogs } from "@/lib/blogs";

const SITE_URL = "https://dholeraindustrialplot.com";

const STATIC_ROUTES: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/properties", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },
  { path: "/director-message", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/samridhi-365-industrial-plot", changeFrequency: "weekly", priority: 0.8 },
  { path: "/samridhi-872-2-industrial-plots", changeFrequency: "weekly", priority: 0.8 },
  { path: "/samridhi-621-panchi-industrial-plots", changeFrequency: "weekly", priority: 0.8 },
  { path: "/sandhida-191-logistic-plot", changeFrequency: "weekly", priority: 0.8 },
  { path: "/blog", changeFrequency: "daily", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogs = await getIndustrialBlogs(100);

  const blogEntries: MetadataRoute.Sitemap = blogs
    .filter((blog) => blog.slug)
    .map((blog) => ({
      url: `${SITE_URL}/blog/${blog.slug}`,
      lastModified: blog.publishedAt ? new Date(blog.publishedAt) : now,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...staticEntries, ...blogEntries];
}
