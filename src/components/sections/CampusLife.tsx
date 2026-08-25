"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { campusLifeImages } from "@/data/site-content";
import { asset } from "@/lib/asset";

export function CampusLife() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Campus Life</span>
          <h2 className="section-heading mt-3">Life Beyond the Classroom</h2>
          <p className="mt-4 text-base leading-relaxed text-forest-700/70">
            Learning, teamwork, leadership and experiences that help students
            grow beyond academics.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {campusLifeImages.map((item) => {
            const slug = item.caption.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <motion.div
                key={item.caption}
                variants={revealItem}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card"
              >
                <ImageSlot
                  alt={item.caption}
                  label={item.category}
                  path={`/public/images/students/${slug}.jpg`}
                  src={asset(`/images/students/${slug}.jpg`)}
                  aspect="aspect-[4/5]"
                />
                <div className="bg-cream-50 p-4">
                  <p className="font-display text-sm font-semibold text-forest-800">{item.caption}</p>
                  <p className="mt-0.5 text-xs text-forest-700/50">{item.category}</p>
                </div>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
