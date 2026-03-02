"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);

  const words = ["Prestasi", "Kebanggaan", "Pengetahuan", "Wawasan"];

  const handleCardEnter = useCallback((index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    gsap.to(el, {
      y: -40,
      scale: 1.04,
      duration: 0.4,
      ease: "back.out(1.7)",
    });
  }, []);

  const handleCardLeave = useCallback((index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;
    gsap.to(el, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Badge animation
      tl.fromTo(".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        // Title blurry text reveal animation
        .fromTo(".title-line",
          { filter: "blur(8px)", opacity: 0, y: 20 },
          { filter: "blur(0px)", opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" },
          "-=0.3"
        )
        // Subtitle fade in
        .fromTo(".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.6"
        )
        // Buttons animation
        .fromTo(".hero-btn",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          "-=0.3"
        )
        // Cards fan out animation
        .fromTo(".hero-card-left",
          { opacity: 0, rotation: 0, x: 0, y: 80 },
          { opacity: 1, rotation: -12, x: -80, y: 0, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.2"
        )
        .fromTo(".hero-card-center",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.4)" },
          "-=0.6"
        )
        .fromTo(".hero-card-right",
          { opacity: 0, rotation: 0, x: 0, y: 80 },
          { opacity: 1, rotation: 12, x: 80, y: 0, duration: 0.7, ease: "back.out(1.4)" },
          "-=0.6"
        );

      // After main timeline, start word cycling
      tl.call(() => {
        let wordIndex = 0;
        const cycleWords = () => {
          const el = rotatingWordRef.current;
          if (!el) return;
          wordIndex = (wordIndex + 1) % words.length;
          const nextWord = words[wordIndex];

          gsap.to(el, {
            y: '-100%',
            opacity: 0,
            duration: 0.35,
            ease: "power2.in",
            onComplete: () => {
              el.textContent = nextWord;
              gsap.fromTo(el,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.4, ease: "power2.out" }
              );
            },
          });
        };
        const interval = setInterval(cycleWords, 1000);
        // Store interval for cleanup
        (heroRef.current as HTMLDivElement & { _wordInterval?: number })._wordInterval = interval as unknown as number;
      });
    }, heroRef);

    return () => {
      ctx.revert();
      const el = heroRef.current as HTMLDivElement & { _wordInterval?: number } | null;
      if (el?._wordInterval) clearInterval(el._wordInterval);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(180deg, #DBEAFE 0%, #EFF6FF 30%, #FFFFFF 70%)' }}>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center pt-44 pb-16">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            Pendaftaran Batch 2024 Dibuka
          </div>

          {/* Main Title with Blurry Text Reveal */}
          <h1 className="font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            <span className="title-line block" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Wadah <span className="inline-block overflow-hidden align-bottom" style={{ height: '1.15em' }}><span ref={rotatingWordRef} className="inline-block">Prestasi</span></span> untuk</span>
            <span className="title-line block text-blue-600" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Generasi Emas Indonesia</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-lg sm:text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
            Platform kompetisi nasional yang menghubungkan pelajar dari 34 provinsi.
            Uji kemampuan, bangun jaringan, dan raih prestasi bersama kami.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-16">
            {/* Primary Button */}
            <Link
              href="/program"
              className="hero-btn group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Lihat Program
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Secondary Button */}
            <Link
              href="/tentang-kami"
              className="hero-btn group inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 px-6 py-3 rounded-full font-medium text-sm transition-all hover:border-blue-300"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Fanned Cards — pinned to bottom, clipped */}
      <div className="relative w-full flex justify-center pb-0" style={{ marginBottom: '-180px' }}>
        <div className="relative h-[380px] sm:h-[440px] w-full max-w-xl">
          {/* Left Card */}
          <div
            ref={(el) => { cardRefs.current[0] = el; }}
            onMouseEnter={() => handleCardEnter(0)}
            onMouseLeave={() => handleCardLeave(0)}
            className="hero-card-left absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl bg-gray-900 shadow-2xl cursor-pointer"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          />
          {/* Center Card */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            onMouseEnter={() => handleCardEnter(1)}
            onMouseLeave={() => handleCardLeave(1)}
            className="hero-card-center absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl bg-gray-950 shadow-2xl z-10 cursor-pointer"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          />
          {/* Right Card */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            onMouseEnter={() => handleCardEnter(2)}
            onMouseLeave={() => handleCardLeave(2)}
            className="hero-card-right absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl bg-gray-900 shadow-2xl cursor-pointer"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          />
        </div>
      </div>
    </section>
  );
}
