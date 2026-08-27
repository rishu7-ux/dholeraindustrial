import type { Metadata } from "next";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import SocialBar from "@/components/SocialBar";
import CmsBlogSection from "@/components/CmsBlogSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Dholera Industrial Blog", description: "Industrial development and investment insights from Dholera SIR." };

export default function BlogPage() {
  return <><TopBar /><Navbar /><SocialBar /><main><section className="relative overflow-hidden bg-[#12568d] px-5 py-20 text-center text-white"><div className="absolute inset-x-0 bottom-0 h-1 bg-[#fdb713]" /><p className="text-xs font-black uppercase tracking-[0.3em] text-[#fdb713]">Latest Insights</p><h1 className="mt-4 text-4xl font-black sm:text-5xl">Dholera Industrial Blog</h1><p className="mx-auto mt-5 max-w-2xl text-white/70">Infrastructure updates, industrial opportunities and investment knowledge.</p></section><CmsBlogSection /></main><Footer /></>;
}
