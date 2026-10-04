"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Services", href: "#programs", id: "programs" },
  { label: "About", href: "#about", id: "about" },
  { label: "Results", href: "#trainers", id: "trainers" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Intersection Observer for scroll-linked active states
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="font-heading text-2xl md:text-3xl tracking-tighter uppercase text-white focus:outline-none flex items-center gap-0.5 group"
            >
              <span className="text-primary font-bold transition-transform duration-300 group-hover:scale-110">
                SPARTAN
              </span>
              <span className="text-white/60 text-lg md:text-xl ml-1 font-body font-light tracking-wider">
                FITNESS
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(link.href);
                    }}
                    className={`font-body text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                      isActive
                        ? "text-white"
                        : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    {link.label}

                    {/* Active dot indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNav("#contact")}
                className="font-body text-[11px] font-semibold uppercase tracking-wider px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white hover:text-primary focus:outline-none transition-colors duration-300"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between h-16">
                <span className="font-heading text-3xl tracking-tighter uppercase text-white">
                  <span className="text-primary">SPARTAN</span>
                  <span className="text-white/60 text-lg ml-1 font-body font-light">FITNESS</span>
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-white hover:text-primary focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6 mt-16 text-center">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className={`font-heading text-3xl uppercase tracking-wider transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mb-12 flex flex-col items-center">
              <button
                className="w-full max-w-xs bg-primary text-white font-body font-semibold py-3.5 rounded-md hover:bg-primary-dark transition-all duration-300"
                onClick={() => handleNav("#contact")}
              >
                Book Now
              </button>
              <p className="font-body text-xs text-white/30 mt-6 uppercase tracking-widest">
                Forge Your Best Self
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
