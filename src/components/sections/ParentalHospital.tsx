"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Briefcase, ArrowRight } from "lucide-react";
import { parentalHospital } from "@/data/site-content";
import { asset } from "@/lib/asset";

const journey = [
  { label: "Education", icon: GraduationCap },
  { label: "Clinical Training", icon: Stethoscope },
  { label: "Professional Career", icon: Briefcase },
];

export function ParentalHospital() {
  return (
    <section className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Clinical Training</span>
          <h2 className="section-heading mt-3">
            Parental Hospital for Training &amp; Internship
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {journey.map((step, i) => (
            <motion.div key={step.label} variants={revealItem} className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 rounded-full border border-forest-700/15 bg-cream-50 px-4 py-2 shadow-card">
                <step.icon size={16} className="text-sage-600" />
                <span className="text-sm font-medium text-forest-800">{step.label}</span>
              </div>
              {i < journey.length - 1 && (
                <ArrowRight size={16} className="hidden text-forest-700/30 sm:block" />
              )}
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold text-forest-800">
              {parentalHospital.name}
            </h3>
            <p className="mt-1 text-sm font-medium text-sage-600">
              {parentalHospital.location}
            </p>
            <p className="mt-5 text-base leading-relaxed text-forest-700/75">
              {parentalHospital.description}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 gap-3">
            <div className="col-span-2 overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
              <ImageSlot
                alt="Health Line Hospital building, Adarsh Nagar, Jaipur"
                label="Hospital Exterior Photo"
                path="/public/images/hospital/health-line-exterior.jpg"
                src={asset("/images/hospital/health-line-exterior.jpg")}
                aspect="aspect-[16/9]"
              />
            </div>
            <div className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
              <ImageSlot
                alt="Health Line Hospital signage"
                label="Hospital Signage"
                path="/public/images/hospital/health-line-signage.jpg"
                src={asset("/images/hospital/health-line-signage.jpg")}
                aspect="aspect-square"
              />
            </div>
            <div className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
              <ImageSlot
                alt="Clinical procedure at Health Line Hospital"
                label="Clinical Training Photo"
                path="/public/images/hospital/health-line-clinical.jpg"
                src={asset("/images/hospital/health-line-clinical.jpg")}
                aspect="aspect-square"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
