"use client";

import { useMemo, useRef, useState } from "react";
import BidangKabinetSection from "@/components/features/kabinet/Bidang-Kabinet-Section";
import PengurusKabinetSection from "@/components/features/kabinet/Pengurus-Kabinet-Section";

/* =============================
   TYPES + DATA (1 tempat)
   ============================= */

export type Person = {
  name: string;
  role: string;
  avatar?: string;
  quote?: string;
};

export type Division = {
  name: string;
  members: Person[];
};

export type BidangDetail = {
  id: "psdm" | "litbang" | "sosial" | "kominfo";
  name: "PSDM" | "Litbang IT" | "Sosial" | "Kominfo";
  logo: string;
  desc: string;
  leaders: Person[];
  divisions: Division[];
};

export type BPH = {
  name: string;
  role:
    | "Ketua"
    | "Wakil Ketua"
    | "Sekretaris 1"
    | "Sekretaris 2"
    | "Bendahara 1"
    | "Bendahara 2";
  avatar?: string;
};

const BPH_DATA: BPH[] = [
  { name: "Nama Ketua", role: "Ketua" },
  { name: "Nama Wakil", role: "Wakil Ketua" },
  { name: "Nama Sekre 1", role: "Sekretaris 1" },
  { name: "Nama Sekre 2", role: "Sekretaris 2" },
  { name: "Nama Bend 1", role: "Bendahara 1" },
  { name: "Nama Bend 2", role: "Bendahara 2" },
];

const BIDANG: BidangDetail[] = [
  {
    id: "psdm",
    name: "PSDM",
    logo: "/images/bidang/psdm.png",
    desc: "Mengembangkan sumber daya anggota, membangun budaya organisasi, serta mengelola program pengembangan internal dan eksternal.",
    leaders: [
      {
        name: "Nama Kepala PSDM",
        role: "Kepala Bidang PSDM",
        quote: "“Bertumbuh bersama, bergerak berdampak.”",
      },
      { name: "Nama Wakil PSDM", role: "Wakil Kepala Bidang PSDM" },
    ],
    divisions: [
      {
        name: "Internal",
        members: [
          { name: "Anggota Internal 1", role: "Staff" },
          { name: "Anggota Internal 2", role: "Staff" },
          { name: "Anggota Internal 3", role: "Staff" },
        ],
      },
      {
        name: "Eksternal",
        members: [
          { name: "Anggota Eksternal 1", role: "Staff" },
          { name: "Anggota Eksternal 2", role: "Staff" },
          { name: "Anggota Eksternal 3", role: "Staff" },
        ],
      },
    ],
  },
  {
    id: "litbang",
    name: "Litbang IT",
    logo: "/images/bidang/litbang.png",
    desc: "Fokus pada riset, pengembangan, dan inovasi teknologi untuk mendukung kebutuhan organisasi dan pengembangan skill anggota.",
    leaders: [
      { name: "Nama Kepala Litbang", role: "Kepala Bidang Litbang IT" },
      { name: "Nama Wakil Litbang", role: "Wakil Kepala Bidang Litbang IT" },
    ],
    divisions: [
      {
        name: "Pemberdayaan & Perkembangan Teknologi",
        members: [
          { name: "Anggota PPT 1", role: "Staff" },
          { name: "Anggota PPT 2", role: "Staff" },
        ],
      },
      {
        name: "Desain Interaktif & Rekayasa Web Aplikasi",
        members: [
          { name: "Anggota DWR 1", role: "Staff" },
          { name: "Anggota DWR 2", role: "Staff" },
        ],
      },
    ],
  },
  {
    id: "sosial",
    name: "Sosial",
    logo: "/images/bidang/sosial.png",
    desc: "Menjalankan program sosial, pemberdayaan, serta kolaborasi yang berdampak bagi mahasiswa dan masyarakat.",
    leaders: [
      { name: "Nama Kepala Sosial", role: "Kepala Bidang Sosial" },
      { name: "Nama Wakil Sosial", role: "Wakil Kepala Bidang Sosial" },
    ],
    divisions: [
      {
        name: "Sosial Kemasyarakatan",
        members: [
          { name: "Anggota Soskem 1", role: "Staff" },
          { name: "Anggota Soskem 2", role: "Staff" },
        ],
      },
      {
        name: "Dana Usaha",
        members: [
          { name: "Anggota Danus 1", role: "Staff" },
          { name: "Anggota Danus 2", role: "Staff" },
        ],
      },
      {
        name: "Kolaborasi & Kemitraan Sosial",
        members: [
          { name: "Anggota Kolab 1", role: "Staff" },
          { name: "Anggota Kolab 2", role: "Staff" },
        ],
      },
    ],
  },
  {
    id: "kominfo",
    name: "Kominfo",
    logo: "/images/bidang/kominfo.png",
    desc: "Mengelola komunikasi informasi, publikasi, dokumentasi, dan konten kreatif untuk meningkatkan citra HIMSI.",
    leaders: [
      { name: "Nama Kepala Kominfo", role: "Kepala Bidang Kominfo" },
      { name: "Nama Wakil Kominfo", role: "Wakil Kepala Bidang Kominfo" },
    ],
    divisions: [
      {
        name: "Dokumentasi",
        members: [
          { name: "Anggota Dok 1", role: "Staff" },
          { name: "Anggota Dok 2", role: "Staff" },
        ],
      },
      {
        name: "Kreatif",
        members: [
          { name: "Anggota Kreatif 1", role: "Staff" },
          { name: "Anggota Kreatif 2", role: "Staff" },
        ],
      },
      {
        name: "Publikasi",
        members: [
          { name: "Anggota Pub 1", role: "Staff" },
          { name: "Anggota Pub 2", role: "Staff" },
        ],
      },
    ],
  },
];

export default function KabinetBidangPengurus() {
  const bidangRef = useRef<HTMLElement | null>(null);
  const anggotaRef = useRef<HTMLElement | null>(null);

  const [selectedId, setSelectedId] = useState<BidangDetail["id"] | null>(null);

  const selectedBidang = useMemo(
    () => BIDANG.find((b) => b.id === selectedId) ?? null,
    [selectedId]
  );

  const goToAnggota = (id: BidangDetail["id"]) => {
    setSelectedId(id);
    requestAnimationFrame(() => {
      anggotaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const backToBidang = () => {
    bidangRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <BidangKabinetSection
        sectionRef={bidangRef}
        bph={BPH_DATA}
        bidangList={BIDANG}
        onClickAnggota={goToAnggota}
      />

      <PengurusKabinetSection
        sectionRef={anggotaRef}
        bidang={selectedBidang}
        onBackToBidang={backToBidang}
        himsiLogo="/images/logo/logo-himsi.png"
        kabinetLogo="/images/logo/logo-kabinet.png"
      />
    </>
  );
}
