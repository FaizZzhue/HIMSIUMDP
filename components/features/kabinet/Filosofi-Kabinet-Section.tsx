"use client";

import Image from "next/image";
import Snowfall from "react-snowfall";

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
    desc: "Kuning mencerminkan semangat, kreativitas, dan optimisme. Kehadirannya menunjukkan bahwa kabinet membawa semangat untuk berinovasi, menyebarkan energi positif, dan menghadirkan perubahan yang terasa manfaatnya bagi himpunan maupun lingkungan kampus.",
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

// const VALUES = [" ", "", ""];

function cn(...cls: Array<string | false | undefined>) {
  return cls.filter(Boolean).join(" ");
}

function FilosofiCard({ item }: { item: FilosofiItem }) {
  const isBlue = item.accent === "blue";
  return (
    <div
      className={cn(
        "relative rounded-2xl border bg-white/65 p-5 shadow-[0_16px_40px_rgba(2,6,23,0.12)] backdrop-blur-xl",
        "border-white/70"
      )}
    >
      <div className="absolute left-5 top-5 flex items-center gap-3">
        <span
          className={cn(
            "h-4 w-4 rounded-full",
            isBlue ? "bg-[#1E6BD6]" : "bg-[#F59E0B]"
          )}
        />
        <span
          className={cn(
            "h-[3px] w-44 rounded-full",
            isBlue ? "bg-[#1E6BD6]" : "bg-[#F59E0B]"
          )}
        />
      </div>

      <h3 className="mt-7 text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
        {item.desc}
      </p>
    </div>
  );
}

// function ValuePill({ label, i }: { label: string; i: number }) {
//   const dots = ["bg-[#0A3763]", "bg-[#2464A8]", "bg-[#D3A32D]"];
//   return (
//     <div className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_26px_rgba(2,6,23,0.10)] backdrop-blur-xl">
//       <span className={cn("h-2.5 w-2.5 rounded-full", dots[i % dots.length])} />
//       {label}
//     </div>
//   );
// }

export default function FilosofiKabinetSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <Snowfall />
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#86BDF0] via-[#F8FAFF] to-[#F8C06B]" />

      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      /> */}

      {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.55)_35%,rgba(255,255,255,0)_70%)]" /> */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">

        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-[#0A3763] dark:text-[#2464A8]">
              Logo Kabinet & {" "}
            </span>
            <span className="text-[#D3A32D]">
              Filosofi
            </span>
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-6xl">
          {/* <svg
            className="pointer-events-none absolute inset-0 hidden lg:block"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="rgba(30,107,214,0.55)" />
                <stop offset="1" stopColor="rgba(245,158,11,0.55)" />
              </linearGradient>
            </defs>

            <path d="M260 140 H360 V210 H430" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />
            <path d="M260 260 H360 V260 H430" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />
            <path d="M260 380 H360 V310 H430" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />

            <path d="M740 140 H640 V210 H570" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />
            <path d="M740 260 H640 V260 H570" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />
            <path d="M740 380 H640 V310 H570" stroke="rgba(148,163,184,0.7)" strokeWidth="3" fill="none" />

            {[
              [430, 210],
              [430, 360],
              [430, 520],
              [570, 210],
              [570, 260],
              [570, 310],
            ].map(([x, y], idx) => (
              <circle key={idx} cx={x} cy={y} r="6" fill="url(#g1)" />
            ))}
          </svg> */}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 space-y-5 lg:order-1 lg:col-span-4">
              {LEFT.map((item) => (
                <FilosofiCard key={item.title} item={item} />
              ))}
            </div>

            <div className="relative items-center lg:order-2 lg:col-span-4">
              <div className="h-[230px] w-[230px]">
                <Image
                  src="/images/logo/logo-kabinet.png"
                  alt="Logo Kabinet Harsana Cakra"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="order-3 space-y-5 lg:col-span-4">
              {RIGHT.map((item) => (
                <FilosofiCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          {/* <div className="mt-10 flex flex-wrap justify-center gap-3">
            {VALUES.map((v, i) => (
              <ValuePill key={v} label={v} i={i} />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
