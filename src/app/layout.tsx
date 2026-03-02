import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoJuara - Olimpiade Online Nasional",
  description: "GoJuara adalah wadah kejuaraan tingkat nasional yang didedikasikan untuk mempertemukan para calon juara cerdas dari berbagai daerah di seluruh Indonesia.",
  keywords: ["olimpiade", "kompetisi", "nasional", "pendidikan", "gojuara", "sangjuara"],
  openGraph: {
    title: "GoJuara - Olimpiade Online Nasional",
    description: "Bersiaplah menjadi juara dan ukir prestasi terbaikmu bersama GoJuara!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
