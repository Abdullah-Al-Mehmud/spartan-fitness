"use client";

import Image from "next/image";
import { Award, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

// Custom SVG Social Icons to prevent package version dependency errors
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const trainers = [
  {
    id: 1,
    name: "Marcus Reid",
    role: "Head Coach & Founder",
    specialty: "Strength & Conditioning",
    experience: "12+ Years Experience",
    certificates: ["CSCS", "NASM-PES", "USAW-L2"],
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Sofia Chen",
    role: "Senior Coach",
    specialty: "Yoga & Core Mobility",
    experience: "8+ Years Experience",
    certificates: ["RYT-500", "FMS Level 2", "PN-L1 Nutrition"],
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "James Carter",
    role: "Lead Performance Coach",
    specialty: "CrossFit & Athletic HIIT",
    experience: "10+ Years Experience",
    certificates: ["CF-L3 Trainer", "USAW-L1", "NASM-CES"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 4,
    name: "Aisha Patel",
    role: "Nutrition Specialist & Coach",
    specialty: "Body Composition & Dietetics",
    experience: "7+ Years Experience",
    certificates: ["RD (Registered Dietitian)", "CSSD", "NASM-CNC"],
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=600",
    social: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
    },
  },
];

export default function Coaches() {
  const socials = [
    ["instagram", "Instagram", Instagram],
    ["facebook", "Facebook", Facebook],
    ["twitter", "Twitter", Twitter],
  ];

  return (
    <section id="trainers" className="sp-section sp-light overflow-hidden">
      <span className="sp-ghost" aria-hidden>COACHES</span>
      <div className="sp-container">
        <SectionHeading
          eyebrow="EXPERT TEAM"
          title="Meet Our Elite Trainers"
          subtext="Every trainer at Spartan holds industry-leading certifications, years of competitive athletic experience, and is dedicated to your transformation."
          className="mb-16 lg:mb-24"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-14 lg:gap-x-8">
          {trainers.map((trainer, i) => (
            <ScrollReveal
              key={trainer.id}
              delay={(i % 4) * 0.1}
              className={i % 2 === 1 ? "lg:mt-14" : ""}
            >
              <article className="group flex flex-col h-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-dark shadow-[0_24px_50px_-28px_rgba(10,10,10,0.5)]">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 right-4 font-heading text-sm text-white/70">0{i + 1}</span>

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
                    {trainer.certificates.slice(0, 2).map((cert) => (
                      <span
                        key={cert}
                        className="bg-white/10 backdrop-blur-md text-white font-body text-[9px] font-bold tracking-wider px-2.5 py-1 rounded-full border border-white/20 uppercase"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] font-body">
                    {trainer.specialty}
                  </span>
                  <h3 className="font-heading text-xl uppercase tracking-tight text-current mt-2">{trainer.name}</h3>
                  <p className="sp-muted font-body text-xs mt-1">{trainer.role}</p>

                  <div className="sp-hairline my-5" />

                  <div className="space-y-2.5 font-body text-xs sp-muted">
                    <div className="flex items-center gap-2">
                      <Calendar size={13} className="text-primary flex-shrink-0" />
                      <span>{trainer.experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Award size={13} className="text-primary flex-shrink-0 mt-0.5" />
                      <span>{trainer.certificates.join(", ")}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    {socials.map(([key, label, Icon]) =>
                      trainer.social[key] ? (
                        <a
                          key={key}
                          href={trainer.social[key]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="sp-muted hover:text-primary transition-colors"
                          aria-label={label}
                        >
                          <Icon />
                        </a>
                      ) : null
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
