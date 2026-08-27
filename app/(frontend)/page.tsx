import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialBar from "@/components/SocialBar";

import IndustrialAbout from "@/components/IndustrialAbout";
import IndustrialServices from "@/components/IndustrialServices";
import LandCategories from "@/components/LandCategories"; 
import StatsCounter from "@/components/StatsCounter";
import Testimonials from "@/components/Testimonials";
import GallerySection from "@/components/GallerySection";
import CmsBlogSection from "@/components/CmsBlogSection";
import Footer from "@/components/Footer";
import PropertyListings from "@/components/PropertyListings";





export default function Home() {
  return (
    <>
    
      <TopBar />
      <Navbar />
      <Hero />
      <SocialBar />
      <PropertyListings/>
      <IndustrialAbout />
      <IndustrialServices />
      <LandCategories />
      <StatsCounter />
       <Testimonials />
       <GallerySection />
       <CmsBlogSection />
       <Footer/>
        





    </>
  );
}
