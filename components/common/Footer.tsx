"use client";

import Link from "next/link";
import Image from "next/image";
// Import icon dari lucide-react
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

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
                <Image
                  src="/icon.png"
                  alt="Logo HIMSI"
                  width={42}
                  height={42}
                  priority
                  className="rounded-2xl"
                />
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
                    <Link href={l.href} className="flex items-center gap-2 hover:text-[#D3A32D] transition-colors">
                      <ChevronRight className="w-4 h-4" /> {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 text-muted-foreground">
              <h4 className="text-lg font-semibold text-foreground">Informasi</h4>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-foreground" />
                  <span>himsi@umdp.ac.id</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-foreground" />
                  <span>0812-3456-7890</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-foreground mt-1" />
                  <span>
                    Jl. Rajawali No.14 <br />
                    Palembang, Sumatera Selatan
                  </span>
                </div>
              </div>
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