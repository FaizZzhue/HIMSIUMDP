"use client";

import ContactSocialSection from "./Contact-Section";
import FooterHimsi from "@/components/common/Footer";

export default function ContactFooterWrapper() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ======= ONE CANVAS BACKGROUND (gradient + dots + network) ======= */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Base gradient like your sample (blue -> white -> gold) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(36,100,168,0.62) 0%, rgba(245,247,252,0.88) 48%, rgba(243,179,58,0.72) 100%)",
          }}
        />

        {/* White bloom center-top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(980px 640px at 50% 18%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.55) 28%, rgba(255,255,255,0) 70%)",
          }}
        />

        {/* Side glows (blue left, gold right) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(980px 760px at 18% 55%, rgba(36,100,168,0.42) 0%, rgba(36,100,168,0.16) 46%, rgba(36,100,168,0) 72%), radial-gradient(1100px 820px at 86% 52%, rgba(211,163,45,0.58) 0%, rgba(211,163,45,0.22) 55%, rgba(211,163,45,0) 80%)",
          }}
        />

        {/* Dots pattern */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.42) 1px, transparent 2px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Network lines */}
        <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 1400 900" fill="none">
          <g stroke="white" strokeOpacity="0.38" strokeWidth="1.2">
            <path d="M90 200 L260 140 L430 210 L640 150 L860 250" />
            <path d="M940 180 L1120 240 L1260 210 L1360 290" />
            <path d="M240 300 L190 430 L340 560" />
            <path d="M980 360 L1130 240 L1240 400 L1360 290" />
          </g>
        </svg>
      </div>

      {/* ======= CONTENT (transparent) ======= */}
      <ContactSocialSection />
      <FooterHimsi />
    </section>
  );
}
