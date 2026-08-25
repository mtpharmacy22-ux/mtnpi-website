"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site-content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/95 shadow-card backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700 font-display text-sm font-bold text-cream-100 sm:h-11 sm:w-11">
            MT
          </span>
          <span className="font-display text-sm font-semibold leading-tight text-forest-800 sm:text-base">
            Mother Teresa
            <span className="block text-[11px] font-medium text-sage-600 sm:text-xs">
              Nursing &amp; Paramedical Institute
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-forest-800/80 transition-colors hover:text-forest-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#admissions" className="btn-primary">
            Apply Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center text-forest-800 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-cream-100 shadow-lift lg:hidden"
          >
            <nav className="container-page flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm px-3 py-3 text-sm font-medium text-forest-800 hover:bg-forest-700/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#admissions"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                Apply Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
