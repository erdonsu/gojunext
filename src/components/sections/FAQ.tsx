"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah GoJuara sudah tidak mengadakan kompetisi?",
    answer:
      "GoJuara tetap berkomitmen untuk mendukung generasi muda Indonesia — dan kompetisi adalah bagian dari DNA kami. Saat ini kami sedang mempersiapkan sesuatu yang lebih besar. Nantikan kompetisi GoJuara berikutnya, dan pastikan kamu sudah follow media sosial kami agar tidak ketinggalan!",
  },
  {
    question: "Bagaimana cara memesan buku?",
    answer:
      "Kamu bisa langsung klik tombol 'Beli Sekarang' di halaman buku yang kamu inginkan, lalu ikuti proses pemesanan. Kami akan menghubungi kamu untuk konfirmasi dan pengiriman.",
  },
  {
    question: "Berapa lama pengiriman buku?",
    answer:
      "Estimasi pengiriman 2–5 hari kerja tergantung lokasi kamu. Kami menggunakan jasa pengiriman terpercaya agar buku sampai dalam kondisi baik.",
  },
  {
    question: "Apakah buku ini tersedia di toko buku lain?",
    answer:
      "Sebagian buku sudah tersedia di Gramedia dan toko buku online seperti Tokopedia dan Shopee. Namun untuk harga terbaik dan edisi terbaru, kami rekomendasikan pesan lewat website ini.",
  },
  {
    question: "Buku ini cocok untuk siapa?",
    answer:
      "Tergantung judulnya — ada yang ditujukan untuk guru, orang tua, atau umum. Setiap halaman buku memiliki deskripsi lengkap tentang target pembacanya.",
  },
  {
    question: "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
    answer:
      "Ada! Untuk pembelian lebih dari 10 eksemplar (misalnya untuk sekolah atau komunitas), silakan hubungi kami langsung melalui halaman Kontak atau WhatsApp.",
  },
  {
    question: "Bagaimana jika buku yang saya terima rusak atau salah?",
    answer:
      "Kami bertanggung jawab penuh. Hubungi kami dalam 3x24 jam setelah buku diterima, dan kami akan proses penggantian tanpa biaya tambahan.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
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
    <section ref={sectionRef} className="py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0055b8]/8 text-[#0055b8] px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0055b8]" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
            Ada yang ingin{" "}
            <span className="text-[#0055b8]">ditanyakan?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Pertanyaan yang paling sering masuk — kami jawab langsung di sini.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "#0055b8",
                border: "2px solid #fde047",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left transition-opacity duration-200 hover:opacity-90"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className="font-semibold text-sm sm:text-base pr-4 leading-snug"
                  style={{ color: openIndex === index ? "#fde047" : "white" }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  size={20}
                  style={{ color: "#fde047" }}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div
                  className="px-6 pb-6 text-sm sm:text-base text-white/80 leading-relaxed font-medium"
                >
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
