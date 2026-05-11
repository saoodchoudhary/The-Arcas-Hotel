import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

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
            <div className="space-y-4 rounded-3xl bg-white p-6 text-sm text-muted">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" />
                Khargapur Plot no 4, STP Road, Ganpati Vihar, Gomti Nagar, Lucknow
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" /> +91 95656 56100
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" />
                reservations@thearcashotel.com
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </Link>
          </div>
          <form className="space-y-5 rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Full name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="+91"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Dates, guests, and special requests"
                className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
