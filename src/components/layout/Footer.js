"use client";

import { Check, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Custom SVG Social Icons
const Instagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Why Spartan", href: "#why-choose-us" },
  { label: "Transformations", href: "#transformations" },
  { label: "Membership Plans", href: "#pricing" },
  { label: "Get in Touch", href: "#contact" },
];

const programLinks = [
  { label: "Personal Training", href: "#why-choose-us" },
  { label: "Strength & Bodybuilding", href: "#why-choose-us" },
  { label: "Weight Loss Systems", href: "#transformations" },
  { label: "Nutrition Guidance", href: "#pricing" },
];

const branchesList = [
  {
    name: "Mirpur 7 Branch (Bike Zone Building)",
    address: "Level-3, 1/1 Milk Vita Road, Block-3, Chalantika Mor",
    phone: "01688-664545",
  },
  {
    name: "Mirpur 14 Branch (Apex/Foodnest Building)",
    address: "Level-4, Rofiq Tower, 211/8 Kachukhet Road",
    phone: "01688-664545",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/SPARTANFITNESSBD",
    label: "Facebook (facebook.com/SPARTANFITNESSBD)",
  },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Accent glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-12 sm:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Logo and Tagline Column */}
          <div className="lg:col-span-4 flex flex-col">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              className="font-heading text-2xl sm:text-3xl tracking-tighter uppercase focus:outline-none flex items-center gap-2.5 group">
              <Image
                src="/logo.png"
                alt="Spartan Fitness Logo"
                width={48}
                height={40}
                className="w-auto h-10 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="font-body text-xs text-white/60 mt-3 sm:mt-4 leading-relaxed max-w-sm">
              Join a community of fitness enthusiasts. Enjoy world-class equipment, free personalized diet plans, and expert trainers in a fully air-conditioned, premium space.
            </p>
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              {socialLinks.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-white/5 hover:bg-primary border border-white/10 hover:border-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-300"
                    aria-label={s.label}>
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 col-span-1">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-white mb-4 sm:mb-6 font-bold">
              Explore
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="font-body text-xs text-white/50 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-3 col-span-1">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-white mb-4 sm:mb-6 font-bold">
              Programs
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {programLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className="font-body text-xs text-white/50 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-white mt-6 sm:mt-8 mb-3 sm:mb-4 font-bold">
              Dhaka Branches
            </h4>
            <ul className="space-y-2">
              {branchesList.map((branch, idx) => (
                <li
                  key={idx}
                  className="font-body text-[11px] text-white/40 leading-relaxed">
                  <span className="font-semibold text-white/60 block">
                    {branch.name}
                  </span>
                  Phone: {branch.phone}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 sm:col-span-2">
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-white mb-4 sm:mb-6 font-bold">
              Newsletter
            </h4>
            <p className="font-body text-xs text-white/50 mb-4 leading-relaxed">
              Subscribe to get fitness tips, nutritional guides, and exclusive
              membership offers in Dhaka.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl p-3 text-xs">
                <Check size={14} className="flex-shrink-0" />
                <span>Thank you! You are subscribed.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col xs:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl font-body text-xs text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-primary text-white p-3 rounded-xl hover:bg-primary-dark transition-colors duration-300 flex-shrink-0 flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe">
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-5 sm:py-6">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-[10px] text-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Spartan Fitness. All rights
            reserved.
          </p>
          <div className="flex gap-5 sm:gap-6">
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#pricing");
              }}
              className="font-body text-[10px] text-white/30 hover:text-primary uppercase tracking-widest transition-colors">
              Privacy Policy
            </a>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#pricing");
              }}
              className="font-body text-[10px] text-white/30 hover:text-primary uppercase tracking-widest transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
