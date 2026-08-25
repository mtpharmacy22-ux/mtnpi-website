"use client";

import { RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import { missionVision } from "@/data/site-content";

export function MissionVision() {
  const cards = [
    { title: "Mission", icon: Target, body: missionVision.mission },
    { title: "Vision", icon: Eye, body: missionVision.vision },
  ];

  return (
    <section className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page">
        <RevealGroup className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map(({ title, icon: IconEl, body }) => (
            <motion.div
              key={title}
              variants={revealItem}
              className="card-surface flex flex-col gap-5 bg-cream-50 p-8 sm:p-10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest-700 text-cream-100">
                <IconEl size={22} strokeWidth={1.75} />
              </span>
              <h3 className="font-display text-2xl font-semibold text-forest-800">
                {title}
              </h3>
              <p className="text-base leading-relaxed text-forest-700/75">{body}</p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
