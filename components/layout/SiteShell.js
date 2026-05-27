"use client";

import LoadingScreen from "@/components/common/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/sections/HeroSection";
import StatsSection from "@/sections/StatsSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import FeaturedProjectsSection from "@/sections/FeaturedProjectsSection";
import CaseStudySection from "@/sections/CaseStudySection";
import ServicesSection from "@/sections/ServicesSection";
import ExperienceTimeline from "@/sections/ExperienceTimeline";
import TestimonialsSection from "@/sections/TestimonialsSection";
import ContactSection from "@/sections/ContactSection";

export default function SiteShell() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <CaseStudySection />
        <ServicesSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
