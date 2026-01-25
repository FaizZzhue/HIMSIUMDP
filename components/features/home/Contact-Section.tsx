"use client";

import Image from "next/image";

const cards = [
  { title: "WhatsApp", value: "0812-3456-7890", icon: "/images/contact/wa.png", href: "#", tint: "from-[#2464A8]/20" },
  { title: "Email", value: "himsi@umdp.ac.id", icon: "/images/contact/mail.png", href: "mailto:himsi@umdp.ac.id", tint: "from-[#2464A8]/14" },
  { title: "Instagram", value: "@himsi.umdp", icon: "/images/contact/ig.png", href: "#", tint: "from-[#2464A8]/14" },
  { title: "Lokasi Kampus", value: "Jl. Rajawali No.14,\nPalembang, Sumatera Selatan", icon: "/images/contact/pin.png", href: "#", tint: "from-[#D3A32D]/24" },
];

export default function ContactSocialSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen pt-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50">
          <svg className="h-full w-full" viewBox="0 0 1400 800" fill="none">
            <g stroke="white" strokeOpacity="0.45" strokeWidth="1.2">
              <path d="M880 90 L1020 140 L1160 110 L1320 180" />
              <path d="M900 240 L1020 140 L1110 260 L1320 180" />
              <path d="M980 360 L1110 260 L1230 380" />
              <path d="M1120 520 L1230 380 L1340 520" />

              <path d="M80 260 L210 210 L360 280 L520 240" />
              <path d="M130 520 L260 440 L410 520 L560 460" />
            </g>

            <g fill="white" fillOpacity="0.55">
              {[
                [880, 90],[1020,140],[1160,110],[1320,180],
                [900,240],[1110,260],[980,360],[1230,380],
                [1120,520],[1340,520],
                [80,260],[210,210],[360,280],[520,240],
                [130,520],[260,440],[410,520],[560,460],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5" />
              ))}
            </g>
          </svg>
        </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(36,100,168,0.62) 0%, rgba(245,247,252,0.88) 48%, rgba(243,179,58,0.72) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(980px 640px at 50% 18%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.55) 28%, rgba(255,255,255,0) 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.42) 1px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />
        <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 1400 900" fill="none">
          <g stroke="white" strokeOpacity="0.36" strokeWidth="1.2">
            <path d="M90 200 L260 140 L430 210 L640 150 L860 250" />
            <path d="M940 180 L1120 240 L1260 210 L1360 290" />
            <path d="M240 300 L190 430 L340 560" />
            <path d="M980 360 L1130 240 L1240 400 L1360 290" />
          </g>
        </svg>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-24 sm:px-7 lg:px-10">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl">
            Kontak & <span className="text-[#D3A32D]">Media Sosial</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-700/90 sm:text-[17px]">
            Hubungi kami atau ikuti media sosial HIMSI untuk mendapatkan informasi terbaru seputar kegiatan kami.
          </p>
        </div>

        {/* PANEL */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-5 rounded-[40px] bg-gradient-to-r from-white/30 via-white/10 to-white/25 blur-2xl"
          />
          <div className="relative rounded-[40px] border border-white/45 bg-white/18 p-6 backdrop-blur-xl shadow-[0_26px_80px_rgba(0,0,0,0.18)] sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  className="group relative overflow-hidden rounded-[22px] border border-white/50 bg-white/22 p-6 backdrop-blur transition hover:bg-white/30"
                >
                  <div aria-hidden className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.tint} via-white/0 to-white/0 opacity-70`} />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative h-14 w-14">
                      <Image src={c.icon} alt={c.title} fill className="object-contain" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A3763]">{c.title}</h3>
                    <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-slate-700/90">{c.value}</p>
                    <div className="mt-4 flex w-full justify-end">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/25 text-[#0A3763] transition group-hover:bg-white/40">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-8 text-center text-[15px] text-slate-700/85">
              Jangan ragu untuk menghubungi kami atau ikuti media sosial kami untuk update terbaru
            </p>

            <div className="mt-6 flex items-center justify-center gap-4">
              {["wa", "mail", "ig", "in"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-14 w-14 place-items-center rounded-full border border-white/45 bg-white/20 backdrop-blur transition hover:bg-white/28"
                >
                  <Image src={`/images/contact/${i}.png`} alt={i} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

        {/* <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-64">
            <div
                className="absolute inset-0"
                style={{
                background: `
                    linear-gradient(
                    180deg,
                    rgba(255,255,255,0) 0%,
                    rgba(7,18,39,0.35) 30%,
                    rgba(7,18,39,0.75) 60%,
                    rgba(7,18,39,1) 100%
                    )
                `,
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                backgroundImage:
                    "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, transparent 2px)",
                backgroundSize: "16px 16px",
                opacity: 1,
                maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,1) 100%)",
                WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,1) 100%)",
                }}
            />
        </div> */}

            {/* <div
                className="absolute inset-0"
                style={{
                background:
                    "radial-gradient(900px 420px at 18% 100%, rgba(36,100,168,0.35), transparent 65%), radial-gradient(900px 420px at 82% 100%, rgba(211,163,45,0.18), transparent 70%)",
                maskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 55%)",
                WebkitMaskImage:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 55%)",
                }}
            /> */}
    </section>
  );
}
