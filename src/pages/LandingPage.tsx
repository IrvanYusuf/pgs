"use client";

import AboutUsSection from "@/components/section/AboutUsSection";
import HeroSection from "@/components/section/HeroSection";
import ServiceSection from "@/components/section/ServiceSection";
import WhyWorkWithUsSection from "@/components/section/WhyWorkWithUsSection";
import TestimoniSection from "@/components/section/TestimoniSection";
import PortfolioSection from "@/components/section/PortfolioSection";
import BrandingSection from "@/components/section/BrandingSection";

export default function LandingPage() {
  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT US SECTION */}
      <AboutUsSection />

      {/* SERVICES SECTION */}
      <ServiceSection />

      {/* WHY WORK WITH US SECTION */}
      <WhyWorkWithUsSection />

      {/* TESTIMONY SECTION */}
      <TestimoniSection />

      {/* PORTFOLIO SECTION */}
      <PortfolioSection />

      {/* BRANDING SECTION */}
      <BrandingSection />
    </div>
  );
}
