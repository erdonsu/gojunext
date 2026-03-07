"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { Target, BookOpen, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Lahir dari Pengalaman",
    description: "Ditulis langsung oleh praktisi yang lebih dari satu dekade berkecimpung di dunia perlindungan anak dan pendidikan nasional.",
  },
  {
    icon: BookOpen,
    title: "Diakui Secara Nasional",
    description: "Diterbitkan oleh Erlangga dan Masmedia, penerbit terpercaya rujukan para pendidik Indonesia.",
  },
  {
    icon: Users,
    title: "Untuk Semua",
    description: "Untuk guru, orang tua, dan anak — buku yang menjawab tantangan nyata generasi Indonesia hari ini.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline triggered on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "power3.out" },
      });

      // Left photos fan in
      tl.fromTo(".photo-left-1",
        { opacity: 0, x: -80, rotation: 0 },
        { opacity: 1, x: 0, rotation: -8, duration: 0.9, ease: "back.out(1.5)" }
      )
        .fromTo(".photo-left-2",
          { opacity: 0, x: -50, rotation: 0 },
          { opacity: 1, x: 0, rotation: -2, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.7"
        )
        // Center text reveal
        .fromTo(".reveal-text",
          { opacity: 0, y: 40, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          { opacity: 1, y: 0, clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)", duration: 1, stagger: 0.2, ease: "power3.out" },
          "-=0.7"
        )
        // Right photos fan in
        .fromTo(".photo-right-1",
          { opacity: 0, x: 80, rotation: 0 },
          { opacity: 1, x: 0, rotation: 8, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.75"
        )
        .fromTo(".photo-right-2",
          { opacity: 0, x: 50, rotation: 0 },
          { opacity: 1, x: 0, rotation: 2, duration: 0.9, ease: "back.out(1.5)" },
          "-=0.75"
        );

      // Start floating loops (inside context so ctx.revert() cleans them)
      gsap.to(".photo-left-1", { y: -14, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(".photo-left-2", { y: 12, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.6 });
      gsap.to(".photo-right-1", { y: -10, duration: 3.0, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.3 });
      gsap.to(".photo-right-2", { y: 16, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.9 });

      // Cards stagger
      gsap.fromTo(".about-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-cards",
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden" id="tentang">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* === 3-Column: [photos left] [center text] [photos right] === */}
        <div className="flex items-center gap-8 lg:gap-12 mb-20">

          {/* Left floating photos */}
          <div className="relative shrink-0 w-[220px] h-[420px] hidden lg:block">
            {/* Back photo — taller, rotated */}
            <div
              className="photo-left-1 absolute top-4 left-0 w-[130px] rounded-2xl bg-gray-200 shadow-2xl"
              style={{ aspectRatio: "3/4", transformOrigin: "bottom center" }}
            />
            {/* Front photo — slightly smaller, less rotation */}
            <div
              className="photo-left-2 absolute bottom-0 right-0 w-[150px] rounded-2xl bg-gray-300 shadow-xl ring-4 ring-white"
              style={{ aspectRatio: "3/4", transformOrigin: "bottom center" }}
            />
          </div>

          {/* Center — title & paragraphs */}
          <div className="flex-1 text-center max-w-2xl mx-auto">
            <div className="reveal-text inline-block bg-blue-50 border border-blue-200 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 tracking-wide">
              Tentang Kami
            </div>
            <h2 className="reveal-text text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-8 pb-2">
              Membangun{" "}
              <span className="text-blue-600">Generasi</span>
              <br />
              Cerdas &amp;{" "}
              <span className="relative inline-block">
                Berkarakter
                <span className="absolute -bottom-1 left-0 w-full h-[3px] sm:h-[4px] bg-yellow-400 rounded-full" />
              </span>
            </h2>
            <p className="reveal-text text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6">
              Setelah sukses mengadakan puluhan kompetisi dan mendampingi ribuan
              pelajar dari seluruh Indonesia, GoJuara ingin hadir lebih dekat lagi
              — tidak hanya di panggung kejuaraan, tapi juga di rak buku di rumah,
              di meja belajar, dan di tangan para guru.
            </p>
            <p className="reveal-text text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed">
              Bersama Associate Prof. Dr. Susanto, MA — mantan Ketua KPAI, peraih
              penghargaan penulis pendidikan terbaik nasional, dan pendiri Yayasan
              Pusat Sang Juara — kami menghadirkan karya-karya yang lahir dari
              pengalaman nyata di lapangan. Bukan sekadar buku, melainkan bekal
              untuk generasi yang lebih siap menghadapi dunia.
            </p>
          </div>

          {/* Right floating photos */}
          <div className="relative shrink-0 w-[220px] h-[420px] hidden lg:block">
            {/* Back photo */}
            <div
              className="photo-right-1 absolute top-4 right-0 w-[130px] rounded-2xl bg-gray-200 shadow-2xl"
              style={{ aspectRatio: "3/4", transformOrigin: "bottom center" }}
            />
            {/* Front photo */}
            <div
              className="photo-right-2 absolute bottom-0 left-0 w-[150px] rounded-2xl bg-gray-300 shadow-xl ring-4 ring-white"
              style={{ aspectRatio: "3/4", transformOrigin: "bottom center" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-100 mb-16" />

        {/* === 3 Feature Cards === */}
        <div className="about-cards grid sm:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="about-card group p-6 rounded-2xl border border-gray-100 bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              style={{ transitionProperty: "all" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#0055b8";
                el.style.borderColor = "#0055b8";
                const iconBox = el.querySelector<HTMLElement>(".icon-box");
                const icon = el.querySelector<HTMLElement>(".icon-box svg");
                const title = el.querySelector<HTMLElement>(".card-title");
                const desc = el.querySelector<HTMLElement>(".card-desc");
                if (iconBox) { iconBox.style.backgroundColor = "rgba(255,255,255,0.15)"; iconBox.style.borderColor = "rgba(255,255,255,0.2)"; }
                if (icon) icon.style.color = "#fde047";
                if (title) title.style.color = "#fde047";
                if (desc) desc.style.color = "rgba(255,255,255,0.8)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "";
                el.style.borderColor = "";
                const iconBox = el.querySelector<HTMLElement>(".icon-box");
                const icon = el.querySelector<HTMLElement>(".icon-box svg");
                const title = el.querySelector<HTMLElement>(".card-title");
                const desc = el.querySelector<HTMLElement>(".card-desc");
                if (iconBox) { iconBox.style.backgroundColor = ""; iconBox.style.borderColor = ""; }
                if (icon) icon.style.color = "";
                if (title) title.style.color = "";
                if (desc) desc.style.color = "";
              }}
            >
              <div className="icon-box w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-5 shadow-sm" style={{ transition: "all 0.3s" }}>
                <feature.icon className="text-[#0055b8]" size={20} style={{ transition: "color 0.3s" }} />
              </div>
              <h3 className="card-title font-semibold text-gray-900 mb-2" style={{ transition: "color 0.3s" }}>
                {feature.title}
              </h3>
              <p className="card-desc text-sm text-gray-500 leading-relaxed" style={{ transition: "color 0.3s" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
