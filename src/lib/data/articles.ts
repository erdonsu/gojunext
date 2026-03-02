export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "sangjuara-kini-menjadi-gojuara",
    title: "SangJuara kini menjadi GoJuara",
    excerpt: "Di dunia kompetisi, setiap langkah perubahan memiliki arti tersendiri. Perjalanan dari menjadi sangjuara hingga gojuara adalah sebuah proses yang tidak hanya mengubah gelar, tetapi juga mencerminkan transformasi yang mendalam menuju kesuksesan yang lebih besar.",
    content: "content",
    image: "/images/blog-transformasi.png",
    category: "Artikel Go Juara",
    date: "14 Maret 2024",
    author: "admin"
  },
  {
    id: "2",
    slug: "6-langkah-jika-anda-di-bully",
    title: "6 Langkah Jika Anda di Bully",
    excerpt: "Bullying adalah perilaku agresif yang tidak diinginkan yang melibatkan ketidakseimbangan kekuasaan. Artikel ini membahas langkah-langkah penting yang harus diambil jika Anda mengalami bullying.",
    content: "content",
    image: "/images/blog-digital.jpg",
    category: "Artikel Go Juara",
    date: "20 Mei 2024",
    author: "admin"
  },
  {
    id: "3",
    slug: "8-langkah-jika-anda-melihat-bullying",
    title: "8 Langkah Jika Anda Melihat Bullying",
    excerpt: "Anda bukan hanya sekadar penonton saat melihat bullying terjadi. Sebagai saksi, Anda memiliki peran penting dalam menghentikan bullying dan membantu korban.",
    content: "content",
    image: "/images/blog-digital.jpg",
    category: "Artikel Go Juara",
    date: "21 Mei 2024",
    author: "admin"
  },
  {
    id: "4",
    slug: "persiapan-optimal-menghadapi-ujian-sekolah",
    title: "Persiapan Optimal Menghadapi Ujian Sekolah",
    excerpt: "Ujian sekolah adalah momen penting yang memerlukan persiapan yang matang. Dengan strategi yang tepat, Anda dapat menghadapi ujian dengan percaya diri dan meraih hasil terbaik.",
    content: "content",
    image: "/images/blog-oprenas.jpg",
    category: "Artikel Go Juara",
    date: "10 Juni 2024",
    author: "admin"
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(article => article.category === category);
}
