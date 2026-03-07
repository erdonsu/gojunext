"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { blogList } from "@/lib/data/blog";
import { Calendar, ArrowRight } from "lucide-react";


export default function Announcements() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Get first 4 announcements
  const announcements = blogList.slice(0, 4);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-block bg-blue-100 text-[#0055b8] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 shadow-sm border border-blue-200">
              Kabar Terkini
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Blog & Artikel
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#0055b8] hover:text-[#004499] font-bold mt-4 md:mt-0 transition-colors group"
          >
            Lihat Semua Blog
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Announcements Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {announcements.map((item) => (
            <Link
              key={item.id}
              href={`/blog/${item.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#0055b8] text-[10px] sm:text-xs uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-gray-400 text-xs font-semibold mb-3">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-bold text-lg lg:text-xl leading-snug text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0055b8] transition-colors">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
