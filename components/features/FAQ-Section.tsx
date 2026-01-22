"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQ = {
    q: string;
    a: string;
};

const faqs: FAQ[] = [
    {
        q: "Gimana cara daftar HIMSI?",
        a: "Kamu bisa daftar saat Open Recruitment (Oprec) yang diumumkan di media sosial HIMSI UMDP. Isi formulir pendaftaran, ikuti seleksi/ wawancara (jika ada), lalu konfirmasi bergabung.",
    },
    {
        q: "Apakah ada syarat semester?",
        a: "Umumnya terbuka untuk mahasiswa Sistem Informasi UMDP dari berbagai semester. Saat Oprec, syarat detail akan diumumkan (misalnya minimal semester tertentu).",
    },
    {
        q: "Kegiatannya seberapa sering?",
        a: "Kegiatan rutin biasanya mingguan/bulanan sesuai program kerja divisi. Selain itu ada event tahunan seperti seminar, workshop, dan kegiatan sosial.",
    },
    {
        q: "Bisa ikut walau belum punya pengalaman?",
        a: "Bisa banget. Kamu akan dibimbing dari dasar, ikut pelatihan internal, dan belajar langsung lewat kepanitiaan & program kerja.",
    },
    {
        q: "Apa benefit jadi anggota?",
        a: "Relasi lebih luas, skill organisasi & teamwork, pengalaman event, peluang pelatihan/sertifikasi, dan portofolio untuk karir.",
    },
    {
        q: "Kontak admin siapa?",
        a: "Silakan hubungi admin HIMSI via Instagram resmi atau WhatsApp yang dicantumkan saat Open Recruitment.",
    },
];

function PlusIcon({ open }: { open: boolean }) {
    return (
        <div
            className={[
                "grid h-12 w-12 place-items-center rounded-full border border-white/55 bg-white/20 backdrop-blur",
                "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
            ].join(" ")}
            aria-hidden
        >
            <div className="relative h-5 w-5">
                <span
                    className={[
                        "absolute left-1/2 top-1/2 block h-[2px] w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2464A8]",
                    ].join(" ")}
                />
                <span
                    className={[
                        "absolute left-1/2 top-1/2 block h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2464A8] transition",
                        open ? "rotate-90 opacity-0" : "rotate-0 opacity-100",
                    ].join(" ")}
                />
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="relative w-full overflow-hidden min-h-screen pb-10">
        {/* dotted overlay */}
            {/* <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-25"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 2px)",
                    backgroundSize: "20px 20px",
                }}
            /> */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.35" strokeWidth="1.15">
                        <path d="M90 180 L280 120 L470 190 L660 140 L850 210 L1040 160 L1250 220" />
                        <path d="M120 520 L320 440 L520 520 L720 450 L920 540 L1120 470 L1320 560" />
                        <path d="M280 120 L220 260 L340 380 L520 520" />
                        <path d="M1040 160 L980 290 L1120 420 L1250 560" />
                    </g>

                    <g fill="white" fillOpacity="0.45">
                        {[
                            [90,180],[280,120],[470,190],[660,140],[850,210],[1040,160],[1250,220],
                            [120,520],[320,440],[520,520],[720,450],[920,540],[1120,470],[1320,560],
                            [220,260],[340,380],[980,290],[1120,420],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.5" />
                        ))}
                    </g>
                </svg>
            </div>


            <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">
                {/* header */}
                <div className="text-center">
                    <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Frequently Asked 
                        <span className="text-[#D3A32D]"> Questions</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700/90 sm:text-[17px]">
                        Pertanyaan umum terkait cara bergabung dan kegiatan di HIMSI UMDP
                    </p>
                </div>

                {/* panel */}
                <div className="relative mt-10 sm:mt-12">
                {/* outer glow frame */}
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-4 rounded-[34px] bg-gradient-to-r from-[#2464A8]/18 via-white/8 to-[#D3A32D]/18 blur-2xl"
                    />

                    <div className="relative rounded-[34px] border border-white/45 bg-white/25 p-5 backdrop-blur sm:p-6">
                        <div className="space-y-4">
                            {faqs.map((item, idx) => {
                                const open = openIndex === idx;
                                return (
                                    <div
                                        key={item.q}
                                        className={[
                                            "rounded-[22px] border border-white/50 bg-white/35 backdrop-blur",
                                            "shadow-[0_14px_40px_rgba(0,0,0,0.10)]",
                                        ].join(" ")}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(open ? null : idx)}
                                            className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                                        >
                                            <span className="text-lg font-medium text-[#0A3763] sm:text-xl">
                                                {item.q}
                                            </span>
                                            <PlusIcon open={open} />
                                        </button>

                                        <AnimatePresence initial={false}>
                                            {open ? (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-slate-700/90 sm:text-base">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            ) : null}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
