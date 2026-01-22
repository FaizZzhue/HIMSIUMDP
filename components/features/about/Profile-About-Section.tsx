"use client";

import Link from "next/link";

type Stat = { value: string; label: string };

const STATS: Stat[] = [
    { value: "50+", label: "Anggota Aktif" },
    { value: "4", label: "Bidang" },
    { value: "10", label: "Divisi" },
    { value: "15+", label: "Program Kerja" },
];

export default function ProfileAboutSection() {
    return (
        <section 
            className="relative overflow-hidden"
            id="profile"
        >
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">
                    <h1 className="mt-5 text-4xl text-[#0A3763] dark:text-[#2464A8] font-semibold tracking-tight sm:text-5xl text-center mb-10 ">
                        Profile 
                        <span className="text-[#D3A32D]"> HIMSI</span>
                    </h1>
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
                        <p className="mt-5 text-base leading-relaxed text-foreground sm:text-[17px]">
                            Himpunan Mahasiswa Sistem Informasi Universitas Multi Data Palembang (HIMSI UMDP) adalah
                            organisasi di Fakultas Ilmu Komputer dan Rekayasa yang menjadi wadah aspirasi mahasiswa/i
                            Sistem Informasi untuk berkolaborasi, meningkatkan wawasan dan kemampuan, serta membentuk
                            jiwa kepemimpinan yang bertanggung jawab demi menjaga nama baik universitas. HIMSI UMDP
                            dibina oleh Pembina sekaligus Ketua Program Studi Sistem Informasi, dipimpin oleh Ketua
                            Umum (Kahim) dan Wakil Ketua Umum (Wakahim) dengan dukungan Sekretaris Umum dan Bendahara
                            Umum, serta memiliki 4 Bidang Eksekutif: Litbang IT, Sosial, PSDM, dan Kominfo.
                        </p>

                        {/* <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href="#visi-misi"
                                className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-white/85 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                            >
                                Lihat Visi &amp; Misi
                            </Link>

                            <Link
                                href="#kepengurusan"
                                className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur hover:bg-white/85 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                            >
                                Kepengurusan
                            </Link>
                        </div> */}
                    </div>

                    <div className="relative">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#2464A8]/15 via-white/10 to-[#D3A32D]/15 blur-2xl dark:from-[#2464A8]/25 dark:via-white/5 dark:to-[#D3A32D]/20"
                        />

                        <div className="relative rounded-[32px] border border-black/10 bg-white/70 p-6 backdrop-blur-xl shadow-[0_18px_60px_rgba(7,18,39,0.10)] dark:border-white/20 dark:bg-white/10 dark:shadow-[0_22px_80px_rgba(0,0,0,0.45)] sm:p-7">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                                        Ringkasan HIMSI UMDP
                                    </h3>
                                </div>

                                <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-foreground dark:border-white/20 dark:bg-white/10">
                                    2026
                                </span>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2">
                                {STATS.map((s) => (
                                    <div
                                        key={s.label}
                                        className="rounded-2xl border border-black/10 bg-white/75 p-4 backdrop-blur transition hover:bg-white/90 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
                                    >
                                        <p className="text-2xl font-semibold leading-none text-[#D3A32D]">
                                            {s.value}
                                        </p>
                                        <p className="mt-2 text-sm text-foreground">{s.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* <div className="mt-6 rounded-2xl border border-black/10 bg-white/60 p-4 text-sm text-muted-foreground dark:border-white/15 dark:bg-white/10">
                                <ul className="space-y-2">
                                    <li>
                                        <span className="font-semibold text-foreground">Pembina:</span> Kaprodi Sistem
                                        Informasi
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">Inti:</span> Kahim, Wakahim,
                                        Sekum, Bendum
                                    </li>
                                    <li>
                                        <span className="font-semibold text-foreground">Komisi:</span> Litbang IT, Sosial,
                                        PSDM, Kominfo
                                    </li>
                                </ul>
                            </div> */}

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                                <Link
                                    href="#dokumentasi"
                                    className="text-sm font-semibold text-[#2464A8] hover:opacity-90 dark:text-[#9CC7FF]"
                                >
                                    Lihat Dokumentasi →
                                </Link>

                                <Link
                                    href="#logo-himsi"
                                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/85 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                                >
                                    Logo HIMSI
                                </Link>

                                <Link
                                    href="#logo-kabinet"
                                    className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground hover:bg-white/85 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15"
                                >
                                    Logo Kabinet
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
