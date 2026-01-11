import NavBar from "@/components/common/Navbar";
import HeroSection from "@/components/features/Hero-Section";
import AboutSection from "@/components/features/About-Section";
import SpeechSection from "@/components/features/Speech-Section";
import TestimonialsSection from "@/components/features/Testimonials-Section";
import FAQSection from "@/components/features/FAQ-Section";
import FooterHimsi from "@/components/common/Footer";
import ContactSection from "@/components/features/Contact-Section";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* <div className="bg-himsi-hero"> */}
        <NavBar />
        <HeroSection />
        <AboutSection />
        <SpeechSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      {/* </div> */}
      <div className="relative">
        <div className="-mt-px">
          <FooterHimsi />
        </div>
      </div>
    </main>
  )
}