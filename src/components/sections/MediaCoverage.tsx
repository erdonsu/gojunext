"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const mediaLogos = [
  {
    name: "Indopos",
    image: "/images/media-indopos.png",
    link: "https://www.indopos.co.id/nasional/2024/09/13/filza-peserta-terbaik-pada-olimpiade-prestasi-nasional-2024/",
  },
  {
    name: "TVOne",
    image: "/images/media-tvone.png",
    link: "https://www.tvonenews.com/berita/nasional/193504-marak-kasus-siber-bullying-go-juara-selenggarakan-lomba-video-literasi-digital-tingkat-internasional",
  },
  {
    name: "Antara News",
    image: "/images/media-antara.png",
    link: "https://www.antaranews.com/berita/4191930/siswi-man-1-bandar-lampung-raih-juara-i-olimpiade-pelajar-pancasila",
  },
  {
    name: "Elshinta",
    image: "/images/media-elshinta.png",
    link: "https://elshinta.com/news/341818/2024/07/12/cyber-bullying-dan-judi-online-merupakan-persoalan-serius",
  },
  {
    name: "VOI",
    image: "/images/media-voi.png",
    link: "https://voi.id/berita/430255/siswa-smpn-96-jakarta-selatan-menang-di-pekan-olimpiade-pelajar-se-indonesia",
  },
];

export default function MediaCoverage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".media-logo",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-white" id="media">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Diliput oleh</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mediaLogos.map((media, index) => (
            <a
              key={index}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="media-logo grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
            >
              <Image
                src={media.image}
                alt={media.name}
                width={120}
                height={60}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
