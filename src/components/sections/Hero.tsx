"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { ArrowRight } from "lucide-react";

const words = ["Prestasi", "Kebanggaan", "Pengetahuan", "Wawasan"];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [currentWord, setCurrentWord] = useState(words[0]);

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

      // Badge / logo animation
      tl.fromTo(".hero-badge",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(2)" }
      )

      // Grid cells — random pulse (directly in context, not via document.querySelectorAll)
      gsap.utils.toArray(".grid-cell").forEach((cell) => {
        gsap.to(cell as Element, {
          opacity: Math.random() * 0.10 + 0.12,
          duration: Math.random() * 3 + 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 4,
        });
      });

      // SVG element reveal — directly in context (not inside tl.call)
      // Star: drops from above + bounces in
      gsap.fromTo("#svg-star",
        { opacity: 0, y: -60, scale: 0.4, transformOrigin: "500px 210px" },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "bounce.out", transformOrigin: "500px 210px", delay: 0.7 }
      );
      // Wings: fan open
      gsap.fromTo("#svg-wings",
        { opacity: 0, scaleX: 0, transformOrigin: "500px 430px" },
        { opacity: 1, scaleX: 1, duration: 0.9, ease: "back.out(1.6)", transformOrigin: "500px 430px", delay: 0.9 }
      );
      // Book: rises from below
      gsap.fromTo("#svg-book",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 1.15 }
      );

      // Title blurry text reveal animation
      tl.fromTo(".title-line",
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
              setCurrentWord(nextWord);
              gsap.fromTo(el,
                { y: '100%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 0.4, ease: "power2.out" }
              );
            },
          });
        };
        intervalRef.current = setInterval(cycleWords, 1000);
      });
    }, heroRef);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen overflow-hidden bg-white">

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid lines with top→bottom gradient mask */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,85,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,184,0.07) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 85%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 85%)',
          }}
        />
        {/* Animated fill cells */}
        <svg
          id="grid-cells-svg"
          className="absolute inset-0 w-full h-full"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 80%)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 80%)',
          }}
        >
          {Array.from({ length: 20 * 14 }).map((_, i) => {
            const col = i % 20;
            const row = Math.floor(i / 20);
            return (
              <rect
                key={i}
                className="grid-cell"
                x={col * 50 + 1}
                y={row * 50 + 1}
                width={48}
                height={48}
                fill="#0055b8"
                opacity={0}
              />
            );
          })}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center pt-44 pb-16">
          {/* Logo SVG — animated */}
          <div className="hero-badge mb-10">
            <svg
              id="hero-logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 1000"
              className="w-20 h-20"
            >
              {/* Wings — blue */}
              <path
                id="svg-wings"
                fill="#0055b8"
                d="M725.73,255.83c-127.94,27.46-170.99,81.04-194.49,146.08-5.4,14.94-9.36,27.85-12.27,38.82-2.93,11.05,11.06,18.29,18.47,9.58,67.25-79.03,157.95-49.9,157.95-49.9,1.51,48.12-22.21,85.2-54.32,113.22-83.73,73.06-209.96,73.06-293.69,0-32.11-28.02-55.82-65.1-54.32-113.22,0,0,90.7-29.13,157.95,49.9,7.41,8.71,21.4,1.47,18.47-9.58-2.91-10.98-6.88-23.89-12.27-38.82-23.5-65.03-66.55-118.62-194.49-146.08-45.1-9.68-135.8-11.45-169.31,11.27,0,0,75.47,41.98,107.44,143.91,27.52,87.74,162.42,222.36,293.37,222.36s265.85-134.62,293.37-222.36c31.97-101.94,107.44-143.91,107.44-143.91-33.52-22.72-124.21-20.95-169.31-11.27Z"
              />
              {/* Star — yellow */}
              <path
                id="svg-star"
                fill="#fde047"
                d="M575.64,197.54c6.99-7.99,1.49-20.5-9.13-20.75l-34.11-.8c-4.66-.11-8.87-2.8-10.93-6.97l-16.02-32.46c-4.59-9.3-17.86-9.3-22.45,0l-16.02,32.46c-2.06,4.18-6.27,6.86-10.93,6.97l-34.11.8c-10.61.25-16.11,12.77-9.13,20.75l27.98,31.98c2.48,2.84,3.55,6.64,2.92,10.36l-6.39,37.27c-1.75,10.22,8.98,18.02,18.16,13.19l32.92-17.31c3.65-1.92,8-1.92,11.65,0l32.92,17.31c9.18,4.83,19.91-2.97,18.16-13.19l-6.39-37.27c-.64-3.72.43-7.52,2.92-10.36l27.98-31.98Z"
              />
              {/* Book lines — yellow */}
              <path
                id="svg-book"
                fill="#fde047"
                d="M500,700.76s-111.33-122.68-443.45-127.05l-43.02,54.53c365.72-6.28,486.47,127.04,486.47,127.04,0,0,120.76-133.32,486.47-127.04l-43.02-54.53c-332.11,4.38-443.45,127.05-443.45,127.05Z M986.47,702.47l-43.02-54.53c-332.11,4.38-443.45,127.05-443.45,127.05,0,0-111.33-122.68-443.45-127.05l-43.02,54.53c275.95-4.74,412.38,69.98,462.75,106.95-.29,1.49-.46,3.02-.46,4.59,0,13.35,10.83,24.18,24.18,24.18s24.18-10.83,24.18-24.18c0-1.57-.18-3.1-.46-4.59,50.38-36.98,186.81-111.69,462.75-106.95Z"
              />
            </svg>
          </div>

          {/* Main Title with Blurry Text Reveal */}
          <h1 className="font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
            <span className="title-line block" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Wadah <span className="inline-block overflow-hidden align-bottom" style={{ height: '1.2em' }}><span ref={rotatingWordRef} className="inline-block">{currentWord}</span></span> untuk</span>
            <span className="title-line block text-blue-600" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>Generasi Emas Indonesia</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Wadah kompetisi nasional 34 provinsi yang kini juga menghadirkan buku-buku bermutu
            dari Prof. Susanto — untuk siapa saja yang peduli masa depan anak Indonesia.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center mb-16">
            <Link
              href="#buku"
              className="hero-btn group inline-flex items-center justify-center gap-2 bg-[#0055b8] hover:bg-[#004499] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Jelajahi Koleksi Buku
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
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
            className="hero-card-left absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          >
            <Image src="/gambarbuku/paba.webp" alt="Buku Kiri" fill sizes="(max-width: 640px) 280px, 300px" className="object-cover" />
          </div>
          {/* Center Card */}
          <div
            ref={(el) => { cardRefs.current[1] = el; }}
            onMouseEnter={() => handleCardEnter(1)}
            onMouseLeave={() => handleCardLeave(1)}
            className="hero-card-center absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl shadow-2xl z-10 cursor-pointer overflow-hidden"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          >
            <Image src="/gambarbuku/addkg.webp" alt="Buku Tengah" fill priority sizes="(max-width: 640px) 280px, 300px" className="object-cover" />
          </div>
          {/* Right Card */}
          <div
            ref={(el) => { cardRefs.current[2] = el; }}
            onMouseEnter={() => handleCardEnter(2)}
            onMouseLeave={() => handleCardLeave(2)}
            className="hero-card-right absolute left-1/2 top-0 -ml-[140px] sm:-ml-[150px] w-[280px] sm:w-[300px] rounded-3xl shadow-2xl cursor-pointer overflow-hidden"
            style={{
              aspectRatio: "3/4",
              transformOrigin: "bottom center",
            }}
          >
            <Image src="/gambarbuku/pabp.webp" alt="Buku Kanan" fill sizes="(max-width: 640px) 280px, 300px" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
