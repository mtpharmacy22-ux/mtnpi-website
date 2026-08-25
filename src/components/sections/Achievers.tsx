"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievers } from "@/data/site-content";

export function Achievers() {
  return (
    <section id="achievements" className="bg-forest-800 py-20 text-cream-100 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-400/80">Achievements</span>
          <h2 className="section-heading mt-3 text-cream-100">Our Recent Achievers</h2>
          <p className="mt-4 text-base leading-relaxed text-cream-100/70">
            Our students and alumni carrying the institute&rsquo;s training into
            hospitals and healthcare systems across India.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {achievers.map((person) => (
            <motion.div
              key={person.name}
              variants={revealItem}
              whileHover={{ y: -3 }}
              className="flex items-start gap-3 rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <Award size={16} />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-cream-100">{person.name}</p>
                <p className="mt-1 text-xs leading-relaxed text-cream-100/60">{person.note}</p>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
