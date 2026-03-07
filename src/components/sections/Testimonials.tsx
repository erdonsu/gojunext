"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Siti Rahayu, S.Pd",
        role: "Guru SD Negeri 04 Jakarta",
        text: "Buku ini benar-benar membuka cara pandang saya dalam menghadapi anak-anak di kelas. Bahasanya mudah dipahami tapi isinya dalam.",
        stars: 5,
        initial: "SR",
    },
    {
        name: "Budi Santoso",
        role: "Orang tua, 2 anak",
        text: "Lebih nyata, lebih praktis. Langsung bisa saya terapkan di rumah hari itu juga. Buku parenting terbaik yang pernah saya baca.",
        stars: 5,
        initial: "BS",
    },
    {
        name: "Dr. Rina Marlina, M.Pd",
        role: "Kepala Sekolah SMP Negeri 12 Bandung",
        text: "Kami belikan untuk seluruh guru di sekolah. Cara guru berkomunikasi dengan siswa jadi jauh lebih empatik.",
        stars: 5,
        initial: "RM",
    },
    {
        name: "Ahmad Fauzi",
        role: "Mahasiswa Pendidikan, UNY",
        text: "Referensi terbaik untuk skripsi saya! Pendekatannya berbasis penelitian tapi tetap enak dibaca.",
        stars: 5,
        initial: "AF",
    },
    {
        name: "Yuliana Priastuti",
        role: "Aktivis Perlindungan Anak",
        text: "Sudah lama mencari buku perlindungan anak dengan bahasa yang accessible. Akhirnya ketemu. Rekomen untuk komunitas!",
        stars: 5,
        initial: "YP",
    },
    {
        name: "Hendra Kusuma",
        role: "Pengajar Bimbel, Surabaya",
        text: "Pemesanannya mudah, pengiriman cepat, buku sesuai ekspektasi. Sudah pesan ulang untuk yang ketiga kalinya!",
        stars: 5,
        initial: "HK",
    },
];

// Duplicate for seamless loop
const marqueeItems = [...testimonials, ...testimonials];

export default function Testimonials() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden" id="testimoni">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-14">
                {/* Header */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#0055b8] px-5 py-2 rounded-full text-sm font-semibold shadow-sm mb-5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0055b8]" />
                        Testimoni
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
                        Kata mereka yang sudah{" "}
                        <span className="text-[#0055b8]">membaca</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Dari guru, orang tua, hingga aktivis pendidikan — ini cerita nyata mengapa puluhan ribu orang dari seluruh penjuru Indonesia memilih GoJuara sebagai bagian dari perjalanan belajar mereka.
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to right, #f8fafc, transparent)" }} />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: "linear-gradient(to left, #f8fafc, transparent)" }} />

                {/* Scrolling track */}
                <div className="flex gap-4 sm:gap-5 w-max animate-marquee">
                    {marqueeItems.map((t, i) => (
                        <div
                            key={i}
                            className="shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between w-[320px] sm:w-[420px]"
                            style={{ aspectRatio: "4/2" }}
                        >
                            {/* Stars */}
                            <div className="flex gap-0.5 mb-3 sm:mb-4">
                                {Array.from({ length: t.stars }).map((_, s) => (
                                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            {/* Text */}
                            <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed mb-4 sm:mb-5">
                                "{t.text}"
                            </p>
                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                                    style={{ backgroundColor: "#0055b8" }}
                                >
                                    {t.initial}
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                                    <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
