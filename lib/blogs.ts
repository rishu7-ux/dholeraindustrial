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

export const FALLBACK_BLOG_IMAGE = "/gallery/industrial Land.webp";

async function loadBlogs(params = "") {
  const cmsUrl = process.env.PAYLOAD_CMS_URL?.replace(/\/$/, "");
  if (!cmsUrl) return [];

  try {
    const response = await fetch(
      `${cmsUrl}/api/industrial-blog-feed${params}`,
      {
        // Blog publishing is an editorial action, so do not serve a stale
        // feed after a post is changed from draft to published in the CMS.
        cache: "no-store",
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

export function getIndustrialBlogImage(imageUrl: string | null): string {
  const value = typeof imageUrl === "string" ? imageUrl.trim() : "";
  if (!value) return FALLBACK_BLOG_IMAGE;

  // Some older records may already contain this site's proxy URL. Unwrap it
  // before resolving so we never create /api/blog-media?path=/api/blog-media...
  if (value.startsWith("/api/blog-media")) {
    try {
      const nestedPath = new URL(value, "https://local.invalid").searchParams.get("path");
      return nestedPath ? getIndustrialBlogImage(nestedPath) : FALLBACK_BLOG_IMAGE;
    } catch {
      return FALLBACK_BLOG_IMAGE;
    }
  }

  try {
    const parsed = new URL(value, "https://local.invalid");
    const isBlobUrl =
      parsed.protocol === "https:" &&
      /(^|\.)public\.blob\.vercel-storage\.com$/i.test(parsed.hostname);
    if (isBlobUrl) return parsed.toString();

    const isPayloadMediaPath = parsed.pathname.startsWith("/api/media/file/");
    if (!isPayloadMediaPath) return FALLBACK_BLOG_IMAGE;

    // Normalize absolute and relative legacy Payload URLs to a path so the
    // proxy always fetches from the configured CMS origin.
    const payloadPath = `${parsed.pathname}${parsed.search}`;
    return `/api/blog-media?path=${encodeURIComponent(payloadPath)}`;
  } catch {
    return FALLBACK_BLOG_IMAGE;
  }
}
