"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
    { value: "100+", label: "Anggota Aktif" },
    { value: "20+", label: "Event Tahunan" },
    { value: "15+", label: "Program Kerja" },
];

export default function AboutSection() {
    return (
        <section 
            id="about" 
            className="relative overflow-hidden himsi-map-about py-20"
        >
            <div aria-hidden className="pointer-events-none absolute inset-0 about-objects opacity-40">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.45" strokeWidth="1.2">
                        <path d="M880 90 L1020 140 L1160 110 L1320 180" />
                        <path d="M900 240 L1020 140 L1110 260 L1320 180" />
                        <path d="M980 360 L1110 260 L1230 380" />
                        <path d="M1120 520 L1230 380 L1340 520" />

                        <path d="M80 260 L210 210 L360 280 L520 240" />
                        <path d="M130 520 L260 440 L410 520 L560 460" />
                    </g>

                    <g fill="white" fillOpacity="0.55">
                        {[
                            [880, 90],[1020,140],[1160,110],[1320,180],
                            [900,240],[1110,260],[980,360],[1230,380],[1120,520],[1340,520],
                            [80,260],[210,210],[360,280],[520,240],
                            [130,520],[260,440],[410,520],[560,460],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="5" />
                        ))}
                    </g>
                </svg>
            </div>

            <div
                aria-hidden
                className="pointer-events-none absolute right-[-80px] top-[280px] h-[320px] w-[520px] opacity-35"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.65) 1.6px, transparent 2px)",
                    backgroundSize: "18px 18px",
                    maskImage: "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0))",
                    WebkitMaskImage:
                    "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0))",
                }}
            />

            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -left-28 top-24 h-[520px] w-[520px] rounded-full bg-[#2464A8]/25 blur-3xl" />
                <div className="absolute right-[-140px] top-10 h-[620px] w-[620px] rounded-full bg-[#D3A32D]/28 blur-3xl" />
                <div className="absolute right-[6%] top-[34%] h-[360px] w-[360px] rounded-full bg-[#D3A32D]/16 blur-3xl" />
            </div>

            <div aria-hidden className="pointer-events-none absolute bottom-10 right-[-18%] w-[120%] -rotate-12">
                <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[0.5px]" />
                <div className="mt-3 h-[120px] w-full rounded-[999px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
                <div className="mx-auto max-w-3xl text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.05 }}
                        className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] sm:text-5xl"
                    >
                        Tentang 
                        <span className="text-[#D3A32D]"> HIMSI</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        className="mt-6 text-base leading-relaxed text-slate-700/80 sm:text-lg"
                    >
                        HIMSI UMDP adalah Himpunan Mahasiswa Sistem Informasi Universitas Multi Data
                        Palembang yang hadir sebagai wadah pengembangan diri, kreativitas, serta
                        memperkuat hubungan antar mahasiswa Sistem Informasi di kampus.
                    </motion.p>
                </div>

                <div className="relative mt-14 h-[420px] w-full">
                    <div
                        className="absolute bottom-0 left-0 h-[280px] w-[72%] overflow-hidden rounded-[28px]"
                        style={{
                            maskImage:
                                "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.0) 100%)",
                            WebkitMaskImage:
                            "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.0) 100%)",
                        }}
                    >
                        <Image
                            src="/images/hero/hero-3.jpg"
                            alt="Kegiatan HIMSI"
                            fill
                            className="object-cover opacity-55"
                            sizes="(max-width: 1024px) 100vw, 900px"
                            priority={false}
                        />
                        <div className="absolute inset-0 bg-white/15" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="absolute bottom-10 right-0 w-full max-w-[520px]"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-[34px] bg-gradient-to-r from-[#2464A8]/18 via-white/10 to-[#D3A32D]/22 blur-2xl"
                        />

                        <div className="relative rounded-[28px] border border-white/45 bg-white/20 p-6 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                            <div className="absolute -top-4 left-6 inline-flex items-center gap-2 rounded-full bg-[#D3A32D] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(211,163,45,0.25)]">
                                <span className="text-base leading-none">⚡</span>
                                Tentang HIMSI
                            </div>

                            <div className="mt-4 grid grid-cols-3">
                                {STATS.map((s, idx) => (
                                    <div
                                        key={s.label}
                                        className={[
                                            "px-4 py-2",
                                            idx ? "border-l border-white/35" : "",
                                        ].join(" ")}
                                    >
                                        <div className="text-3xl font-semibold text-[#D3A32D]">
                                            {s.value}
                                        </div>
                                        <div className="mt-1 text-sm text-slate-700/80">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
