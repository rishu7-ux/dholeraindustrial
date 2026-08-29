import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  getIndustrialBlogImage,
  getIndustrialBlogs,
} from "@/lib/blogs";

export default async function CmsBlogSection() {
  const blogs = await getIndustrialBlogs(10);

  const formatDate = (date?: string | null) => date ? new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "";
  const runningBlogs = blogs.length > 1 ? [...blogs, ...blogs] : blogs;

  return (
    <section id="blog" className="overflow-hidden bg-[#f7fbff] py-16 sm:py-20">
      <style>{`@keyframes industrialBlogScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.industrial-blog-track{animation:industrialBlogScroll 35s linear infinite;will-change:transform}.industrial-blog-slider:hover .industrial-blog-track{animation-play-state:paused}@media(prefers-reduced-motion:reduce){.industrial-blog-track{animation:none}}`}</style>
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#fdb713]">Latest Insights</p>
          <h2 className="mt-2 text-3xl font-black text-[#12568d] sm:text-4xl lg:text-5xl">Industrial <span className="text-[#fdb713]">Blog</span></h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">Explore Dholera infrastructure news, industrial development and investment insights.</p>
        </div>

        {blogs.length ? (
          <div className="industrial-blog-slider relative overflow-hidden py-5">
            <div className={`industrial-blog-track flex w-max gap-5 ${blogs.length === 1 ? "!animate-none" : ""}`}>
              {runningBlogs.map((blog, index) => {
                const imageUrl = getIndustrialBlogImage(blog.imageUrl);
                const date = blog.publishedAt;
                return (
                  <article key={`${blog.id}-${index}`} className="group flex w-64 shrink-0 flex-col overflow-hidden rounded-xl border border-[#12568d]/15 bg-white shadow-[0_8px_25px_rgba(18,86,141,0.08)] transition hover:-translate-y-2 hover:border-[#fdb713] hover:shadow-[0_18px_40px_rgba(18,86,141,0.16)] sm:w-80 sm:rounded-2xl">
                    <Link href={`/blog/${blog.slug}`} className="relative block h-40 overflow-hidden bg-[#eaf4fb] sm:h-48">
                      {imageUrl ? <Image src={imageUrl} alt={blog.imageAlt || blog.title} fill sizes="320px" className="object-cover transition-transform duration-700 group-hover:scale-110" /> : <div className="absolute inset-0 bg-linear-to-br from-[#12568d] to-[#4385b4]" />}
                      <div className="absolute inset-0 bg-linear-to-t from-[#12568d]/60 via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full bg-[#fdb713] px-3 py-1.5 text-[10px] font-black uppercase text-[#12568d]">Industrial</span>
                    </Link>
                    <div className="flex flex-1 flex-col p-4 sm:p-5">
                      <div className="flex items-center gap-4 text-[11px] text-slate-500"><span className="flex items-center gap-1.5"><FaUserAlt className="text-[#fdb713]" />Admin</span>{date && <span className="flex items-center gap-1.5"><FaCalendarAlt className="text-[#fdb713]" />{formatDate(date)}</span>}</div>
                      <Link href={`/blog/${blog.slug}`}><h3 className="mt-3 line-clamp-2 text-base font-black leading-6 text-[#12568d] transition group-hover:text-[#fdb713] sm:mt-4 sm:text-lg sm:leading-7">{blog.title}</h3></Link>
                      {blog.excerpt && <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500 sm:mt-3 sm:text-sm sm:leading-6">{blog.excerpt}</p>}
                      <Link href={`/blog/${blog.slug}`} className="mt-auto inline-flex items-center gap-2 pt-4 text-xs font-black text-[#12568d] transition hover:gap-3 hover:text-[#fdb713] sm:pt-5 sm:text-sm">Read More <FaArrowRight /></Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ) : <div className="rounded-2xl border border-dashed border-[#12568d]/20 bg-white px-6 py-12 text-center text-sm text-slate-500">No published blogs found. Publish a post in the CMS and refresh this page.</div>}
      </div>
    </section>
  );
}
