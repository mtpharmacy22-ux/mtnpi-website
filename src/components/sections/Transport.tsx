"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { Bus } from "lucide-react";
import { transport } from "@/data/site-content";

export function Transport() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-2">
              <Bus size={14} /> Transport
            </span>
            <h2 className="section-heading mt-3">{transport.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-forest-700/70">
              {transport.intro}
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2">
            {transport.highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={revealItem}
                className="rounded-sm border border-forest-700/10 bg-cream-50 p-5"
              >
                <p className="font-display text-sm font-semibold text-forest-800">{h.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-forest-700/60">{h.description}</p>
              </motion.div>
            ))}
          </RevealGroup>

          <a href="#contact" className="btn-primary mt-8">
            Enquire About Transport
          </a>
        </div>

        <Reveal delay={0.1} className="overflow-hidden rounded-sm border border-forest-700/10 shadow-lift">
          <ImageSlot
            src="/images/transport/college-bus.jpg"
            alt="College-owned bus for student transport"
            label="College Bus Photograph"
            path="/public/images/transport/college-bus.jpg"
            aspect="aspect-square"
          />
        </Reveal>
      </div>
    </section>
  );
}
