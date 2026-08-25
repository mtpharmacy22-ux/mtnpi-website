"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { siteConfig } from "@/data/site-content";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-forest-800 pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40"
    >
      {/* ambient texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF6EC 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-1.5">
            <ShieldCheck size={14} className="text-gold-400" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-gold-400">
              {siteConfig.affiliation}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] text-cream-100 sm:text-5xl lg:text-6xl">
            Shape Your Future
            <span className="block text-sage-400">in Healthcare</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-100/75 sm:text-lg">
            {siteConfig.instituteName}, Jaipur — building skilled, compassionate
            healthcare professionals through the{" "}
            <span className="font-semibold text-cream-100">B.Sc. Nursing</span>{" "}
            programme.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#admissions" className="btn-gold">
              Apply Now
              <ArrowRight size={16} />
            </a>
            <a href="#infrastructure" className="btn-secondary border-cream-100/30 text-cream-100 hover:border-cream-100 hover:bg-cream-100/10">
              Explore Our Campus
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-cream-100/10 pt-6">
            {["INC Affiliated", "RUHS Affiliated", "RNC Affiliated"].map((item) => (
              <span key={item} className="font-mono text-xs uppercase tracking-wide text-cream-100/60">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="overflow-hidden rounded-sm border border-cream-100/15 shadow-lift">
            <ImageSlot
              alt="Mother Teresa Nursing & Paramedical Institute campus building"
              label="Institute Building Photo"
              path="/public/images/hero/institute-building.jpg"
              src={asset("/images/hero/institute-building.jpg")}
              aspect="aspect-[4/5]"
            />
          </div>
          <div className="absolute -left-4 -bottom-4 hidden w-52 rounded-sm border border-forest-700/10 bg-cream-50 p-4 shadow-lift sm:block lg:-left-8 lg:-bottom-8 lg:w-60">
            <p className="font-display text-2xl font-semibold text-forest-800">B.Sc. Nursing</p>
            <p className="mt-1 text-xs text-forest-700/70">{siteConfig.affiliation}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
