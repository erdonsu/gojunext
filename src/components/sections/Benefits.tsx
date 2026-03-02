"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const benefits = [
  {
    icon: "/images/icon-certificate.png",
    title: "Sertifikat",
    description: "Para peserta yang mengikuti kejuaraan akan mendapat e-sertifikat GoJuara",
  },
  {
    icon: "/images/icon-trophy.png",
    title: "Piala / Medali",
    description: "Piala/Medali akan diberikan kepada para pemenang yang diselenggarakan oleh GoJuara*",
  },
  {
    icon: "/images/icon-gift.png",
    title: "Merchandise",
    description: "Pemenang terpilih akan mendapatkan hadiah berupa merchandise dari GoJuara*",
  },
  {
    icon: "/images/icon-scholarship.png",
    title: "Beasiswa",
    description: "Pemenang terpilih akan mendapatkan Beasiswa GoJuara*",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
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
    <section ref={sectionRef} className="py-20 bg-blue-50" id="manfaat">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Manfaat Bergabung
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Apa yang akan kamu dapatkan?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Berbagai hadiah dan manfaat menanti para peserta dan pemenang kompetisi GoJuara
          </p>
        </div>

        {/* Benefits Grid */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-gray-500 text-sm mt-8">
          *Syarat dan ketentuan berlaku
        </p>
      </div>
    </section>
  );
}
