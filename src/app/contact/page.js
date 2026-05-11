import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactHighlights = [
  "Check-in 14:00 · Check-out 12:00",
  "24/7 front desk and concierge support",
  "Reservation policies and ID requirements shared on request",
  "Free parking with valet assistance",
];

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
            <h1 className="text-4xl font-semibold text-foreground font-display">
              Let&apos;s craft your perfect stay.
            </h1>
            <p className="text-base text-muted">
              Share your travel dates, preferences, and special requests. Our
              reservations team will respond promptly.
            </p>
            <div className="space-y-4 rounded-3xl border border-black/10 bg-white p-6 text-sm text-muted">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-foreground" />
                Khargapur Plot no 4, STP Road, Ganpati Vihar, Gomti Nagar, Lucknow
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-foreground" /> +91 95656 56100
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-foreground" />
                reservations@thearcashotel.com
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6 text-sm text-muted">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Clock className="h-4 w-4 text-foreground" /> Quick facts
              </div>
              <ul className="mt-4 space-y-3">
                {contactHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </Link>
          </div>
          <form className="space-y-5 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Dates, guests, and special requests"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-foreground"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
