"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Saiduzzaman P. & Sajal D.",
    role: "Local Guides • Mirpur 7 Branch",
    quote:
      "Good place for gym, trainers are very friendly and professional, lots of machines are there. The best in Mirpur having a large set of instruments and an air-conditioned environment.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 2,
    name: "Md Ehatasham",
    role: "Verified Google Reviewer",
    quote:
      "Ambience is nice, Trainers are very friendly. A truly premium gym environment for anyone serious about fitness.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 3,
    name: "Sarah Khan",
    role: "Female Exclusive Trainee • Mirpur 7",
    quote:
      "The dedicated female hours from 3:00 PM to 6:00 PM make it so safe and comfortable. The diet plans and certified trainers really helped me stay on track.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
  {
    id: 4,
    name: "Tanvir Rahman",
    role: "Local Guide • Mirpur 14",
    quote:
      "World-class equipment, clean facilities, steam bath amenities, and extremely supportive coaches. Without a doubt the best gym experience in Mirpur.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    verified: true,
  },
];

export default function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 3500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

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
    <section id="reviews" className="relative py-16 sm:py-24 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      <div id="results" className="absolute -top-20 pointer-events-none" />
      {/* Ambient background glow */}
      <div className="crimson-ambient-glow -bottom-36 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[500px] opacity-30 pointer-events-none" />

      {/* Grid */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-8 sm:top-12" aria-hidden>
        REVIEWS
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <SectionHeading
            eyebrow="GOOGLE REVIEWS"
            title="Real Members. Real Results."
            subtext="Read genuine Google reviews from members across our Mirpur-7 and Mirpur-14 branches."
            className="sm:max-w-2xl"
          />

          <div className="flex items-center gap-2.5 sm:gap-3 self-start sm:self-auto">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-white/[0.04] text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4 sm:-ml-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6 min-w-0"
              >
                <div className="spartan-glass-card p-6 sm:p-8 flex flex-col justify-between h-full min-h-[300px] sm:min-h-[340px]">
                  <div>
                    {/* Stars & Quote Icon */}
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#F59E0B] text-[#F59E0B]" />
                        ))}
                      </div>
                      <Quote size={18} className="text-primary/40" />
                    </div>

                    {/* Quote text */}
                    <p className="text-white/80 font-body text-xs sm:text-sm leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Member info */}
                  <div className="pt-5 sm:pt-6 border-t border-white/10 flex items-center gap-3 mt-5 sm:mt-6">
                    <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 bg-[#1A1A1C] flex-shrink-0">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-heading text-xs sm:text-sm font-bold uppercase tracking-tight text-white truncate">
                          {t.name}
                        </span>
                        {t.verified && (
                          <CheckCircle2 size={12} className="text-primary fill-primary/20 flex-shrink-0" />
                        )}
                      </div>
                      <p className="font-body text-[11px] text-white/50 truncate">
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
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                selectedIndex === idx ? "w-7 sm:w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
