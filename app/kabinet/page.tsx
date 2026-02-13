import Navbar from "@/components/common/Navbar";
import AboutKabinetSection from "@/components/features/kabinet/About-Kabinet-Section";
import FilosofiKabinetSection from "@/components/features/kabinet/Filosofi-Kabinet-Section";
import KabinetBidangPengurus from "@/components/features/kabinet/Kabinet-Bidang-Pengurus";
import LogoKabinetSection from "@/components/features/kabinet/Logo-Kabinet-Section";
import ProfileKabinetSection from "@/components/features/kabinet/Profile-Kabinet-Section";
import Footer from "@/components/common/Footer";

export default function KabinetPage() {
    return (
        <>
            <Navbar />
            <main>
                <LogoKabinetSection />
                <AboutKabinetSection />
                <ProfileKabinetSection />
                <FilosofiKabinetSection />
                <KabinetBidangPengurus />
            </main>
            <Footer />
        </>
    );
}