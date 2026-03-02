"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, MessageCircle } from "lucide-react";

const mainLinks = [
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/program", label: "Program" },
  { href: "/kontak", label: "Kontak" },
  { href: "/artikel", label: "Artikel" },
];

const helpLinks = [
  { href: "/syarat-ketentuan", label: "Syarat dan Ketentuan" },
  { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
  { href: "#faq", label: "FAQ" },
  { href: "/kontak", label: "Karir" },
];

const socialLinks = [
  { href: "https://www.instagram.com/gojuara_official/", icon: Instagram, label: "Instagram" },
  { href: "https://www.tiktok.com/@gojuara_official", icon: MessageCircle, label: "TikTok" },
  { href: "https://www.youtube.com/", icon: Youtube, label: "Youtube" },
];

const legalInfo = [
  {
    text: "Keputusan Menteri Hukum dan Ham RI., Nomor AHU - 0000569.AH.01.04 Tahun 2023",
  },
  {
    text: "Keputusan Menteri Investasi/BKPM, Nomor Induk Berusaha : 2010230070043",
  },
  {
    text: "Keputusan Dirjen Kekayaan Intelektual, Perlindungan Merek Go Juara Nomor IDM001245044",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-gojuara.png"
                alt="GoJuara"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Yayasan Pusat Sang Juara adalah wadah yang mempertemukan para calon juara cerdas dari berbagai sekolah di seluruh Indonesia.
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Menu */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Bantuan</h3>
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Coming Soon */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ikuti Kami</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-gray-900 text-sm">Segera Hadir</h4>
              <Image
                src="/images/coming-soon.png"
                alt="Coming Soon"
                width={120}
                height={40}
                className="h-10 w-auto opacity-70"
              />
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="space-y-3">
            {legalInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-2">
                <Image
                  src="/images/verified-badge.png"
                  alt="Verified"
                  width={20}
                  height={20}
                  className="mt-0.5 flex-shrink-0"
                />
                <p className="text-gray-500 text-xs">{info.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2023 Copyright by GoJuara | Yayasan Pusat Sang Juara, All Right Reserved
          </p>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/6282258692808?text=Halo%2C+Admin+GoJuara%21+Saya+ingin+bertanya..."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </footer>
  );
}
