// components/Footer.jsx
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Star,
  Clock,
  ShieldCheck,
  ArrowUpRight,
  Heart,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const policies = [
  { href: "/policies/cancellation", label: "Cancellation Policy" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/terms", label: "Terms & Conditions" },
  { href: "/policies/covid", label: "Health & Safety" },
  { href: "/policies/couples", label: "Couple Policy" },
];

const nearbyAttractions = [
  { label: "Janeshwar Mishra Park", distance: "5 km" },
  { label: "Lulu Mall", distance: "11 km" },
  { label: "CCS Airport", distance: "22 km" },
  { label: "Gomti Riverfront", distance: "3 km" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-[#0f0f0f] text-white">
      {/* ── CTA Banner ── */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready for a memorable stay?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Book your room at The Arcas Hotel and experience premium
              hospitality in Lucknow.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0f0f0f] shadow-lg transition-all duration-200 hover:bg-white/90 hover:shadow-xl active:scale-[0.97]"
          >
            Book Your Stay
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        {/* Column 1 — Brand & Info */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#0f0f0f]">
              <span className="text-sm font-bold tracking-tight">AH</span>
              <div className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-[#0f0f0f] bg-amber-400" />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight">
                The Arcas Hotel
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                Premium Stay · Lucknow
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/60">
            A refined boutique address in Gomti Nagar, designed for seamless
            stays, elegant dining, and thoughtful hospitality in the heart of
            Lucknow.
          </p>

          <div className="space-y-3 text-sm text-white/50">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
              <span>
                Khargapur Plot no 4, STP Road, Ganpati Vihar,
                <br />
                Gomti Nagar, Lucknow, UP 226010
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-white/40" />
              +91 95656 56100
            </p>
            <p className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-white/40" />
              reservations@thearcashotel.com
            </p>
            <p className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-white/40" />
              Check-in 14:00 · Check-out 12:00
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.1 Rating · 214 Google Reviews
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-5 group-hover:bg-white" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Policies */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Hotel Policies
          </p>
          <ul className="space-y-2.5">
            {policies.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-white/60 transition hover:text-white"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-5 group-hover:bg-white" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-white/8 bg-white/3 p-3">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/80" />
            <p className="text-xs leading-relaxed text-white/40">
              COVID-19 safety protocols in place. Enhanced cleaning,
              sanitization, and social distancing measures implemented.
            </p>
          </div>
        </div>

        {/* Column 4 — Nearby & Map */}
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
            Nearby Attractions
          </p>
          <ul className="space-y-2.5">
            {nearbyAttractions.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-white/60">{item.label}</span>
                <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-white/40">
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>

          {/* Map Embed */}
          <div className="mt-4 overflow-hidden rounded-xl border border-white/8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d81.02!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAwLjAiTiA4McKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="140"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Arcas Hotel Location"
            />
          </div>

          <Link
            href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition hover:text-white"
          >
            Get Directions on Google Maps
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-6 py-5 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} The Arcas Hotel. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-white/30">
            Crafted with <Heart className="h-3 w-3 text-red-400/60" /> for
            premium hospitality in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
}