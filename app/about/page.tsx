import AboutHeroSection from "@/components/features/about/About-Hero-Section";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ProfileAboutSection from "@/components/features/about/Profile-About-Section";
import VisiMisiAboutSection from "@/components/features/about/Visi-Misi-About-Section";
import LogoAboutSection from "@/components/features/about/Logo-About-Section";
import DokumentasiAboutSection from "@/components/features/about/Dokumentasi-About-Section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHeroSection />
        <ProfileAboutSection />
        <VisiMisiAboutSection />
        <LogoAboutSection />
        <DokumentasiAboutSection />
      </main>
      <Footer />
    </>
  );
}
