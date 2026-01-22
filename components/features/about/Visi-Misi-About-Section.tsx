"use client";

export default function VisiMisiAboutSection() {
    return (
        <section className="relative overflow-hidden" 
            id="visi-misi"
        >
            <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-7 lg:px-10">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#D3A32D] sm:text-5xl">
                        Visi 
                        <span className="text-foreground"> & </span>
                        Misi
                    </h2>
                </div>

                <div className="grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
                {/* VISI */}
                    <div className="glass-card relative overflow-hidden p-8 sm:p-10">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#2464A8]/18 blur-3xl dark:bg-[#2464A8]/22"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[#D3A32D]/14 blur-3xl dark:bg-[#D3A32D]/18"
                        />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#D3A32D]" />
                                Visi
                            </div>

                            {/* <h3 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">
                                Menjadi wadah pemersatu & penyalur aspirasi
                            </h3> */}

                            <p className="mt-4 text-base leading-relaxed text-foreground sm:text-[17px]">
                                Menjadikan Himpunan Mahasiswa Sistem Informasi sebagai wadah pemersatu, penampung,
                                aspirasi, dan penyalur bakat mahasiswa program studi Sistem Informasi sehingga terwujud
                                himpunan yang solid dan bersinergi.
                            </p>

                            {/* <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {[
                                    { t: "Solid", d: "Komunikasi & koordinasi" },
                                    { t: "Sinergi", d: "Kolaborasi lintas bidang" },
                                    { t: "Aspiratif", d: "Menampung & menyalurkan" },
                                ].map((x) => (
                                    <div
                                        key={x.t}
                                        className="rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/15 dark:bg-white/10"
                                    >
                                        <p className="text-sm font-semibold text-foreground">{x.t}</p>
                                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{x.d}</p>
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    </div>

                {/* MISI */}
                    <div className="glass-card relative overflow-hidden p-8 sm:p-10">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-[#D3A32D]/14 blur-3xl dark:bg-[#D3A32D]/18"
                        />
                        <div
                            aria-hidden
                            className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#2464A8]/16 blur-3xl dark:bg-[#2464A8]/22"
                        />

                        <div className="relative">
                            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur dark:border-white/20 dark:bg-white/10">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#2464A8]" />
                                Misi
                            </div>

                            <p className="mt-4 text-base leading-relaxed text-foreground sm:text-[17px]">
                                Menjadi wadah kegiatan dan penyalur aspirasi, minat, serta bakat mahasiswa dengan asas kekeluargaan, 
                                sekaligus mengembangkan potensi agar terus maju dan berkembang, 
                                menjalin hubungan baik dengan civitas akademika, alumni, 
                                serta organisasi/lembaga lain khususnya di lingkungan Universitas Multi Data Palembang, 
                                menyelenggarakan program yang mendukung terciptanya mahasiswa yang aktif, solid, berwawasan, dan kompeten, 
                                serta mengoptimalkan fungsi setiap bidang.
                            </p>

                            {/* <h3 className="mt-5 text-2xl font-semibold text-foreground sm:text-3xl">
                                Mengembangkan potensi, relasi, dan program berdampak
                            </h3> */}

                            {/* <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D3A32D]" />
                                    Menjadi wadah kegiatan dan penyalur aspirasi, minat, serta bakat mahasiswa dengan asas
                                    kekeluargaan.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D3A32D]" />
                                    Mengembangkan potensi agar terus maju dan berkembang.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D3A32D]" />
                                    Menjalin hubungan baik dengan civitas akademika, alumni, serta organisasi/lembaga lain,
                                    khususnya di lingkungan Universitas Multi Data Palembang.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D3A32D]" />
                                    Menyelenggarakan program yang mendukung terciptanya mahasiswa yang aktif, solid,
                                    berwawasan, dan kompeten.
                                </li>
                                <li className="flex gap-3">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#D3A32D]" />
                                    Mengoptimalkan fungsi setiap bidang.
                                </li>
                            </ul> */}

                            {/* <div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/15 dark:bg-white/10">
                                <p className="text-sm font-semibold text-foreground">Fokus Eksekusi</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    Program terarah • Kolaborasi • Pengembangan SDM • Komunikasi publik
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
