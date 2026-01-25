
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import AboutKabinetSection from "@/components/features/kabinet/About-Kabinet-Section";
import LogoKabinetSection from "@/components/features/kabinet/Logo-Kabinet-Section";

export default function KabinetPage() {
    return (
        <>
            <Navbar />
            <main>
                <LogoKabinetSection />
                <AboutKabinetSection />
            </main>
            <Footer />
        </>
    );
}