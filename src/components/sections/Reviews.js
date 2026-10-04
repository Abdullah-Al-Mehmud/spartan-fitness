"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Member since 2023 • Banker",
    quote:
      "This gym completely transformed my approach to fitness. The coaches at Mirpur-7 are incredible and the community keeps me motivated every single day. I have never felt stronger or more confident.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 2,
    name: "Tanvir Rahman",
    role: "Member since 2021 • Software Engineer",
    quote:
      "After trying countless gyms in Dhaka, I finally found a place that feels like home. The training programs are science-backed and the results speak for themselves. Down 30 pounds and still going.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 3,
    name: "Tasnim Ahmed",
    role: "Member since 2022 • Entrepreneur",
    quote:
      "The coaches here don't just train you — they educate you. I have learned more about proper form and nutrition in one year than I did in a decade of working out on my own.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 4,
    name: "Rashed Chowdhury",
    role: "Member since 2020 • Corporate Manager",
    quote:
      "From the moment you walk into the Mirpur-14 branch, you feel the energy. This isn't just a gym — it's a family. The accountability and support system here is completely unmatched.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section id="reviews" className="relative py-28 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -bottom-36 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-30 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-12" aria-hidden>
        REVIEWS
      </span>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Shattering Expectations"
            subtext="Read real growth stories from our dedicated members who transformed their bodies and minds at Spartan Fitness."
            className="md:max-w-2xl"
          />

          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer shadow-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
              >
                <div className="spartan-glass-card p-8 flex flex-col justify-between h-full min-h-[340px]">
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={15} className="fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <Quote size={20} className="text-primary/40" />
                    </div>

                    {/* Quote text */}
                    <p className="text-white/80 font-body text-sm leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Member info */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-3.5 mt-6">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 bg-[#1A1A1C]">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-sm font-bold uppercase tracking-tight text-white">
                          {t.name}
                        </span>
                        {t.verified && (
                          <CheckCircle2 size={13} className="text-primary fill-primary/20" />
                        )}
                      </div>
                      <p className="font-body text-xs text-white/50">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === idx ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
