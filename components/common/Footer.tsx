"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Tentang", href: "/about" },
  { label: "Kabinet", href: "/kabinet" },
  { label: "Aspirasi", href: "/aspirasi" },
];

export default function FooterHimsi() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="relative mx-auto max-w-[1240px] px-5 py-12 sm:px-7 lg:px-10">
        <div className="glass-card rounded-[28px] p-6 sm:p-8 ring-1 ring-black/5 dark:ring-white/10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-black/10 bg-white/60 text-foreground font-semibold dark:border-white/25 dark:bg-white/10">
                  Si
                </div>
                <h3 className="text-2xl font-semibold text-foreground">HIMSI</h3>
              </div>

              <p className="mt-5 text-muted-foreground">
                Himpunan Mahasiswa Sistem Informasi <br />
                Universitas Multi Data Palembang
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-lg font-semibold text-foreground">Menu</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-[#D3A32D]">
                      ▸ {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3 text-muted-foreground">
              <h4 className="text-lg font-semibold text-foreground">Informasi</h4>
              <p className="mt-4">✉️ himsi@umdp.ac.id</p>
              <p className="mt-2">📞 0812-3456-7890</p>
              <p className="mt-4">
                📍 Jl. Rajawali No.14 <br />
                Palembang, Sumatera Selatan
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} HIMSI UMDP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
