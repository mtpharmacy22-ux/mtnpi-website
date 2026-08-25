"use client";

import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-forest-700 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #FAF6EC 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-cream-100 sm:text-4xl lg:text-5xl">
            Start Your Journey in Healthcare
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg">
            Take the first step towards a rewarding career in nursing and
            healthcare.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#enquiry"
              className="btn-gold"
            >
              Apply Now
              <ArrowRight size={16} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className="btn-secondary border-cream-100/30 text-cream-100 hover:border-cream-100 hover:bg-cream-100/10"
            >
              <Phone size={16} />
              Contact Us
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
