"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SpeechSection() {
  return (
    <div
      id="opening-speech"
      className="relative isolate overflow-hidden bg-transparent py-20 sm:py-24"
    >
      {/* objects/pattern layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 speech-objects opacity-60" />

      {/* soft center glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/45 blur-3xl" />
      </div>

      {/* network */}
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40">
        <svg className="h-full w-full" viewBox="0 0 1400 820" fill="none">
          <g stroke="white" strokeOpacity="0.42" strokeWidth="1.2">
            <path d="M80 180 L260 120 L420 210 L600 150 L770 230" />
            <path d="M120 560 L300 450 L470 560 L640 470 L820 560" />
            <path d="M860 120 L1030 170 L1180 130 L1320 220" />
            <path d="M900 260 L1030 170 L1125 290 L1320 220" />
            <path d="M980 390 L1125 290 L1260 410" />
            <path d="M1080 520 L1260 410 L1360 560" />
          </g>

          <g fill="white" fillOpacity="0.55">
            <circle cx="80" cy="180" r="5" />
            <circle cx="260" cy="120" r="5" />
            <circle cx="420" cy="210" r="5" />
            <circle cx="600" cy="150" r="5" />
            <circle cx="770" cy="230" r="5" />

            <circle cx="120" cy="560" r="5" />
            <circle cx="300" cy="450" r="5" />
            <circle cx="470" cy="560" r="5" />
            <circle cx="640" cy="470" r="5" />
            <circle cx="820" cy="560" r="5" />

            <circle cx="860" cy="120" r="5" />
            <circle cx="1030" cy="170" r="5" />
            <circle cx="1180" cy="130" r="5" />
            <circle cx="1320" cy="220" r="5" />
            <circle cx="900" cy="260" r="5" />
            <circle cx="1125" cy="290" r="5" />
            <circle cx="980" cy="390" r="5" />
            <circle cx="1260" cy="410" r="5" />
            <circle cx="1080" cy="520" r="5" />
            <circle cx="1360" cy="560" r="5" />
          </g>
        </svg>
      </div>

      {/* dotted bokeh */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-[120px] h-[520px] w-[720px] opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.7) 1.6px, transparent 2px)",
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "radial-gradient(closest-side, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      />

      {/* extra glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-[520px] w-[520px] rounded-full bg-[#2464A8]/25 blur-3xl" />
        <div className="absolute right-[-160px] top-10 h-[650px] w-[650px] rounded-full bg-[#D3A32D]/28 blur-3xl" />
        <div className="absolute right-[8%] top-[52%] h-[320px] w-[320px] rounded-full bg-[#D3A32D]/16 blur-3xl" />
      </div>

      {/* light streak */}
      <div aria-hidden className="pointer-events-none absolute bottom-12 right-[-18%] w-[120%] -rotate-12">
        <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[0.5px]" />
        <div className="mt-3 h-[120px] w-full rounded-[999px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] sm:text-5xl"
          >
            Sambutan Ketua HIMSI
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="relative mx-auto mt-12 max-w-5xl"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-7 rounded-[44px] bg-gradient-to-r from-[#2464A8]/18 via-white/10 to-[#D3A32D]/22 blur-2xl"
          />

          <div className="relative grid gap-8 rounded-[34px] border border-white/45 bg-white/20 p-8 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-slate-700/85 sm:text-base">
                Assalamu’alaikum Warahmatullahi Wabarakatuh,
              </p>
              
              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-slate-700/85 sm:text-base">
                Salam sejahtera bagi kita semua.
                {"\n"}
                Saya, Muhammad Akbar ingin menyampaikan apresiasi setinggi-tingginya kepada seluruh jajaran pengurus, anggota, dosen pembina, serta seluruh pihak yang senantiasa mendukung eksistensi dan perkembangan HIMSI dari waktu ke waktu.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-slate-700/85 sm:text-base mt-4">
                HIMSI memiliki peran strategis sebagai wadah pengembangan potensi, intelektualitas, serta jiwa kepemimpinan mahasiswa Sistem Informasi. Melalui berbagai program kerja, kegiatan akademik maupun non-akademik, HIMSI berkomitmen untuk menciptakan ekosistem yang mendorong kolaborasi, inovasi, serta kontribusi nyata terhadap lingkungan kampus dan masyarakat luas.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-slate-700/85 sm:text-base mt-4">
                Akhir kata, besar harapan kami agar HIMSI senantiasa menjadi organisasi yang membawa manfaat, membangun karakter, dan menciptakan perubahan positif di lingkungan akademik maupun masyarakat luas.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-slate-700/85 sm:text-base mt-4">
                Wassalamu’alaikum Warahmatullahi Wabarakatuh.
              </p>

              <div className="mt-8">
                <div className="text-2xl font-semibold tracking-tight text-[#0A3763]">
                  Muhammad Akbar.
                </div>
                <div className="mt-1 text-sm font-medium text-[#2464A8]/80">
                  Ketua Umum, 2025/2026
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto w-full max-w-[360px] rotate-[1.2deg]">
                <div className="rounded-[28px] bg-white/45 p-3 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] bg-white">
                    <Image
                      src="/images/speech/ketua.jpg"
                      alt="Ketua HIMSI"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 360px"
                      priority={false}
                    />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-1 rounded-[30px] border border-white/40"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
