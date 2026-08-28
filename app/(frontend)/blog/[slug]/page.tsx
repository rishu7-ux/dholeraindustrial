import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  getIndustrialBlog,
  getIndustrialBlogImage,
} from "@/lib/blogs";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getIndustrialBlog(slug);
  if (!blog) notFound();

  const imageUrl = getIndustrialBlogImage(blog.imageUrl);
  const date = blog.publishedAt;
  const formattedDate = date ? new Date(date).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" }) : "";

  return <><TopBar /><Navbar /><SocialBar /><main className="min-h-screen bg-[#f7fbff]">
    <section className="border-b border-[#fdb713]/25 bg-[#12568d] text-white"><div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8"><div className="flex gap-2 text-sm text-white/60"><Link href="/" className="hover:text-[#fdb713]">Home</Link><span>/</span><Link href="/blog" className="hover:text-[#fdb713]">Blog</Link><span>/</span><span className="text-[#fdb713]">Article</span></div><span className="mt-7 inline-flex rounded-full bg-[#fdb713] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-[#12568d]">Industrial Insights</span><h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">{blog.title}</h1><div className="mt-6 flex gap-5 text-sm text-white/70"><span className="flex items-center gap-2"><FaUserAlt className="text-[#fdb713]" />Admin</span>{formattedDate && <span className="flex items-center gap-2"><FaCalendarAlt className="text-[#fdb713]" />{formattedDate}</span>}</div></div></section>
    <section className="py-12 sm:py-16"><article className="mx-auto max-w-5xl overflow-hidden rounded-[26px] border border-[#12568d]/15 bg-white shadow-[0_16px_50px_rgba(18,86,141,0.08)]">{imageUrl && <div className="relative aspect-video"><Image src={imageUrl} alt={blog.imageAlt || blog.title} fill priority sizes="(max-width: 1100px) 100vw, 1000px" className="object-cover" /></div>}<div className="px-6 py-8 sm:px-10 lg:px-14">{blog.excerpt && <div className="mb-8 rounded-2xl border border-[#fdb713]/25 bg-[#fff8e8] p-5 text-lg font-semibold leading-8 text-[#12568d]">{blog.excerpt}</div>}<div className="whitespace-pre-line text-base leading-8 text-slate-600">{blog.content || "Blog content is not available."}</div><div className="my-10 h-px bg-[#12568d]/10" /><Link href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-[#12568d] px-5 py-3 text-sm font-black text-[#12568d] transition hover:bg-[#12568d] hover:text-white"><FaArrowLeft />Back to Blogs</Link></div></article></section>
  </main><Footer /></>;
}
