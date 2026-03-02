"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { pengumumanList } from "@/lib/data/pengumuman";
import { Calendar, ArrowRight, Trophy } from "lucide-react";

export default function PengumumanPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".announcement-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Trophy size={20} />
            <span>Pengumuman Resmi</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Pengumuman Pemenang</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Temukan pengumuman pemenang kompetisi GoJuara terbaru
          </p>
        </div>
      </section>

      {/* Announcements Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pengumumanList.map((item) => (
              <article
                key={item.id}
                className="announcement-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href={`/pengumuman/${item.slug}`}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
                      Lihat Pemenang
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
