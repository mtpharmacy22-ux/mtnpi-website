import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks, siteConfig } from "@/data/site-content";
import { asset } from "@/lib/asset";

export function Footer() {
  const quickLinks = navLinks.filter((l) =>
    ["Home", "About Us", "Courses", "Infrastructure", "Admissions", "Gallery", "Contact"].includes(
      l.label
    )
  );

  return (
    <footer className="bg-forest-800 text-cream-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/logo/mtnpi-logo.png")}
              alt="Mother Teresa Nursing & Paramedical Institute logo"
              className="h-10 w-10 rounded-full bg-cream-100 object-contain p-0.5"
            />
            <span className="font-display text-sm font-semibold leading-tight">
              Mother Teresa
              <span className="block text-xs font-medium text-cream-100/70">
                Nursing &amp; Paramedical Institute
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
            {siteConfig.tagline}
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream-100/75 transition-colors hover:text-cream-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/75">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{contact.headOffice}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${contact.email}`} className="hover:text-cream-100">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{contact.phones.join(" · ")}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-gold-400">
            Campus
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-cream-100/75">
            {contact.campus}
          </p>
          <a
            href="#admissions"
            className="btn-gold mt-5 inline-flex"
          >
            Apply Now
          </a>
        </div>
      </div>

      <div className="border-t border-cream-100/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Mother Teresa Nursing & Paramedical Institute. All Rights Reserved.</p>
          <p className="font-mono">{contact.website}</p>
        </div>
      </div>
    </footer>
  );
}
