"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Trophy, BookOpen } from "lucide-react";
import { gsap } from "@/lib/gsap";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/kontak", label: "Kontak" },
];

const programMenuItems = [
  {
    icon: BookOpen,
    title: "Buku",
    desc: "Koleksi buku pendidikan karya Prof. Susanto — untuk guru, orang tua, dan anak",
    href: "/program/buku",
    badge: "Baru",
    badgeColor: "#0055b8",
    badgeText: "#ffffff",
  },
  {
    icon: Trophy,
    title: "Kompetisi",
    desc: "Ikuti kompetisi nasional untuk pelajar dari 34 provinsi Indonesia",
    href: "/program/kompetisi",
    badge: "Segera",
    badgeColor: "#fde047",
    badgeText: "#1a1a2e",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const navItemsRef = useRef<(HTMLElement | null)[]>([]);
  const glowRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const programBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(e.target as Node) &&
        programBtnRef.current &&
        !programBtnRef.current.contains(e.target as Node)
      ) {
        setIsProgramOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Animate mega menu
  useEffect(() => {
    if (!megaMenuRef.current) return;
    if (isProgramOpen) {
      gsap.fromTo(
        megaMenuRef.current,
        { opacity: 0, y: -12, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(1.5)" }
      );
      gsap.fromTo(
        ".mega-card",
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power3.out" }
      );
    }
  }, [isProgramOpen]);

  const handleMouseEnter = useCallback(
    (index: number) => {
      const el = navItemsRef.current[index];
      const glow = glowRefs.current[index];
      if (!el) return;

      gsap.killTweensOf(el);
      if (glow) gsap.killTweensOf(glow);

      gsap.to(el, {
        scale: 1.12,
        y: -3,
        duration: 0.4,
        ease: "elastic.out(1.2, 0.5)",
      });
      gsap.to(el, {
        backgroundColor: "rgba(255,255,255,0.18)",
        duration: 0.15,
        ease: "power1.out",
      });
      if (glow) {
        gsap.fromTo(
          glow,
          { opacity: 0, scale: 0.5 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
        );
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
    },
    [pathname]
  );

  const handleMouseLeave = useCallback(
    (index: number) => {
      const el = navItemsRef.current[index];
      const glow = glowRefs.current[index];
      if (!el) return;

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
    },
    [pathname]
  );

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Index offset: navLinks doesn't contain "Program", so adjust glow/hover indices
  // Program button is separate, so the regular links array starts at slot 0 in navLinks

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${isScrolled ? "pt-3 px-4" : "pt-5 px-6"
          }`}
      >
        <header
          className="rounded-full transition-all duration-500"
          style={{
            backgroundColor: "#0055b8",
            boxShadow: isScrolled
              ? "0 8px 30px rgba(0,85,184,0.35)"
              : "0 12px 40px rgba(0,85,184,0.25)",
          }}
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
              {/* Home */}
              <Link
                href="/"
                ref={(el) => {
                  navItemsRef.current[0] = el;
                }}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={() => handleMouseLeave(0)}
                className={`relative text-sm font-semibold tracking-wide uppercase px-5 py-2 rounded-full transition-colors duration-200 ${isActiveLink("/") ? "bg-white/20 text-amber-300" : "text-white/90"
                  }`}
              >
                <span
                  ref={(el) => {
                    glowRefs.current[0] = el;
                  }}
                  className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 pointer-events-none"
                  style={{ filter: "blur(8px)" }}
                />
                <span className="relative z-10">Home</span>
              </Link>

              {/* Produk — Mega Menu Trigger */}
              <div className="relative">
                <button
                  ref={programBtnRef}
                  onClick={() => setIsProgramOpen(!isProgramOpen)}
                  className={`relative text-sm font-semibold tracking-wide uppercase px-5 py-2 rounded-full transition-colors duration-200 flex items-center gap-1.5 ${isActiveLink("/program") || isProgramOpen
                    ? "bg-white/20 text-amber-300"
                    : "text-white/90 hover:bg-white/10"
                    }`}
                >
                  Produk
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${isProgramOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega Menu Dropdown */}
                {isProgramOpen && (
                  <div
                    ref={megaMenuRef}
                    className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[420px] rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: "#0055b8",
                      boxShadow: "0 25px 60px rgba(0,85,184,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
                    }}
                  >
                    {/* Arrow indicator */}
                    <div
                      className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45"
                      style={{ backgroundColor: "#0055b8" }}
                    />

                    <div className="relative p-4 space-y-2">
                      {programMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsProgramOpen(false)}
                          className="mega-card flex items-start gap-4 px-4 py-4 rounded-xl transition-all duration-200"
                          style={{ backgroundColor: "rgba(255,255,255,0)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0)";
                          }}
                        >
                          <div
                            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                          >
                            <item.icon size={20} style={{ color: "#fde047" }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span
                                className="font-bold text-sm"
                                style={{ color: "#fde047" }}
                              >
                                {item.title}
                              </span>
                              <span
                                className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: item.badgeColor,
                                  color: item.badgeText,
                                }}
                              >
                                {item.badge}
                              </span>
                            </div>
                            <p
                              className="text-xs leading-relaxed"
                              style={{ color: "rgba(255,255,255,0.65)" }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom accent */}
                    <div className="h-1" style={{ backgroundColor: "#fde047" }} />
                  </div>
                )}
              </div>

              {/* Other nav links */}
              {navLinks.slice(1).map((link, i) => {
                const idx = i + 1; // offset for glow/hover refs
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    ref={(el) => {
                      navItemsRef.current[idx] = el;
                    }}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={() => handleMouseLeave(idx)}
                    className={`relative text-sm font-semibold tracking-wide uppercase px-5 py-2 rounded-full transition-colors duration-200 ${isActiveLink(link.href)
                      ? "bg-white/20 text-amber-300"
                      : "text-white/90"
                      }`}
                  >
                    <span
                      ref={(el) => {
                        glowRefs.current[idx] = el;
                      }}
                      className="absolute inset-0 rounded-full bg-amber-400/20 opacity-0 pointer-events-none"
                      style={{ filter: "blur(8px)" }}
                    />
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
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
          <div
            className="fixed top-[76px] left-4 right-4 md:hidden z-50 rounded-2xl overflow-hidden p-2"
            style={{
              backgroundColor: "#0055b8",
              boxShadow: "0 16px 48px rgba(0,85,184,0.4)",
            }}
          >
            <Link
              href="/"
              className={`block text-sm font-semibold tracking-wide uppercase transition-all py-4 px-5 rounded-xl border-b border-white/10 ${isActiveLink("/")
                ? "bg-white/20 text-amber-300"
                : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Produk section mobile */}
            <div className="border-b border-white/10">
              <button
                className="w-full text-left text-sm font-semibold tracking-wide uppercase py-4 px-5 text-white/90 flex items-center justify-between"
                onClick={() => setIsProgramOpen(!isProgramOpen)}
              >
                Produk
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isProgramOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isProgramOpen && (
                <div className="px-3 pb-3 space-y-1">
                  {programMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsProgramOpen(false);
                      }}
                    >
                      <item.icon size={16} style={{ color: "#fde047" }} />
                      <span className="text-sm font-semibold" style={{ color: "#fde047" }}>
                        {item.title}
                      </span>
                      <span
                        className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ml-auto"
                        style={{ backgroundColor: item.badgeColor, color: item.badgeText }}
                      >
                        {item.badge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm font-semibold tracking-wide uppercase transition-all py-4 px-5 rounded-xl ${isActiveLink(link.href)
                  ? "bg-white/20 text-amber-300"
                  : "text-white/90 hover:text-white hover:bg-white/10"
                  } ${index < navLinks.slice(1).length - 1 ? "border-b border-white/10" : ""}`}
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
