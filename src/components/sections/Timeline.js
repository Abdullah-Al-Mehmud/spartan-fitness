"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

const timelineEvents = [
  {
    year: "2016",
    title: "Mirpur-7 Branch Founded",
    desc: "Started as a strength training gym on Milk Vita Road, sectional center Section-7.",
  },
  {
    year: "2019",
    title: "Community Expansion",
    desc: "Introduced advanced cardiovascular layouts and group conditioning zones.",
  },
  {
    year: "2023",
    title: "Mirpur-14 Branch Launch",
    desc: "Opened our second luxury branch inside Rofiq Tower at Kachukhet Road.",
  },
  {
    year: "2026",
    title: "Dhaka's Elite Brand",
    desc: "Voted one of the top premium fitness centers in Mirpur with 1,200+ active members.",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Journey Timeline - Draw vertical line
        gsap.fromTo(
          ".timeline-line",
          { scaleY: 0, transformOrigin: "top" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".timeline-line",
              start: "top 70%",
              end: "bottom 70%",
              scrub: true,
            },
          }
        );

        // Timeline Row elements animation triggers
        const rows = gsap.utils.toArray(".timeline-event-row");
        rows.forEach((row) => {
          const dot = row.querySelector(".timeline-event-dot");
          const card = row.querySelector(".timeline-event-card");
          const isReverse = row.classList.contains("lg:flex-row-reverse");

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });

          tl.fromTo(
            dot,
            { scale: 0 },
            { scale: 1, duration: 0.4, ease: "back.out(1.8)" }
          ).fromTo(
            card,
            { opacity: 0, x: isReverse ? 40 : -40, filter: "blur(2px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.6, ease: "power3.out" },
            "-=0.2"
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="bg-white py-20 border-t border-dark/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="OUR JOURNEY"
          title="Spartan Journey Timeline"
          subtext="A visual history of our relentless growth, dedication to excellence, and expanding fitness spaces in Dhaka."
          className="mb-16 text-center mx-auto"
        />

        <div className="relative max-w-5xl mx-auto py-8">
          {/* Vertical Line */}
          <div className="timeline-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-dark/10 lg:-translate-x-1/2" />

          <div className="space-y-12 relative">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className={`timeline-event-row relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Card (alternating left or right) */}
                <div className="timeline-event-card w-full lg:w-[45%] pl-12 lg:pl-0 lg:px-8 opacity-0">
                  <div className="bg-offwhite rounded-3xl p-6 border border-dark/5 shadow-lg hover:border-primary/20 hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-lg text-primary">{ev.year}</span>
                      <h5 className="font-heading text-sm uppercase tracking-wide text-dark font-bold">
                        {ev.title}
                      </h5>
                    </div>
                    <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="timeline-event-dot absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md z-10 lg:-translate-x-1/2 mt-5 lg:mt-0 opacity-0" />

                {/* Spacer Column */}
                <div className="w-full lg:w-[45%] hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
