import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Announcements from "@/components/sections/Announcements";
import FAQ from "@/components/sections/FAQ";
import MediaCoverage from "@/components/sections/MediaCoverage";

export const metadata: Metadata = {
  title: "GoJuara - Olimpiade Online Nasional Indonesia",
  description: "GoJuara adalah platform Olimpiade Online Nasional untuk siswa dan pelajar di seluruh Indonesia. Ikuti kompetisi, raih prestasi, dan kembangkan potensi terbaikmu.",
  keywords: ["olimpiade", "kompetisi", "pelajar", "siswa", "nasional", "online", "gojuara", "sang juara", "pendidikan", "prestasi"],
  openGraph: {
    title: "GoJuara - Olimpiade Online Nasional Indonesia",
    description: "Platform Olimpiade Online Nasional untuk siswa dan pelajar di seluruh Indonesia",
    type: "website",
    locale: "id_ID",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Benefits />
      <Announcements />
      <FAQ />
      <MediaCoverage />
    </>
  );
}
