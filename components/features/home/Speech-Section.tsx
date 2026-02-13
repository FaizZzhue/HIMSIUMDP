"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SpeechSection() {
  return (
    <div
      id="opening-speech"
      className="relative w-full overflow-hidden min-h-screen pb-10"
    >
      {/* <div aria-hidden className="pointer-events-none absolute inset-0 speech-objects opacity-60" /> */}
      {/* <div
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

      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-16 h-[520px] w-[520px] rounded-full bg-[#2464A8]/25 blur-3xl" />
        <div className="absolute right-[-160px] top-10 h-[650px] w-[650px] rounded-full bg-[#D3A32D]/28 blur-3xl" />
        <div className="absolute right-[8%] top-[52%] h-[320px] w-[320px] rounded-full bg-[#D3A32D]/16 blur-3xl" />
      </div>

      <div aria-hidden className="pointer-events-none absolute bottom-12 right-[-18%] w-[120%] -rotate-12">
        <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-white/55 to-transparent blur-[0.5px]" />
        <div className="mt-3 h-[120px] w-full rounded-[999px] bg-gradient-to-r from-transparent via-white/10 to-transparent blur-2xl" />
      </div> */}

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-7 lg:px-10">
        <div className="text-center">

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl"
          >
            Sambutan Ketua    
            <span className="text-[#D3A32D]"> HIMSI</span>
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

          <div className="relative grid gap-8 rounded-[34px] border border-white/45 bg-white/20 p-8 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl md:grid-cols-[1.2fr_0.8fr] md:items-center ">
            <div>
              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                Assalamu’alaikum Warahmatullahi Wabarakatuh,
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base">
                Salam sejahtera bagi kita semua.
                {"\n"}
                Saya, Muhammad Akbar ingin menyampaikan apresiasi setinggi-tingginya kepada seluruh jajaran pengurus, anggota, dosen pembina, serta seluruh pihak yang senantiasa mendukung eksistensi dan perkembangan HIMSI dari waktu ke waktu.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base mt-4">
                HIMSI memiliki peran strategis sebagai wadah pengembangan potensi, intelektualitas, serta jiwa kepemimpinan mahasiswa Sistem Informasi. Melalui berbagai program kerja, kegiatan akademik maupun non-akademik, HIMSI berkomitmen untuk menciptakan ekosistem yang mendorong kolaborasi, inovasi, serta kontribusi nyata terhadap lingkungan kampus dan masyarakat luas.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base mt-4">
                Akhir kata, besar harapan kami agar HIMSI senantiasa menjadi organisasi yang membawa manfaat, membangun karakter, dan menciptakan perubahan positif di lingkungan akademik maupun masyarakat luas.
              </p>

              <p className="max-w-xl whitespace-pre-line text-[15px] leading-relaxed text-foreground sm:text-base mt-4">
                Wassalamu’alaikum Warahmatullahi Wabarakatuh.
              </p>

              <div className="mt-8">
                <div className="text-2xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8]">
                  Muhammad Akbar.
                </div>
                <div className="mt-1 text-sm font-medium text-[#D3A32D]/80">
                  Ketua Umum, 2025/2026
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="group relative mx-auto w-full max-w-[360px] transition-transform duration-500 hover:rotate-0 rotate-[1.2deg]">
                <div className="relative z-10 rounded-[28px] bg-white/70 backdrop-blur-md p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-white/50">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[20px] bg-slate-100">
                    <Image
                      src="/images/pengurus/bph/akbar.png"
                      alt="Ketua HIMSI"
                      fill
                      className="object-cover transition-scale duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 360px"
                      priority={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-2 rounded-[32px] border border-white/30 bg-white/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>  
          </div>
        </motion.div>
      </div>
    </div>
  );
}
