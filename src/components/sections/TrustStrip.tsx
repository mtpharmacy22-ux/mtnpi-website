"use client";

import { RevealGroup, revealItem } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { trustHighlights } from "@/data/site-content";
import { motion } from "framer-motion";

export function TrustStrip() {
  return (
    <section className="relative bg-cream-100 py-12 sm:py-16">
      <div className="container-page">
        <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {trustHighlights.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              whileHover={{ y: -4 }}
              className="card-surface flex flex-col items-start gap-3 p-5 transition-shadow hover:shadow-lift"
            >
              <motion.span
                whileHover={{ scale: 1.12, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700/8 text-forest-700"
              >
                <Icon name={item.icon as IconName} size={18} strokeWidth={1.75} />
              </motion.span>
              <p className="font-display text-sm font-semibold leading-snug text-forest-800">
                {item.title}
              </p>
              <p className="text-xs leading-relaxed text-forest-700/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
