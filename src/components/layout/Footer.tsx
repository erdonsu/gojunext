"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, MessageCircle, CheckCircle2 } from "lucide-react";

const mainLinks = [
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kontak", label: "Kontak" },
  { href: "/blog", label: "Blog" },
];

const socialLinks = [
  { href: "https://www.instagram.com/gojuara_official/", icon: Instagram, label: "Instagram" },
  { href: "https://www.tiktok.com/@gojuara_official", icon: MessageCircle, label: "TikTok" },
  { href: "https://www.youtube.com/", icon: Youtube, label: "Youtube" },
];

const legalInfo = [
  "Keputusan Menteri Hukum dan Ham RI., Nomor AHU - 0000569.AH.01.04 Tahun 2023",
  "Keputusan Menteri Investasi/BKPM, Nomor Induk Berusaha : 2010230070043",
  "Keputusan Dirjen Kekayaan Intelektual, Perlindungan Merek Go Juara Nomor IDM001245044",
];

export default function Footer() {
  return (
    <footer className="bg-[#0055b8]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand/About (Lebih lebar di desktop) */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6">
            <Link href="/">
              <Image
                src="/images/logo-gojuara.png"
                alt="GoJuara Logo"
                width={180}
                height={58}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/80 text-base leading-relaxed">
              Yayasan Pusat Sang Juara — mendampingi generasi muda Indonesia menjadi lebih cerdas dan berkarakter.
            </p>
            <div className="flex gap-4 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#fde047] hover:-translate-y-1 group transition-all duration-300 shadow-sm"
                >
                  <s.icon size={20} className="text-white group-hover:text-[#0055b8] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer untuk memberikan jarak antar kolom */}
          <div className="hidden lg:block lg:col-span-5"></div>

          {/* Menu Utama */}
          <div className="md:col-span-7 lg:col-span-3 flex flex-col md:items-end">
            <h4 className="font-extrabold mb-8 text-[#fde047] text-sm sm:text-base uppercase tracking-widest flex items-center md:justify-end w-full">
              MENU UTAMA
            </h4>
            <ul className="space-y-6 flex flex-col items-start md:items-end w-full">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white text-[15px] font-medium transition-all duration-200 inline-block hover:translate-x-1 md:hover:-translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* (Kolom dihapus) */}

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-10 w-full" />

        {/* Legal & Copyright */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-4">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3">
            {legalInfo.map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#fde047] opacity-90" />
                <p className="text-white/60 text-xs sm:text-[13px] font-medium tracking-wide">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-white/50 text-xs sm:text-[13px] font-medium tracking-wide mt-6">
            © {new Date().getFullYear()} GoJuara · Yayasan Pusat Sang Juara. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/6282258692808?text=Halo%2C+Admin+GoJuara%21+Saya+ingin+bertanya..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl shadow-green-500/30 transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white" />
      </a>
    </footer>
  );
}
