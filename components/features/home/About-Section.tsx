"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, CalendarDays, BriefcaseBusiness, Info } from "lucide-react";

type About = {
  value: string;
  label: string;
  Icon: React.ElementType;
};

const data: About[] = [
  { value: "51", label: "Anggota Aktif", Icon: Users },
  { value: "5", label: "Event Tahunan", Icon: CalendarDays },
  { value: "15", label: "Program Kerja", Icon: BriefcaseBusiness },
];

export default function AboutSection() {
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      data.map((d, idx) => ({
        ...d,
        id: idx,
      })),
    []
  );

  return (
    <section id="about" className="relative w-full overflow-hidden min-h-screen">
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
              [880, 90],
              [1020, 140],
              [1160, 110],
              [1320, 180],
              [900, 240],
              [1110, 260],
              [980, 360],
              [1230, 380],
              [1120, 520],
              [1340, 520],
              [80, 260],
              [210, 210],
              [360, 280],
              [520, 240],
              [130, 520],
              [260, 440],
              [410, 520],
              [560, 460],
            ].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="5" />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 py-20 sm:px-7 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-[#0A3763] dark:text-[#2464A8] sm:text-5xl"
          >
            Tentang <span className="text-[#D3A32D]">HIMSI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 text-base leading-relaxed text-foreground sm:text-lg"
          >
            HIMSI UMDP adalah Himpunan Mahasiswa Sistem Informasi Universitas Multi Data Palembang
            yang hadir sebagai wadah pengembangan diri, kreativitas, serta memperkuat hubungan
            antar mahasiswa Sistem Informasi di kampus.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:gap-4">
            {items.map((it) => {
              const isOpen = active === it.id;
              const Icon = it.Icon;

              return (
                <Card
                  key={it.id}
                  className={[
                    "relative overflow-hidden border-border/60 bg-background/70 backdrop-blur",
                    "transition-all duration-300",
                    "hover:shadow-md",
                    isOpen ? "rounded-2xl" : "rounded-full",
                  ].join(" ")}
                >
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setActive(isOpen ? null : it.id)}
                    className={[
                      "h-auto w-full p-0 hover:bg-transparent",
                      "focus-visible:ring-2 focus-visible:ring-[#D3A32D]/35",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "w-full",
                        isOpen ? "px-4 py-4 sm:px-5" : "px-3 py-3 sm:px-4 sm:py-4",
                      ].join(" ")}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <span
                          className={[
                            "grid place-items-center",
                            "bg-[#D3A32D]/12 text-[#D3A32D]",
                            "ring-1 ring-[#D3A32D]/20",
                            isOpen ? "h-10 w-10 rounded-xl" : "h-12 w-12 rounded-full",
                          ].join(" ")}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isOpen ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: 6 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: 6 }}
                            transition={{ duration: 0.25 }}
                            className="mt-4 text-center"
                          >
                            <div className="text-3xl font-semibold text-[#0A3763] dark:text-[#2464A8]">
                              {it.value}
                            </div>
                            <div className="mt-1 text-sm text-muted-foreground">{it.label}</div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </Button>

                  <div
                    aria-hidden
                    className={[
                      "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                      isOpen ? "opacity-100" : "group-hover:opacity-100",
                    ].join(" ")}
                    style={{
                      background:
                        "radial-gradient(600px 220px at 50% 0%, rgba(211,163,45,0.16), transparent 60%)",
                    }}
                  />
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[28px]"
          >
            <div className="relative h-[220px] sm:h-[280px] md:h-[340px]">
              <Image
                src="/images/hero/hero-4.png"
                alt="Kegiatan HIMSI"
                fill
                className="w-full object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 900px, 1024px"
                priority={false}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
