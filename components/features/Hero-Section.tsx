"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {

    const heroItems = []

    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-himsi-gradient">
            <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#2464A8]/20 blur-3xl" />
            <div className="pointer-events-none absolute top-20 -right-24 h-96 w-96 rounded-full bg-[#0A3763]/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D3A32D]/15 blur-3xl" />

            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 text-center">
                {/* badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-[#0A3763] backdrop-blur"
                >
                    <span className="h-2 w-2 rounded-full bg-[#D3A32D]" />
                    Selamat Datang di HIMSI UMDP
                </motion.div>

                {/* heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="text-4xl font-semibold tracking-tight text-[#0A3763] md:text-6xl"
                >
                    Together We Are Better
                    <span className="block text-[#2464A8]">Mahasiswa Sistem Informasi</span>
                </motion.h1>

                {/* subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.12 }}
                    className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:text-lg"
                    data-cur="cursor"
                >
                    HIMSI UMDP adalah organisasi mahasiswa di Universitas Multi Data Palembang yang menghimpun seluruh mahasiswa dalam program studi Sistem Informasi.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
                >
                    <Button className="h-11 rounded-xl bg-[#0A3763] px-6 text-white hover:bg-[#0A3763]/90">
                        Lihat Program
                    </Button>

                    <Button
                        variant="outline"
                        className="h-11 rounded-xl border-[#2464A8]/30 bg-white/60 px-6 text-[#0A3763] hover:bg-white"
                    >
                        Tentang HIMSI
                    </Button>
                </motion.div>

                {/* statistik mini */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.28 }}
                    className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3"
                >
                    {[
                        { label: "Anggota Aktif", value: "100+" },
                        { label: "Event Tahunan", value: "20+" },
                        { label: "Program Kerja", value: "15+" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-black/10 bg-white/60 px-6 py-5 backdrop-blur"
                        >
                            <p className="text-2xl font-semibold text-[#0A3763]">{item.value}</p>
                            <p className="mt-1 text-sm text-slate-600">{item.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
