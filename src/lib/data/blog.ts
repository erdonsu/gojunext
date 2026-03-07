export interface BlogPost {
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

export const blogList: BlogPost[] = [
  {
    id: "1",
    slug: "olimpiade-prestasi-nasional-2024",
    title: "Olimpiade Prestasi Nasional 2024",
    excerpt: "GoJuara mengadakan Kompetisi Olimpiade Prestasi Nasional untuk jenjang SD, SMP, dan SMA. Jangan lewatkan kesempatan untuk menunjukkan kemampuan terbaik kalian!",
    content: "Dengan bangga kami mengumumkan bahwa GoJuara kembali menyelenggarakan Olimpiade Prestasi Nasional di tahun 2024. Ajang bergengsi ini dirancang khusus untuk memfasilitasi pelajar dari tingkat SD, SMP, hingga SMA/Sederajat di seluruh Indonesia dalam mengukur dan mengembangkan kemampuan akademik mereka.\n\nDalam pelaksanaan tahun ini, kami menghadirkan berbagai bidang mata pelajaran yang lebih variatif, mulai dari Matematika, Sains, Bahasa Inggris, hingga Literasi Digital. Harapannya, setiap siswa dapat menemukan wadah yang tepat untuk bersinar sesuai dengan minat dan bakat masing-masing.\n\nKami mengundang seluruh sekolah dan siswa/i untuk berpartisipasi aktif dalam kegiatan ini. Persiapkan diri kalian sebaik mungkin, jadikan kompetisi ini sebagai batu loncatan untuk mencapai prestasi yang lebih tinggi. Pendaftaran akan dibuka mulai bulan depan melalui portal resmi GoJuara.",
    image: "/images/blog-oprenas.jpg",
    category: "Pengumuman Pemenang",
    date: "4 Juli 2024",
    author: "Tim Redaksi GoJuara"
  },
  {
    id: "2",
    slug: "pengumuman-pemenang-popsi2024",
    title: "Pengumuman Pemenang Pekan Olimpiade Pelajar Se Indonesia (POPSI)",
    excerpt: "Dengan penuh kegembiraan dan rasa bangga, kami umumkan pemenang POPSI untuk jenjang SD, SMP, dan SMA! Selamat kepada semua pemenang!",
    content: "Pekan Olimpiade Pelajar Se-Indonesia (POPSI) 2024 telah berakhir dengan sukses yang luar biasa. Ribuan pelajar dari Sabang sampai Merauke telah berpartisipasi dan menunjukkan dedikasi serta semangat juang yang tinggi dalam berbagai cabang kompetisi yang kami selenggarakan.\n\nSetelah melalui proses seleksi dan penilaian yang ketat dari dewan juri, hari ini kami resmi mengumumkan nama-nama peserta yang berhasil meraih medali Emas, Perak, dan Perunggu. Kami mengucapkan selamat yang sebesar-besarnya kepada para pemenang yang telah menorehkan prestasi membanggakan.\n\nBagi peserta yang belum berhasil membawa pulang medali, jangan pernah patah semangat. Jadikan pengalaman ini sebagai motivasi untuk terus belajar dan mencoba lagi di kesempatan berikutnya. Teruslah berkarya, karena perjalanan menuju kesuksesan masih panjang!",
    image: "/images/blog-popsi.png",
    category: "Pengumuman Pemenang",
    date: "3 Oktober 2024",
    author: "Panitia POPSI 2024"
  },
  {
    id: "3",
    slug: "pengumuman-pemenang-international-digital-literacy-competition-2024",
    title: "Pengumuman Pemenang International Digital Literacy Competition 2024",
    excerpt: "Kompetisi literasi digital tingkat internasional telah usai. Inilah pemenang-pemenang yang telah menunjukkan kemampuan luar biasa dalam literasi digital!",
    content: "Dunia digital berkembang dengan sangat pesat, dan kemampuan literasi digital menjadi salah satu keterampilan paling esensial di abad ke-21. International Digital Literacy Competition 2024 hadir sebagai respons terhadap kebutuhan tersebut, menantang para pemuda dari berbagai negara untuk unjuk gigi dalam pemahaman dan penerapan teknologi.\n\nAntusiasme peserta tahun ini sangat di luar dugaan. Kami menerima banyak sekali karya dan partisipasi luar biasa yang menunjukkan kedalaman analitis serta kreativitas dalam memanfaatkan perangkat digital untuk memecahkan masalah sehari-hari. Mulai dari pembuatan esai digital, video edukatif, hingga prototipe aplikasi sederhana.\n\nPara pemenang tahun ini dinilai berhasil memadukan inovasi teknologi dengan pemikiran kritis yang tajam. Kami berterima kasih kepada semua peserta yang telah berkontribusi, serta kepada dewan juri internasional yang telah meluangkan waktu mereka.",
    image: "/images/blog-digital.jpg",
    category: "Pengumuman Pemenang",
    date: "5 Mei 2024",
    author: "Tim Global GoJuara"
  },
  {
    id: "4",
    slug: "pengumuman-pemenang-ramadhan-islamic-character-competition-2025",
    title: "Pengumuman Pemenang Ramadhan Islamic Character Competition 2025",
    excerpt: "Semarakkan Bulan Ramadhan dengan kompetisi poster dan menggambar. Berikut adalah pemenang-pemenang kompetisi Islamic Character Competition 2025!",
    content: "Bulan Ramadhan adalah momen yang penuh keberkahan dan sangat tepat untuk menumbuhkan karakter Islami melalui kegiatan-kegiatan positif dan kreatif. Ramadhan Islamic Character Competition 2025 sukses menjadi ajang bagi ratusan pelajar untuk mengekspresikan nilai-nilai keagamaan melalui karya seni visual.\n\nKompetisi lomba poster dan menggambar bertema Islami ini telah menelurkan banyak karya indah yang bukan hanya memanjakan mata, tapi juga sarat akan pesan moral dan hikmah. Para peserta berhasil menerjemahkan tema Ramadhan ke dalam goresan warna yang inspiratif.\n\nSelamat kepada para pemenang! Semoga piala dan penghargaan yang didapatkan bisa memacu semangat kalian untuk terus berkarya dan menebarkan kebaikan melalui bakat seni yang kalian miliki.",
    image: "/images/blog-ricc.png",
    category: "Pengumuman Pemenang",
    date: "13 Maret 2025",
    author: "Panitia RICC"
  },
  {
    id: "5",
    slug: "pengumuman-pemenang-olimpiade-guru-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Guru Inspiratif 2024",
    excerpt: "Apresiasi kepada para guru inspiratif di seluruh Indonesia. Berikut adalah pemenang Olimpiade Guru Inspiratif 2024!",
    content: "Guru adalah ujung tombak kemajuan pendidikan bangsa. Melalui ajang Olimpiade Guru Inspiratif 2024, GoJuara ingin memberikan panggung apresiasi tertinggi bagi para pendidik yang tak kenal lelah berinovasi di ruang kelas.\n\nKisah-kisah inspiratif dari peserta olimpiade ini telah membuka mata kita semua bahwa dedikasi seorang guru tidak pernah terbatas oleh dinding kelas dan jam pelajaran. Mereka menghadirkan metode mengajar yang kreatif, adaptif terhadap teknologi, dan sukses membangun karakter siswanya di tengah berbagai keterbatasan.\n\nKami mengapresiasi setiap guru yang telah berpartisipasi dan selamat kepada pemenang yang inovasinya dinilai paling berdampak. Teruslah menjadi pelita di tengah kegelapan, wahai pahlawan tanpa tanda jasa!",
    image: "/images/blog-guru.jpg",
    category: "Pengumuman Pemenang",
    date: "4 Desember 2024",
    author: "Tim Redaksi GoJuara"
  },
  {
    id: "6",
    slug: "pengumuman-pemenang-olimpiade-mahasiswa-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Mahasiswa Inspiratif 2024",
    excerpt: "Penghargaan kepada para mahasiswa inspiratif yang telah menunjukkan prestasi gemilang. Selamat kepada para pemenang!",
    content: "Mahasiswa adalah agen perubahan sejati, tulang punggung pergerakan intelektual dan sosial. Olimpiade Mahasiswa Inspiratif 2024 menjadi bukti bahwa generasi muda kita sarat akan kepedulian lingkungan, inovasi riset, dan dampak nyata di masyarakat.\n\nDari sekian banyak inisiatif sosial dan karya ilmiah yang dikirimkan, kami sungguh kagum melihat berbagai inisiatif dari proyek energi terbarukan hingga startup pedesaan yang dirintis langsung oleh teman-teman mahasiswa.\n\nSelamat kepada para pemenang yang gagasan serta karyanya berhasil menjadi yang terbaik. Semoga apresiasi ini semakin mengokohkan langkah kalian untuk berkontribusi lebih besar bagi Ibu Pertiwi.",
    image: "/images/blog-guru-mahasiswa.png",
    category: "Pengumuman Pemenang",
    date: "15 Januari 2025",
    author: "Tim Redaksi GoJuara"
  },
  {
    id: "7",
    slug: "pengumuman-pemenang-olimpiade-pelajar-inspiratif-2024",
    title: "Pengumuman Pemenang Olimpiade Pelajar Inspiratif 2024",
    excerpt: "Selamat kepada para pelajar inspiratif yang telah menorehkan prestasi membanggakan dalam Olimpiade Pelajar Inspiratif 2024!",
    content: "Tidak hanya menguasai teori di kelas, pelajar abad 21 juga dituntut memiliki kreativitas dan kepekaan sosial. Olimpiade Pelajar Inspiratif 2024 mewadahi pelajar-pelajar tangguh yang tak cuma andal dalam akademik, tapi juga memiliki inisiatif brilian.\n\nMulai dari penemuan alat sederhana pendeteksi banjir hingga gerakan edukasi teman sebaya via media sosial, peserta olimpiade ini membuktikan bahwa usia bukan halangan untuk sebuah kontribusi besar.\n\nPuji syukur ajang ini berjalan lancar. Selamat kepada para pemenang. Jangan berhenti di sini; terus gali terus potensi diri kalian karena kalian adalah pemegang estafet kepemimpinan bangsa!",
    image: "/images/blog-guru-pelajar.png",
    category: "Pengumuman Pemenang",
    date: "15 Januari 2025",
    author: "Tim Redaksi GoJuara"
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogList.find(item => item.slug === slug);
}
