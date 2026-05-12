import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Users,
} from "lucide-react";

const WHATSAPP_NUMBER = "919565656100";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to enquire about a stay and check availability.\n\nThank you!"
)}`;
const MAPS_URL = "https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6";

const images = {
  hero:  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=85",
  lobby: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=85",
};

const heroStats = [
  { value: "< 1hr", label: "Response" },
  { value: "24/7",  label: "Front desk" },
  { value: "4.1+",  label: "Rating" },
  { value: "Free",  label: "Parking" },
];

const contactHighlights = [
  { icon: CalendarCheck, label: "Check-in",   value: "14:00 daily" },
  { icon: ArrowRight,    label: "Check-out",  value: "12:00 noon" },
  { icon: Clock,         label: "Front desk", value: "24/7 open" },
  { icon: Users,         label: "Concierge",  value: "On-call" },
];

const quickFacts = [
  "Reservation policies shared on request",
  "Government-issued ID required at check-in",
  "Free parking with valet assistance",
  "WhatsApp booking supported",
  "Early check-in on availability",
  "Late check-out on request",
];

/* ── Helpers ── */
function SectionEyebrow({ text, light = false }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${light ? "text-white/55" : "text-muted"}`}>
      {text}
    </p>
  );
}

function ContactRow({ href, icon: Icon, label, value, target, rel, green = false }) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`group flex w-full min-w-0 items-center gap-3 rounded-2xl border px-4 py-3.5 transition
        ${green
          ? "border-[#25D366]/30 bg-[#25D366]/8 hover:border-[#25D366]/60 hover:bg-[#25D366]/12"
          : "border-black/8 bg-surface-muted/50 hover:border-foreground/30 hover:bg-surface-muted"
        }`}
    >
      <div className={`inline-flex shrink-0 rounded-xl p-2 shadow-sm
        ${green ? "bg-[#25D366]" : "bg-background text-foreground"}`}>
        <Icon className={`h-4 w-4 ${green ? "text-white" : ""}`} />
      </div>

      {/* min-w-0 + overflow-hidden stops long text pushing layout */}
      <div className="min-w-0 flex-1 overflow-hidden">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="truncate text-sm font-semibold text-foreground">{value}</p>
      </div>

      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-foreground" />
    </a>
  );
}

/* ── Reusable form field wrapper ── */
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
        {label}{required && <span className="ml-0.5 text-foreground">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-black/10 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 outline-none transition focus:border-foreground focus:ring-2 focus:ring-foreground/10";

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
export default function ContactPage() {
  return (
    <div className="w-full overflow-x-hidden bg-background text-foreground">

      {/* ══ HERO ══ */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="The Arcas Hotel contact"
            fill priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72svh] w-full max-w-6xl flex-col
                        justify-end px-4 pb-10 pt-24
                        sm:px-6 md:justify-center md:pb-0 md:pt-0">
          <div className="w-full max-w-2xl space-y-5">

            <SectionEyebrow text="Contact · The Arcas Hotel" light />

            {/* Heading — clamp prevents overflow on tiny screens */}
            <h1 className="font-[family-name:var(--font-display)]
                           text-[clamp(2rem,8vw,5rem)]
                           font-bold leading-[1.05] tracking-tight text-white">
              Let&apos;s craft your
              <br />
              <span className="font-light italic">perfect stay.</span>
            </h1>

            <p className="max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
              Share your travel dates, preferences, and special requests — our team responds promptly.
            </p>

            {/* CTAs — always stacked on mobile */}
            <div className="flex flex-col gap-3 min-[480px]:flex-row">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white
                           px-6 py-3 text-sm font-semibold text-foreground shadow-xl
                           transition hover:-translate-y-0.5 hover:bg-white/90 active:scale-95"
              >
                <Mail className="h-4 w-4" /> Send an enquiry
              </a>
              <a
                href={WA_URL}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full
                           border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold
                           text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>

            {/* Stats — always 4 col grid, fluid font size via clamp */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {heroStats.map(({ value, label }) => (
                <div key={label}
                  className="rounded-xl border border-white/15 bg-black/30 px-2 py-2.5
                             text-center backdrop-blur-sm sm:rounded-2xl sm:px-3 sm:py-3">
                  <p className="text-[clamp(0.85rem,3.5vw,1.25rem)] font-bold text-white leading-tight">
                    {value}
                  </p>
                  <p className="mt-0.5 text-[clamp(8px,2vw,11px)] font-semibold uppercase
                                tracking-[0.12em] text-white/55">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT INFO + FORM ══ */}
      <section id="enquiry" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">

            {/* ── LEFT: info cards ── */}
            <div className="space-y-4">

              {/* Direct contact */}
              <div className="space-y-4 rounded-2xl border border-black/10 bg-surface p-5 shadow-md sm:rounded-[2rem] sm:p-7">
                <div className="space-y-0.5">
                  <SectionEyebrow text="Direct contact" />
                  <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground sm:text-2xl">
                    Reach us directly.
                  </h2>
                </div>

                <div className="space-y-2.5">
                  {/* Address row — text wraps, no truncate needed here */}
                  <a
                    href={MAPS_URL} target="_blank" rel="noreferrer"
                    className="group flex w-full min-w-0 items-start gap-3 rounded-2xl border
                               border-black/8 bg-surface-muted/50 px-4 py-3.5 transition
                               hover:border-foreground/30 hover:bg-surface-muted"
                  >
                    <div className="mt-0.5 inline-flex shrink-0 rounded-xl bg-background p-2 shadow-sm text-foreground">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Address</p>
                      <p className="mt-0.5 text-sm font-medium text-foreground leading-snug">
                        Khargapur Plot no 4, STP Road,<br />
                        Ganpati Vihar, Gomti Nagar, Lucknow
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-foreground mt-0.5" />
                  </a>

                  <ContactRow href="tel:+919565656100" icon={Phone} label="Phone" value="+91 95656 56100" />
                  <ContactRow
                    href="mailto:reservations@thearcashotel.com"
                    icon={Mail} label="Email" value="reservations@thearcashotel.com"
                  />
                  <ContactRow
                    href={WA_URL} icon={MessageCircle} label="WhatsApp"
                    value="Chat for fastest response"
                    target="_blank" rel="noreferrer" green
                  />
                </div>
              </div>

            

              {/* Quick facts */}
              <div className="space-y-4 rounded-2xl border border-black/10 bg-surface p-5 shadow-md sm:rounded-[2rem] sm:p-7">
                <div className="space-y-0.5">
                  <SectionEyebrow text="Good to know" />
                  <h3 className="text-base font-bold text-foreground sm:text-lg">Policies & info</h3>
                </div>
                <ul className="space-y-2.5">
                  {quickFacts.map((fact) => (
                    <li key={fact} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Maps CTA */}
              <a
                href={MAPS_URL} target="_blank" rel="noreferrer"
                className="group flex w-full min-w-0 items-center gap-4 rounded-2xl border
                           border-black/10 bg-surface p-4 shadow-md transition
                           hover:-translate-y-0.5 hover:shadow-xl sm:rounded-[2rem] sm:p-5"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:h-16 sm:w-16 sm:rounded-2xl">
                  <Image src={images.lobby} alt="Hotel lobby" fill className="object-cover" />
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Google Maps</p>
                  <p className="text-sm font-bold text-foreground">Get directions to the hotel</p>
                  <p className="truncate text-xs text-muted">Gomti Nagar, Lucknow</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition group-hover:text-foreground" />
              </a>
            </div>

            {/* ── RIGHT: form ── */}
            <div className="rounded-2xl border border-black/10 bg-surface p-5 shadow-xl
                            shadow-black/6 sm:rounded-[2rem] sm:p-8 md:p-10">
              <div className="mb-6 space-y-1 sm:mb-8">
                <SectionEyebrow text="Enquiry form" />
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold
                               text-foreground sm:text-2xl md:text-3xl">
                  Tell us about your stay.
                </h2>
                <p className="text-sm text-muted">We respond within 1 hour during business hours.</p>
              </div>

              <form className="space-y-4">

                {/* ── Name + Phone: single col mobile, 2-col sm+ ── */}
                <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
                  <Field label="Full name" required>
                    <input type="text" placeholder="Your full name" required className={inputCls} />
                  </Field>
                  <Field label="Phone" required>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required className={inputCls} />
                  </Field>
                </div>

                {/* ── Email: always full width ── */}
                <Field label="Email address" required>
                  <input type="email" placeholder="you@email.com" required className={inputCls} />
                </Field>

                {/* ── Check-in / Check-out: single col mobile, 2-col sm+ ── */}
                <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
                  <Field label="Check-in date">
                    <input type="date" className={inputCls} />
                  </Field>
                  <Field label="Check-out date">
                    <input type="date" className={inputCls} />
                  </Field>
                </div>

                {/* ── Guests + Room: single col mobile, 2-col sm+ ── */}
                <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2">
                  <Field label="Guests">
                    <select className={`${inputCls} cursor-pointer appearance-none`}>
                      <option value="">Select guests</option>
                      <option value="1">1 guest</option>
                      <option value="2">2 guests</option>
                      <option value="3">3 guests</option>
                      <option value="4">4+ guests</option>
                    </select>
                  </Field>
                  <Field label="Room preference">
                    <select className={`${inputCls} cursor-pointer appearance-none`}>
                      <option value="">Any room</option>
                      <option value="deluxe">Deluxe King</option>
                      <option value="twin">Premium Twin</option>
                      <option value="suite">Executive Suite</option>
                    </select>
                  </Field>
                </div>

                {/* ── Message ── */}
                <Field label="Special requests or message">
                  <textarea
                    rows={4}
                    placeholder="Any special arrangements, dietary needs, celebration setups, or questions..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full
                             bg-foreground px-6 py-3.5 text-sm font-semibold text-white
                             shadow-lg shadow-black/15 transition hover:-translate-y-0.5
                             hover:bg-foreground/85 active:scale-95"
                >
                  <Mail className="h-4 w-4" /> Send enquiry
                </button>

                {/* OR */}
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-black/8" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">or</span>
                  <div className="h-px flex-1 bg-black/8" />
                </div>

                {/* WhatsApp */}
                <a
                  href={WA_URL} target="_blank" rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full
                             border border-[#25D366]/40 bg-[#25D366]/8 px-6 py-3.5 text-sm
                             font-semibold text-foreground transition hover:bg-[#25D366]/15 active:scale-95"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp for instant reply
                </a>

                <p className="text-center text-[11px] text-muted">
                  We respond within 1 hour · No spam · Your data stays private
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST STRIP ══ */}
      <section className="border-t border-black/8 bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3
                          text-[12px] font-semibold text-muted">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 shrink-0" /> 4.1+ guest rating
            </span>
            <span className="hidden h-3 w-px bg-black/15 sm:block" />
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 shrink-0" /> Free cancellation on select plans
            </span>
            <span className="hidden h-3 w-px bg-black/15 sm:block" />
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" /> Gomti Nagar, Lucknow
            </span>
            <span className="hidden h-3 w-px bg-black/15 sm:block" />
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" /> 24/7 front desk
            </span>
            <span className="hidden h-3 w-px bg-black/15 sm:block" />
            <a
              href={MAPS_URL} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 transition hover:text-foreground"
            >
              <MapPin className="h-4 w-4 shrink-0" /> View on Google Maps
              <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WA_URL} target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center
                   rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 transition-all
                   hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}