"use client";

import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Kabinet", href: "/kabinet" },
  { label: "Aspirasi", href: "/aspirasi" },
];

export default function FooterHimsi() {
  return (
    <footer className="relative w-full min-h-scren overflow-hidden">

      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            // background: `
            //   radial-gradient(900px 520px at 18% 55%, rgba(36,100,168,0.55), transparent 65%),
            //   radial-gradient(900px 520px at 82% 45%, rgba(211,163,45,0.55), transparent 70%),
            //   linear-gradient(
            //     90deg,
            //     rgba(10,28,56,0.95) 0%,
            //     rgba(20,40,80,0.65) 40%,
            //     rgba(243,179,58,0.35) 100%
            //   )
            // `,
                background: `
                    linear-gradient(180deg, #071227 0%, #071227 100%),
                    radial-gradient(900px 520px at 18% 55%, rgba(36,100,168,0.55), transparent 65%),
                    radial-gradient(900px 520px at 82% 45%, rgba(211,163,45,0.55), transparent 70%),
                    linear-gradient(
                        90deg,
                        rgba(10,28,56,0.95) 0%,
                        rgba(20,40,80,0.65) 40%,
                        rgba(243,179,58,0.35) 100%
                    )
                `,
            }}
        />

        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 2px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-7 lg:px-10">
          <div className="rounded-[28px] border border-white/25 bg-white/14 p-6 backdrop-blur-xl sm:p-8">
            <div className="grid gap-10 lg:grid-cols-12">
              {/* BRAND */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-full border border-white/35 bg-white/14 text-white font-semibold">
                    Si
                  </div>
                  <h3 className="text-2xl font-semibold text-white">HIMSI</h3>
                </div>

                <p className="mt-5 text-white/85">
                  Himpunan Mahasiswa Sistem Informasi <br />
                  Universitas Multi Data Palembang
                </p>
              </div>

              {/* QUICK LINKS */}
              <div className="lg:col-span-3">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="mt-4 space-y-3 text-white/85">
                  {quickLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="hover:text-[#F3B33A]">
                        ▸ {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CONTACT */}
              <div className="lg:col-span-2 text-white/85">
                <h4 className="text-lg font-semibold text-white">Contact</h4>
                <p className="mt-4">✉️ himsi@umdp.ac.id</p>
                <p className="mt-2">📞 0812-3456-7890</p>
              </div>

              {/* LOKASI */}
              <div className="lg:col-span-3 text-white/85">
                <h4 className="text-lg font-semibold text-white">Lokasi Kampus</h4>
                <p className="mt-4">
                  📍 Jl. Rajawali No.14 <br />
                  Palembang, Sumatera Selatan
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-white/70">
            © {new Date().getFullYear()} HIMSI UMDP. All rights reserved.
          </div>
        </div>
      </div>

    </footer>
  );
}
