"use client";

import Image from "next/image";
import Snowfall from "react-snowfall";
import { AnimatedSection, AnimatedItem } from "@/components/animation/Animated";
import {
    filosofiHeadingVariants,
    filosofiCenterVariants,
    filosofiLeftContainerVariants,
    filosofiLeftCardVariants,
    filosofiRightContainerVariants,
    filosofiRightCardVariants,
} from "@/components/animation/presets";

type FilosofiItem = {
    title: string;
    desc: string;
    accent: "blue" | "amber";
};

const LEFT: FilosofiItem[] = [
    {
        title: "Simbol Keterbukaan dan Semangat Muda",
        desc: "Biru muda menggambarkan sikap terbuka dalam menerima gagasan, serta energi anak muda yang dinamis. Warna ini merepresentasikan semangat kabinet untuk menciptakan ruang komunikasi yang aktif dan menyenangkan, serta menjadi wadah yang adil bagi seluruh anggota himpunan.",
        accent: "blue",
    },
    {
        title: "Lambang Tanggung Jawab dan Keteguhan",
        desc: "Warna biru tua melambangkan sikap profesional, rasa percaya, dan kematangan dalam bertindak. Ini menunjukkan bahwa para pengurus kabinet bekerja secara bertanggung jawab, menjunjung nilai kejujuran, dan siap menjadi pilar kuat bagi organisasi dalam menghadapi berbagai situasi.",
        accent: "blue",
    },
    {
        title: "Energi Kreatif dan Harapan Baru",
        desc: "Kuning mencerminkan semangat, kreativitas, dan optimisme. Kehadirannya menunjukkan bahwa kabinet membawa semangat untuk berinovasi, menyebarkan energi positif, dan menghadirkan perubahan yang terasa manfaatnya bagi himpunan maupun lingkungan kampus.",
        accent: "blue",
    },
];

const RIGHT: FilosofiItem[] = [
    {
        title: "Dua Bulu di Kepala",
        desc: "Dua helai bulu yang muncul dari kepala merak menggambarkan keseimbangan antara logika dan empati. Ini menunjukkan bahwa keputusan yang diambil kabinet tidak hanya berdasarkan pertimbangan rasional, tetapi juga mempertimbangkan sisi kemanusiaan dan aspirasi anggota. Dua bulu ini juga menyimbolkan perpaduan harmonis antara pemikir dan pelaksana, dua peran penting dalam organisasi.",
        accent: "amber",
    },
    {
        title: "Tubuh Merak",
        desc: "Garis melengkung pada tubuh burung merak menunjukkan arah gerak yang progresif namun tetap seimbang. Hal ini merepresentasikan cara kerja kabinet yang adaptif terhadap perubahan, namun tetap berpijak pada prinsip dan tujuan organisasi.",
        accent: "amber",
    },
    {
        title: "Ekor Merak",
        desc: "Ekor yang terdiri dari pola simetris berlapis-lapis melambangkan kerja sama antar elemen dalam kabinet. Setiap bulu ekor mewakili peran, potensi, dan kekuatan dari masing-masing individu dalam kabinet yang bergerak serempak menuju visi bersama. Bentuk mata pada ekor juga mengandung makna ketajaman pandangan dan kesadaran strategis, simbol dari kepemimpinan yang peka terhadap lingkungan.",
        accent: "amber",
    },
];

function cn(...cls: Array<string | false | undefined>) {
    return cls.filter(Boolean).join(" ");
}

function FilosofiCard({ item }: { item: FilosofiItem }) {
    const isBlue = item.accent === "blue";
    return (
        <div className="relative rounded-2xl border bg-white/65 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.12)] backdrop-blur-xl border-white/70">
            <div className="absolute left-5 top-5 flex items-center gap-3">
                <span className={cn("h-4 w-4 rounded-full", isBlue ? "bg-[#1E6BD6]" : "bg-[#F59E0B]")} />
                <span className={cn("h-[3px] w-44 rounded-full", isBlue ? "bg-[#1E6BD6]" : "bg-[#F59E0B]")} />
            </div>
            <h3 className="mt-7 text-lg font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">{item.desc}</p>
        </div>
    );
}

export default function Filosofi() {
    return (
        <section className="relative overflow-hidden py-20">
            <Snowfall />
            <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

                <AnimatedSection variants={filosofiHeadingVariants} threshold={0.3} className="text-center">
                    <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        <span className="text-[#0A3763] dark:text-[#2464A8]">Logo Kabinet &amp; </span>
                        <span className="text-[#D3A32D]">Filosofi</span>
                    </h2>
                </AnimatedSection>

                <div className="relative mx-auto mt-12 max-w-6xl">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

                        <AnimatedSection
                            variants={filosofiLeftContainerVariants}
                            threshold={0.15}
                            className="order-2 space-y-5 lg:order-1 lg:col-span-4"
                        >
                            {LEFT.map((item) => (
                                <AnimatedItem key={item.title} variants={filosofiLeftCardVariants}>
                                    <FilosofiCard item={item} />
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>

                        {/* Tengah — scale + rotate */}
                        <AnimatedSection
                            variants={filosofiCenterVariants}
                            threshold={0.3}
                            className="relative flex items-center justify-center lg:order-2 lg:col-span-4"
                        >
                            <div className="relative h-[230px] w-[230px]">
                                <Image
                                    src="/images/logo/logo-kabinet.png"
                                    alt="Logo Kabinet Harsana Cakra"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </AnimatedSection>

                        <AnimatedSection
                            variants={filosofiRightContainerVariants}
                            threshold={0.15}
                            className="order-3 space-y-5 lg:col-span-4"
                        >
                            {RIGHT.map((item) => (
                                <AnimatedItem key={item.title} variants={filosofiRightCardVariants}>
                                    <FilosofiCard item={item} />
                                </AnimatedItem>
                            ))}
                        </AnimatedSection>

                    </div>
                </div>
            </div>
        </section>
    );
}