"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowRight } from "lucide-react";

const books = [
    {
        id: 1,
        tag: "Untuk Para Guru",
        title: "Pengelolaan Pendidikan Islam",
        subtitle: "Subtitel Buku",
        description:
            "Buku ini menggali berbagai tantangan dalam pengelolaan pendidikan Islam di era modern. Cocok untuk guru dan praktisi pendidikan yang ingin mengembangkan manajemen pendidikan yang efektif.",
        badge: "",
        badgeColor: "#0055b8",
        cover: "/gambarbuku/Pengelolaan pendidikan islam.webp",
        flip: false,
    },
    {
        id: 2,
        tag: "Untuk Para Guru & Sivitas Akademika",
        title: "Panduan Perlindungan Guru",
        subtitle: "Subtitel Buku",
        description:
            "Memberikan panduan komprehensif terkait perlindungan hukum, profesi, dan dan keselamatan kerja bagi guru di Indonesia. Sangat penting bagi pendidik yang ingin memahami tata cara melindungi diri dari ancaman di lingkungan sekolah maupun di luar.",
        badge: "",
        badgeColor: "#f59e0b",
        cover: "/gambarbuku/Panduan perlindungan guru.webp",
        flip: true,
    },
    {
        id: 3,
        tag: "Untuk Semua",
        title: "Panduan Madrasah Ramah Anak",
        subtitle: "Subtitel Buku",
        description:
            "Buku ini menyajikan langkah-langkah strategis dan praktis dalam membangun madrasah yang ramah, aman, dan nyaman bagi anak. Dilengkapi dengan pedoman penanganan kasus nyata untuk lingkungan pendidikan yang lebih sehat.",
        badge: "",
        badgeColor: "#0055b8",
        cover: "/gambarbuku/Panduan madrasah ramah anak.webp",
        flip: false,
    },
];

export default function ProductShowcase() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Each book row animates on scroll
            books.forEach((book, i) => {
                const coverClass = `.book-cover-${i}`;
                const contentClass = `.book-content-${i}`;

                gsap.fromTo(
                    coverClass,
                    { opacity: 0, x: book.flip ? 60 : -60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: `.book-row-${i}`,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );

                gsap.fromTo(
                    contentClass,
                    { opacity: 0, x: book.flip ? -60 : 60 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: `.book-row-${i}`,
                            start: "top 80%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            // Floating loops — directly in context scope for proper cleanup
            books.forEach((book, i) => {
                const coverClass = `.book-cover-${i}`;
                gsap.to(coverClass, {
                    y: i % 2 === 0 ? -14 : -10,
                    duration: 2.8 + i * 0.4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: 1 + i * 0.5,
                });
            });

            // Bottom button
            gsap.fromTo(
                ".showcase-cta",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".showcase-cta",
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-gray-50" id="buku">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#0055b8] px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0055b8]" />
                        Koleksi Buku
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                        Buku yang Lahir dari{" "}
                        <span className="text-[#0055b8]">Lapangan,</span>
                        <br />Bukan dari Ruang Kelas
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-xl mx-auto text-[15px]">
                        Ditulis langsung oleh Prof. Susanto — bukan teori doang, tapi pengalaman nyata
                        mendampingi jutaan anak dan keluarga Indonesia.
                    </p>
                </div>

                {/* Book rows */}
                <div className="max-w-5xl mx-auto">
                    {books.map((book, i) => (
                        <div key={book.id}>
                            <div
                                key={book.id}
                                className={`book-row-${i} flex flex-col ${book.flip ? "lg:flex-row-reverse" : "lg:flex-row"
                                    } items-center gap-12 lg:gap-20`}
                            >
                                {/* Visual/Cover Layer (Left/Right) */}
                                <div className={`book-cover-${i} w-full lg:w-1/2 flex justify-center relative`}>
                                    <div className="absolute inset-0 bg-[#0055b8]/5 blur-3xl rounded-full scale-75" />
                                    <div className="relative w-full max-w-[580px] aspect-[3/4] perspective-1000">
                                        <div className={`w-full h-full relative ${book.cover.startsWith("bg-") ? `rounded-2xl shadow-2xl overflow-hidden border-8 border-white ring-1 ring-gray-100 ${book.cover}` : ""}`}>
                                            {!book.cover.startsWith("bg-") && (
                                                <Image src={book.cover} alt={book.title} fill className="object-contain" sizes="(max-width: 1024px) 100vw, 580px" />
                                            )}
                                            {book.badge && (
                                                <div
                                                    className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-white shadow-md tracking-wide z-10"
                                                    style={{ backgroundColor: book.badgeColor }}
                                                >
                                                    {book.badge}
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-full blur-2xl opacity-40 mix-blend-multiply" />
                                    </div>
                                </div>

                                {/* Content Layer (Right/Left) */}
                                <div className={`book-content-${i} w-full lg:w-1/2 flex flex-col ${book.flip ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                                    }`}>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-black text-[#0055b8] uppercase tracking-widest mb-3">
                                            {book.tag}
                                        </p>
                                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-[1.2] mb-4">
                                            {book.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                                            {book.description}
                                        </p>

                                        <div className={`flex flex-col sm:flex-row gap-3 ${book.flip ? "lg:justify-end" : "lg:justify-start"}`}>
                                            <Link
                                                href="/program/buku"
                                                className="inline-flex items-center justify-center gap-2 bg-[#0055b8] hover:bg-[#0044a0] text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5"
                                            >
                                                Lihat buku
                                                <ArrowRight size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="showcase-cta text-center mt-20">
                    <div className="inline-flex flex-col items-center gap-4">
                        <p className="text-sm sm:text-base text-gray-500 font-medium">Masih ada buku lainnya dari Prof. Susanto</p>
                        <Link
                            href="/program/buku"
                            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#0055b8]/40 text-gray-700 hover:text-[#0055b8] px-7 py-3.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 group"
                        >
                            Lihat Semua Buku
                            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
