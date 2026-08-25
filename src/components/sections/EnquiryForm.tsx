"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, Send } from "lucide-react";
import { courses } from "@/data/site-content";

type FormState = {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  course: courses[0]?.name ?? "",
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (!/^\d{10}$/.test(values.phone.replace(/\D/g, ""))) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.course) {
    errors.course = "Please select a course.";
  }
  return errors;
}

export function EnquiryForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // NOTE: This form does not send data anywhere yet. Wire it up to an
      // API route, email service, or CRM before going live.
      setSubmitted(true);
      setValues(initialState);
    }
  };

  return (
    <section id="enquiry" className="bg-cream-100 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
        <Reveal>
          <span className="eyebrow">Admissions</span>
          <h2 className="section-heading mt-3">Admission Enquiry</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-forest-700/70">
            Share your details and our admissions team will get in touch with
            you regarding the B.Sc. Nursing programme.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {submitted ? (
            <div className="card-surface flex items-start gap-3 bg-sage-500/8 p-6">
              <CheckCircle2 className="mt-0.5 shrink-0 text-sage-600" size={22} />
              <div>
                <p className="font-display text-base font-semibold text-forest-800">
                  Thank you — your enquiry has been recorded.
                </p>
                <p className="mt-1 text-sm text-forest-700/65">
                  Our admissions team will reach out to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="card-surface bg-cream-50 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-sm border border-forest-700/20 bg-cream-50 px-3.5 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-700"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={values.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-sm border border-forest-700/20 bg-cream-50 px-3.5 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-700"
                    placeholder="98765 43210"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-sm border border-forest-700/20 bg-cream-50 px-3.5 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-700"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="course" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
                    Course Interested In
                  </label>
                  <select
                    id="course"
                    value={values.course}
                    onChange={handleChange("course")}
                    className="w-full rounded-sm border border-forest-700/20 bg-cream-50 px-3.5 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-700"
                  >
                    {courses.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-forest-700/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={values.message}
                    onChange={handleChange("message")}
                    className="w-full rounded-sm border border-forest-700/20 bg-cream-50 px-3.5 py-2.5 text-sm text-forest-900 outline-none transition-colors focus:border-forest-700"
                    placeholder="Tell us anything that would help us assist you"
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                Submit Enquiry
                <Send size={16} />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
