"use client";

import Image from "next/image";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { BidangDetail, Person } from "./Kabinet-Bidang-Pengurus";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (Math.PI / 180) * angleDeg;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function AvatarNode({ p, active }: { p: Person; active?: boolean }) {
  return (
    <div
      className={[
        "pointer-events-auto rounded-full bg-white p-[7px] shadow-[0_14px_50px_rgba(2,6,23,0.18)]",
        active ? "shadow-[0_18px_80px_rgba(234,106,26,0.32)]" : "",
      ].join(" ")}
    >
      <div
        className={[
          "relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border bg-white",
          active
            ? "border-transparent ring-4 ring-[#EA6A1A]/35 shadow-[0_0_0_10px_rgba(234,106,26,0.18)]"
            : "border-slate-200",
        ].join(" ")}
      >
        {p.avatar ? (
          <Image src={p.avatar} alt={p.name} fill className="object-cover" />
        ) : (
          <span className="text-xs font-extrabold text-slate-700">
            {initials(p.name)}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PengurusKabinetSection({
  sectionRef,
  bidang,
  onBackToBidang,
  himsiLogo,
  kabinetLogo,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  bidang: BidangDetail | null;
  onBackToBidang: () => void;
  himsiLogo: string;
  kabinetLogo: string;
}) {
  const people = useMemo<Person[]>(() => {
    if (!bidang) return [];
    const leaders = bidang.leaders ?? [];
    const members = (bidang.divisions ?? []).flatMap((d) => d.members ?? []);
    const all = [...leaders, ...members];

    const seen = new Set<string>();
    const unique: Person[] = [];
    for (const p of all) {
      const key = `${p.name}__${p.role}`;
      if (seen.has(key)) continue;
      seen.add(key);
      unique.push(p);
    }
    return unique;
  }, [bidang]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [swapKey, setSwapKey] = useState(0);

  useEffect(() => setActiveIndex(0), [bidang?.id]);

  useEffect(() => {
    if (!people.length) return;
    setActiveIndex((v) => Math.min(v, people.length - 1));
  }, [people.length]);

  const person = people[activeIndex] ?? people[0];

  useEffect(() => {
    if (!bidang) return;
    if (people.length <= 1) return;

    const t = setInterval(() => {
      setActiveIndex((v) => (v + 1) % people.length);
    }, 1200);

    return () => clearInterval(t);
  }, [bidang?.id, people.length]);

  useEffect(() => setSwapKey((k) => k + 1), [activeIndex]);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const [ringSize, setRingSize] = useState(980);

  useEffect(() => {
    if (!ringRef.current) return;
    if (typeof ResizeObserver === "undefined") return;

    const el = ringRef.current;
    const ro = new ResizeObserver(() => setRingSize(el.clientWidth));
    ro.observe(el);
    setRingSize(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const border = 54;
  const cx = ringSize / 2;
  const cy = ringSize / 2;
  const r = ringSize / 2 - border / 2 - 10;

  const n = Math.max(people.length, 1);
  const start = 240;
  const end = 120;
  const step = n > 1 ? (end - start) / (n - 1) : 0;

  return (
    <section
      ref={sectionRef as any}
      id="anggota-bidang"
      className="relative overflow-hidden min-h-screen"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-7 lg:px-10 py-10">
        {!bidang ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
            <p className="text-sm text-white/80">
              Pilih bidang pada section sebelumnya untuk menampilkan anggota.
            </p>
            <button
              onClick={onBackToBidang}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/15"
              type="button"
            >
              Kembali Pilih Bidang
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                ↑
              </span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch">
            <div className="w-full lg:w-[40%] flex flex-col items-center justify-center text-center lg:text-left lg:items-start lg:justify-center min-h-[320px] lg:min-h-[740px]">
              <div>
                <div className="text-sm font-semibold text-foreground">Bidang</div>
                <h3 className="mt-2 text-5xl font-extrabold tracking-tight text-[#D3A32D]">
                  {bidang.name}
                </h3>
              </div>

              <div className="mt-10 flex items-center justify-center gap-7">
                <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                  <Image
                    src={himsiLogo}
                    alt="HIMSI"
                    fill
                    className="object-contain object-center p-3 lg:p-4"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px"
                  />
                </div>
                <div className="relative grid h-28 w-28 place-items-center overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                  <Image
                    src={kabinetLogo}
                    alt="Kabinet"
                    fill
                    className="object-contain object-center p-3 lg:p-4"
                    sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 180px"
                  />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[60%] relative overflow-hidden min-h-[560px] sm:min-h-[680px] lg:min-h-[740px]">
              <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                <div
                  ref={ringRef}
                  className={[
                    "pointer-events-none relative aspect-square",
                    "w-[min(92vw,560px)]",
                    "lg:w-[clamp(760px,56vw,980px)] lg:translate-x-[30%]",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 rounded-s-full border-[60px] border-[#D3A32D]" />
                  
                  <div className="absolute inset-0 rounded-s-full z-20 pointer-events-none overflow-visible">
                    {people.map((p, i) => {
                      const angle = start + step * i;

                      const rAvatar = ringSize / 2 - border / 2;

                      const { x, y } = polarToXY(cx, cy, rAvatar, angle);
                      const isActive = i === activeIndex;

                      return (
                        <button
                          key={`${p.name}-${p.role}-${i}`}
                          onClick={() => setActiveIndex(i)}
                          className="pointer-events-auto absolute"
                          style={{
                            left: x,
                            top: y,
                            transform: "translate(-50%, -50%)",
                          }}
                          aria-label={`Pilih ${p.name}`}
                          type="button"
                        >
                          <AvatarNode p={p} active={isActive} />
                        </button>
                      );
                    })}
                  </div>

                  <div
                    key={swapKey}
                    className="pointer-events-auto absolute z-30 top-1/2 lg:left-[45%]"
                    style={{ animation: "profileSwap .45s ease both" }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="relative h-[210px] w-[170px] overflow-hidden rounded-[26px] bg-white/45 ring-1 ring-white/60 shadow-[0_28px_90px_rgba(2,6,23,0.18)] backdrop-blur">
                        {person?.avatar ? (
                          <Image
                            src={person.avatar}
                            alt={person.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="grid h-full w-full place-items-center">
                            <div className="grid h-24 w-24 place-items-center rounded-full bg-white/80 text-xl font-extrabold text-slate-700">
                              {person ? initials(person.name) : "NA"}
                            </div>
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
                      </div>

                      <h3 className="mt-7 text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                        {person?.name ?? "Nama Anggota"}
                      </h3>
                      <p className="mt-2 text-base font-semibold text-[#0B3B82]">
                        {person?.role ?? "Jabatan"}
                      </p>

                      <p className="mx-auto mt-4 max-w-[320px] text-sm leading-relaxed text-foreground">
                        {person?.quote ??
                          "“Motto”"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
