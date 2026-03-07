"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Star, BookOpen } from "lucide-react";

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
    },
    {
        id: 3,
        title: "Perlindungan Anak Indonesia: Teori dan Praktik",
        author: "Prof. Dr. Susanto, MA",
        price: 115000,
        originalPrice: 145000,
        category: "Hukum & Sosial",
        rating: 4.9,
        reviews: 76,
        badge: "Pilihan Editor",
        badgeColor: "#0055b8",
        cover: "from-emerald-100 to-teal-200",
        isbn: "978-602-1234-03-5",
        pages: 312,
        publisher: "Masmedia",
    },
    {
        id: 4,
        title: "Guru Hebat, Murid Luar Biasa",
        author: "Prof. Dr. Susanto, MA",
        price: 79000,
        originalPrice: 99000,
        category: "Pendidikan",
        rating: 4.7,
        reviews: 63,
        badge: null,
        badgeColor: "",
        cover: "from-violet-100 to-purple-200",
        isbn: "978-602-1234-04-2",
        pages: 184,
        publisher: "Erlangga",
    },
    {
        id: 5,
        title: "Masa Depan Pendidikan Nasional",
        author: "Prof. Dr. Susanto, MA",
        price: 105000,
        originalPrice: 130000,
        category: "Pendidikan",
        rating: 4.8,
        reviews: 52,
        badge: "Baru",
        badgeColor: "#f59e0b",
        cover: "from-rose-100 to-pink-200",
        isbn: "978-602-1234-05-9",
        pages: 276,
        publisher: "Masmedia",
    },
    {
        id: 6,
        title: "Psikologi Perkembangan Anak Modern",
        author: "Prof. Dr. Susanto, MA",
        price: 92000,
        originalPrice: 115000,
        category: "Psikologi",
        rating: 4.6,
        reviews: 41,
        badge: null,
        badgeColor: "",
        cover: "from-sky-100 to-cyan-200",
        isbn: "978-602-1234-06-6",
        pages: 224,
        publisher: "Erlangga",
    },
];

const categories = ["Semua", "Pendidikan", "Parenting", "Hukum & Sosial", "Psikologi"];

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

export default function BukuPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasi skeleton delay 800ms
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50">
                {/* Hero banner skeleton */}
                <div
                    className="relative pt-40 pb-24 overflow-hidden"
                    style={{ backgroundColor: "#0055b8" }}
                >
                    <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`, backgroundSize: "40px 40px", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)" }} />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-pulse">
                        <div className="text-center max-w-2xl mx-auto">
                            <div className="w-32 h-8 bg-white/20 rounded-full mx-auto mb-7"></div>
                            <div className="w-3/4 h-12 sm:h-16 bg-white/20 rounded-xl mx-auto mb-5"></div>
                            <div className="w-5/6 h-5 bg-white/20 rounded-md mx-auto mb-2"></div>
                            <div className="w-4/6 h-5 bg-white/20 rounded-md mx-auto"></div>
                        </div>
                    </div>
                </div>

                {/* Content Skeleton */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="flex flex-wrap justify-center gap-2 mb-12 animate-pulse">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-24 h-10 bg-gray-200 rounded-full"></div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
                                <div className="aspect-[3/4] bg-gray-200"></div>
                                <div className="p-4">
                                    <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                                    <div className="w-2/3 h-4 bg-gray-200 rounded mb-4"></div>
                                    <div className="w-1/2 h-3 bg-gray-200 rounded mb-3"></div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="w-10 h-3 bg-gray-200 rounded"></div>
                                        <div className="w-10 h-3 bg-gray-200 rounded"></div>
                                    </div>
                                    <div className="w-1/3 h-5 bg-gray-200 rounded mb-4"></div>
                                    <div className="flex gap-2">
                                        <div className="flex-1 h-8 bg-gray-200 rounded-lg"></div>
                                        <div className="w-16 h-8 bg-gray-200 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero banner */}
            <div
                className="relative pt-40 pb-24 overflow-hidden"
                style={{ backgroundColor: "#0055b8" }}
            >
                {/* Grid texture */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                        maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
                    }}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold mb-7" style={{ color: "rgba(255,255,255,0.85)" }}>
                            <BookOpen size={13} />
                            Katalog Buku
                        </div>
                        <h1
                            className="font-bold leading-tight mb-5"
                            style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
                        >
                            Koleksi Buku{" "}
                            <span style={{ color: "#fde047" }}>Pilihan</span>
                        </h1>
                        <p
                            className="max-w-md mx-auto text-sm sm:text-base text-white/70 leading-[1.75]"
                        >
                            Buku-buku bermutu seputar pendidikan, parenting, dan perlindungan anak — ditulis dari pengalaman nyata oleh Prof. Dr. Susanto, MA.
                        </p>
                    </div>
                </div>

                {/* Bottom curve */}
                <svg
                    viewBox="0 0 1440 80"
                    className="absolute bottom-0 left-0 w-full"
                    preserveAspectRatio="none"
                    style={{ height: "50px" }}
                >
                    <path d="M0,80V30Q720,0,1440,30V80Z" fill="#f9fafb" />
                </svg>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Filter categories */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat, i) => (
                        <button
                            key={cat}
                            className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                            style={
                                i === 0
                                    ? { backgroundColor: "#0055b8", color: "white" }
                                    : {
                                        backgroundColor: "white",
                                        color: "#6b7280",
                                        border: "1px solid #e5e7eb",
                                    }
                            }
                            onMouseEnter={(e) => {
                                if (i !== 0) {
                                    e.currentTarget.style.borderColor = "#0055b8";
                                    e.currentTarget.style.color = "#0055b8";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (i !== 0) {
                                    e.currentTarget.style.borderColor = "#e5e7eb";
                                    e.currentTarget.style.color = "#6b7280";
                                }
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Book Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {books.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            {/* Cover placeholder — 3:4 */}
                            <div className={`relative bg-gradient-to-br ${book.cover}`} style={{ aspectRatio: "3/4" }}>
                                {book.badge && (
                                    <div
                                        className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                                        style={{ backgroundColor: book.badgeColor }}
                                    >
                                        {book.badge}
                                    </div>
                                )}
                                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                                    -{getDiscount(book.originalPrice, book.price)}%
                                </div>
                                <div
                                    className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm"
                                    style={{ color: "#0055b8" }}
                                >
                                    {book.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-5">
                                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1.5 group-hover:text-[#0055b8] transition-colors line-clamp-2">
                                    {book.title}
                                </h3>
                                <p className="text-xs text-gray-500 mb-3">{book.author}</p>

                                {/* Rating */}
                                <div className="flex items-center gap-1.5 mb-3">
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                className={
                                                    i < Math.floor(book.rating)
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "fill-gray-200 text-gray-200"
                                                }
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[11px] text-gray-400 font-medium">
                                        {book.rating} ({book.reviews})
                                    </span>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-4 font-medium">
                                    <span>{book.pages} hal.</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                                    <span>{book.publisher}</span>
                                </div>

                                {/* Price */}
                                <div className="flex items-end gap-2 mb-5">
                                    <span
                                        className="font-extrabold text-base sm:text-lg"
                                        style={{ color: "#0055b8" }}
                                    >
                                        {formatPrice(book.price)}
                                    </span>
                                    <span className="text-xs text-gray-400 line-through mb-0.5">
                                        {formatPrice(book.originalPrice)}
                                    </span>
                                </div>

                                {/* CTA */}
                                <div className="flex gap-2">
                                    <Link
                                        href="/kontak"
                                        className="flex-1 inline-flex items-center justify-center gap-1.5 text-white text-xs font-semibold py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-200"
                                        style={{ backgroundColor: "#0055b8" }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "#004499";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = "#0055b8";
                                        }}
                                    >
                                        <ShoppingCart size={12} />
                                        Beli
                                    </Link>
                                    <Link
                                        href={`/program/buku/${book.id}`}
                                        className="px-3 py-2 rounded-lg text-xs font-medium border border-gray-200 text-gray-500 hover:border-[#0055b8] hover:text-[#0055b8] transition-all duration-200"
                                    >
                                        Detail
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
