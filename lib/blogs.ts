import "server-only";

export type IndustrialBlog = {
  id: string | number;
  title: string;
  slug: string;
  excerpt?: string | null;
  content?: string | null;
  publishedAt?: string | null;
  imageUrl: string | null;
  imageAlt: string;
};

type BlogResponse = { success?: boolean; blogs?: IndustrialBlog[] };

async function loadBlogs(params = "") {
  const cmsUrl = process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
  if (!cmsUrl) return [];

  try {
    const response = await fetch(
      `${cmsUrl}/api/industrial-blog-feed${params}`,
      {
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8_000),
      },
    );
    if (!response.ok) return [];

    const result = (await response.json()) as BlogResponse;
    return result.success && Array.isArray(result.blogs) ? result.blogs : [];
  } catch {
    return [];
  }
}

export function getIndustrialBlogs(limit = 100) {
  return loadBlogs(`?limit=${Math.min(Math.max(limit, 1), 100)}`);
}

export async function getIndustrialBlog(slug: string) {
  const blogs = await loadBlogs(`?slug=${encodeURIComponent(slug)}`);
  return blogs[0] || null;
}

export function getIndustrialBlogImage(imageUrl: string | null) {
  return imageUrl
    ? `/api/blog-media?path=${encodeURIComponent(imageUrl)}`
    : null;
}
