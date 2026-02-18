"use client";

import Image from "next/image";
import type { ElementType, Ref } from "react";
import type { BidangDetail } from "@/types/types";
import Snowfall from "react-snowfall";


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
  const Wrapper: ElementType = onClick ? "button" : "div";

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

export default function Bidang({
  sectionRef,
  bidangList,
  onClickAnggota,
}: {
  sectionRef: Ref<HTMLElement>;
  bidangList: BidangDetail[];
  onClickAnggota: (id: BidangDetail["id"]) => void;
}) {

  const layoutById: Record<string, string> = {
    psdm: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
    kominfo: "col-span-12 sm:col-span-6 lg:col-span-4 lg:row-span-2",
    litbang: "col-span-12 lg:col-span-6 lg:col-span-4 lg:row-span-2",
    sosial: "col-span-12 lg:col-span-6 lg:col-span-4 lg:row-span-2",
  };

  const getBidang = (id: string) => bidangList.find((b) => b.id === id);

  const psdm = getBidang("psdm");
  const kominfo = getBidang("kominfo");
  const litbang = getBidang("litbang");
  const sosial = getBidang("sosial");

  return (
    <section
      ref={sectionRef}
      id="bidang"
      className="relative overflow-hidden pt-20 pb-12"
    >
      <Snowfall />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="text-[#0A3763] dark:text-[#2464A8]">Bidang </span>
            <span className="text-[#D3A32D]">Eksekutif</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-12 grid-flow-dense gap-4 sm:gap-5 [grid-auto-rows:140px] sm:[grid-auto-rows:160px] lg:[grid-auto-rows:170px]">
          
          <MosaicTile
            title="BPH"
            // subtitle="Badan Pengurus Harian"
            badge="BPH"
            cover="/images/bidang/bph.png"
            className="col-span-12 lg:col-span-4 lg:row-span-2"
            onClick={() => onClickAnggota("bph")} 
          />

          {psdm && (
            <MosaicTile
              className={layoutById.psdm}
              title={psdm.name}
              badge="PSDM"
              icon={psdm.logo}
              cover="/images/bidang/psdm.png"
              onClick={() => onClickAnggota(psdm.id)}
            />
          )}

          {kominfo && (
            <MosaicTile
              className={layoutById.kominfo}
              title={kominfo.name}
              badge="Kominfo"
              icon={kominfo.logo}
              cover="/images/bidang/kominfo.png"
              onClick={() => onClickAnggota(kominfo.id)}
            />
          )}

          {litbang && (
            <MosaicTile
              className={layoutById.litbang}
              title={litbang.name}
              badge="Litbang IT"
              icon={litbang.logo}
              cover="/images/bidang/litbang.png"
              onClick={() => onClickAnggota(litbang.id)}
            />
          )}

          {sosial && (
            <MosaicTile
              className={layoutById.sosial}
              title={sosial.name}
              badge="Bidang"
              icon={sosial.logo}
              cover="/images/bidang/sosial.png"
              onClick={() => onClickAnggota(sosial.id)}
            />
          )}
        </div>
      </div>
    </section>
  );
}