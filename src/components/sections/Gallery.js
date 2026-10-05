"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const allGymImages = [
  {
    id: 1,
    src: "/128868841_668587480486581_6912739221833064982_n.jpg",
    title: "World-Class Equipment",
    subtitle: "Main gym floor & training arena",
  },
  {
    id: 2,
    src: "/482207656_1042939214523051_8760506858185054018_n.jpg",
    title: "Heavy Duty Training Zone",
    subtitle: "Full-tier dumbbell racks & wall mirrors",
  },
  {
    id: 3,
    src: "/483486836_1044719391011700_5366499878390448875_n.jpg",
    title: "Premium Steam & Shower Facilities",
    subtitle: "Sanitized executive lockers & showers",
  },
  {
    id: 4,
    src: "/600137446_1268786391938331_7203306816429498144_n.jpg",
    title: "Surreal View from Cardio Section",
    subtitle: "High-end treadmills & ellipticals",
  },
  {
    id: 5,
    src: "/485851646_1052136656936640_8896535166201266335_n.jpg",
    title: "Olympic Lifting Platforms",
    subtitle: "Atmospheric neon powerlifting zone",
  },
  {
    id: 6,
    src: "/644271147_1327952692688367_6006543335469826725_n.jpg",
    title: "Deadlift & Bench Stations",
    subtitle: "Olympic barbells & calibrated bumper plates",
  },
  {
    id: 7,
    src: "/642365930_1326289702854666_806880661993599377_n.jpg",
    title: "Free Weights & Dumbbells",
    subtitle: "Adjustable benches & training stations",
  },
  {
    id: 8,
    src: "/644456055_1327951206021849_1569590051251111952_n.jpg",
    title: "Power Cardio Suite",
    subtitle: "Treadmills, stationary bikes & cables",
  },
  {
    id: 9,
    src: "/645536647_1327953429354960_6263470828489978040_n.jpg",
    title: "Ambient Floor Perspective",
    subtitle: "Spacious training layout with mood lighting",
  },
  {
    id: 10,
    src: "/645666575_1327952022688434_8360684593267943681_n.jpg",
    title: "Selectorized Pin Machines",
    subtitle: "Targeted isolation equipment & supplements",
  },
  {
    id: 11,
    src: "/485309162_1051877876962518_2632745172042704375_n.jpg",
    title: "Powerlifting Champions",
    subtitle: "National title winning Spartan coaches",
  },
  {
    id: 12,
    src: "/484858900_1051877893629183_5037714517241163362_n.jpg",
    title: "Championship Trophy Display",
    subtitle: "Spartan coaching authority & medals",
  },
  {
    id: 13,
    src: "/485183740_1051877630295876_1233986654342271267_n.jpg",
    title: "Spartan Reception Arena",
    subtitle: "Stronger than your excuses wall",
  },
  {
    id: 14,
    src: "/78265362_438422313503100_3318399802856701952_n.jpg",
    title: "Bodybuilding Competitors",
    subtitle: "Medal-winning athletes with head coach",
  },
  {
    id: 15,
    src: "/648949233_1334003835416586_1659062629155610190_n.jpg",
    title: "Spartan Brotherhood",
    subtitle: "Thriving supportive member community",
  },
  {
    id: 16,
    src: "/649124120_1334003815416588_3605754343687237129_n.jpg",
    title: "The Spartan Family",
    subtitle: "Mirpur's premier fitness collective",
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === null || prev === 0 ? allGymImages.length - 1 : prev - 1));
  }, []);

  const showNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === null || prev === allGymImages.length - 1 ? 0 : prev + 1));
  }, []);

  // Close lightbox on route change
  useEffect(() => {
    closeLightbox();
  }, [pathname, closeLightbox]);

  // Close lightbox on custom events or browser back/forward
  useEffect(() => {
    const handleClose = () => closeLightbox();
    window.addEventListener("close-gallery-lightbox", handleClose);
    window.addEventListener("popstate", handleClose);
    return () => {
      window.removeEventListener("close-gallery-lightbox", handleClose);
      window.removeEventListener("popstate", handleClose);
    };
  }, [closeLightbox]);

  // Keyboard navigation & escape listener
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [lightboxIndex]);

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#0D0D0F] overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="crimson-ambient-glow -top-32 -left-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />
      <div className="crimson-ambient-glow -bottom-32 -right-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] opacity-25 pointer-events-none" />

      {/* Grid Pattern */}
      <div className="spartan-dot-grid absolute inset-0 opacity-[0.035] pointer-events-none" />

      {/* Watermark */}
      <span className="spartan-watermark top-6 sm:top-10" aria-hidden>
        GALLERY
      </span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-8 sm:mb-12">
          <SectionHeading
            eyebrow="REAL GYM GALLERY"
            title="Step Into Excellence"
            subtext="Take an authentic look inside our facilities, championship coaches, heavy-duty equipment, and real Spartan community across Mirpur."
          />
        </div>

        {/* Small, compact gallery grid showing all images without categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-4">
          {allGymImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 0.45,
                delay: (idx % 4) * 0.05,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-white/10 bg-[#121214] shadow-md hover:border-primary/60 hover:shadow-[0_10px_30px_-8px_rgba(208,59,59,0.35)] transition-all duration-300 aspect-[4/3]"
            >
              {/* Image with subtle hover zoom */}
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover object-center filter brightness-[0.88] contrast-[1.05] group-hover:scale-110 group-hover:brightness-100 transition-transform duration-500 ease-out"
              />

              {/* Dark subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              {/* Top specular hairline */}
              <div className="absolute top-0 inset-x-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

              {/* Expand Icon */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/70 group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md">
                <Maximize2 size={13} />
              </div>

              {/* Caption pill at bottom */}
              <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3.5 z-10">
                <h4 className="font-heading text-[11px] sm:text-xs md:text-sm font-bold uppercase tracking-tight text-white leading-tight line-clamp-1 group-hover:text-primary transition-colors duration-200">
                  {img.title}
                </h4>
                <p className="font-body text-[9px] sm:text-[10px] text-white/60 line-clamp-1 mt-0.5">
                  {img.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Portalled to document.body so it is never trapped by parent sections */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {lightboxIndex !== null && allGymImages[lightboxIndex] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 cursor-zoom-out"
                onClick={closeLightbox}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 text-white/80 hover:text-white bg-white/10 hover:bg-primary border border-white/20 rounded-full p-2.5 sm:p-3 transition-all duration-300 cursor-pointer shadow-xl"
                  aria-label="Close Lightbox"
                >
                  <X size={20} className="sm:w-5 sm:h-5" />
                </button>

                {/* Prev Button */}
                <button
                  onClick={showPrev}
                  className="absolute left-2 sm:left-6 z-30 text-white/80 hover:text-white bg-black/70 hover:bg-primary border border-white/20 rounded-full p-2.5 sm:p-3.5 transition-all duration-300 cursor-pointer shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} className="sm:w-6 sm:h-6" />
                </button>

                {/* Image Container */}
                <motion.div
                  key={lightboxIndex}
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.94, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="relative max-w-4xl max-h-[82vh] w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-white/20 shadow-2xl cursor-default"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={allGymImages[lightboxIndex].src}
                    alt={allGymImages[lightboxIndex].title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />

                  {/* Caption Bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/85 to-transparent p-4 sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] text-primary mb-0.5">
                          Spartan Fitness Facility
                        </span>
                        <h3 className="font-heading text-base sm:text-xl uppercase tracking-tight text-white font-extrabold">
                          {allGymImages[lightboxIndex].title}
                        </h3>
                        <p className="font-body text-xs text-white/70 mt-0.5">
                          {allGymImages[lightboxIndex].subtitle}
                        </p>
                      </div>
                      <span className="font-body text-[11px] font-semibold text-white/40 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 flex-shrink-0">
                        {lightboxIndex + 1} / {allGymImages.length}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Next Button */}
                <button
                  onClick={showNext}
                  className="absolute right-2 sm:right-6 z-30 text-white/80 hover:text-white bg-black/70 hover:bg-primary border border-white/20 rounded-full p-2.5 sm:p-3.5 transition-all duration-300 cursor-pointer shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} className="sm:w-6 sm:h-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
