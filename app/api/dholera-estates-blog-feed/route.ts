import { getPayload } from "payload";
import config from "../../../payload.config";

type Media = { url?: string | null; alt?: string | null };

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug")?.trim();

  try {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "dholera-estates-blogs",
      where: slug
        ? { and: [{ slug: { equals: slug } }, { status: { equals: "published" } }] }
        : { status: { equals: "published" } },
      sort: "-createdAt",
      limit: slug ? 1 : 100,
      depth: 1,
    });
    const blogs = result.docs.map((blog) => {
      const media = typeof blog.featuredImage === "object" && blog.featuredImage !== null
        ? blog.featuredImage as Media
        : null;

      return {
        id: blog.id,
        blogTitle: blog.blogTitle,
        slug: blog.slug,
        shortDescription: blog.shortDescription,
        blogContent: blog.blogContent,
        featuredImage: media
          ? { url: media.url || null, alt: media.alt || blog.blogTitle }
          : null,
        status: blog.status,
        createdAt: blog.createdAt,
      };
    });

    return Response.json(
      { success: true, blogs },
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
    );
  } catch (error) {
    console.error("Dholera Estates blogs could not be loaded", error);
    return Response.json(
      { success: false, blogs: [], message: "Blogs are temporarily unavailable" },
      { status: 500 },
    );
  }
}
