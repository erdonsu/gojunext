"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Target, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Visi",
    description: "Memfasilitasi generasi agar memiliki kecintaan terhadap ilmu pengetahuan dan pendidikan karakter.",
  },
  {
    icon: BookOpen,
    title: "Misi",
    description: "Menguji kemampuan, keterampilan serta membangun semangat kompetisi yang sehat.",
  },
  {
    icon: Users,
    title: "Platform",
    description: "Memberikan platform bagi individu dan tim untuk saling belajar dan berbagi ide.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
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
    <section ref={sectionRef} className="py-20 bg-white" id="tentang">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-photo.png"
                alt="Tentang GoJuara"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-100 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Tentang Kami
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Membangun Generasi{" "}
              <span className="text-blue-600">Cerdas dan Berkarakter</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              GoJuara adalah wadah kejuaraan tingkat nasional yang didedikasikan
              untuk mempertemukan para calon juara cerdas dari berbagai daerah
              di seluruh Indonesia. SangJuara memfasilitasi kompetisi, menguji
              kemampuan, keterampilan serta membangun semangat kompetisi yang
              sehat.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Kami memiliki misi memfasilitasi generasi agar memiliki kecintaan
              terhadap ilmu pengetahuan, pendidikan karakter, perlindungan anak,
              seni, budaya dan sejumlah bidang lainnya. Kami memberikan platform
              bagi individu dan tim untuk saling belajar, berbagi ide, dan
              menemukan potensi terbaik mereka melalui berbagai kompetisi.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-default"
                >
                  <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors duration-300">
                    <feature.icon className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-1 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
