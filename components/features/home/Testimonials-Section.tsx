"use client";

import Image from "next/image";
import { useMemo } from "react";

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
    note: "Banyak hal yang saya pelajari, terutama tentang kepemimpinan dan teamwork.",
    name: "Adit Jans",
    role: "Kepala Bidang",
    avatar: "/images/testimonials/3.jpg",
  },
];

function Card({ item }: { item: Testimonial }) {
    return (
        <article
            className={[
                "relative overflow-hidden rounded-[22px]",
                "border border-white/35 bg-white/20 p-5 backdrop-blur-sm",
                "transition-transform duration-200 hover:-translate-y-1",
            ].join(" ")}
        >
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-70 bg-gradient-to-br from-[#2464A8]/14 via-white/0 to-[#D3A32D]/14"
            />

            {/* <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="text-4xl leading-none text-[#2464A8]/70">“</div>
                <div className="rounded-full bg-[#D3A32D] px-3 py-1.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(211,163,45,0.45)]">
                
                </div>
            </div> */}

            <div className="relative z-10 mt-3">
                <div className="mt-5 flex items-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full ring-4 ring-white/55">
                        <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="44px"
                        />
                    </div>

                    <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground truncate">
                            {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-[#D3A32D] line-clamp-2">
                            {item.role}
                        </p>
                    </div>
                </div>
                <p className="text-[16px] font-semibold italic leading-relaxed text-slate-800">
                    {item.quoteTitle}
                </p>

                <p className="mt-2 text-[14px] leading-relaxed text-foreground">
                    {item.quoteText}
                </p>

                {item.note ? (
                    <p className="mt-4 text-[13px] leading-relaxed text-foreground/90">
                        {item.note}
                    </p>
                ) : null}
            </div>
        </article>
    );
}

function MarqueeCol({
    items,
    duration = 18,
    offset = 0,
    reverse = false,
}: {
    items: Testimonial[];
    duration?: number;
    offset?: number;
    reverse?: boolean;
}) {
    const loop = useMemo(() => [...items, ...items], [items]);

    return (
        <div
            className={[
                "relative h-[560px] overflow-hidden",
                // "rounded-[26px] border border-white/10 bg-white/5 backdrop-blur",
            ].join(" ")}
        >
            {/* <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/70 to-transparent dark:from-black/25"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-white/70 to-transparent dark:from-black/25"
            /> */}

            <div
                className={[
                "marqueeY absolute left-0 top-0 w-full px-4 py-5",
                "will-change-transform",
                ].join(" ")}
                style={
                    {
                        ["--dur" as any]: `${duration}s`,
                        ["--offset" as any]: `${offset}px`,
                        ["--dir" as any]: reverse ? -1 : 1,
                    } as React.CSSProperties
                }
            >
                <div className="flex flex-col gap-4">
                    {loop.map((it, idx) => (
                        <Card key={`${it.id}-${idx}`} item={it} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const slides = useMemo(() => data, []);

    const col1 = useMemo(() => slides, [slides]);
    const col2 = useMemo(() => [...slides].reverse(), [slides]);
    const col3 = useMemo(() => [...slides.slice(1), slides[0]], [slides]);

    return (
        <section className="relative w-full overflow-hidden py-20 sm:py-24">
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
                            [120, 120],
                            [300, 90],
                            [460, 160],
                            [640, 120],
                            [820, 190],
                            [160, 280],
                            [340, 230],
                            [520, 300],
                            [700, 250],
                            [120, 520],
                            [320, 440],
                            [520, 520],
                            [720, 460],
                            [460, 160],
                            [340, 320],
                            [520, 460],
                            [880, 140],
                            [1040, 190],
                            [1180, 160],
                            [1320, 220],
                            [920, 280],
                            [1120, 300],
                        ].map(([x, y], i) => (
                            <circle key={i} cx={x} cy={y} r="4.8" />
                        ))}
                    </g>
                </svg>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-7 lg:px-10">
                {/* <div className="grid gap-10 lg:grid-cols-[1.05fr_1.95fr] lg:items-start"> */}
                    {/* <div className="lg:pt-8">
                        <h2 className="text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                            Apa Kata <span className="text-[#D3A32D]">Mereka</span>
                        </h2>
                    </div> */}

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                        <MarqueeCol items={col1} duration={18} offset={0} />
                        <MarqueeCol items={col2} duration={22} offset={-120} />
                        <MarqueeCol items={col3} duration={20} offset={-60} />
                    </div>
                {/* </div> */}
            </div>
        </section>
    );
}
