"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { galleryCategories } from "@/data/site-content";

type GalleryItem = {
  id: string;
  category: (typeof galleryCategories)[number];
  label: string;
};

const items: GalleryItem[] = [
  { id: "campus-1", category: "Campus", label: "Institute Building" },
  { id: "labs-1", category: "Labs", label: "Nutrition & Community Lab" },
  { id: "labs-2", category: "Labs", label: "Anatomy & Physiology Lab" },
  { id: "students-1", category: "Students", label: "Classroom Session" },
  { id: "events-1", category: "Events", label: "Institute Event" },
  { id: "sports-1", category: "Sports", label: "Sports Week" },
  { id: "activities-1", category: "Activities", label: "Group Activity" },
  { id: "campus-2", category: "Campus", label: "Campus Corridor" },
];

export function Gallery() {
  const [active, setActive] = useState<"All" | (typeof galleryCategories)[number]>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="bg-skyline-200 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-heading mt-3">Explore Our Campus</h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {(["All", ...galleryCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
                active === cat
                  ? "bg-forest-700 text-cream-100"
                  : "bg-cream-50 text-forest-700/60 hover:bg-forest-700/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setLightbox(item)}
                className="group overflow-hidden rounded-sm border border-forest-700/10 text-left shadow-card"
              >
                <div className="relative">
                  <ImageSlot
                    alt={item.label}
                    label={item.category}
                    path={`/public/images/gallery/${item.id}.jpg`}
                    aspect="aspect-square"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-forest-900/0 transition-colors group-hover:bg-forest-900/10" />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-forest-900/90 p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative w-full max-w-lg overflow-hidden rounded-sm bg-cream-50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                aria-label="Close"
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-forest-900/70 text-cream-100"
              >
                <X size={18} />
              </button>
              <ImageSlot
                alt={lightbox.label}
                label={lightbox.category}
                path={`/public/images/gallery/${lightbox.id}.jpg`}
                aspect="aspect-square"
              />
              <div className="p-4">
                <p className="font-display text-sm font-semibold text-forest-800">{lightbox.label}</p>
                <p className="text-xs text-forest-700/50">{lightbox.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
