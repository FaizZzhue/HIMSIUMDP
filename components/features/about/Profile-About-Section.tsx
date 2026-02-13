"use client";

import Snowfall from "react-snowfall";
import {
    Users,
    Layers3,
    Boxes,
    ClipboardList,
} from "lucide-react";
import TiltedCard from "@/lib/animations/TiltedCard";

type Stat = {
    value: string;
    label: string;
    Icon: React.ElementType;
};

const STATS: Stat[] = [
    { value: "50+", label: "Anggota Aktif", Icon: Users },
    { value: "4", label: "Bidang", Icon: Layers3 },
    { value: "10", label: "Divisi", Icon: Boxes },
    { value: "15+", label: "Program Kerja", Icon: ClipboardList },
];

export default function ProfileAboutSection() {
    return (
        <section className="relative overflow-hidden" id="profile">
            <Snowfall />
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">
                <h1 className="mt-5 mb-10 text-center text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                    Profile <span className="text-[#D3A32D]">HIMSI</span>
                </h1>

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
                        <p className="mt-5 text-base leading-relaxed text-foreground sm:text-[17px]">
                            Himpunan Mahasiswa Sistem Informasi Universitas Multi Data Palembang (HIMSI UMDP)
                            adalah organisasi di Fakultas Ilmu Komputer dan Rekayasa yang menjadi wadah aspirasi
                            mahasiswa/i Sistem Informasi untuk berkolaborasi, meningkatkan wawasan dan kemampuan,
                            serta membentuk jiwa kepemimpinan yang bertanggung jawab demi menjaga nama baik
                            universitas. HIMSI UMDP dibina oleh Pembina sekaligus Ketua Program Studi Sistem
                            Informasi, dipimpin oleh Ketua Umum (Kahim) dan Wakil Ketua Umum (Wakahim) dengan
                            dukungan Sekretaris Umum dan Bendahara Umum, serta memiliki 4 Bidang Eksekutif:
                            Litbang IT, Sosial, PSDM, dan Kominfo.
                        </p>
                    </div>

                    <div className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#2464A8]/15 via-white/10 to-[#D3A32D]/15 blur-2xl dark:from-[#2464A8]/25 dark:via-white/5 dark:to-[#D3A32D]/20"
                        />

                        <div className="relative sm:p-7">
                            <div className="mt-6 grid grid-cols-2 gap-6">
                                {STATS.map((s) => {
                                    const Icon = s.Icon;
                                    return (
                                        <TiltedCard
                                            key={s.label}
                                            showTooltip={false}
                                            showMobileWarning={false}
                                            rotateAmplitude={12}
                                            scaleOnHover={1.05}
                                            containerHeight="160px" 
                                            containerWidth="100%"
                                        >
                                            <div className="flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white/75 p-6 text-center backdrop-blur transition dark:border-white/15 dark:bg-white/10 w-full h-full shadow-sm">
                                                <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[#D3A32D]/12 text-[#D3A32D] ring-1 ring-[#D3A32D]/25">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <p className="text-xl font-bold text-[#D3A32D]">{s.value}</p>
                                                <p className="text-[12px] text-foreground font-medium uppercase tracking-wider">{s.label}</p>
                                            </div>
                                        </TiltedCard>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
