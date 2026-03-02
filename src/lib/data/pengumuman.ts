export interface Pengumuman {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
}

export const pengumumanList: Pengumuman[] = [
  {
    id: "1",
    slug: "olimpiade-prestasi-nasional-2024",
    title: "Olimpiade Prestasi Nasional 2024",
    excerpt: "GoJuara mengadakan Kompetisi Olimpiade Prestasi Nasional untuk jenjang SD, SMP, dan SMA. Jangan lewatkan kesempatan untuk menunjukkan kemampuan terbaik kalian!",
    content: "content",
    image: "/images/blog-oprenas.jpg",
    category: "Pengumuman Pemenang",
    date: "4 Juli 2024"
  },
  {
    id: "2",
    slug: "pengumuman-pemenang-popsi2024",
    title: "Pengumuman Pemenang Pekan Olimpiade Pelajar Se Indonesia (POPSI)",
    excerpt: "Dengan penuh kegembiraan dan rasa bangga, kami umumkan pemenang POPSI untuk jenjang SD, SMP, dan SMA! Selamat kepada semua pemenang!",
    content: "content",
    image: "/images/blog-popsi.png",
    category: "Pengumuman Pemenang",
    date: "3 Oktober 2024"
  },
  {
    id: "3",
    slug: "pengumuman-pemenang-international-digital-literacy-competition-2024",
    title: "Pengumuman Pemenang International Digital Literacy Competition 2024",
    excerpt: "Kompetisi literasi digital tingkat internasional telah usai. Inilah pemenang-pemenang yang telah menunjukkan kemampuan luar biasa dalam literasi digital!",
    content: "content",
    image: "/images/blog-digital.jpg",
    category: "Pengumuman Pemenang",
    date: "5 Mei 2024"
  },
  {
    id: "4",
    slug: "pengumuman-pemenang-ramadhan-islamic-character-competition-2025",
    title: "Pengumuman Pemenang Ramadhan Islamic Character Competition 2025",
    excerpt: "Semarakkan Bulan Ramadhan dengan kompetisi poster dan menggambar. Berikut adalah pemenang-pemenang kompetisi Islamic Character Competition 2025!",
    content: "content",
    image: "/images/blog-ricc.png",
    category: "Pengumuman Pemenang",
    date: "13 Maret 2025"
  },
  {
    id: "5",
    slug: "pengumuman-pemenang-olimpiade-guru-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Guru Inspiratif 2024",
    excerpt: "Apresiasi kepada para guru inspiratif di seluruh Indonesia. Berikut adalah pemenang Olimpiade Guru Inspiratif 2024!",
    content: "content",
    image: "/images/blog-guru.jpg",
    category: "Pengumuman Pemenang",
    date: "4 Desember 2024"
  },
  {
    id: "6",
    slug: "pengumuman-pemenang-olimpiade-mahasiswa-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Mahasiswa Inspiratif 2024",
    excerpt: "Penghargaan kepada para mahasiswa inspiratif yang telah menunjukkan prestasi gemilang. Selamat kepada para pemenang!",
    content: "content",
    image: "/images/blog-guru-mahasiswa.png",
    category: "Pengumuman Pemenang",
    date: "15 Januari 2025"
  },
  {
    id: "7",
    slug: "pengumuman-pemenang-olimpiade-pelajar-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Pelajar Inspiratif 2024",
    excerpt: "Selamat kepada para pelajar inspiratif yang telah menorehkan prestasi membanggakan dalam Olimpiade Pelajar Inspiratif 2024!",
    content: "content",
    image: "/images/blog-guru-pelajar.png",
    category: "Pengumuman Pemenang",
    date: "15 Januari 2025"
  }
];

export function getPengumumanBySlug(slug: string): Pengumuman | undefined {
  return pengumumanList.find(item => item.slug === slug);
}
