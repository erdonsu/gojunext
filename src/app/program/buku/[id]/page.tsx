import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, ShoppingCart, ArrowLeft, BookOpen, Check, Share2, FileText, ShieldCheck, ChevronRight, Bookmark, Info } from "lucide-react";

// Data buku
const books = [
    {
        id: 1,
        title: "Pendidikan Karakter di Era Digital",
        author: "Prof. Dr. Susanto, MA",
        price: 98000,
        originalPrice: 125000,
        category: "Pendidikan",
        rating: 4.9,
        reviews: 128,
        badge: "Bestseller",
        badgeColor: "#0055b8",
        cover: "from-blue-100 to-blue-200",
        isbn: "978-602-1234-01-1",
        pages: 248,
        publisher: "Erlangga",
        publishedDate: "12 Agustus 2023",
        language: "Indonesia",
        weight: "350 gr",
        dimensions: "15 x 23 cm",
        description: `Buku ini secara komprehensif mengupas tantangan baru pendidikan karakter di tengah pusaran arus digitalisasi yang tak terbendung. Sebagai mantan Ketua KPAI, Prof. Susanto membagikan pengalaman nyatanya menangani berbagai kasus penyimpangan anak yang bermuara pada rapuhnya pondasi karakter sejak dari rumah dan sekolah. 
        
Penting bagi ekosistem pendidikan—baik guru maupun orang tua—memahami strategi khusus mengelola generasi *native digital* agar teknologi menjadi pendongkrak potensi, bukan perusak masa depan.`,
        features: [
            "Panduan praktis deteksi dini adiksi gawai pada anak",
            "Studi kasus nyata dari laporan KPAI selama 2017-2022",
            "Membangun literasi digital berbasis ketahanan keluarga",
            "Rekomendasi kebijakan untuk sekolah dan pendidik"
        ]
    },
    {
        id: 2,
        title: "Memahami Dunia Anak: Panduan untuk Orang Tua",
        author: "Prof. Dr. Susanto, MA",
        price: 89000,
        originalPrice: 110000,
        category: "Parenting",
        rating: 4.8,
        reviews: 95,
        badge: "Baru",
        badgeColor: "#f59e0b",
        cover: "from-amber-100 to-yellow-200",
        isbn: "978-602-1234-02-8",
        pages: 196,
        publisher: "Erlangga",
        publishedDate: "15 Oktober 2023",
        language: "Indonesia",
        weight: "300 gr",
        dimensions: "15 x 23 cm",
        description: `Mendidik anak tidak bisa lagi menggunakan pola "pokoknya kamu nurut". Panduan praktis ini akan membantu orang tua masuk ke dunia anak, memahami apa yang sebenarnya mereka pikirkan dan rasakan di balik setiap tingkah laku yang menguras emosi.`,
        features: [
            "Membedakan perilaku normal dan tanda bahaya psikologis",
            "Seni mendengarkan aktif agar anak mau bercerita",
            "Disiplin positif tanpa kekerasan dan amarah"
        ]
    },
    // Menambahkan entri mock lain secara garis besar agar ID nya tetap ada
    { id: 3, title: "Perlindungan Anak Indonesia: Teori dan Praktik", author: "Prof. Dr. Susanto, MA", price: 115000, originalPrice: 145000, category: "Hukum & Sosial", rating: 4.9, reviews: 76, badge: "Pilihan Editor", badgeColor: "#0055b8", cover: "from-emerald-100 to-teal-200", isbn: "978-602-1234-03-5", pages: 312, publisher: "Masmedia", publishedDate: "Januari 2023", language: "Indonesia", weight: "400 gr", dimensions: "15 x 23 cm", description: "Buku rujukan tentang sistem hukum perlindungan anak di Indonesia.", features: [] },
    { id: 4, title: "Guru Hebat, Murid Luar Biasa", author: "Prof. Dr. Susanto, MA", price: 79000, originalPrice: 99000, category: "Pendidikan", rating: 4.7, reviews: 63, badge: null, badgeColor: "", cover: "from-violet-100 to-purple-200", isbn: "978-602-1234-04-2", pages: 184, publisher: "Erlangga", publishedDate: "Maret 2022", language: "Indonesia", weight: "280 gr", dimensions: "15 x 23 cm", description: "Tips dan trik menjadi pendidik yang inspiratif dan dirindukan oleh peserta didik.", features: [] },
    { id: 5, title: "Masa Depan Pendidikan Nasional", author: "Prof. Dr. Susanto, MA", price: 105000, originalPrice: 130000, category: "Pendidikan", rating: 4.8, reviews: 52, badge: "Baru", badgeColor: "#f59e0b", cover: "from-rose-100 to-pink-200", isbn: "978-602-1234-05-9", pages: 276, publisher: "Masmedia", publishedDate: "November 2023", language: "Indonesia", weight: "360 gr", dimensions: "15 x 23 cm", description: "Kritik dan gagasan membangun tentang arah gerak roda pendidikan di Indonesia ke depan.", features: [] },
    { id: 6, title: "Psikologi Perkembangan Anak Modern", author: "Prof. Dr. Susanto, MA", price: 92000, originalPrice: 115000, category: "Psikologi", rating: 4.6, reviews: 41, badge: null, badgeColor: "", cover: "from-sky-100 to-cyan-200", isbn: "978-602-1234-06-6", pages: 224, publisher: "Erlangga", publishedDate: "Juli 2022", language: "Indonesia", weight: "320 gr", dimensions: "15 x 23 cm", description: "Memahami fase-fase psikologi anak yang tumbuh di lingkungan serba cepat.", features: [] }
];

function formatPrice(price: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(price);
}

function getDiscount(original: number, current: number) {
    return Math.round(((original - current) / original) * 100);
}

// Next.js 15+ dynamic route params is a Promise
type Props = {
    params: Promise<{ id: string }>;
};

// Next.js config uses output: "export", so we must specify all possible paths at build time.
export function generateStaticParams() {
    return books.map((book) => ({
        id: book.id.toString(),
    }));
}

export default async function ProductDetailPage({ params }: Props) {
    const resolvedParams = await params;
    const bookId = parseInt(resolvedParams.id, 10);
    const book = books.find((b) => b.id === bookId);

    if (!book) {
        notFound();
    }

    const discount = getDiscount(book.originalPrice, book.price);

    // Format description text to have paragraphs
    const paragraphs = book.description?.split('\n\n') || [];

    return (
        <div className="min-h-screen bg-gray-50 pt-28 pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <div className="mb-8">
                    <nav className="flex items-center text-sm font-medium text-gray-500">
                        <Link href="/" className="hover:text-[#0055b8] transition-colors">Home</Link>
                        <ChevronRight size={14} className="mx-2 text-gray-400" />
                        <Link href="/program/buku" className="hover:text-[#0055b8] transition-colors">Katalog Buku</Link>
                        <ChevronRight size={14} className="mx-2 text-gray-400" />
                        <span className="text-gray-900 truncate max-w-[200px] sm:max-w-none">{book.title}</span>
                    </nav>
                </div>

                {/* Main Product Layout */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="flex flex-col lg:flex-row">

                        {/* LEFT: Book visual */}
                        <div className="w-full lg:w-[45%] xl:w-[40%] p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100 bg-gray-50/50 flex flex-col items-center justify-center">

                            <div className="relative w-full max-w-[320px] mx-auto group perspective-1000">
                                {/* Soft shadow beneath */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/15 blur-xl rounded-full" />

                                {/* 3D Book representation */}
                                <div
                                    className={`relative z-10 w-full shadow-2xl rounded-r-2xl rounded-l-md bg-gradient-to-br ${book.cover} transition-transform duration-500 group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] group-hover:scale-[1.02]`}
                                    style={{ aspectRatio: "3/4", transformStyle: 'preserve-3d' }}
                                >
                                    {/* Spine detail */}
                                    <div className="absolute left-0 inset-y-0 w-3 sm:w-4 bg-black/10 rounded-l-md" />
                                    <div className="absolute left-3 sm:left-4 inset-y-0 w-px bg-white/30" />

                                    {/* Content inside cover */}
                                    {book.badge && (
                                        <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-md z-20"
                                            style={{ backgroundColor: book.badgeColor }}>
                                            {book.badge}
                                        </div>
                                    )}
                                    <div className="absolute top-5 left-8 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
                                        -{discount}%
                                    </div>
                                    <div className="absolute bottom-0 inset-x-0 h-24 rounded-br-2xl rounded-bl-md flex items-end px-6 pb-6 z-20"
                                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
                                        <p className="text-white text-sm font-bold opacity-90">{book.author}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Share button */}
                            <button className="mt-12 flex items-center justify-center gap-2 text-gray-500 hover:text-[#0055b8] text-sm font-semibold transition-colors">
                                <Share2 size={16} />
                                Bagikan Buku Ini
                            </button>
                        </div>

                        {/* RIGHT: Product Details */}
                        <div className="flex-1 p-8 lg:p-12">
                            <div className="inline-block text-[#0055b8] bg-blue-50 px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider mb-5">
                                {book.category}
                            </div>

                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                                {book.title}
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 mb-8 font-medium">Buku oleh <span className="text-gray-900">{book.author}</span></p>

                            {/* Ratings & Reviews */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
                                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1.5 rounded-full">
                                    <Star className="fill-yellow-400 text-yellow-400" size={16} />
                                    <span className="font-bold text-gray-900 text-sm">{book.rating}</span>
                                </div>
                                <span className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
                                    {book.reviews} Penilaian
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                <span className="flex items-center gap-1.5 text-sm text-emerald-600 font-bold bg-emerald-50 px-3 py-1.5 rounded-full">
                                    <ShieldCheck size={16} />
                                    Buku Original
                                </span>
                            </div>

                            {/* Price */}
                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                                <div>
                                    <p className="text-sm text-gray-500 font-semibold mb-2">Harga Beli</p>
                                    <div className="flex items-end gap-3">
                                        <span className="text-3xl sm:text-4xl font-extrabold text-[#0055b8]">
                                            {formatPrice(book.price)}
                                        </span>
                                        <span className="text-base sm:text-lg text-gray-400 font-medium line-through mb-1 sm:mb-1.5">
                                            {formatPrice(book.originalPrice)}
                                        </span>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-3 sm:min-w-[200px] w-full sm:w-auto">
                                    <Link
                                        href="/kontak"
                                        className="w-full flex items-center justify-center gap-2 bg-[#0055b8] hover:bg-[#004499] text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-blue-500/25 hover:-translate-y-0.5"
                                    >
                                        <ShoppingCart size={18} />
                                        Beli Sekarang
                                    </Link>
                                </div>
                            </div>

                            {/* Features Highlights */}
                            {book.features && book.features.length > 0 && (
                                <div className="mb-10">
                                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">Yang Akan Anda Dapatkan:</h3>
                                    <ul className="space-y-4">
                                        {book.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 sm:gap-4">
                                                <div className="mt-1 shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                                                    <Check size={14} className="text-emerald-600 font-bold" />
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm sm:text-base leading-relaxed">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>
                </div>

                {/* Bottom Details Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

                    {/* Synopsis / Description */}
                    <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <BookOpen className="text-[#0055b8]" size={24} />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Sinopsis Buku</h2>
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                            {paragraphs.map((p, i) => (
                                p.includes('***') || p.includes('*') ? (
                                    <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em class="text-gray-900 font-medium">$1</em>') }} />
                                ) : (
                                    <p key={i}>{p}</p>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Book Metadata */}
                    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 h-max">
                        <div className="flex items-center gap-3 mb-6 sm:mb-8">
                            <Info className="text-[#0055b8]" size={24} />
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Detail Buku</h2>
                        </div>

                        <div className="space-y-4 sm:space-y-5">
                            <div>
                                <p className="text-xs text-gray-500 font-semibold mb-1">Jumlah Halaman</p>
                                <p className="text-sm sm:text-base text-gray-900 font-medium">{book.pages} halaman</p>
                            </div>
                            <div className="w-full h-px bg-gray-100" />

                            <div>
                                <p className="text-xs text-gray-500 font-semibold mb-1">Penerbit</p>
                                <p className="text-sm sm:text-base text-gray-900 font-medium">{book.publisher}</p>
                            </div>
                            <div className="w-full h-px bg-gray-100" />

                            <div>
                                <p className="text-xs text-gray-500 font-semibold mb-1">Tanggal Terbit</p>
                                <p className="text-sm sm:text-base text-gray-900 font-medium">{book.publishedDate}</p>
                            </div>
                            <div className="w-full h-px bg-gray-100" />

                            <div>
                                <p className="text-xs text-gray-500 font-semibold mb-1">ISBN</p>
                                <p className="text-sm sm:text-base text-gray-900 font-medium font-mono">{book.isbn}</p>
                            </div>
                            <div className="w-full h-px bg-gray-100" />

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Berat</p>
                                    <p className="text-sm sm:text-base text-gray-900 font-medium">{book.weight}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold mb-1">Dimensi</p>
                                    <p className="text-sm sm:text-base text-gray-900 font-medium">{book.dimensions}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
