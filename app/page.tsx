import BlogSection from "@/components/_section/BlogSection";
import CtaBanner from "@/components/_section/CtaBanner";
import HelpingSection from "@/components/_section/HelpingSection";
import HeroSection from "@/components/_section/HeroSection";
import ServicesSection from "@/components/_section/ServicesSection";
import StatsSection from "@/components/_section/StatsSection";
import TestimonialsSection from "@/components/_section/TestimonialsSection";
import WhyChooseUs from "@/components/_section/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HelpingSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsSection />
      <TestimonialsSection />
      <CtaBanner />
      <BlogSection />
    </main>
  );
}