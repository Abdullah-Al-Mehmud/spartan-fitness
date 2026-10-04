"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const galleryImages = [
  {
    id: 0,
    category: "facility",
    title: "Luxury Gym Interior",
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 1,
    category: "facility",
    title: "Premium Locker Room & Showers",
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    category: "strength",
    title: "Workout Area & Squat Platforms",
    src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    category: "strength",
    title: "Olympic Lifting Equipment",
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    category: "boxing",
    title: "Members Strike Training",
    src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    category: "mobility",
    title: "Yoga & Group Classes Studio",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    category: "facility",
    title: "Spartan Premium Reception",
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800",
  },
];

const categories = [
  { id: "all", label: "View All" },
  { id: "facility", label: "Facility" },
  { id: "strength", label: "Strength" },
  { id: "boxing", label: "Boxing" },
  { id: "mobility", label: "Mobility" },
];


const bentoSpan = (idx) => {
  if (idx % 7 === 0) return "col-span-2 row-span-2";
  if (idx % 7 === 4) return "md:col-span-2";
  return "";
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="sp-section sp-light">
      <span className="sp-ghost" aria-hidden>
        Arena
      </span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="GYM INTERIORS"
          title="Inside the Spartan Arena"
          subtext="Take a virtual tour of our high-end training zones, recovery suites, boxing ring, and boutique yoga rooms."
          className="mb-10 md:mb-12"
        />

        {/* Filter categories */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              aria-pressed={activeCategory === cat.id}
              className={`px-5 py-2.5 rounded-full font-body text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#0b0b0c] text-white border-[#0b0b0c]"
                  : "bg-white border-black/10 text-black/55 hover:text-black hover:border-primary/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[230px] gap-3 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => openLightbox(idx)}
                className={`relative rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer bg-[#0b0b0c] border border-black/5 shadow-[0_24px_48px_-28px_rgba(11,11,12,0.35)] ${bentoSpan(idx)}`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover grayscale-[70%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={14} />
                </div>
                <div className="absolute bottom-3 left-4 right-4 md:bottom-5 md:left-5">
                  <span className="font-body text-[9px] font-semibold text-primary-light uppercase tracking-[0.22em]">
                    {img.category}
                  </span>
                  <h4 className="font-heading text-xs md:text-sm text-white uppercase tracking-wide mt-1 leading-tight">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
              onClick={closeLightbox}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full p-2.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>

              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-6 z-10 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full p-2.5 sm:p-3.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-4xl max-h-[80vh] aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 cursor-default"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filteredImages[lightboxIndex].src}
                  alt={filteredImages[lightboxIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 text-left">
                  <span className="font-body text-[10px] font-semibold text-primary-light uppercase tracking-[0.22em]">
                    {filteredImages[lightboxIndex].category}
                  </span>
                  <h3 className="font-heading text-xl text-white uppercase tracking-wide mt-1">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                </div>
              </motion.div>

              <button
                onClick={showNext}
                className="absolute right-2 sm:right-6 z-10 text-white/60 hover:text-white bg-white/5 border border-white/10 rounded-full p-2.5 sm:p-3.5 hover:scale-105 transition-all focus:outline-none cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
