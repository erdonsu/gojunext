"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function QuoteSection() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pin section + scrub animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=600",
                    pin: true,
                    scrub: 1.2,
                },
            });

            // Quote mark scales up first
            tl.fromTo(".quote-mark",
                { opacity: 0, scale: 0.4, y: 40 },
                { opacity: 0.15, scale: 1, y: 0, duration: 0.3 }
            )
                // Words reveal satu per satu via scrub
                .fromTo(".quote-word",
                    { opacity: 0, y: 30, filter: "blur(6px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        duration: 0.15,
                        stagger: 0.04,
                    },
                    "-=0.1"
                )
                // Attribution fades in
                .fromTo(".quote-author",
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.2 },
                    "-=0.05"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const quote = "Anak yang tumbuh dengan pengetahuan yang benar akan menjadi generasi yang tidak hanya cerdas, tapi juga berani membela kebenaran.";
    const words = quote.split(" ");

    return (
        <div className="quote-section-wrapper">
            <section
                ref={sectionRef}
                className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "#0055b8" }}
            >
                {/* Subtle texture overlay */}
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Big decorative quote mark */}
                <div
                    className="quote-mark absolute top-12 left-1/2 -translate-x-1/2 text-white select-none pointer-events-none"
                    style={{ fontSize: "clamp(8rem, 20vw, 15rem)", lineHeight: 1, fontFamily: "'Playfair Display', Georgia, serif", opacity: 0 }}
                >
                    "
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24 text-center">
                    <p
                        className="font-bold leading-tight mb-12 text-white"
                        style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}
                    >
                        {words.map((word, i) => (
                            <span
                                key={i}
                                className="quote-word inline-block mr-[0.25em]"
                                style={{ opacity: 0 }}
                            >
                                {word}
                            </span>
                        ))}
                    </p>

                    {/* Author */}
                    <div className="quote-author flex flex-col items-center gap-4 mt-6" style={{ opacity: 0 }}>
                        <div className="w-20 h-1 bg-yellow-400 rounded-full" />
                        <div>
                            <p className="text-[#fde047] text-xl sm:text-2xl font-bold tracking-wide">
                                Assoc. Prof. Dr. Susanto, MA
                            </p>
                            <p className="text-white/80 text-sm sm:text-base mt-2 font-medium">
                                Tokoh Inspiratif Pendidikan Nasional
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom yellow accent line */}
                <div className="absolute bottom-0 inset-x-0 h-1 bg-yellow-400 opacity-80" />
            </section>
        </div>
    );
}
