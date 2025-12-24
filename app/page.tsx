import NavBar from "@/components/common/Navbar";
import HeroSection from "@/components/features/Hero-Section";
import AboutSection from "@/components/features/About-Section";
import SpeechSection from "@/components/features/Speech-Section";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-himsi-hero">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SpeechSection />
    </main>
  )
}