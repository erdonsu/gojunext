"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Award, GraduationCap, Globe, BookMarked } from "lucide-react";

const credentials = [
    { icon: Award, label: "Ketua KPAI 2017–2022", sub: "SK Presiden Joko Widodo" },
    { icon: Award, label: "Wakil Ketua KPAI 2014–2017", sub: "SK Presiden S.B. Yudhoyono" },
    { icon: GraduationCap, label: "Penulis Terbaik Nasional 2016", sub: "Penghargaan Kemendikbud RI" },
    { icon: GraduationCap, label: "Doktor Universitas Negeri Jakarta", sub: "Alumni Program Doktor UNJ" },
];

const stats = [
    { value: "2", label: "Penerbit", sub: "Erlangga & Masmedia" },
    { value: "10+", label: "Tahun", sub: "Pengalaman" },
    { value: "5", label: "Negara", sub: "Forum internasional" },
];

export default function AuthorProfile() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                    toggleActions: "play none none reverse",
                },
                defaults: { ease: "power3.out" },
            });

            tl.fromTo(".author-photo",
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 }
            )
                // Center text reveal
                .fromTo(".reveal-text-author",
                    { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                    { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)", duration: 1, stagger: 0.2, ease: "power3.out" },
                    "-=0.7"
                )
                .fromTo(".credential-item",
                    { opacity: 0, x: -16 },
                    { opacity: 1, x: 0, duration: 0.45, stagger: 0.1 },
                    "-=0.3"
                )
                .fromTo(".stat-item",
                    { opacity: 0, y: 16 },
                    { opacity: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "back.out(1.4)" },
                    "-=0.2"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white" id="penulis">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Badge */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 bg-[#0055b8]/8 text-[#0055b8] px-5 py-2 rounded-full text-sm font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0055b8]" />
                        Tentang Penulis
                    </div>
                </div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-[360px_1fr] gap-14 lg:gap-20 items-start max-w-5xl mx-auto">

                    {/* Left — Photo */}
                    <div className="author-photo flex flex-col items-center lg:items-start gap-5">
                        <div className="relative w-full max-w-[320px] mx-auto lg:mx-0">
                            {/* Single yellow offset frame — subtle */}
                            <div
                                className="absolute -bottom-3 -right-3 w-full rounded-3xl bg-yellow-300/60"
                                style={{ aspectRatio: "3/4" }}
                            />
                            {/* Photo placeholder */}
                            <div
                                className="relative w-full rounded-3xl bg-gray-200 shadow-lg"
                                style={{ aspectRatio: "3/4" }}
                            >
                                {/* Nameplate */}
                                <div className="absolute bottom-0 inset-x-0 rounded-b-3xl bg-white/90 backdrop-blur-sm px-4 py-3 border-t border-gray-100">
                                    <p className="text-xs font-bold text-gray-900 text-center">Assoc. Prof. Dr. Susanto, MA</p>
                                    <p className="text-[10px] text-gray-400 text-center mt-0.5">Pendiri Yayasan Pusat Sang Juara</p>
                                </div>
                            </div>
                        </div>

                        {/* Publishers */}
                        <div className="flex gap-2 justify-center lg:justify-start">
                            {["Erlangga", "Masmedia"].map((pub) => (
                                <div key={pub} className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 hover:border-[#0055b8]/40 transition-colors duration-200">
                                    <BookMarked size={11} className="text-[#0055b8]" />
                                    <span className="text-xs font-medium text-gray-600">{pub}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right — Content */}
                    <div>
                        {/* Name */}
                        <div className="mb-7">
                            <p className="reveal-text-author text-sm font-medium text-gray-400 mb-2 tracking-wide uppercase">Penulis & Pendiri</p>
                            <h2 className="reveal-text-author text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                Assoc. Prof. Dr.{" "}
                                <span className="text-[#0055b8]">Susanto</span>
                                {", MA"}
                            </h2>
                            <div className="reveal-text-author mt-4 w-10 h-1 bg-yellow-400 rounded-full" />
                        </div>

                        {/* Bio */}
                        <p className="reveal-text-author text-gray-500 leading-relaxed mb-8 text-sm sm:text-base">
                            Lebih dari satu dekade mendampingi jutaan anak dan keluarga Indonesia
                            — dari kursi pemerintahan sebagai Ketua KPAI hingga puluhan karya tulis
                            yang menjadi rujukan para pendidik dan orang tua di seluruh nusantara.
                            Kini, pengalaman itu hadir dalam bentuk buku yang bisa kamu bawa pulang.
                        </p>

                        {/* Credentials */}
                        <div className="space-y-2.5 mb-8">
                            {credentials.map((item, i) => (
                                <div
                                    key={i}
                                    className="credential-item flex items-center gap-3.5 rounded-xl px-4 py-3"
                                    style={{ backgroundColor: "#0055b8" }}
                                >
                                    <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center shrink-0">
                                        <item.icon size={14} className="text-yellow-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold mt-0" style={{ color: "#fde047" }}>{item.label}</p>
                                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.7)" }}>{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="stat-item border border-gray-100 rounded-2xl p-4 text-center hover:border-[#0055b8]/30 hover:shadow-sm transition-all duration-200"
                                >
                                    <div className="text-2xl font-black text-[#0055b8] mb-0.5">{stat.value}</div>
                                    <div className="text-xs font-bold text-gray-800">{stat.label}</div>
                                    <div className="text-[10px] text-gray-400 mt-0.5">{stat.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 max-w-5xl mx-auto">
                    <div className="relative group">
                        {/* Animated Glow (Nyala) */}
                        <div className="absolute -inset-[2px] bg-gradient-to-r from-[#0055b8] via-[#a855f7] to-[#0055b8] rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500 animate-gradient" />

                        {/* Stroke Container */}
                        <div className="relative bg-gradient-to-r from-[#0055b8] via-[#a855f7] to-[#0055b8] p-[3px] rounded-2xl animate-gradient">
                            {/* Inner Content */}
                            <div className="flex items-center gap-4 bg-white rounded-[14px] px-6 py-4">
                                <div className="w-10 h-10 rounded-full bg-blue-50 flex flex-shrink-0 items-center justify-center">
                                    <Globe size={20} className="text-[#0055b8]" />
                                </div>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Aktif di forum internasional bidang anak dan pendidikan di{" "}
                                    <span className="text-gray-900 font-bold">Bangkok, Malaysia, Filipina, Singapura, dan Australia</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
