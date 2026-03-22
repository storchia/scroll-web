"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnimationSection from "@/components/AnimationSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <Header />
      <HeroSection />
      <AnimationSection />
      <AboutSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
