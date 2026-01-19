import AboutHeroSection from "@/components/features/about/About-Hero-Section";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
      </main>
      <Footer />
    </>
  );
}
