"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { Target, Heart, Award, Users } from "lucide-react";

const stats = [
  { number: "10,000+", label: "Peserta" },
  { number: "50+", label: "Kompetisi" },
  { number: "100+", label: "Sekolah" },
  { number: "34", label: "Provinsi" },
];

const values = [
  {
    icon: Target,
    title: "Fokus",
    description: "Fokus pada pengembangan potensi dan bakat peserta didik Indonesia.",
  },
  {
    icon: Heart,
    title: "Kepedulian",
    description: "Peduli terhadap pendidikan karakter dan perlindungan anak.",
  },
  {
    icon: Award,
    title: "Integritas",
    description: "Menjunjung tinggi kejujuran dan transparansi dalam setiap kompetisi.",
  },
  {
    icon: Users,
    title: "Kolaborasi",
    description: "Membangun jaringan kerjasama antar sekolah dan institusi pendidikan.",
  },
];

export default function TentangKamiPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tentang Kami</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Mengenal lebih dekat GoJuara dan perjalanan kami dalam membangun generasi cerdas Indonesia
          </p>
        </div>
      </section>

      {/* About Content */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="about-content">
              <Image
                src="/images/about-photo.png"
                alt="Tentang GoJuara"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="about-content">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Platform Olimpiade Terbaik di Indonesia
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                GoJuara adalah wadah kejuaraan tingkat nasional yang didedikasikan
                untuk mempertemukan para calon juara cerdas dari berbagai daerah
                di seluruh Indonesia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Kami memiliki misi menfasilitasi generasi agar memiliki kecintaan
                terhadap ilmu pengetahuan, pendidikan karakter, perlindungan anak,
                seni, budaya dan sejumlah bidang lainnya. Kami memberikan platform
                bagi individu dan tim untuk saling belajar, berbagi ide, dan
                menemukan potensi terbaik mereka melalui berbagai kompetisi.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Yayasan Pusat Sang Juara adalah wadah yang mempertemukan para
                calon juara cerdas dari berbagai sekolah di seluruh Indonesia.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 bg-blue-50 rounded-2xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prinsip-prinsip yang kami junjung tinggi dalam setiap kegiatan
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
