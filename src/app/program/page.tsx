"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Trophy, BookOpen, Video, Award, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";


const programs = [
  {
    icon: Trophy,
    title: "Olimpiade Tingkat Nasional",
    description: "Kompetisi akademik bagi peserta didik SD/MI, SMP/MTs, SMA/MA/SMK dengan berbagai mata pelajaran.",
    features: ["IPA", "IPS", "Matematika", "Bahasa Inggris", "Pendidikan Pancasila"],
    color: "blue",
  },
  {
    icon: BookOpen,
    title: "Olimpiade Tingkat Internasional",
    description: "Ajangi kompetisi berskala internasional untuk menguji kemampuan di tingkat global.",
    features: ["International Standard", "Sertifikat Internasional", "Pengalaman Global"],
    color: "green",
  },
  {
    icon: Award,
    title: "Kompetisi Karya Ilmiah dan Riset",
    description: "Wadah bagi peserta didik untuk menampilkan hasil penelitian dan karya ilmiah.",
    features: ["Riset Siswa", "Karya Tulis Ilmiah", "Inovasi Teknologi"],
    color: "purple",
  },
  {
    icon: Video,
    title: "Webinar Edukatif",
    description: "Seminar online tentang pencegahan bullying, sekolah ramah anak, dan isu pendidikan mutakhir.",
    features: ["Anti Bullying", "Sekolah Ramah Anak", "Manajemen Branding Sekolah"],
    color: "orange",
  },
];

export default function ProgramPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".program-card",
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Program GoJuara</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Berbagai program kompetisi dan edukasi untuk mengembangkan potensi generasi muda Indonesia
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
              Go Juara adalah platform berbasis web yang dirancang untuk menyelenggarakan
              olimpiade pelajar secara online. Program ini mencakup berbagai kompetisi
              akademik dan ilmiah tingkat nasional hingga internasional, serta webinar
              edukatif untuk mendukung pengembangan pendidikan yang inovatif dan inklusif.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section ref={sectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="program-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${program.color === "blue" ? "bg-blue-100" :
                  program.color === "green" ? "bg-green-100" :
                    program.color === "purple" ? "bg-purple-100" : "bg-orange-100"
                  }`}>
                  <program.icon className={`${program.color === "blue" ? "text-blue-600" :
                    program.color === "green" ? "text-green-600" :
                      program.color === "purple" ? "text-purple-600" : "text-orange-600"
                    }`} size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className={`inline-flex items-center gap-2 font-medium ${program.color === "blue" ? "text-blue-600 hover:text-blue-700" :
                    program.color === "green" ? "text-green-600 hover:text-green-700" :
                      program.color === "purple" ? "text-purple-600 hover:text-purple-700" : "text-orange-600 hover:text-orange-700"
                    }`}
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Mengikuti Kompetisi?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Daftarkan dirimu sekarang dan jadilah bagian dari generasi cerdas Indonesia
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Daftar Sekarang
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
