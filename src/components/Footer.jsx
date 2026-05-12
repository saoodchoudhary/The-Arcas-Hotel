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
  MessageCircle,
  Wifi,
  Car,
} from "lucide-react";

const quickLinks = [
  { href: "/",          label: "Home" },
  { href: "/rooms",     label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining",    label: "Dining" },
  { href: "/gallery",   label: "Gallery" },
  { href: "/about",     label: "About Us" },
  { href: "/contact",   label: "Contact" },
];

const policies = [
  { href: "/policies/cancellation", label: "Cancellation Policy" },
  { href: "/policies/privacy",      label: "Privacy Policy" },
  { href: "/policies/terms",        label: "Terms & Conditions" },
  { href: "/policies/covid",        label: "Health & Safety" },
  { href: "/policies/couples",      label: "Couple Policy" },
];

const nearbyAttractions = [
  { label: "Gomti Riverfront",       distance: "3 km" },
  { label: "Janeshwar Mishra Park",  distance: "5 km" },
  { label: "Lulu Mall",              distance: "11 km" },
  { label: "CCS Airport",            distance: "22 km" },
];

const amenityBadges = [
  { icon: Wifi,        label: "Free Wi-Fi" },
  { icon: Car,         label: "Free Parking" },
  { icon: MessageCircle, label: "WhatsApp Booking" },
  { icon: ShieldCheck, label: "Safe Stay" },
];

// ✅ Correct Google Maps embed for Gomti Nagar, Lucknow
// Using place_id / address-based embed for accuracy

const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3560.096029828781!2d81.0278283!3d26.8368978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3c3f39f4cc5%3A0xaa0b0e8d55cadc0!2sThe%20Arcas%20Hotel!5e0!3m2!1sen!2sin!4v1778586573622!5m2!1sen!2sin";

const MAPS_URL      = "https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6";
const WA_URL        = `https://wa.me/919565656100?text=${encodeURIComponent("Hello The Arcas Hotel,\nI'd like to enquire about a stay.\n\nThank you!")}`;

export default function Footer() {
  return (
    <footer className="overflow-x-hidden border-t border-black/8 bg-[#0d0d0d] text-white">

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden border-b border-white/8">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_50%,rgba(255,255,255,0.04),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
          <div className="space-y-1.5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
              Plan your visit
            </p>
            <p className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready for a memorable stay?
            </p>
            <p className="text-sm text-white/55">
              Book directly for the best rates and priority concierge support.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#0d0d0d] shadow-lg transition hover:bg-white/90 active:scale-[0.97]"
            >
              Book Your Stay <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          AMENITY BADGES STRIP
      ══════════════════════════════════════ */}
      <div className="border-b border-white/6 bg-white/3">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
          {amenityBadges.map(({ icon: Icon, label }) => (
            <span key={label} className="flex items-center gap-2 text-[12px] font-semibold text-white/45">
              <Icon className="h-3.5 w-3.5 text-white/30" /> {label}
            </span>
          ))}
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span className="flex items-center gap-1.5 text-[12px] font-semibold text-white/45">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.1 · 214+ Reviews
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN GRID
      ══════════════════════════════════════ */}
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_0.9fr_1.2fr]">

        {/* ── Column 1: Brand & Contact ── */}
        <div className="space-y-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0d0d0d]">
              <span className="text-sm font-black tracking-tight">AH</span>
              <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0d0d0d] bg-amber-400" />
            </div>
            <div>
              <p className="text-base font-bold tracking-tight">The Arcas Hotel</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/40">
                Premium Stay · Lucknow
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/55 max-w-sm">
            A refined boutique address in Gomti Nagar — designed for seamless stays,
            elegant dining, and thoughtful hospitality in the heart of Lucknow.
          </p>

          {/* Contact info */}
          <div className="space-y-2.5 text-sm">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-2.5 text-white/50 transition hover:text-white/80"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
              <span className="leading-snug">
                Khargapur Plot no 4, STP Road, Ganpati Vihar,
                <br />Gomti Nagar, Lucknow, UP 226010
              </span>
            </a>
            <a
              href="tel:+919565656100"
              className="flex items-center gap-2.5 text-white/50 transition hover:text-white/80"
            >
              <Phone className="h-4 w-4 shrink-0 text-white/30" />
              +91 95656 56100
            </a>
            <a
              href="mailto:reservations@thearcashotel.com"
              className="flex items-center gap-2.5 text-white/50 transition hover:text-white/80"
            >
              <Mail className="h-4 w-4 shrink-0 text-white/30" />
              reservations@thearcashotel.com
            </a>
            <p className="flex items-center gap-2.5 text-white/50">
              <Clock className="h-4 w-4 shrink-0 text-white/30" />
              Check-in 14:00 · Check-out 12:00
            </p>
          </div>

          {/* Rating badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3.5 py-2 text-xs font-semibold text-white/65">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            4.1 Rating · 214 Google Reviews
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35">
            Quick Links
          </p>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-5 group-hover:bg-white/70" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: Policies ── */}
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35">
            Hotel Policies
          </p>
          <ul className="space-y-2.5">
            {policies.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                >
                  <span className="h-px w-3 bg-white/20 transition-all duration-200 group-hover:w-5 group-hover:bg-white/70" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Safety badge */}
          <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-white/8 bg-white/4 p-3.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400/70" />
            <p className="text-xs leading-relaxed text-white/38">
              Enhanced cleaning, sanitization, and safety protocols are
              maintained across all areas of the property.
            </p>
          </div>
        </div>

        {/* ── Column 4: Nearby & Map ── */}
        <div className="space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/35">
            Nearby Attractions
          </p>

          <ul className="space-y-2">
            {nearbyAttractions.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between border-b border-white/6 pb-2 text-sm last:border-0"
              >
                <span className="text-white/55">{item.label}</span>
                <span className="rounded-full bg-white/8 px-2.5 py-0.5 text-xs font-semibold text-white/40">
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>

          {/* ✅ FIXED Google Maps Embed — Gomti Nagar, Lucknow */}
          <div className="overflow-hidden rounded-xl border border-white/10 shadow-lg">
            <iframe
              src={MAPS_EMBED_SRC}
              width="100%"
              height="160"
              style={{
                border: 0,
                display: "block",
                /* Dark-mode invert filter — makes map match footer theme */
                filter: "invert(0.88) hue-rotate(180deg) saturate(0.9) brightness(0.95)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Arcas Hotel — Gomti Nagar, Lucknow"
            />
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-white/45 transition hover:text-white"
          >
            <MapPin className="h-3.5 w-3.5" />
            Get Directions on Google Maps
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════ */}
      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2.5 px-5 py-5 sm:flex-row sm:justify-between sm:px-8">
          <p className="text-xs text-white/28">
            © {new Date().getFullYear()} The Arcas Hotel. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/28">
            Crafted with <Heart className="h-3 w-3 text-red-400/50" /> for
            premium hospitality in Lucknow
          </p>
        </div>
      </div>
    </footer>
  );
}