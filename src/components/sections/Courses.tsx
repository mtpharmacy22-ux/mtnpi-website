"use client";

import { Reveal } from "@/components/ui/Reveal";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { courses } from "@/data/site-content";

export function Courses() {
  return (
    <section id="courses" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-heading mt-3">Our Courses</h2>
          <p className="mt-4 text-base leading-relaxed text-forest-700/70">
            A focused, affiliated programme designed to build genuine clinical
            competence from day one.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-1">
          {courses.map((course) => (
            <Reveal key={course.name} delay={0.1}>
              <div className="card-surface grid overflow-hidden md:grid-cols-[0.9fr_1.1fr]">
                <div className="relative">
                  <ImageSlot
                    alt={`${course.name} students in a lab session`}
                    label="Course Image"
                    path="/public/images/labs/bsc-nursing-course.jpg"
                    aspect="aspect-[4/3] md:aspect-auto md:h-full"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10">
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-sage-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-sage-600">
                    <BadgeCheck size={13} />
                    {course.affiliation}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-forest-800 sm:text-3xl">
                    {course.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-forest-700/75">
                    {course.description}
                  </p>

                  <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-forest-700/10 pt-5">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-forest-700/45">
                        Duration
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-forest-800">
                        {course.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-forest-700/45">
                        Eligibility
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-forest-800">
                        {course.eligibility}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-wide text-forest-700/45">
                        Seats
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-forest-800">
                        {course.seats}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a href="#admissions" className="btn-primary">
                      Apply Now
                      <ArrowRight size={16} />
                    </a>
                    <a href="#infrastructure" className="btn-secondary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
