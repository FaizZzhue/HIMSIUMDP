"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
    id: string;
    quoteTitle: string;
    quoteText: string;
    note: string;
    name: string;
    role: string;
    avatar: string;
};

const data: Testimonial[] = [
    {
        id: "t1",
        quoteTitle: "Menjadi Ketua HIMSI",
        quoteText:
            "Universitas Multi Data Palembang selama satu periode jadi salah satu pengalaman paling berkesan.",
        note: "Banyak hal yang saya pelajari, terutama tentang kepemimpinan dan teamwork.",
        name: "Putra Ulung",
        role: "Ketua Himpunan Mahasiswa Sistem Informasi",
        avatar: "/images/testimonials/1.jpg",
    },
    {
        id: "t2",
        quoteTitle: "Keputusan yang tepat",
        quoteText:
            "Merupakan keputusan tepat bagi saya untuk bergabung dengan HIMSI. Tidak hanya mendapat relasi yang luas tetapi juga pengalaman baru yang menyenangkan.",
        note: "Banyak hal yang saya pelajari, terutama tentang kepemimpinan dan teamwork.",
        name: "Wasilah",
        role: "Sekretaris Umum 2",
        avatar: "/images/testimonials/2.jpg",
    },
    {
        id: "t3",
        quoteTitle: "Riset & inovasi",
        quoteText:
            "Di HIMSI UMDP, saya merasakan bagaimana riset dan inovasi berpadu dalam harmoni, menantang batas konvensional dan mengubah gagasan menjadi kenyataan.",
        note: " Banyak hal yang saya pelajari, terutama tentang kepemimpinan dan teamwork.",
        name: "Adit Jans",
        role: "Kepala Bidang",
        avatar: "/images/testimonials/3.jpg",
    },
];

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

export default function TestimonialsSection() {
    const [active, setActive] = useState(0);

    const slides = useMemo(() => data, []);

    const prev = () => setActive((v) => (v - 1 + slides.length) % slides.length);
    const next = () => setActive((v) => (v + 1) % slides.length);

    const trio = useMemo(() => {
        const left = (active - 1 + slides.length) % slides.length;
        const right = (active + 1) % slides.length;
        return [
            { pos: "left" as const, item: slides[left] },
            { pos: "center" as const, item: slides[active] },
            { pos: "right" as const, item: slides[right] },
        ];
    }, [active, slides]);

    return (
        <section className="relative w-full overflow-hidden min-h-screen">
        {/* dotted overlay */}
            {/* <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 2px)",
                backgroundSize: "20px 20px",
                }}
            /> */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-45">
                <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
                    <g stroke="white" strokeOpacity="0.40" strokeWidth="1.2">
                        <path d="M120 120 L300 90 L460 160 L640 120 L820 190" />
                        <path d="M160 280 L340 230 L520 300 L700 250" />
                        <path d="M120 520 L320 440 L520 520 L720 460" />
                        <path d="M460 160 L340 320 L520 460" />

                        <path d="M880 140 L1040 190 L1180 160 L1320 220" />
                        <path d="M920 280 L1040 190 L1120 300 L1320 220" />
                    </g>

                    <g fill="white" fillOpacity="0.50">
                        {[
                            [120,120],[300,90],[460,160],[640,120],[820,190],
                            [160,280],[340,230],[520,300],[700,250],
                            [120,520],[320,440],[520,520],[720,460],
                            [460,160],[340,320],[520,460],
                            [880,140],[1040,190],[1180,160],[1320,220],
                            [920,280],[1120,300],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.8" />
                        ))}
                    </g>
                </svg>
            </div>


            <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">
                {/* Header */}
                <div className="text-center">
                    <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0A3763] sm:text-5xl">
                        Apa Kata 
                        <span className="text-[#D3A32D]"> Mereka</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-700/90 sm:text-[17px]">
                        Dengarkan pengalaman dan cerita dari para alumni HIMSI yang telah sukses dalam karir
                        mereka
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative mt-12 sm:mt-14">
                {/* arrows */}
                    <button
                        type="button"
                        onClick={prev}
                        className="group absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/45 bg-white/25 p-4 backdrop-blur transition hover:bg-white/40"
                        aria-label="Sebelumnya"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="opacity-80 transition group-hover:opacity-100"
                        >
                            <path
                                d="M15 18l-6-6 6-6"
                                stroke="rgba(10,55,99,0.9)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        onClick={next}
                        className="group absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/45 bg-white/25 p-4 backdrop-blur transition hover:bg-white/40"
                        aria-label="Berikutnya"
                    >
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="opacity-80 transition group-hover:opacity-100"
                        >
                            <path
                                d="M9 6l6 6-6 6"
                                stroke="rgba(10,55,99,0.9)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    <div className="grid items-stretch gap-6 px-14 lg:grid-cols-3 lg:px-16">
                        <AnimatePresence initial={false}>
                            {trio.map(({ pos, item }) => (
                                <motion.div
                                    key={`${pos}-${item.id}`}
                                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                    transition={{ duration: 0.35 }}
                                    className={[
                                        "relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/50 bg-white/35 p-6 backdrop-blur-sm",
                                        "shadow-[0_18px_50px_rgba(0,0,0,0.14)]",
                                        pos === "center" ? "lg:translate-y-0" : "lg:translate-y-1",
                                    ].join(" ")}
                                >
                                {/* soft tint left card / right card to match screenshot */}
                                    <div
                                        aria-hidden
                                        className={[
                                            "pointer-events-none absolute inset-0 opacity-70",
                                            pos === "left"
                                                ? "bg-gradient-to-br from-[#2464A8]/18 via-white/0 to-white/0"
                                                : pos === "right"
                                                ? "bg-gradient-to-br from-[#D3A32D]/22 via-white/0 to-white/0"
                                                : "bg-gradient-to-br from-white/0 via-white/0 to-white/0",
                                        ].join(" ")}
                                    />

                                {/* quote icon */}
                                    <div className="relative z-10 flex items-start justify-between gap-4">
                                        <div className="text-4xl leading-none text-[#2464A8]/70">“</div>

                                        {/* 99 badge */}
                                        <div className="rounded-full bg-[#D3A32D] px-4 py-2 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(211,163,45,0.45)]">
                                            99
                                        </div>
                                    </div>

                                    <div className="relative z-10 mt-3 flex flex-1 flex-col">
                                        <p className="text-[18px] font-semibold italic leading-relaxed text-slate-800">
                                            {item.quoteTitle}
                                        </p>

                                        <p className="mt-3 text-[15px] leading-relaxed text-slate-700/90">
                                            {item.quoteText}
                                        </p>

                                        {item.note ? (
                                            <p className="mt-6 text-[14px] leading-relaxed text-slate-700/80">
                                                {item.note.split("pelajari,").length > 1 ? (
                                                    <>
                                                        Banyak hal yang saya{" "}
                                                        <span className="font-semibold italic">pelajari</span>,
                                                        {item.note.split("pelajari,")[1]}
                                                    </>
                                                ) : (
                                                    item.note
                                                )}
                                            </p>
                                        ) : (
                                            <div className="mt-6 h-[42px]" />
                                        )}

                                        <button
                                            type="button"
                                            className="mt-6 inline-flex text-sm font-medium text-[#2464A8] underline underline-offset-4 hover:opacity-90"
                                        >
                                            Read more
                                        </button>

                                        {/* footer */}
                                        <div className="mt-auto pt-7">
                                            <div className="flex items-center gap-4">
                                                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white/60">
                                                    <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                                                </div>

                                                <div className="min-w-0">
                                                    <p className="text-lg font-semibold leading-tight text-[#0A3763] truncate">
                                                        {item.name}
                                                    </p>
                                                    <p className="mt-1 text-sm text-[#2464A8]/80 line-clamp-2">
                                                        {item.role}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                {/* dots */}
                    <div className="mt-8 flex items-center justify-center gap-3">
                        {slides.map((_, i) => {
                            const isActive = i === clamp(active, 0, slides.length - 1);
                            return (
                                <button
                                    key={i}
                                    type="button"
                                    onClick={() => setActive(i)}
                                    aria-label={`Slide ${i + 1}`}
                                    className={[
                                        "h-3 w-3 rounded-full transition",
                                        isActive ? "bg-[#2464A8]" : "bg-white/60 hover:bg-white/80",
                                    ].join(" ")}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
