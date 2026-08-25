"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Icon, type IconName } from "@/components/ui/Icon";
import { motion } from "framer-motion";
import { labs } from "@/data/site-content";

export function Labs() {
  return (
    <section id="infrastructure" className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Infrastructure</span>
          <h2 className="section-heading mt-3">Our Labs</h2>
          <p className="mt-4 text-base leading-relaxed text-forest-700/70">
            Seven dedicated laboratories give every student real, hands-on
            practice long before they step onto a hospital floor.
          </p>
        </Reveal>

        {/* Horizontal scroll on mobile, grid on larger screens */}
        <div className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {labs.map((lab, i) => (
            <motion.div
              key={lab.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="card-surface min-w-[280px] shrink-0 snap-start overflow-hidden bg-cream-50 lg:min-w-0"
            >
              <ImageSlot
                src={`/images/labs/${lab.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg`}
                alt={`${lab.name} photograph`}
                label="Lab Photograph"
                path={`/public/images/labs/${lab.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.jpg`}
                aspect="aspect-[4/3]"
              />
              <div className="p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest-700/8 text-forest-700">
                  <Icon name={lab.icon as IconName} size={18} strokeWidth={1.75} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-forest-800">
                  {lab.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest-700/65">
                  {lab.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
