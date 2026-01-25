import NavBar from "@/components/common/Navbar";
import HeroSection from "@/components/features/home/Hero-Section";
import AboutSection from "@/components/features/home/About-Section";
import SpeechSection from "@/components/features/home/Speech-Section";
import TestimonialsSection from "@/components/features/home/Testimonials-Section";
import FAQSection from "@/components/features/home/FAQ-Section";
import FooterHimsi from "@/components/common/Footer";
import ContactSection from "@/components/features/home/Contact-Section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="bg-himsi-hero">
        <NavBar />
        <HeroSection />
        <AboutSection />
        <SpeechSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FooterHimsi />
      </div>
    </main>
  )
}