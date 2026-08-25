"use client";

import { Reveal, RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/site-content";

export function Contact() {
  const primaryPhone = contact.phones[0];
  const waLink = `https://wa.me/91${primaryPhone}`;
  const telLink = `tel:+91${primaryPhone}`;

  return (
    <section id="contact" className="bg-forest-800 py-20 text-cream-100 sm:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-gold-400/80">Contact</span>
          <h2 className="section-heading mt-3 text-cream-100">Get in Touch</h2>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={revealItem} className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-6">
            <MapPin className="text-gold-400" size={20} />
            <p className="mt-3 font-display text-sm font-semibold">Head Office</p>
            <p className="mt-1 text-sm leading-relaxed text-cream-100/65">{contact.headOffice}</p>
          </motion.div>

          <motion.div variants={revealItem} className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-6">
            <MapPin className="text-gold-400" size={20} />
            <p className="mt-3 font-display text-sm font-semibold">Campus</p>
            <p className="mt-1 text-sm leading-relaxed text-cream-100/65">{contact.campus}</p>
          </motion.div>

          <motion.div variants={revealItem} className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-6">
            <Mail className="text-gold-400" size={20} />
            <p className="mt-3 font-display text-sm font-semibold">Email</p>
            <a href={`mailto:${contact.email}`} className="mt-1 block text-sm text-cream-100/65 hover:text-cream-100">
              {contact.email}
            </a>
          </motion.div>

          <motion.div variants={revealItem} className="rounded-sm border border-cream-100/12 bg-cream-100/[0.04] p-6">
            <Phone className="text-gold-400" size={20} />
            <p className="mt-3 font-display text-sm font-semibold">Mobile</p>
            <div className="mt-1 space-y-0.5">
              {contact.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="block text-sm text-cream-100/65 hover:text-cream-100">
                  {p}
                </a>
              ))}
            </div>
          </motion.div>
        </RevealGroup>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={telLink} className="btn-gold">
            <Phone size={16} />
            Call Now
          </a>
          <a href={`mailto:${contact.email}`} className="btn-secondary border-cream-100/30 text-cream-100 hover:border-cream-100 hover:bg-cream-100/10">
            <Mail size={16} />
            Email Us
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary border-cream-100/30 text-cream-100 hover:border-cream-100 hover:bg-cream-100/10">
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        {/* Google Maps embed */}
        <Reveal delay={0.15} className="mt-12 overflow-hidden rounded-sm border border-cream-100/12 bg-cream-50">
          <iframe
            title="Mother Teresa Nursing & Paramedical Institute campus location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(contact.campus)}&output=embed`}
            className="h-72 w-full sm:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="flex justify-end bg-cream-50 px-4 py-2.5">
            <a
              href={`https://www.google.com/maps/search/${encodeURIComponent(contact.campus)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-forest-700 hover:text-forest-800"
            >
              <MapPin size={13} />
              Open in Google Maps
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
