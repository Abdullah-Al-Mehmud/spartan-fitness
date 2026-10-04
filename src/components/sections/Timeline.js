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
    <section id="timeline" ref={sectionRef} className="sp-section sp-white overflow-hidden">
      <span className="sp-ghost" aria-hidden>SINCE 2016</span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="OUR JOURNEY"
          title="Spartan Journey Timeline"
          subtext="A visual history of our relentless growth, dedication to excellence, and expanding fitness spaces in Dhaka."
          align="center"
          className="mb-16 lg:mb-24"
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-black/10 lg:-translate-x-1/2" />
          <div className="timeline-line absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-primary lg:-translate-x-1/2" />

          <div className="space-y-10 lg:space-y-16 relative">
            {timelineEvents.map((ev, idx) => (
              <div
                key={idx}
                className={`timeline-event-row relative flex flex-col lg:flex-row items-start lg:items-center justify-between w-full ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="timeline-event-card w-full lg:w-[44%] pl-12 lg:pl-0 opacity-0">
                  <div className="sp-card p-7 lg:p-8 relative overflow-hidden">
                    <span className="font-heading text-6xl lg:text-7xl leading-none text-primary/90 block">
                      {ev.year}
                    </span>
                    <div className="sp-hairline my-5" />
                    <h5 className="font-heading text-base uppercase tracking-tight text-current">
                      {ev.title}
                    </h5>
                    <p className="sp-muted font-body text-sm leading-relaxed mt-2">
                      {ev.desc}
                    </p>
                  </div>
                </div>

                <div className="timeline-event-dot absolute left-4 lg:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-[0_0_0_6px_rgba(220,38,38,0.12)] z-10 -translate-x-1/2 top-8 lg:top-1/2 lg:-translate-y-1/2 opacity-0" />

                <div className="w-full lg:w-[44%] hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
