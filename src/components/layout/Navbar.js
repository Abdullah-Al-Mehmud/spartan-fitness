"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/", id: "hero", targetId: "hero" },
  { label: "About", href: "/about", id: "about", targetId: "about" },
  { label: "Results", href: "/#results", id: "results", targetId: "results" },
  { label: "Pricing", href: "/#pricing", id: "pricing", targetId: "pricing" },
  { label: "Why Us", href: "/#why-choose-us", id: "why-choose-us", targetId: "why-choose-us" },
  { label: "Contact", href: "/contact", id: "contact", targetId: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const pathname = usePathname();
  const router = useRouter();

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

  // Intersection Observer for scroll-linked active states on the home page
  useEffect(() => {
    if (pathname !== "/") return;

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

    const sectionIds = ["hero", "results", "pricing", "why-choose-us"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (link) => {
    setMobileOpen(false);

    // Close any open gallery lightbox or full-screen overlay immediately
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("close-gallery-lightbox"));
      document.body.style.overflow = "";
      if (window.__lenis) {
        window.__lenis.start();
      }
    }

    // If it's a dedicated page route (/about, /contact)
    if (link.href === "/about" || link.href === "/contact") {
      router.push(link.href);
      return;
    }

    // If it's Home
    if (link.href === "/") {
      if (pathname === "/") {
        const heroEl = document.getElementById("hero");
        if (heroEl) {
          if (typeof window !== "undefined" && window.__lenis) {
            window.__lenis.scrollTo(heroEl, { offset: -80, duration: 1.0 });
          } else {
            heroEl.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        router.push("/");
      }
      return;
    }

    // If it's an on-page section (/#[id])
    if (pathname === "/") {
      const el = document.getElementById(link.targetId);
      if (el) {
        if (typeof window !== "undefined" && window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -80, duration: 1.0 });
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(link.href);
    }
  };

  const isLinkActive = (link) => {
    if (link.href === "/about") return pathname === "/about";
    if (link.href === "/contact") return pathname === "/contact";
    if (pathname === "/") {
      if (link.href === "/" && activeSection === "hero") return true;
      if (link.targetId === activeSection) return true;
    }
    return false;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl"
            : "bg-transparent border-b border-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  handleNavClick(navLinks[0]);
                }
              }}
              className="font-heading text-xl sm:text-2xl lg:text-3xl tracking-tighter uppercase text-white focus:outline-none flex items-center gap-2 sm:gap-2.5 group"
            >
              <Image
                src="/logo.png"
                alt="Spartan Fitness Logo"
                width={48}
                height={40}
                className="w-auto h-9 sm:h-10 lg:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-7 xl:gap-8">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`font-body text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300 relative py-2 cursor-pointer ${
                      active ? "text-white font-bold" : "text-white/60 hover:text-white"
                    }`}
                  >
                    {link.label}

                    {/* Active dot indicator */}
                    {active && (
                      <motion.span
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(208,59,59,0.7)]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick(navLinks.find((l) => l.id === "contact"))}
                className="font-body text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-md bg-primary text-white hover:bg-primary-dark transition-all duration-300 cursor-pointer shadow-md shadow-primary/20"
              >
                Book Now
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white hover:text-primary focus:outline-none transition-colors duration-300 cursor-pointer"
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
            className="fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between h-14 sm:h-16 border-b border-white/10 pb-2">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2"
                >
                  <Image
                    src="/logo.png"
                    alt="Spartan Fitness Logo"
                    width={40}
                    height={32}
                    className="w-auto h-8 sm:h-9 object-contain"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white hover:text-primary focus:outline-none cursor-pointer"
                  aria-label="Close menu"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-5 sm:gap-6 mt-10 sm:mt-14 text-center">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);
                  return (
                    <motion.button
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                      key={link.label}
                      onClick={() => handleNavClick(link)}
                      className={`font-heading text-2xl sm:text-3xl uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                        active
                          ? "text-primary font-bold"
                          : "text-white/80 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="my-8 flex flex-col items-center">
              <button
                className="w-full max-w-xs bg-primary text-white font-body font-semibold py-3.5 rounded-md hover:bg-primary-dark transition-all duration-300 uppercase tracking-widest text-xs cursor-pointer shadow-lg shadow-primary/25"
                onClick={() => handleNavClick(navLinks.find((l) => l.id === "contact"))}
              >
                Book Free Session
              </button>
              <p className="font-body text-[11px] text-white/40 mt-5 uppercase tracking-[0.2em]">
                Forge Your Best Self
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
