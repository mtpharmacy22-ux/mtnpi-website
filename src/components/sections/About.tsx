"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";

export function About() {
  return (
    <section id="about" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="overflow-hidden rounded-sm border border-forest-700/10 shadow-card">
          <ImageSlot
            alt="Students and faculty at Mother Teresa Nursing & Paramedical Institute"
            label="Campus / Classroom Photo"
            path="/public/images/campus/about-institute.jpg"
            src={asset("/images/campus/about-institute.jpg")}
            aspect="aspect-[4/3]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">About the Institute</span>
          <h2 className="section-heading mt-3">
            About Mother Teresa Nursing &amp; Paramedical Institute
          </h2>
          <p className="mt-5 text-base leading-relaxed text-forest-700/75">
            Mother Teresa Nursing &amp; Paramedical Institute prepares students for
            careers in nursing and paramedical sciences through quality
            education, practical training, skilled faculty and professional
            development. Every student is guided from foundational nursing
            skills through to real clinical exposure, so they graduate ready
            for the responsibilities of professional healthcare.
          </p>
          <p className="mt-4 text-base leading-relaxed text-forest-700/75">
            With well-equipped laboratories, digitally-enabled classrooms and a
            dedicated parental hospital for internship training, the institute
            is built around one goal: shaping future caregivers with knowledge
            and skill.
          </p>
          <a href="#courses" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-forest-700 hover:text-forest-800">
            Learn About Our Courses
            <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
