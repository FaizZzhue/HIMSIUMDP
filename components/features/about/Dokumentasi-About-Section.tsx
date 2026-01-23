"use client";

import { useEffect, useMemo, useState } from "react";

type GalleryItem = {
    src: string;
    alt: string;
    title: string;     
    proker: string;    
    purpose: string;   
};

const GALLERY: GalleryItem[] = [
    {
        src: "/images/dokumentasi/1.jpg",
        alt: "Kegiatan HIMSI 1",
        title: "Sharing Session Sistem Informasi",
        proker: "Proker: HIMSI Talk",
        purpose: "Meningkatkan wawasan mahasiswa lewat diskusi dan berbagi pengalaman.",
    },
    {
        src: "/images/dokumentasi/2.jpg",
        alt: "Kegiatan HIMSI 2",
        title: "Gathering Bersama Mahasiswa Sistem Informasi",
        proker: "Proker: Kampung Sistem Informasi",
        purpose: "Meningkatan solidaritas dan kebersamaan antar mahasiswa Sistem Informasi.",
    },
    {
        src: "/images/dokumentasi/3.jpg",
        alt: "Kegiatan HIMSI 3",
        title: "Pengabdian Masyarakat & Sosialisasi",
        proker: "Proker: HIMSI Berbagi",
        purpose: "Berbagi pengetahuan dan pengalaman kepada masyarakat.",
    },
    {
        src: "/images/dokumentasi/4.jpg",
        alt: "Kegiatan HIMSI 4",
        title: "Seminar / Workshop Internal",
        proker: "Proker: Skill Up",
        purpose: "Mengembangkan skill teknis dan non-teknis melalui materi terstruktur.",
    },
    {
        src: "/images/dokumentasi/5.jpg",
        alt: "Kegiatan HIMSI 5",
        title: "Kegiatan Sosial & Pengabdian",
        proker: "Proker: HIMSI Care",
        purpose: "Menumbuhkan kepedulian sosial dan kolaborasi lewat aksi nyata.",
    },
    {
        src: "/images/dokumentasi/6.jpg",
        alt: "Kegiatan HIMSI 6",
        title: "Games & Bonding Anggota",
        proker: "Proker: HIMSI Gathering",
        purpose: "Menguatkan solidaritas, kebersamaan, dan suasana kekeluargaan.",
    },
];

const GALLERY_MORE: GalleryItem[] = [
    {
        src: "/images/dokumentasi/1.jpg",
        alt: "Kegiatan HIMSI 1 (Lanjutan)",
        title: "Sharing Session Sistem Informasi",
        proker: "Proker: HIMSI Talk",
        purpose: "Meningkatkan wawasan mahasiswa lewat diskusi dan berbagi pengalaman.",
    },
    {
        src: "/images/dokumentasi/2.jpg",
        alt: "Kegiatan HIMSI 2 (Lanjutan)",
        title: "Prestasi & Apresiasi HIMSI",
        proker: "Proker: Awarding Day",
        purpose: "Mengapresiasi capaian anggota dan membangun semangat berprestasi.",
    },
    {
        src: "/images/dokumentasi/3.jpg",
        alt: "Kegiatan HIMSI 3 (Lanjutan)",
        title: "Kolaborasi Tim & Project",
        proker: "Proker: Collaboration Lab",
        purpose: "Melatih teamwork, komunikasi, dan problem solving dalam proyek bersama.",
    },
    {
        src: "/images/dokumentasi/4.jpg",
        alt: "Kegiatan HIMSI 4 (Lanjutan)",
        title: "Seminar / Workshop Internal",
        proker: "Proker: Skill Up",
        purpose: "Mengembangkan skill teknis dan non-teknis melalui materi terstruktur.",
    },
    {
        src: "/images/dokumentasi/5.jpg",
        alt: "Kegiatan HIMSI 5 (Lanjutan)",
        title: "Kegiatan Sosial & Pengabdian",
        proker: "Proker: HIMSI Care",
        purpose: "Menumbuhkan kepedulian sosial dan kolaborasi lewat aksi nyata.",
    },
    {
        src: "/images/dokumentasi/6.jpg",
        alt: "Kegiatan HIMSI 6 (Lanjutan)",
        title: "Games & Bonding Anggota",
        proker: "Proker: HIMSI Gathering",
        purpose: "Menguatkan solidaritas, kebersamaan, dan suasana kekeluargaan.",
    },
];

export default function DokumentasiAboutSection() {
    const [expanded, setExpanded] = useState(false);

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<GalleryItem | null>(null);

    const allItems = useMemo(
        () => (expanded ? [...GALLERY, ...GALLERY_MORE] : GALLERY),
        [expanded]
    );

    const openModal = (item: GalleryItem) => {
        setActive(item);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setActive(null);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        if (open) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <section className="relative overflow-hidden py-20">
            <div className="mx-auto max-w-[1240px] px-5 sm:px-7 lg:px-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
                        Dokumentasi <span className="text-[#D3A32D]">Kegiatan</span>
                    </h2>
                </div>

                <div className="relative mt-12">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-6 rounded-[44px] blur-2xl opacity-60"
                        style={{
                            background:
                                "radial-gradient(800px 420px at 18% 35%, rgba(36,100,168,0.22), transparent 60%), radial-gradient(700px 420px at 84% 55%, rgba(211,163,45,0.18), transparent 62%)",
                        }}
                    />

                    <div
                        className="
                            relative rounded-[40px] border border-black/10 bg-white/28 p-6 backdrop-blur-xl
                            shadow-[0_18px_60px_rgba(7,18,39,0.12)]
                            dark:border-white/14 dark:bg-white/10 dark:shadow-[0_26px_80px_rgba(0,0,0,0.40)] sm:p-7"
                    >
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-0 rounded-[40px] opacity-60"
                            style={{
                                background:
                                    "linear-gradient(135deg, rgba(211,163,45,0.18) 0%, rgba(255,255,255,0) 38%, rgba(36,100,168,0.14) 100%)",
                                WebkitMask:
                                    "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                                WebkitMaskComposite: "xor",
                                maskComposite: "exclude",
                                padding: "1px",
                            }}
                        />

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {allItems.map((it, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => openModal(it)}
                                    className="group text-left"
                                >
                                    <div
                                        className="
                                            relative overflow-hidden rounded-[20px] border border-black/10 bg-white/20
                                            shadow-[0_12px_36px_rgba(7,18,39,0.10)]
                                            dark:border-white/14 dark:bg-white/10 dark:shadow-[0_14px_40px_rgba(0,0,0,0.22)]"
                                    >
                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                            style={{
                                                    background:
                                                        "linear-gradient(135deg, rgba(211,163,45,0.16) 0%, rgba(255,255,255,0) 55%)",
                                            }}
                                        />

                                        <div className="relative aspect-[16/9] w-full">
                                            <img
                                                src={it.src}
                                                alt={it.alt}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                                                loading="lazy"
                                            />
                                        </div>

                                        <div
                                            aria-hidden
                                            className="pointer-events-none absolute inset-0 rounded-[20px]"
                                            style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)" }}
                                        />
                                    </div>

                                    <div className="mt-3 px-1">
                                        <p className="text-sm font-semibold text-foreground line-clamp-1">
                                            {it.title}
                                        </p>
                                        <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                                            {it.proker}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-10 flex justify-center">
                            <button
                                type="button"
                                onClick={() => setExpanded((v) => !v)}
                                className="
                                    relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full
                                    border border-black/10 bg-white/50 px-10 py-3 text-sm font-semibold text-[#071227]
                                    backdrop-blur transition hover:bg-white/70
                                    shadow-[0_10px_30px_rgba(7,18,39,0.10)]
                                    dark:border-white/14 dark:bg-white/10 dark:text-white dark:hover:bg-white/15
                                    dark:shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
                            >
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute inset-0 opacity-50"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, rgba(211,163,45,0.0) 0%, rgba(211,163,45,0.18) 50%, rgba(211,163,45,0.0) 100%)",
                                    }}
                                />
                                <span className="relative z-10">
                                    {expanded ? "Tutup" : "Lihat Semua Foto"}
                                </span>
                                <span
                                    className={[
                                        "relative z-10 transition-transform duration-300",
                                        expanded ? "rotate-180" : "",
                                    ].join(" ")}
                                >
                                    ▾
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {open && active && (
                    <div
                        className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10"
                        role="dialog"
                        aria-modal="true"
                        onMouseDown={(e) => {
                            if (e.target === e.currentTarget) closeModal();
                        }}
                    >
                        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

                        <div
                            className="
                                relative w-full max-w-4xl overflow-hidden rounded-[28px]
                                border border-white/15 bg-white/10 backdrop-blur-xl
                                shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
                        >
                        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
                            <div>
                                <p className="text-base font-semibold text-white">{active.title}</p>
                                <p className="mt-1 text-sm text-white/70">{active.proker}</p>
                            </div>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
                            >
                                Tutup ✕
                            </button>
                        </div>

                        <div className="grid gap-0 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <div className="relative aspect-[16/10] w-full">
                                    <img
                                        src={active.src}
                                        alt={active.alt}
                                        className="h-full w-full object-cover"
                                    />
                                    <div
                                        aria-hidden
                                        className="pointer-events-none absolute inset-0 opacity-35"
                                        style={{
                                            background:
                                                "radial-gradient(700px 380px at 70% 30%, rgba(211,163,45,0.22), transparent 62%)",
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="lg:col-span-2 p-5">
                                <h4 className="text-sm font-semibold text-white/90">
                                    Penjelasan Kegiatan
                                </h4>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">
                                    {active.purpose}
                                </p>

                                <div className="mt-5 rounded-2xl border border-white/12 bg-white/10 p-4">
                                    <p className="text-xs font-semibold text-white/80">Tujuan</p>
                                    <p className="mt-2 text-sm text-white/75">
                                        {active.purpose}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
