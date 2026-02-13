"use client";

import Snowfall from "react-snowfall";
import TiltedCard from "@/lib/animations/TiltedCard";

export default function VisiMisiAboutSection() {
    return (
        <section className="relative overflow-hidden" id="visi-misi">
            <Snowfall />
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#D3A32D] sm:text-5xl">
                        Visi 
                        <span className="text-foreground"> & </span>
                        Misi
                    </h2>
                </div>

                <div className="grid items-stretch gap-8 lg:grid-cols-2">
                    <TiltedCard
                        showTooltip={false}
                        showMobileWarning={false}
                        rotateAmplitude={10}
                        scaleOnHover={1.02}
                        containerHeight="auto"
                        containerWidth="100%"
                    >
                        <div className="glass-card relative h-full overflow-hidden p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[24px]">
                            {/* Dekorasi Background */}
                            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2464A8]/10 blur-3xl" />
                            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D3A32D]/10 blur-3xl" />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#D3A32D]" />
                                    Visi
                                </div>

                                <p className="mt-6 text-lg leading-relaxed text-foreground sm:text-[19px] font-medium">
                                    Menjadikan Himpunan Mahasiswa Sistem Informasi sebagai wadah pemersatu, penampung,
                                    aspirasi, dan penyalur bakat mahasiswa program studi Sistem Informasi sehingga terwujud
                                    himpunan yang solid dan bersinergi.
                                </p>
                            </div>
                        </div>
                    </TiltedCard>

                    <TiltedCard
                        showTooltip={false}
                        showMobileWarning={false}
                        rotateAmplitude={10}
                        scaleOnHover={1.02}
                        containerHeight="auto"
                        containerWidth="100%"
                    >
                        <div className="glass-card relative h-full overflow-hidden p-8 sm:p-10 border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md rounded-[24px]">
                            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-[#D3A32D]/10 blur-3xl" />
                            <div aria-hidden className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#2464A8]/10 blur-3xl" />

                            <div className="relative">
                                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#2464A8]" />
                                    Misi
                                </div>

                                <p className="mt-6 text-base leading-relaxed text-foreground sm:text-[17px]">
                                    Menjadi wadah kegiatan dan penyalur aspirasi, minat, serta bakat mahasiswa dengan asas kekeluargaan, 
                                    sekaligus mengembangkan potensi agar terus maju dan berkembang, 
                                    menjalin hubungan baik dengan civitas akademika, alumni, 
                                    serta organisasi/lembaga lain khususnya di lingkungan Universitas Multi Data Palembang, 
                                    menyelenggarakan program yang mendukung terciptanya mahasiswa yang aktif, solid, berwawasan, dan kompeten, 
                                    serta mengoptimalkan fungsi setiap bidang.
                                </p>
                            </div>
                        </div>
                    </TiltedCard>
                </div>
            </div>
        </section>
    );
}