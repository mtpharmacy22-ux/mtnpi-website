"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { library } from "@/data/site-content";

export function Library() {
  return (
    <section className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card lg:order-2">
          <ImageSlot
            src="/images/library/library-reading-area.jpg"
            alt="Students using the institute library"
            label="Library Photograph"
            path="/public/images/library/library-reading-area.jpg"
            aspect="aspect-[4/3]"
          />
        </Reveal>

        <div className="lg:order-1">
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <BookOpen size={14} /> Library
            </span>
            <h2 className="section-heading mt-3">{library.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-forest-700/70">
              {library.intro}
            </p>
          </Reveal>

          <RevealGroup className="mt-8 space-y-4">
            {library.features.map((f) => (
              <motion.div key={f.title} variants={revealItem} className="border-l-2 border-gold-500 pl-4">
                <p className="font-display text-sm font-semibold text-forest-800">{f.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-forest-700/65">{f.description}</p>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
