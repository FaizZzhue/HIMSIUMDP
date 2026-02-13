import Navbar from "@/components/common/Navbar";
import AboutHeroSection from "@/components/features/about/About-Hero-Section";
import ProfileAboutSection from "@/components/features/about/Profile-About-Section";
import VisiMisiAboutSection from "@/components/features/about/Visi-Misi-About-Section";
import LogoAboutSection from "@/components/features/about/Logo-About-Section";
import DokumentasiAboutSection from "@/components/features/about/Dokumentasi-About-Section";
import Footer from "@/components/common/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <LogoAboutSection />
        <AboutHeroSection />
        <ProfileAboutSection />
        <VisiMisiAboutSection />
        <DokumentasiAboutSection />
      </main>
      <Footer />
    </>
  );
}
