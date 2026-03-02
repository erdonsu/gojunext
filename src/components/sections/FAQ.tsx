"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Bagaimana cara mendaftar?",
    answer:
      "Untuk mendaftar, kunjungi halaman Program di website GoJuara dan ikuti petunjuk yang tertera. Isi formulir pendaftaran dengan informasi yang diminta, dan pastikan untuk melengkapi semua persyaratan yang dibutuhkan.",
  },
  {
    question: "Bagaimana kompetisi GoJuara dinilai?",
    answer:
      "Proses penilaian kompetisi GoJuara umumnya didasarkan pada skor atau poin yang diperoleh oleh peserta berdasarkan penilaian jawaban mereka dalam tes atau tantangan yang diberikan. Penilaian dapat dilakukan oleh juri atau sistem otomatis yang telah ditentukan.",
  },
  {
    question: "Apakah ada biaya pendaftaran?",
    answer:
      "Biaya pendaftaran kompetisi GoJuara dapat berbeda-beda tergantung pada jenis kompetisi yang diadakan. Beberapa kompetisi gratis dan beberapa berbayar. Informasi terkait biaya pendaftaran akan dijelaskan pada halaman program.",
  },
  {
    question: "Siapa yang dapat mengikuti kejuaraan GoJuara?",
    answer:
      "Kompetisi GoJuara terbuka untuk semua individu atau tim yang memenuhi persyaratan yang ditetapkan. Persyaratan umumnya mencakup usia, tingkat pendidikan, atau kriteria khusus yang sesuai dengan jenis program kompetisi yang diadakan.",
  },
  {
    question: "Apa manfaat yang bisa didapatkan?",
    answer:
      "Mengikuti kompetisi GoJuara memberikan kesempatan untuk memperoleh sertifikat penghargaan, piala, dan merchandise eksklusif. Selain itu, peserta juga dapat mengasah pengetahuan, keterampilan, dan membangun jaringan dengan peserta lainnya.",
  },
  {
    question: "Bagaimana cara mendapatkan informasi lebih lanjut?",
    answer:
      "Untuk informasi lebih lanjut, kamu bisa mengunjungi halaman Kontak, atau bisa melalui whatsapp dengan menekan tombol whatsapp di pojok kanan bawah.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan seputar GoJuara
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="text-blue-600" size={20} />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  size={24}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
