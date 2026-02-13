"use client";

import Link from "next/link";
import Snowfall from "react-snowfall";

export default function AboutHeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="bg-himsi-hero">
            <Snowfall />
                <div className="relative mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">
                    <div className="mx-auto max-w-3xl text-center py-10">
                        <p className="text-sm font-medium text-foreground">
                            Tentang HIMSI UMDP
                        </p>

                        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                            Kenali 
                            <span className="text-[#D3A32D]"> HIMSI</span> lebih dekat
                        </h1>

                        <p className="mt-5 text-base leading-relaxed text-foreground sm:text-[17px]">
                            Jelajahi HIMSI lebih dekat mulai dari Profil sampai Kegiatan yang dapat menjadi arah gerak kami.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3 items-center justify-center">
                            <Link
                                href="#profile"
                                className="rounded-full bg-[#0A3763] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                            >
                                Lihat Profile
                            </Link>
                            <Link
                                href="#visi-misi"
                                className="rounded-full border border-black/10 bg-white/60 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-white/75 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                            >
                                Lihat Visi & Misi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
