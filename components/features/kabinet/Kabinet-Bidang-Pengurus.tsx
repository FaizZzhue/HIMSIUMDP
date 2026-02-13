"use client";

import { useMemo, useRef, useState } from "react";
import BidangKabinetSection from "@/components/features/kabinet/Bidang-Kabinet-Section";
import PengurusKabinetSection from "@/components/features/kabinet/Pengurus-Kabinet-Section";

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
  id: "bph" | "psdm" | "litbang" | "sosial" | "kominfo";
  name: "BPH" | "PSDM" | "Litbang IT" | "Sosial" | "Kominfo";
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
  { 
    name: "Muhammad Akbar", 
    role: "Ketua",
    avatar: "/images/pengurus/bph/akbar.png"
  },
  { 
    name: "Tria Nanda Mughny", 
    role: "Wakil Ketua" ,
    avatar: "/images/pengurus/bph/tria.png"
  },
  { 
    name: "Putri Fathonah", 
    role: "Sekretaris 1" ,
    avatar: "/images/pengurus/bph/puput.png"
  },
  { 
    name: "Gledys Apriliana", 
    role: "Sekretaris 2" ,
    avatar: "/images/pengurus/bph/gladys.png"
  },
  { 
    name: "Marselyna Fitri M.", 
    role: "Bendahara 1" ,
    avatar: "/images/pengurus/bph/marsel.png"
  },
  { 
    name: "Alya Putri Rizaldy ", 
    role: "Bendahara 2" ,
    avatar: "/images/pengurus/bph/alya.png"
  },
];

const BIDANG: BidangDetail[] = [
  {
    id: "psdm",
    name: "PSDM",
    logo: "/images/bidang/psdm.png",
    desc: "Mengembangkan sumber daya anggota, membangun budaya organisasi, serta mengelola program pengembangan internal dan eksternal.",
    leaders: [
      {
        name: "Wasilah Maulia",
        role: "Kepala Bidang PSDM",
        avatar: "/images/pengurus/psdm/sila.png"
      },
      { 
        name: "Achmad Syamiri", 
        role: "Sekretaris Bidang PSDM",
        avatar: "/images/pengurus/psdm/syam.png"
      },
      { 
        name: "Olivia", 
        role: "Koordinator Eksternal",
        avatar: "/images/pengurus/psdm/oliv.png"
      },
      { 
        name: "Aulia Syalsabila R.", 
        role: "Koordinator Internal",
        avatar: "/images/pengurus/psdm/aca.png"
      },
    ],
    divisions: [
      {
        name: "Eksternal",
        members: [
          { name: "Aprillyani Rokky", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/april.png" 
          },
          { name: "Yuan Ramatullah", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/yuan.png" 
          },
          { name: "Rika Rahmawati", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/rika.png" 
          },
          { name: "Agus Firman", 
            role: "Staff Eksternal", 
            avatar: "/images/pengurus/psdm/agus.png" 
          },
        ],
      },
      {
        name: "Internal",
        members: [
          { name: "Joy Syukur T. B. D.", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/joy.png" 
          },
          { name: "M. Doni Pranata", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/doni.png" 
          },
          { name: "Nabila Salwa Z.", 
            role: "Staff Internal", 
            avatar: "/images/pengurus/psdm/salwa.png" 
          },
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
      { 
        name: "Adit Jansa", 
        role: "Kepala Bidang Litbang IT",
        avatar: "/images/pengurus/litbang/adit.png" 
      },
      { 
        name: "Achmad Faiz Yudha Ramadhan", 
        role: "Sekretaris Bidang Litbang IT",
        avatar: "/images/pengurus/litbang/faiz.png" 
      },
      { 
        name: "M. Rifqan Zalbina", 
        role: "Koordinator Desain Interaktif dan Rekayasa Web Aplikasi",
        avatar: "/images/pengurus/litbang/rifqan.png" 
      },
      { 
        name: "Ariadne Clarissa D. O.", 
        role: "Koordinator Pemberdayaan dan Perkembangan Teknologi",
        avatar: "/images/pengurus/litbang/risa.png" 
      },
    ],
    divisions: [
      {
        name: "Pemberdayaan & Perkembangan Teknologi",
        members: [
          { 
            name: "Erika", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/erika.png" 
          },
          { 
            name: "Ardelia Lona D.", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/ardelia.png" 
          },
          { 
            name: "Wahyu Putra Satrio", 
            role: "Staff Pemberdayaan dan Perkembangan Teknologi",
            avatar: "/images/pengurus/litbang/wahyu.png" 
          },
        ],
      },
      {
        name: "Desain Interaktif dan Rekayasa Web Aplikasi",
        members: [
          { 
            name: "Citra Fadilah H.", 
            role: "Staff Desain Interaktif dan Rekayasa Web Aplikasi",
            avatar: "/images/pengurus/litbang/citra.png" 
          },
          { 
            name: "Angelica Izabella", 
            role: "Staff Desain Interaktif dan Rekayasa Web Aplikasi",
            avatar: "/images/pengurus/litbang/angel.png" 
          },
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
      { 
        name: "Muhammad Tegar R.", 
        role: "Kepala Bidang Sosial",
        avatar: "/images/pengurus/sosial/tegar.png"
      },
      { 
        name: "Inaya Yeltama", 
        role: "Sekretaris Bidang Sosial",
        avatar: "/images/pengurus/sosial/naya.png"
      },
      { 
        name: "Muhammad Nasrudin", 
        role: "Koordinator Sosial Kemasyarakatan",
        avatar: "/images/pengurus/sosial/nasrudin.png"
      },
      { 
        name: "Nabila Syahwalrani", 
        role: "Koordinator Dana Usaha",
        avatar: "/images/pengurus/sosial/bila.png"
      },
      { 
        name: "M. Ilham Bintang", 
        role: "Koordinator Kolaborasi dan Kemitraan Sosial",
        avatar: "/images/pengurus/sosial/ilham.png"
      },
    ],
    divisions: [
      {
        name: "Sosial Kemasyarakatan",
        members: [
          { 
            name: "Fira Ramaita",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/fira.png"
          },
          { 
            name: "Cindy Aulia",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/cindy.png"
          },
          { 
            name: "Muhammad Adhe Fathan",
            role: "Staff Sosial Kemasyarakatan",
            avatar: "/images/pengurus/sosial/fathan.png"
          },
        ],
      },
      {
        name: "Dana Usaha",
        members: [
          { 
            name: "Aqila Nike Indriani", 
            role: "Staff Dana Usaha",
            avatar: "/images/pengurus/sosial/qila.png"
          },
          { 
            name: "Siti Chairunisah Suyta", 
            role: "Staff Dana Usaha",
            avatar: "/images/pengurus/sosial/nisa.png"
          },
        ],
      },
      {
        name: "Kolaborasi & Kemitraan Sosial",
        members: [
          { 
            name: "Sri Ayu Agustini", 
            role: "Staff Kolaborasi dan Kemitraan Sosial",
            avatar: "/images/pengurus/sosial/sri.png"
          },
          { 
            name: "Muhammad Arsya P.", 
            role: "Staff Kolaborasi dan Kemitraan Sosial",
            avatar: "/images/pengurus/sosial/arsya.png"
          },
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
      { 
        name: "Abiyyu Al Thoriq Z.", 
        role: "Kepala Bidang Kominfo",
        avatar: "/images/pengurus/kominfo/abi.png"
      },
      { 
        name: "Balqis Mutmainnah T.", 
        role: "Sekretaris Bidang Kominfo",
        avatar: "/images/pengurus/kominfo/balqis.png"
      },
      { 
        name: "Mutiara Astri", 
        role: "Koordinator Dokumentasi",
        avatar: "/images/pengurus/kominfo/astri.png"
      },
      { 
        name: "Muthia Syakirah", 
        role: "Koordinator Kreatif",
        avatar: "/images/pengurus/kominfo/mutia.png"
      },
      { 
        name: "M. Frendi R.", 
        role: "Koordinator Publikasi",
        avatar: "/images/pengurus/kominfo/frendi.png"
      },
    ],
    divisions: [
      {
        name: "Dokumentasi",
        members: [
          { 
            name: "Athallah Zaki C. A.", 
            role: "Staff Dokumentasi",
            avatar: "/images/pengurus/kominfo/ata.png"
          },
          { 
            name: "Sherafli Rusli", 
            role: "Staff Dokumentasi",
            avatar: "/images/pengurus/kominfo/kipli.png"
          },
        ],
      },
      {
        name: "Kreatif",
        members: [
          { 
            name: "Rizky Apryandi T.", 
            role: "Staff Kreatif",
            avatar: "/images/pengurus/kominfo/mojo.png"
          },
          { 
            name: "Nada Salsabilah", 
            role: "Staff Kreatif",
            avatar: "/images/pengurus/kominfo/nada.png"
          },
        ],
      },
      {
        name: "Publikasi",
        members: [
          { 
            name: "Angelia Oktarini", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/angel.png"
          },
          { 
            name: "Taqiyya Safira S.", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/qiya.png"
          },
          { 
            name: "Mikhael Vito W.", 
            role: "Staff Publikasi",
            avatar: "/images/pengurus/kominfo/vito.png"
          },
        ],
      },
    ],
  },
];

export default function KabinetBidangPengurus() {
  const bidangRef = useRef<HTMLElement | null>(null);
  const anggotaRef = useRef<HTMLElement | null>(null);
  const [selectedId, setSelectedId] = useState<BidangDetail["id"]>("bph");
  const selectedBidang = useMemo(() => {
    if (selectedId === "bph") {
      return {
        id: "bph",
        name: "Badan Pengurus Harian",
        logo: "/images/logo/logo-himsi.png", 
        desc: "Badan Pengurus Harian yang mengoordinasikan seluruh jalannya organisasi.",
        leaders: BPH_DATA.map(person => ({
          name: person.name,
          role: person.role,
          avatar: person.avatar
        })),
        divisions: []
      } as unknown as BidangDetail;
    }
    return BIDANG.find((b) => b.id === selectedId) ?? null;
  }, [selectedId]);

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
