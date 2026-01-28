"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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

function AvatarCircle({ p, active }: { p: Person; active?: boolean }) {
  return (
    <div
      className={[
        "relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border bg-white/10 backdrop-blur",
        active
          ? "border-cyan-200/70 ring-4 ring-cyan-300/40 shadow-[0_0_0_10px_rgba(34,211,238,0.10)]"
          : "border-white/25 hover:border-white/50",
      ].join(" ")}
    >
      {p.avatar ? (
        <Image src={p.avatar} alt={p.name} fill className="object-cover" />
      ) : (
        <span className="text-xs font-bold text-white/80">{initials(p.name)}</span>
      )}
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
  const groups = useMemo(() => {
    if (!bidang) return [];
    return [
      { id: "leaders", label: "Kepala & Wakil", people: bidang.leaders },
      ...bidang.divisions.map((d) => ({
        id: d.name,
        label: d.name,
        people: d.members,
      })),
    ];
  }, [bidang]);

  const [activeGroup, setActiveGroup] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveGroup(0);
    setActiveIndex(0);
  }, [bidang?.id]);

  const visiblePeople = groups[activeGroup]?.people ?? [];
  const person = visiblePeople[activeIndex] ?? visiblePeople[0];

  const n = Math.max(visiblePeople.length, 1);
  const start = 220;
  const end = 330;   
  const step = n > 1 ? (end - start) / (n - 1) : 0;

  return (
    <section ref={sectionRef as any} id="anggota-bidang" className="relative overflow-hidden pb-24 pt-10">
      {/* bg */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#86BDF0] via-[#F8FAFF] to-[#F8C06B]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.18) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      /> */}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-[#0B3B82]">Profil </span>
            <span className="text-[#EA6A1A]">Anggota</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-700 sm:text-base">
            {!bidang
              ? "Pilih salah satu bidang pada section sebelumnya untuk menampilkan anggota."
              : `Menampilkan anggota untuk bidang ${bidang.name}. Klik avatar pada arc untuk memilih profil.`}
          </p>
        </div>

        {!bidang ? (
          <div className="mt-10 rounded-3xl border border-white/40 bg-white/65 p-8 text-center shadow-[0_18px_50px_rgba(2,6,23,0.10)] backdrop-blur-xl">
            <p className="text-sm text-slate-700">Belum ada bidang yang dipilih.</p>
            <button
              onClick={onBackToBidang}
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/75 px-5 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-white/90"
            >
              Kembali Pilih Bidang
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/80">↑</span>
            </button>
          </div>
        ) : (
          <div className="mt-10 overflow-hidden rounded-[28px] border border-white/20 bg-white/10 shadow-[0_40px_120px_rgba(2,6,23,0.22)] backdrop-blur-2xl">
            <div className="grid grid-cols-12">
              <aside className="relative col-span-12 overflow-hidden bg-[#0B1E33] md:col-span-5">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.22)_0%,rgba(11,30,51,0.0)_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,176,59,0.16)_0%,rgba(11,30,51,0.0)_60%)]" />

                <div className="relative z-10 flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10">
                      <Image src={himsiLogo} alt="HIMSI" fill className="object-contain p-2" />
                    </div>
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10">
                      <Image src={kabinetLogo} alt="Kabinet" fill className="object-contain p-2" />
                    </div>
                  </div>

                  <button
                    onClick={onBackToBidang}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/15"
                  >
                    Kembali ↩
                  </button>
                </div>

                <div className="relative z-10 px-6 pt-2">
                  <div className="text-sm font-semibold text-white/90">{bidang.name}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {groups.map((g, idx) => {
                      const active = idx === activeGroup;
                      return (
                        <button
                          key={g.id}
                          onClick={() => {
                            setActiveGroup(idx);
                            setActiveIndex(0);
                          }}
                          className={[
                            "rounded-full border px-4 py-2 text-xs font-semibold transition",
                            active
                              ? "border-cyan-200/30 bg-cyan-200/10 text-white"
                              : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10",
                          ].join(" ")}
                        >
                          {g.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="relative mt-6 h-[520px] w-full">
                  <div className="absolute bottom-[-210px] left-[-210px] h-[700px] w-[700px]">
                    <div className="absolute inset-0 rounded-full border border-white/14" />
                    <div className="absolute left-[85px] top-[85px] h-[530px] w-[530px] rounded-full border border-white/12" />
                    <div className="absolute left-[170px] top-[170px] h-[360px] w-[360px] rounded-full border border-white/10" />
                    <div className="absolute left-[85px] top-[85px] h-[530px] w-[530px] rounded-full border border-cyan-200/20 shadow-[0_0_120px_rgba(34,211,238,0.18)]" />

                    <div className="absolute left-[85px] top-[85px] h-[530px] w-[530px]">
                      {visiblePeople.map((p, i) => {
                        const angle = start + step * i;
                        const { x, y } = polarToXY(265, 265, 235, angle);
                        const isActive = i === activeIndex;

                        return (
                          <button
                            key={`${p.name}-${i}`}
                            onClick={() => setActiveIndex(i)}
                            className="absolute -translate-x-1/2 -translate-y-1/2"
                            style={{ left: x, top: y }}
                            aria-label={`Pilih ${p.name}`}
                          >
                            <AvatarCircle p={p} active={isActive} />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-xs text-white/60">
                    Klik avatar pada arc untuk memilih profil.
                  </div>
                </div>
              </aside>

              <main className="col-span-12 flex min-h-[620px] items-center justify-center bg-white px-6 py-12 md:col-span-7 md:px-10">
                <div className="w-full max-w-xl text-center">
                  <div className="mx-auto mb-6 w-[240px]">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_22px_60px_rgba(2,6,23,0.10)]">
                      {person?.avatar ? (
                        <Image src={person.avatar} alt={person.name} fill className="object-cover" />
                      ) : (
                        <div className="grid h-full w-full place-items-center">
                          <div className="grid h-24 w-24 place-items-center rounded-full bg-slate-200 text-xl font-extrabold text-slate-700">
                            {person ? initials(person.name) : "NA"}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {person?.name ?? "Nama Anggota"}
                  </h3>
                  <p className="mt-1 text-base font-semibold text-emerald-700">
                    {person?.role ?? "Jabatan"}
                  </p>

                  <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-slate-600">
                    {person?.quote ??
                      "“Bersama, kita belajar dan bertumbuh untuk menciptakan dampak yang nyata.”"}
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setActiveIndex((v) => Math.max(v - 1, 0))}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
                      disabled={activeIndex === 0}
                    >
                      ← Sebelumnya
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((v) => Math.min(v + 1, visiblePeople.length - 1))
                      }
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 disabled:opacity-50"
                      disabled={activeIndex >= visiblePeople.length - 1}
                    >
                      Berikutnya →
                    </button>
                  </div>
                </div>
              </main>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
