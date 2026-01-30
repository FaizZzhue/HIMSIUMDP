"use client";

import Image from "next/image";
import type React from "react";
import type { BPH, BidangDetail } from "./Kabinet-Bidang-Pengurus";

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function MosaicTile({
  title,
  subtitle,
  badge,
  icon,
  cover,
  className = "",
  onClick,
}: {
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: string;
  cover?: string;
  className?: string;
  onClick?: () => void;
}) {
  const Wrapper: any = onClick ? "button" : "div";

  return (
    <Wrapper
      onClick={onClick}
      type={onClick ? "button" : undefined}
      aria-label={onClick ? `Buka anggota ${title}` : undefined}
      className={[
        "group relative w-full overflow-hidden rounded-[22px] border border-white/30",
        "bg-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl",
        "transition hover:-translate-y-[2px] hover:border-white/50 hover:shadow-[0_24px_80px_rgba(2,6,23,0.22)]",
        onClick ? "text-left cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0">
        {cover ? (
          <Image src={cover} alt={title} fill className="object-cover scale-[1.04]" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-[#0B3B82]/35 via-white/10 to-[#EA6A1A]/30" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent" />

        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.32) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.28)_40%,transparent_70%)]" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
            {icon ? (
              <span className="relative h-4 w-4 overflow-hidden rounded-md bg-white/10">
                <Image src={icon} alt="" fill className="object-contain p-[2px]" />
              </span>
            ) : null}
            <span>{badge ?? "Kabinet"}</span>
          </div>

          {onClick ? (
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-white/90 transition group-hover:bg-white/15">
              →
            </span>
          ) : null}
        </div>

        <div>
          <div className="text-lg font-extrabold tracking-tight text-white sm:text-xl">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-1 text-xs font-medium text-white/75 sm:text-sm">
              {subtitle}
            </div>
          ) : null}

          {onClick ? (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white/90">
              Lihat Anggota <span className="opacity-80">↗</span>
            </div>
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
}

export default function BidangKabinetSection({
  sectionRef,
  bph,
  bidangList,
  onClickAnggota,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
  bph: BPH[];
  bidangList: BidangDetail[];
  onClickAnggota: (id: BidangDetail["id"]) => void;
}) {

  const layoutById: Record<string, string> = {
    psdm: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
    kominfo: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
    litbang: "col-span-12 lg:col-span-6 lg:row-span-2",
    sosial: "col-span-12 lg:col-span-6 lg:row-span-2",
  };

  const getBidang = (id: string) => bidangList.find((b) => b.id === id);

  const psdm = getBidang("psdm");
  const kominfo = getBidang("kominfo");
  const litbang = getBidang("litbang");
  const sosial = getBidang("sosial");

  return (
    <section
      ref={sectionRef as any}
      id="bidang"
      className="relative overflow-hidden pt-20 pb-12"
    >
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-[#0A3763] dark:text-[#2464A8]">Bidang </span>
            <span className="text-[#D3A32D]">Eksekutif</span>
          </h2>
          {/* <p className="mx-auto mt-3 max-w-3xl text-base text-slate-700 sm:text-lg">
          </p> */}
        </div>

        <div className="mt-12 grid grid-cols-12 grid-flow-dense gap-4 sm:gap-5 [grid-auto-rows:140px] sm:[grid-auto-rows:160px] lg:[grid-auto-rows:170px]">
          <div className="col-span-12 lg:col-span-4 lg:row-span-2">
            <div className="relative h-full overflow-hidden rounded-[22px] border border-white/30 bg-white/10 shadow-[0_18px_60px_rgba(2,6,23,0.18)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E33]/85 via-[#0B1E33]/55 to-[#EA6A1A]/25" />
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(rgba(255,255,255,0.28) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                    BPH INTI
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-extrabold tracking-tight text-white">
                    BPH INTI
                  </div>

                  {/* <div className="mt-5 flex items-center">
                    {bph.slice(0, 6).map((p, idx) => (
                      <div
                        key={p.role}
                        className="relative -ml-2 first:ml-0 h-12 w-12 overflow-hidden rounded-full border border-white/35 bg-white/10"
                        style={{ zIndex: 10 - idx }}
                        title={`${p.name} • ${p.role}`}
                      >
                        {p.avatar ? (
                          <Image src={p.avatar} alt={p.name} fill className="object-cover" />
                        ) : (
                          <div className="grid h-full w-full place-items-center text-xs font-extrabold text-white/85">
                            {initials(p.name)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {psdm && (
            <MosaicTile
              className={layoutById.psdm}
              title={psdm.name}
              // subtitle={`${psdm.divisions.length} divisi • ${psdm.leaders.length} leader`}
              badge="Bidang"
              icon={psdm.logo}
              cover={(psdm as any).cover}
              onClick={() => onClickAnggota(psdm.id)}
            />
          )}

          {kominfo && (
            <MosaicTile
              className={layoutById.kominfo}
              title={kominfo.name}
              // subtitle={`${kominfo.divisions.length} divisi • ${kominfo.leaders.length} leader`}
              badge="Bidang"
              icon={kominfo.logo}
              cover={(kominfo as any).cover}
              onClick={() => onClickAnggota(kominfo.id)}
            />
          )}

          {litbang && (
            <MosaicTile
              className={layoutById.litbang}
              title={litbang.name}
              // subtitle={`${litbang.divisions.length} divisi • ${litbang.leaders.length} leader`}
              badge="Bidang"
              icon={litbang.logo}
              cover={(litbang as any).cover}
              onClick={() => onClickAnggota(litbang.id)}
            />
          )}

          {sosial && (
            <MosaicTile
              className={layoutById.sosial}
              title={sosial.name}
              // subtitle={`${sosial.divisions.length} divisi • ${sosial.leaders.length} leader`}
              badge="Bidang"
              icon={sosial.logo}
              cover={(sosial as any).cover}
              onClick={() => onClickAnggota(sosial.id)}
            />
          )}
        </div>
      </div>
    </section>
  );
}
