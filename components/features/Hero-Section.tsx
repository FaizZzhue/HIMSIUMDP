"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-himsi-hero">
      
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
        <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
          <g stroke="white" strokeOpacity="0.35" strokeWidth="1.2">
            <path d="M80 160 L260 110 L420 190 L620 140 L820 220" />
            <path d="M140 560 L300 450 L470 560 L640 470 L820 560" />
            <path d="M260 210 L190 340 L320 470" />

            <path d="M960 90 L1120 140 L1260 110 L1340 180" />
            <path d="M980 240 L1120 140 L1210 260 L1340 180" />
            <path d="M1040 360 L1210 260 L1320 380" />
          </g>

          <g fill="white" fillOpacity="0.45">
            {[
              [80, 160],[260,110],[420,190],[620,140],[820,220],
              [140,560],[300,450],[470,560],[640,470],[820,560],
              [260,210],[190,340],[320,470],

              [960,90],[1120,140],[1260,110],[1340,180],
              [980,240],[1210,260],[1040,360],[1320,380],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="4.5" />
            ))}
          </g>
        </svg>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#D3A32D]/25 blur-3xl" />
        <div className="absolute right-[8%] top-[42%] h-[360px] w-[360px] rounded-full bg-[#D3A32D]/18 blur-3xl" />
        <div className="absolute right-[18%] top-[28%] h-[2px] w-[520px] -rotate-12 rounded-full bg-white/25 blur-[1px]" />
      </div>

      <div className="relative pt-30 z-10 mx-auto min-h-screen w-full max-w-[1320px] px-5 pb-16 pt-10 sm:px-7 lg:px-10 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/25 px-5 py-2 text-sm text-[#0A3763] backdrop-blur"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#D3A32D]" />
              Selamat Datang di HIMSI UMDP
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-[#0A3763] sm:text-5xl lg:text-6xl"
            >
              Together,
              <span className="block text-[#2464A8]">We Are Better!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-slate-700 sm:text-base"
            >
              HIMSI UMDP adalah organisasi mahasiswa di Universitas Multi Data Palembang
              yang menghimpun seluruh mahasiswa dalam program studi Sistem Informasi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-row flex-wrap items-center gap-3"
            >
              <Button className="h-11 rounded-full bg-[#0A3763] px-7 text-white hover:bg-[#0A3763]/90" asChild>
                <Link href="/program">Lihat Program</Link>
              </Button>

              <Button
                variant="outline"
                className="h-11 rounded-full border-white/50 bg-white/25 px-7 text-[#0A3763] hover:bg-white/45"
                asChild
              >
                <Link href="/about">Tentang HIMSI</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mt-8 w-full max-w-xl"
            >
              <div className="rounded-2xl border border-white/45 bg-white/25 p-4 backdrop-blur">
                <div className="grid grid-cols-3">
                  {[
                    { value: "100+", label: "Anggota Aktif" },
                    { value: "20+", label: "Event Tahunan" },
                    { value: "15+", label: "Program Kerja" },
                  ].map((s, idx) => (
                    <div key={s.label} className={["px-3 py-2", idx ? "border-l border-white/35" : ""].join(" ")}>
                      <p className="text-2xl font-semibold text-[#D3A32D]">{s.value}</p>
                      <p className="mt-1 text-sm text-slate-700/80">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative h-[360px] w-full max-w-[520px] sm:h-[420px] lg:h-[520px]"
            >
              <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[40px] bg-gradient-to-r from-[#2464A8]/25 via-white/10 to-[#D3A32D]/30 blur-2xl" />

              <div className="absolute left-0 top-[18%] h-[58%] w-[68%] rotate-[-4deg] rounded-[26px] border border-white/60 bg-white/20 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                  <Image src="/images/hero/hero-3.jpg" alt="Kegiatan HIMSI" fill className="object-cover" />
                </div>
              </div>

              <div className="absolute right-[10%] top-[6%] h-[26%] w-[46%] rotate-[6deg] rounded-[22px] border border-white/60 bg-white/20 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                  <Image src="/images/hero/hero-1.jpg" alt="Kolaborasi" fill className="object-cover" />
                </div>
              </div>

              <div className="absolute right-0 top-[30%] h-[50%] w-[46%] rotate-[2deg] rounded-[22px] border border-white/60 bg-white/20 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur">
                <div className="relative h-full w-full overflow-hidden rounded-[16px]">
                  <Image src="/images/hero/hero-2.jpg" alt="Belajar bersama" fill className="object-cover" />
                </div>
              </div>

              <div aria-hidden className="pointer-events-none absolute right-0 top-[42%] h-1 w-[80%] -rotate-12 rounded-full bg-white/25 blur-[1px]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
