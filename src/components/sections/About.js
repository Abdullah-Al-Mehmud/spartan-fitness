"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Users, Target, Award, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "@/components/ui/SectionHeading";

const tabs = [
  {
    id: "mission",
    label: "Mission",
    content: "To empower individuals in Dhaka to build strength, discipline, and healthy lifestyles. We provide high-end international facilities, certified trainers, and personalized coaching systems designed to deliver guaranteed results.",
    icon: Target,
  },
  {
    id: "vision",
    label: "Vision",
    content: "To be the gold standard of premium boutique fitness in Bangladesh, expanding our community of relentless individuals and consistently raising the bar for athletic conditioning, training biomechanics, and recovery.",
    icon: Award,
  },
  {
    id: "philosophy",
    label: "Philosophy",
    content: "Discipline is the foundation of success. We reject quick-fixes, fat-loss pills, and unsustainable crash diets. We advocate progressive overload weight training, clean nutritional fueling, and scientific body tracking.",
    icon: Dumbbell,
  },
];



const timelineEvents = [
  { year: "2016", title: "Mirpur-7 Branch Founded", desc: "Started as a strength training gym on Milk Vita Road, sectional center Section-7." },
  { year: "2019", title: "Community Expansion", desc: "Introduced advanced cardiovascular layouts and group conditioning zones." },
  { year: "2023", title: "Mirpur-14 Branch Launch", desc: "Opened our second luxury branch inside Rofiq Tower at Kachukhet Road." },
  { year: "2026", title: "Dhaka's Elite Brand", desc: "Voted one of the top premium fitness centers in Mirpur with 1,200+ active members." },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("mission");

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Collage mask/clip-path reveals
      gsap.fromTo(
        ".about-img-main",
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", scale: 1.1 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-main",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-img-tr",
        { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", scale: 1.1 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-tr",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".about-img-bl",
        { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", scale: 1.1 },
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          scale: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: ".about-img-bl",
            start: "top 85%",
          },
        }
      );

      // Parallax collage movements
      gsap.to(".about-img-tr", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".about-img-bl", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Experience badge scale-in
      gsap.fromTo(
        ".about-badge",
        { scale: 0, rotation: -15 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-badge",
            start: "top 90%",
          },
        }
      );



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
    }
  }, []);

  return (
    <section id="about" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <SectionHeading
          eyebrow="WHO WE ARE"
          title="About Spartan Fitness"
          subtext="Dhaka&apos;s premier luxury fitness center. We build custom strength training programs, bodybuilding frameworks, and weight loss blueprints that deliver results."
          className="mb-16"
        />

        {/* Row 1: Collage + Story with Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Interactive Collage */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[500px] w-full">
            {/* Background Accent Grid */}
            <div className="absolute inset-0 bg-offwhite rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none" />

            {/* Main large image */}
            <div
              className="about-img-main absolute top-0 left-0 w-[65%] h-[75%] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-dark"
            >
              <Image
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800"
                alt="Spartan Gym interior"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Overlapping top-right image */}
            <div
              className="about-img-tr absolute top-12 right-0 w-[45%] h-[50%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-dark"
            >
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600"
                alt="Member lifting weights"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Overlapping bottom-left image */}
            <div
              className="about-img-bl absolute bottom-0 right-[20%] w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-dark"
            >
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
                alt="Barbell rack section"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Success highlights overlay tag */}
            <div
              className="about-badge absolute bottom-8 right-0 bg-dark text-white rounded-xl shadow-2xl p-4 flex flex-col items-center justify-center border border-white/10"
            >
              <span className="font-heading text-3xl text-primary leading-none">10+</span>
              <span className="font-body text-[9px] uppercase tracking-widest text-white/55 mt-1">
                Years of Excellence
              </span>
            </div>
          </div>

          {/* Right: Story & Interactive Tabs */}
          <div className="lg:col-span-6 flex flex-col">
            <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-tight text-dark mb-4">
              Building a community of high performers in Dhaka.
            </h3>
            <p className="font-body text-muted text-sm md:text-base leading-relaxed mb-8">
              Spartan Fitness is one of the leading premium fitness centers in Dhaka. We provide world-class gym equipment, certified trainers, strength training, bodybuilding, weight loss programs, functional fitness, cardio training, and personalized coaching for beginners and professionals alike.
            </p>

            {/* Interactive Tab Headers */}
            <div className="flex border-b border-gray-200">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 pb-4 px-4 font-body text-xs font-bold uppercase tracking-wider relative transition-colors ${
                      activeTab === tab.id ? "text-primary" : "text-muted hover:text-dark"
                    }`}
                  >
                    <TabIcon size={14} />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeAboutTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Interactive Tab Contents */}
            <div className="py-6 min-h-[140px] flex items-start">
              <AnimatePresence mode="wait">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.id && (
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-body text-sm text-muted leading-relaxed"
                      >
                        {tab.content}
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            {/* Explore Timeline button */}
            <div className="mt-2">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-dark hover:text-primary transition-colors group"
              >
                <span>View Membership plans</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>



        {/* Timeline Section */}
        <div className="pt-20 border-t border-dark/5">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h4 className="font-heading text-2xl uppercase tracking-wider text-dark mb-3">
              Spartan Journey Timeline
            </h4>
            <p className="font-body text-xs sm:text-sm text-muted leading-relaxed">
              A visual history of our relentless growth, dedication to excellence, and expanding fitness spaces in Dhaka.
            </p>
          </div>

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
                    <div
                      className="bg-offwhite rounded-3xl p-6 border border-dark/5 shadow-lg hover:border-primary/20 hover:shadow-primary/5 transition-all duration-300"
                    >
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

      </div>
    </section>
  );
}
