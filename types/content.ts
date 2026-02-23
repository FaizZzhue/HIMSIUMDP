import {
    Boxes,
    BriefcaseBusiness,
    CalendarDays,
    ClipboardList,
    Github,
    Instagram,
    Layers3,
    Linkedin,
    Mail,
    Users,
} from "lucide-react";

import type {
    AboutStat,
    BPI,
    BidangDetail,
    ContactCard,
    FaqItem,
    GalleryItem,
    Testimonial,
} from "./types";

const HOME_ABOUT_STATS: AboutStat[] = [
    { value: "51", label: "Anggota Aktif", Icon: Users },
    { value: "5", label: "Event Tahunan", Icon: CalendarDays },
    { value: "15", label: "Program Kerja", Icon: BriefcaseBusiness },
];

const HOME_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quoteTitle: "Menjadi Ketua HIMSI",
    quoteText:
        "Universitas Multi Data Palembang selama satu periode jadi salah satu pengalaman paling berkesan.",
    note: "Banyak hal yang saya pelajari, terutama tentang kepemimpinan dan teamwork.",
    name: "Muhammad Akbar",
    role: "Ketua Himpunan Mahasiswa Sistem Informasi",
    avatar: "/images/pengurus/bph/akbar.png",
  },
  {
    id: "t2",
    quoteTitle: "Keputusan yang tepat",
    quoteText:
      "Merupakan keputusan tepat bagi saya untuk bergabung dengan HIMSI. Tidak hanya mendapat relasi yang luas tetapi juga pengalaman baru yang menyenangkan.",
    note: "",
    name: "Wasilah ",
    role: "Kepala Bidang PSDM",
    avatar: "/images/pengurus/psdm/sila.png",
  },
  {
    id: "t3",
    quoteTitle: "Riset & inovasi",
    quoteText:
      "Di HIMSI UMDP, saya merasakan bagaimana riset dan inovasi berpadu dalam harmoni, menantang batas konvensional dan mengubah gagasan menjadi kenyataan.",
    note: "",
    name: "Adit Jans",
    role: "Kepala Bidang Litbang",
    avatar: "/images/pengurus/litbang/adit.png",
  },
  {
    id: "t4",
    quoteTitle: "As queen of leadership",
    quoteText:
      "Satu periode di HIMSI UMDP menjadi pengalaman paling berkesan yang membentuk cara saya memimpin, mengambil keputusan, dan menggerakkan tim.",
    note: "Saya belajar menjaga arah organisasi sambil tetap merangkul semua anggota.",
    name: "Tria Nanda Mughni",
    role: "Wakil Ketua Himpunan Mahasiswa Sistem Informasi",
    avatar: "/images/pengurus/bph/tria.png",
  },
  {
    id: "t5",
    quoteTitle: "Pengalaman Berharga",
    quoteText:
      "Bergabung dengan HIMSI adalah keputusan terbaik—saya mendapat relasi baru, pengalaman organisasi yang nyata, dan ruang untuk berkembang setiap harinya.",
    note: "Dari sini saya belajar disiplin, komunikasi, dan tanggung jawab dalam setiap tugas.",
    name: "Muhammad Tegar R",
    role: "Kepala Bidang Sosial",
    avatar: "/images/pengurus/sosial/tegar.png",
  },
];

const HOME_FAQS: FaqItem[] = [
  {
    q: "Gimana cara daftar HIMSI?",
    a: "Kamu bisa daftar saat Open Recruitment (Oprec) yang diumumkan di media sosial HIMSI UMDP. Isi formulir pendaftaran, selanjutnya ikuti seleksi yang ada.",
  },
  {
    q: "Apakah ada syarat semester?",
    a: "Umumnya terbuka untuk mahasiswa Sistem Informasi UMDP dari 2 - 4. Saat Oprec.",
  },
  {
    q: "Kegiatannya seberapa sering?",
    a: "Kegiatan rutin biasanya mingguan/bulanan sesuai program kerja divisi. Selain itu ada event tahunan seperti seminar, workshop, dan kegiatan sosial.",
  },
  {
    q: "Bisa ikut walau belum punya pengalaman?",
    a: "Bisa banget. Kamu akan dibimbing dari dasar, ikut pelatihan internal, dan belajar langsung lewat kepanitiaan & program kerja.",
  },
  {
    q: "Apa benefit jadi anggota?",
    a: "Relasi lebih luas, skill organisasi & teamwork, pengalaman event, peluang pelatihan/sertifikasi, dan portofolio untuk karir.",
  },
  {
    q: "Kontak admin siapa?",
    a: "Silakan hubungi admin HIMSI via Instagram resmi atau WhatsApp yang dicantumkan saat Open Recruitment.",
  },
];

const HOME_CONTACT_CARDS: ContactCard[] = [
  {
    title: "Linkedin",
    value: "HIMSI MDP",
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/himpunan-mahasiswa-sistem-informasi-universitas-multi-data-palembang/",
    tint: "from-blue-600/20",
    iconColor: "text-blue-600",
  },
  {
    title: "Email",
    value: "himsi@mhs.mdp.ac.id",
    Icon: Mail,
    href: "mailto:himsi@mhs.mdp.ac.id",
    tint: "from-sky-500/15",
    iconColor: "text-sky-500",
  },
  {
    title: "Instagram",
    value: "@himsi.umdp",
    Icon: Instagram,
    href: "https://www.instagram.com/himsi.umdp/",
    tint: "from-pink-500/15",
    iconColor: "text-pink-500",
  },
  {
    title: "Github",
    value: "Himsi-UMDP",
    Icon: Github,
    href: "https://github.com/Himsi-UMDP",
    tint: "from-slate-800/20",
    iconColor: "text-slate-800",
  },
];

const ABOUT_STATS: AboutStat[] = [
  { value: "50+", label: "Anggota Aktif", Icon: Users },
  { value: "4", label: "Bidang", Icon: Layers3 },
  { value: "10", label: "Divisi", Icon: Boxes },
  { value: "15+", label: "Program Kerja", Icon: ClipboardList },
];

const ABOUT_GALLERY: GalleryItem[] = [
  {
    src: "/images/dokumentasi/ldo.jpg",
    alt: "Kegiatan HIMSI 1",
    title: "Latihan Dasar Kepemimpinan & Organisasi (LDO)",
    proker: "Proker: PSDM",
    purpose: "Meningkatkan wawasan mahasiswa lewat pelatihan kepemimpinan dan organisasi.",
  },
  {
    src: "/images/dokumentasi/ksi.jpg",
    alt: "Kegiatan HIMSI 2",
    title: "Kampung Sistem Informasi (KSI)",
    proker: "Proker: Umum",
    purpose: "Meningkatan solidaritas dan kebersamaan antar mahasiswa Sistem Informasi.",
  },
  {
    src: "/images/dokumentasi/pkkmb.png",
    alt: "Kegiatan HIMSI 3",
    title: "Perkenalan Kehidupan Kampus Mahasiswa Baru (PKKMB)",
    proker: "Proker: Umum",
    purpose:
      "Memperkenalkan kehidupan kampus kepada mahasiswa baru terutama Mahasiswa Prodi Sistem Informasi.",
  },
  {
    src: "/images/dokumentasi/safari.jpg",
    alt: "Kegiatan HIMSI 4",
    title: "Safari Ormawa",
    proker: "",
    purpose:
      "Sharing & Evaluasi antar ormawa untuk meningkatkan sinergi dan kolaborasi di lingkungan kampus.",
  },
  {
    src: "/images/dokumentasi/lomba.jpeg",
    alt: "Kegiatan HIMSI 5",
    title: "Lomba & Kompetisi Antar Mahasiswa",
    proker: "",
    purpose:
      "Meningkatkan semangat persaingan dan keterampilan mahasiswa melalui berbagai lomba dan kompetisi.",
  },
  {
    src: "/images/dokumentasi/podcast.jpeg",
    alt: "Kegiatan HIMSI 6",
    title: "Kupas KSI",
    proker: "Proker: Kominfo",
    purpose:
      "Menyelenggarakan acara diskusi dan pembahasan topik-topik menarik dalam dunia sistem informasi.",
  },
];

const KABINET_BPI_DATA: BPI[] = [
  {
    name: "Muhammad Akbar",
    role: "Ketua",
    avatar: "/images/pengurus/bph/akbar.png",
  },
  {
    name: "Tria Nanda Mughny",
    role: "Wakil Ketua",
    avatar: "/images/pengurus/bph/tria.png",
  },
  {
    name: "Putri Fathonah",
    role: "Sekretaris 1",
    avatar: "/images/pengurus/bph/puput.png",
  },
  {
    name: "Gledys Apriliana",
    role: "Sekretaris 2",
    avatar: "/images/pengurus/bph/gladys.png",
  },
  {
    name: "Marselyna Fitri M.",
    role: "Bendahara 1",
    avatar: "/images/pengurus/bph/marsel.png",
  },
  {
    name: "Alya Putri Rizaldy ",
    role: "Bendahara 2",
    avatar: "/images/pengurus/bph/alya.png",
  },
];

const KABINET_BIDANG: BidangDetail[] = [
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
    workPrograms: [
      {
        title: "Latihan Dasar Kepemimpinan & Organisasi (LDO)",
        image: "/images/dokumentasi/ldo.jpg",
        description: "Pelatihan kepemimpinan dasar untuk membangun karakter, kedisiplinan, dan budaya organisasi anggota.",
      },
      {
        title: "Mentoring Internal Anggota",
        image: "/images/dokumentasi/ksi.jpg",
        description: "Program pendampingan rutin untuk membantu anggota baru beradaptasi dan berkembang dalam organisasi.",
      },
      {
        title: "Sharing Session Pengembangan Soft Skill",
        image: "/images/dokumentasi/podcast.jpeg",
        description: "Forum berbagi pengalaman terkait komunikasi, manajemen waktu, dan kerja tim.",
      },
      {
        title: "Pembinaan Kader dan Evaluasi Berkala",
        image: "/images/dokumentasi/safari.jpg",
        description: "Evaluasi perkembangan kader secara periodik agar kualitas SDM bidang terus meningkat.",
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
    workPrograms: [
      {
        title: "Workshop Pengembangan Web Aplikasi",
        image: "/images/dokumentasi/lomba.jpeg",
        description: "Pelatihan teknis pengembangan aplikasi web dari perancangan hingga implementasi.",
      },
      {
        title: "Kelas Desain Interaktif",
        image: "/images/dokumentasi/pkkmb.png",
        description: "Kelas praktik desain antarmuka dan pengalaman pengguna untuk meningkatkan kualitas produk digital.",
      },
      {
        title: "Riset dan Implementasi Teknologi Baru",
        image: "/images/dokumentasi/safari.jpg",
        description: "Eksplorasi teknologi terbaru dan penerapan hasil riset dalam proyek internal HIMSI.",
      },
      {
        title: "Pendampingan Lomba Teknologi",
        image: "/images/dokumentasi/lomba.jpeg",
        description: "Pendampingan persiapan tim lomba agar anggota siap berkompetisi di bidang teknologi.",
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
          // { 
          //   name: "Muhammad Arsya P.", 
          //   role: "Staff Kolaborasi dan Kemitraan Sosial",
          //   avatar: "/images/pengurus/sosial/arsya.png"
          // },
        ],
      },
    ],
    workPrograms: [
      {
        title: "Bakti Sosial Mahasiswa",
        image: "/images/dokumentasi/safari.jpg",
        description: "Kegiatan sosial untuk menumbuhkan kepedulian mahasiswa terhadap lingkungan sekitar.",
      },
      {
        title: "Program Donasi dan Dana Usaha",
        image: "/images/dokumentasi/ksi.jpg",
        description: "Penggalangan dana kreatif untuk mendukung program sosial berkelanjutan.",
      },
      {
        title: "Kolaborasi Pengabdian bersama Mitra Sosial",
        image: "/images/dokumentasi/pkkmb.png",
        description: "Kolaborasi dengan komunitas atau lembaga sosial untuk memperluas dampak kegiatan.",
      },
      {
        title: "Aksi Sosial untuk Masyarakat Sekitar",
        image: "/images/dokumentasi/ldo.jpg",
        description: "Program langsung ke masyarakat melalui edukasi, bantuan, dan kegiatan pemberdayaan.",
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
    workPrograms: [
      {
        title: "Kupas KSI",
        image: "/images/dokumentasi/podcast.jpeg",
        description: "Program diskusi interaktif yang membahas topik sistem informasi dan organisasi mahasiswa.",
      },
      {
        title: "Publikasi Konten Edukasi HIMSI",
        image: "/images/dokumentasi/pkkmb.png",
        description: "Produksi konten informatif untuk media sosial agar informasi himpunan tersampaikan jelas.",
      },
      {
        title: "Dokumentasi Kegiatan Internal & Eksternal",
        image: "/images/dokumentasi/ksi.jpg",
        description: "Pendokumentasian foto dan video seluruh kegiatan sebagai arsip dan materi publikasi.",
      },
      {
        title: "Kampanye Branding Digital HIMSI",
        image: "/images/dokumentasi/lomba.jpeg",
        description: "Strategi komunikasi digital untuk memperkuat identitas dan citra positif HIMSI.",
      },
    ],
  },
];

export const CONTENT = {
    home: {
        aboutStats: HOME_ABOUT_STATS,
        testimonials: HOME_TESTIMONIALS,
        faqs: HOME_FAQS,
        contactCards: HOME_CONTACT_CARDS,
    },
    about: {
        stats: ABOUT_STATS,
        gallery: ABOUT_GALLERY,
    },
    kabinet: {
        bpi: KABINET_BPI_DATA,
        bidang: KABINET_BIDANG,
    },
    aspirasi: {},
} as const;

export type Content = typeof CONTENT;
