"use client";

import { Linkedin, Mail, Instagram, Github, ArrowRight } from "lucide-react";

const cards = [
  { 
    title: "Linkedin", 
    value: "HIMSI MDP", 
    icon: <Linkedin className="w-8 h-8" />, 
    href: "https://www.linkedin.com/company/himpunan-mahasiswa-sistem-informasi-universitas-multi-data-palembang/", 
    tint: "from-blue-600/20",
    iconColor: "text-blue-600"
  },
  { 
    title: "Email", 
    value: "himsi@mhs.mdp.ac.id", 
    icon: <Mail className="w-8 h-8" />, 
    href: "mailto:himsi@mhs.mdp.ac.id", 
    tint: "from-sky-500/15",
    iconColor: "text-sky-500"
  },
  { 
    title: "Instagram", 
    value: "@himsi.umdp", 
    icon: <Instagram className="w-8 h-8" />, 
    href: "https://www.instagram.com/himsi.umdp/", 
    tint: "from-pink-500/15",
    iconColor: "text-pink-500"
  },
  { 
    title: "Github", 
    value: "Himsi-UMDP", 
    icon: <Github className="w-8 h-8" />, 
    href: "https://github.com/Himsi-UMDP", 
    tint: "from-slate-800/20",
    iconColor: "text-slate-800" 
  },
];

export default function ContactSocialSection() {
  return (
    <section className="relative w-full overflow-hidden min-h-[80vh] flex items-center pt-16 pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(36,100,168,0.1) 0%, rgba(245,247,252,1) 50%, rgba(211,163,45,0.08) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#2464A8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[#0A3763] sm:text-5xl">
            Kontak & <span className="text-[#D3A32D]">Media Sosial</span>
          </h2>
          <div className="mt-4 h-1.5 w-24 bg-[#D3A32D] mx-auto rounded-full opacity-80" />
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#2464A8]/10 to-[#D3A32D]/10 rounded-[45px] blur-xl" />
          <div className="relative rounded-[40px] border border-white/60 bg-white/40 p-8 backdrop-blur-2xl shadow-2xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card relative flex flex-col items-center justify-between overflow-hidden rounded-[28px] border border-white/80 bg-white/40 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white/60"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.tint} to-transparent opacity-0 transition-opacity group-hover/card:opacity-100`} />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 group-hover/card:scale-110 group-hover/card:shadow-md ${c.iconColor}`}>
                      {c.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-[#0A3763]">{c.title}</h3>
                    <p className="mt-2 text-sm font-medium text-slate-600 break-all">
                      {c.value}
                    </p>
                  </div>

                  <div className="relative z-10 mt-8 flex w-full justify-end">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2464A8]/20 bg-white/50 text-[#2464A8] transition-all group-hover/card:bg-[#2464A8] group-hover/card:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}