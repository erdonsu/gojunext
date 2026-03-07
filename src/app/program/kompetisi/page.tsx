"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { ArrowLeft, Rocket, Star, Sparkles } from "lucide-react";

export default function KompetisiComingSoon() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)" } });

            // Elements pop in
            tl.fromTo(".reveal-badge",
                { scale: 0, opacity: 0, rotation: -45 },
                { scale: 1, opacity: 1, rotation: 0, duration: 0.8 }
            )
                .fromTo(".reveal-title",
                    { y: 50, opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                    { y: 0, opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.8, stagger: 0.2 },
                    "-=0.4"
                )
                .fromTo(".reveal-desc",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    "-=0.2"
                )
                .fromTo(".reveal-btn",
                    { scale: 0.8, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.6 },
                    "-=0.4"
                );

            // Playful floating background shapes
            gsap.to(".shape-1", {
                y: -30, x: 20, rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut"
            });
            gsap.to(".shape-2", {
                y: 40, x: -15, rotation: -20, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5
            });
            gsap.to(".shape-3", {
                y: -20, x: -30, rotation: 25, duration: 4.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1
            });
            gsap.to(".shape-4", {
                y: 35, x: 25, rotation: -10, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.5
            });

            // Rocket continuous subtle floating
            gsap.to(".rocket-icon", {
                y: -10, duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#0055b8] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">
            {/* Background Decorative Shapes */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Glow Blurs */}
                <div className="shape-1 absolute top-[15%] left-[10%] w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full mix-blend-overlay opacity-80 blur-xl" />
                <div className="shape-2 absolute bottom-[20%] right-[15%] w-32 h-32 md:w-48 md:h-48 bg-purple-500 rounded-full mix-blend-overlay opacity-60 blur-2xl" />

                {/* Icons */}
                <div className="shape-3 absolute top-[25%] right-[20%] text-yellow-300 opacity-60">
                    <Star size={48} fill="currentColor" />
                </div>
                <div className="shape-4 absolute bottom-[30%] left-[20%] text-white opacity-30">
                    <Sparkles size={56} />
                </div>

                {/* Playful DOT grid overlay */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: 'radial-gradient(circle at center, white 2px, transparent 2px)', backgroundSize: '40px 40px' }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
                {/* Animated Main Icon Badge */}
                <div className="reveal-badge mb-8 inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl">
                    <Rocket size={40} className="text-[#0055b8] rocket-icon" />
                </div>

                {/* Coming Soon Tag */}
                <div className="inline-block bg-white/10 border border-white/20 text-yellow-300 font-bold px-5 py-2 rounded-full text-sm sm:text-base uppercase tracking-widest mb-6 reveal-badge shadow-sm backdrop-blur-md">
                    Coming Soon
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6">
                    <span className="reveal-title block">Kejutan Besar</span>
                    <span className="reveal-title block text-yellow-400">Sedang Disiapkan!</span>
                </h1>

                {/* Description */}
                <p className="reveal-desc text-[15px] sm:text-lg md:text-xl text-blue-100 font-medium mb-10 max-w-2xl mx-auto leading-relaxed px-4">
                    Sesuatu yang seru sedang kami bangun di dapur GoJuara. Kompetisi yang lebih menantang, hadiah yang lebih besar, dan pengalaman yang tak terlupakan!
                </p>

                {/* CTA */}
                <Link
                    href="/"
                    className="reveal-btn inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-950 px-8 py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 group"
                >
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
}
