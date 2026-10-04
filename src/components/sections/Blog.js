"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const articles = [
  {
    id: 1,
    category: "Training",
    title: "The Physics of Progressive Overload",
    excerpt: "Understand the biological mechanisms behind muscle hypertrophy. Learn how tracking total set volume and bar velocity drives absolute power.",
    date: "Jul 2, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Marcus Reid",
      avatar: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=100",
    },
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Optimal Macros for Body Recomposition",
    excerpt: "Calorie counts dictate scale weight, but macronutrient ratios structure body composition. Unlock the exact protein-fat formulas for lean muscle mass.",
    date: "Jun 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1605296867304-46d5465a25f1?auto=format&fit=crop&q=80&w=100",
    },
  },
  {
    id: 3,
    category: "Recovery",
    title: "Unlocking Kinetic Mobility & Fascial Release",
    excerpt: "Stiff joint capsules and fascia limit muscle fibers recruitment. Try these five myofascial active stretching positions to optimize skeletal depth.",
    date: "Jun 22, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600",
    author: {
      name: "Sofia Chen",
      avatar: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=100",
    },
  },
];


const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

function Meta({ article }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] sp-muted">
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={12} className="text-primary" />
        {article.date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock size={12} className="text-primary" />
        {article.readTime}
      </span>
    </div>
  );
}

function Author({ article }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative w-8 h-8 rounded-full overflow-hidden bg-black/10">
        <Image
          src={article.author.avatar}
          alt={article.author.name}
          fill
          className="object-cover"
          sizes="32px"
        />
      </div>
      <span className="font-body text-xs font-semibold">By {article.author.name}</span>
    </div>
  );
}

export default function Blog() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const [featured, ...rest] = articles;

  return (
    <section id="blog" className="sp-section sp-light">
      <span className="sp-ghost" aria-hidden>
        Journal
      </span>
      <div className="sp-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <SectionHeading
            eyebrow="SPARTAN JOURNAL"
            title="Read Our Fitness Blog"
            subtext="Stay educated with evidence-based articles detailing movement patterns, nutrition facts, and athletic recovery protocols."
            className="md:max-w-2xl"
          />

          <button
            onClick={() => handleScroll("#contact")}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-primary transition-colors group cursor-pointer self-start md:self-auto"
          >
            <span>Subscribe to articles</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Featured */}
          <motion.article
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <div className="sp-card group h-full overflow-hidden flex flex-col cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-5 left-5 bg-primary text-white font-body text-[10px] font-semibold tracking-[0.16em] px-3.5 py-1.5 rounded-full uppercase">
                  {featured.category}
                </span>
              </div>
              <div className="p-6 md:p-10 flex flex-col flex-1">
                <Meta article={featured} />
                <h3 className="font-heading text-2xl md:text-3xl uppercase tracking-tight leading-[1.08] mt-4 group-hover:text-primary transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="sp-muted font-body text-sm leading-relaxed mt-4">
                  {featured.excerpt}
                </p>
                <div className="sp-hairline mt-8 mb-5" />
                <div className="flex items-center justify-between mt-auto">
                  <Author article={featured} />
                  <span className="font-body text-xs font-bold text-primary group-hover:translate-x-1 transition-transform duration-300">
                    Read Article &rarr;
                  </span>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Compact list */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {rest.map((article, i) => (
              <motion.article
                key={article.id}
                variants={reveal}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="flex-1"
              >
                <div className="sp-card group h-full overflow-hidden flex flex-col sm:flex-row cursor-pointer">
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5 sm:min-h-[180px] overflow-hidden bg-black flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 640px) 100vw, 20vw"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-white font-body text-[9px] font-semibold tracking-[0.16em] px-3 py-1 rounded-full uppercase">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-5 md:p-6 flex flex-col justify-between gap-4 flex-1">
                    <div>
                      <Meta article={article} />
                      <h3 className="font-heading text-base md:text-lg uppercase tracking-tight leading-[1.15] mt-3 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <Author article={article} />
                      <ArrowUpRight
                        size={18}
                        className="text-primary flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
