import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import { getIndustrialBlogImage, getIndustrialBlogs } from "@/lib/blogs";

export default async function CmsBlogSection() {
  // Payload remains the source of truth; this component only changes the
  // presentation of the returned posts.
  const blogs = await getIndustrialBlogs(10);
  const formatDate = (date?: string | null) => {
    if (!date) return "";

    const parsedDate = new Date(date);
    if (Number.isNaN(parsedDate.getTime())) return "";

    return parsedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section
      id="blog"
      className="premium-blog-editorial overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="premium-blog-editorial-wrap mx-auto w-full max-w-[1880px] px-5 sm:px-8 lg:px-12">
        <div className="premium-blog-heading mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="premium-blog-eyebrow text-xs font-bold uppercase tracking-[0.3em] text-[#FF7A00]">
              Latest Insights
            </p>
            <h2 className="premium-blog-title mt-4 text-4xl font-black leading-none tracking-[-0.055em] text-[#0A2E73] sm:text-6xl lg:text-7xl">
              Industrial <span className="text-[#FF7A00]">Blog</span>
            </h2>
          </div>

        </div>

        {blogs.length ? (
          <div className="premium-blog-rail" aria-label="Latest blog posts">
            <div className="premium-blog-track">
            {[...blogs, ...blogs].map((blog, index) => {
              const date = formatDate(blog.publishedAt);
              const originalIndex = index % blogs.length;
              const isDuplicate = index >= blogs.length;

              return (
                <article
                  key={`${blog.id}-${index}`}
                  aria-hidden={isDuplicate ? true : undefined}
                  className="premium-blog-card group relative flex shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-[#0A2E73]/15 bg-white shadow-[0_14px_34px_rgba(10,46,115,0.08)] transition duration-500 hover:-translate-y-2 hover:border-[#FF7A00] hover:shadow-[0_24px_52px_rgba(10,46,115,0.16)]"
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative block aspect-[1.35/1] overflow-hidden bg-[#0A2E73]/10"
                  >
                    <Image
                      src={getIndustrialBlogImage(blog.imageUrl)}
                      alt={blog.imageAlt || blog.title}
                      fill
                      sizes="(max-width: 640px) 82vw, (max-width: 1024px) 45vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-[#FF7A00] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#081A3A] shadow-lg">
                      Industrial
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081A3A]/35 via-transparent to-transparent opacity-70" />
                  </Link>

                  <div className="premium-blog-card-body flex min-h-[17rem] flex-1 flex-col p-5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#0A2E73]/65">
                      <span className="inline-flex items-center gap-2">
                        <FaUserAlt className="text-[#FF7A00]" />
                        Admin
                      </span>
                      {date && (
                        <time
                          dateTime={blog.publishedAt || undefined}
                          className="inline-flex items-center gap-2"
                        >
                          <FaCalendarAlt className="text-[#FF7A00]" />
                          {date}
                        </time>
                      )}
                    </div>

                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="premium-blog-card-title mt-6 line-clamp-3 text-xl font-black leading-tight text-[#0A2E73] transition-colors duration-300 group-hover:text-[#FF7A00] sm:text-2xl">
                        {blog.title}
                      </h3>
                    </Link>

                    {blog.excerpt && (
                      <p className="premium-blog-card-excerpt mt-4 line-clamp-3 text-sm leading-6 text-[#0A2E73]/65">
                        {blog.excerpt}
                      </p>
                    )}

                    <Link
                      href={`/blog/${blog.slug}`}
                      className="premium-blog-read-more mt-auto inline-flex w-fit items-center gap-3 pt-7 text-xs font-extrabold uppercase tracking-[0.15em] text-[#0A2E73] transition-colors duration-300 hover:text-[#FF7A00]"
                    >
                      Read More
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>

                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FF7A00] transition-all duration-500 group-hover:w-full" />
                  <span className="sr-only">Article {originalIndex + 1}</span>
                </article>
              );
            })}
            </div>
          </div>
        ) : (
          <div className="border border-dashed border-[#0A2E73]/25 px-6 py-16 text-center text-sm text-[#0A2E73]/70">
            No published blogs found. Publish a post in the CMS and refresh
            this page.
          </div>
        )}
      </div>
    </section>
  );
}
