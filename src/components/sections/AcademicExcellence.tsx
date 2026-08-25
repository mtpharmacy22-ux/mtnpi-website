"use client";

import { RevealGroup, revealItem, Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { academicExcellence } from "@/data/site-content";

export function AcademicExcellence() {
  return (
    <section id="facilities" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Facilities</span>
          <h2 className="section-heading mt-3">Academic Excellence</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
          {academicExcellence.map((point) => (
            <motion.div
              key={point}
              variants={revealItem}
              className="flex items-start gap-3 rounded-sm border border-forest-700/10 bg-cream-50 p-5"
            >
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-sage-600" />
              <p className="text-sm leading-relaxed text-forest-800">{point}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
