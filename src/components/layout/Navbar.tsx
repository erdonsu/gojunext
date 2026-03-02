"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/pengumuman", label: "Pengumuman" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const glowRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    const el = navItemsRef.current[index];
    const glow = glowRefs.current[index];
    if (!el) return;

    const active = isActiveLink(navLinks[index].href);
    if (active) return;

    // Kill any existing tweens
    gsap.killTweensOf(el);
    if (glow) gsap.killTweensOf(glow);

    // Elastic pop up
    gsap.to(el, {
      scale: 1.12,
      y: -3,
      duration: 0.4,
      ease: "elastic.out(1.2, 0.5)",
    });

    // Background pill slides in
    gsap.to(el, {
      backgroundColor: "rgba(255,255,255,0.18)",
      duration: 0.15,
      ease: "power1.out",
    });

    // Glow pulse
    if (glow) {
      gsap.fromTo(glow,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
      // Pulse loop
      gsap.to(glow, {
        opacity: 0.5,
        scale: 1.3,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.3,
      });
    }
  }, [pathname]);

  const handleMouseLeave = useCallback((index: number) => {
    const el = navItemsRef.current[index];
    const glow = glowRefs.current[index];
    if (!el) return;

    const active = isActiveLink(navLinks[index].href);
    if (active) return;

    gsap.killTweensOf(el);
    if (glow) gsap.killTweensOf(glow);

    gsap.to(el, {
      scale: 1,
      y: 0,
      backgroundColor: "rgba(255,255,255,0)",
      duration: 0.35,
      ease: "power3.out",
    });

    if (glow) {
      gsap.to(glow, {
        opacity: 0,
        scale: 0.5,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "pt-3 px-4" : "pt-5 px-6"
          }`}
      >
        <header
          className={`bg-blue-600 rounded-full transition-all duration-500 ${isScrolled
            ? "shadow-[0_8px_30px_rgba(37,99,235,0.35)]"
            : "shadow-[0_12px_40px_rgba(37,99,235,0.25)]"
            }`}
        >
          <div className="flex items-center gap-10 px-7 py-3.5">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/logo-gojuara.png"
                alt="GoJuara"
                width={140}
                height={46}
                className="h-10 w-auto brightness-0 invert"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1.5">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={(el) => { navItemsRef.current[index] = el; }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`relative text-sm font-semibold tracking-wide uppercase px-5 py-2 rounded-full transition-colors duration-200 ${isActiveLink(link.href)
                    ? "bg-white/20 text-amber-300"
                    : "text-white/90"
                    }`}
                >
                  {/* Glow effect behind text */}
                  <span
                    ref={(el) => { glowRefs.current[index] = el; }}
                    className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 pointer-events-none"
                    style={{ filter: "blur(8px)" }}
                  />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-amber-300 hover:text-amber-100 transition-colors ml-auto"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-[76px] left-4 right-4 md:hidden z-50 bg-blue-600 rounded-2xl shadow-[0_16px_48px_rgba(37,99,235,0.4)] overflow-hidden p-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-semibold tracking-wide uppercase transition-all py-4 px-5 rounded-xl ${isActiveLink(link.href)
                  ? "bg-white/20 text-amber-300"
                  : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${index < navLinks.length - 1 ? "border-b border-white/10" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
}
