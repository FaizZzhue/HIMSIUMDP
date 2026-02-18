import Navbar from "@/components/common/Navbar";
import Profile from "@/components/features/kabinet/Profile-Kabinet";  
import LogoKabinet from "@/components/features/kabinet/Logo-Kabinet";
import AboutKabinet from "@/components/features/kabinet/About-Kabinet";
import BidangPengurus from "@/components/features/kabinet/Bidang-Pengurusan";
import Footer from "@/components/common/Footer";

export default function KabinetPage() {
    return (
        <>
            <Navbar />
            <main>
                <LogoKabinet />
                <AboutKabinet />
                <Profile />
                <BidangPengurus />
            </main>
            <Footer />
        </>
    );
}