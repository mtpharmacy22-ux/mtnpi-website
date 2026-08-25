"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Quote } from "lucide-react";
import { directorMessage } from "@/data/site-content";

export function DirectorMessage() {
  return (
    <section className="bg-forest-800 py-20 text-cream-100 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-sm overflow-hidden rounded-sm border border-cream-100/15 shadow-lift lg:mx-0">
          <ImageSlot
            alt="Dr. I. B. Khan, Director, Mother Teresa Nursing & Paramedical Institute"
            label="Director Photograph"
            path="/public/images/director/dr-ib-khan.jpg"
            aspect="aspect-[4/5]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Quote className="text-gold-400" size={32} strokeWidth={1.5} />
          <span className="eyebrow mt-4 block text-gold-400/80">Director&rsquo;s Message</span>
          <div className="mt-4 space-y-4">
            {directorMessage.message.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-cream-100/85 sm:text-lg">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-8 border-t border-cream-100/15 pt-5">
            <p className="font-display text-lg font-semibold">{directorMessage.name}</p>
            <p className="text-sm text-cream-100/60">{directorMessage.designation}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
