import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";

import IndustrialAbout from "@/components/IndustrialAbout";
import IndustrialServices from "@/components/IndustrialServices";
import LandCategories from "@/components/LandCategories"; 
import StatsCounter from "@/components/StatsCounter";
import MarqueeBand from "@/components/MarqueeBand";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";
import CmsBlogSection from "@/components/CmsBlogSection";
import Footer from "@/components/Footer";
import PropertyListings from "@/components/PropertyListings";





export default function Home() {
  return (
    <div className="premium-home">
    
      <TopBar />
      <Navbar />
      <Hero />
      <StatsCounter />
      <MarqueeBand />
      <SocialBar />
      <PropertyListings/>
      <IndustrialAbout />
      <LandCategories />
      <IndustrialServices />
       <Testimonials />
       <GallerySection />
       <CmsBlogSection />
       <Footer/>
        





    </div>
  );
}
