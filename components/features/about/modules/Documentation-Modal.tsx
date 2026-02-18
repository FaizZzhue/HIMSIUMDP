"use client";

import type { GalleryItem } from "@/types/types";

type DocumentationModalProps = {
  active: GalleryItem;
  onClose: () => void;
};

export function DocumentationModal({ active, onClose }: DocumentationModalProps) {
  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

      <div
        className="
          relative w-full max-w-4xl overflow-hidden rounded-[28px]
          border border-white/15 bg-white/10 backdrop-blur-xl
          shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-base font-semibold text-white">{active.title}</p>
            <p className="mt-1 text-sm text-white/70">{active.proker}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
          >
            Tutup ✕
          </button>
        </div>

        <div className="grid gap-0 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="relative aspect-[16/10] w-full">
              <img src={active.src} alt={active.alt} className="h-full w-full object-cover" />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-35"
                style={{
                  background:
                    "radial-gradient(700px 380px at 70% 30%, rgba(211,163,45,0.22), transparent 62%)",
                }}
              />
            </div>
          </div>

          <div className="p-5 lg:col-span-2">
            <h4 className="text-sm font-semibold text-white/90">Penjelasan Kegiatan</h4>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{active.purpose}</p>

            <div className="mt-5 rounded-2xl border border-white/12 bg-white/10 p-4">
              <p className="text-xs font-semibold text-white/80">Tujuan</p>
              <p className="mt-2 text-sm text-white/75">{active.purpose}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
