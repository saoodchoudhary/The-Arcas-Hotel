import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  Coffee,
  Leaf,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wifi,
  BedDouble,
  Car,
  Baby,
  Accessibility,
  Zap,
} from "lucide-react";

const WHATSAPP_NUMBER = "919565656100";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to know more about your amenities and current availability.\n\nThank you!"
)}`;

const images = {
  hero: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  lounge: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
  wellness: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
  eco: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85",
};

const heroStats = [
  { value: "5", label: "Amenity categories" },
  { value: "24/7", label: "Room service" },
  { value: "4.1+", label: "Guest rating" },
  { value: "100%", label: "Smoke-free" },
];

const amenityGroups = [
  {
    title: "Comfort & Stay",
    eyebrow: "In-room",
    description: "Every room is thoughtfully equipped so your stay feels effortless from the first hour.",
    image: images.lounge,
    accent: "from-amber-900/80",
    items: [
      "Air-conditioned rooms",
      "Tea and coffee maker",
      "In-room refrigerator (select rooms)",
      "Smart TV with entertainment options",
      "Daily housekeeping",
    ],
    icon: Sparkles,
  },
  {
    title: "Dining & Service",
    eyebrow: "Food & beverage",
    description: "From a quiet breakfast to late-night room service, dining here is warm and unhurried.",
    image: images.dining,
    accent: "from-rose-900/80",
    items: [
      "Restaurant with buffet dinner",
      "24/7 room service",
      "Breakfast buffet (extra charge)",
      "Table service dining",
      "Concierge and grocery support",
    ],
    icon: Coffee,
  },
  {
    title: "Business & Events",
    eyebrow: "Work-ready",
    description: "Stay productive with meeting rooms, reliable Wi-Fi, and support services on demand.",
    image: images.hero,
    accent: "from-blue-900/80",
    items: [
      "Meeting rooms available",
      "Business-ready high-speed Wi-Fi",
      "Wake-up call service",
      "Laundry and dry-cleaning",
      "On-site parking facility",
    ],
    icon: Wifi,
  },
  {
    title: "Safety & Wellness",
    eyebrow: "Your wellbeing",
    description: "We go beyond cleanliness — our protocols ensure every guest feels secure and cared for.",
    image: images.wellness,
    accent: "from-emerald-900/80",
    items: [
      "Enhanced cleaning protocols",
      "Contactless check-in/out",
      "Safety dividers at front desk",
      "Doctor on call",
      "No-contact housekeeping on request",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    eyebrow: "Eco-conscious",
    description: "A lighter footprint without compromising on comfort — every small choice matters.",
    image: images.eco,
    accent: "from-green-900/80",
    items: [
      "Energy-efficient lighting throughout",
      "Responsible and local sourcing",
      "Water conservation program",
      "Recycling and waste reduction",
      "Eco-friendly toiletries",
    ],
    icon: Leaf,
  },
];

const guestPromises = [
  {
    title: "Accessibility",
    eyebrow: "Inclusive design",
    icon: Accessibility,
    items: [
      "Accessible parking bays",
      "Lift access to all floors",
      "Step-free lobby and entrance",
    ],
  },
  {
    title: "Family & Policy",
    eyebrow: "Guest standards",
    icon: Baby,
    items: [
      "Child-friendly stays welcome",
      "100% smoke-free property",
      "No pets policy",
    ],
  },
  {
    title: "Transport & Parking",
    eyebrow: "Getting here",
    icon: Car,
    items: [
      "On-site covered parking",
      "Airport transfer on request",
      "Taxi and cab support",
    ],
  },
  {
    title: "Premium Stay Perks",
    eyebrow: "Direct booking benefits",
    icon: Star,
    items: [
      "Early check-in on availability",
      "Late check-out on request",
      "WhatsApp concierge support",
    ],
  },
];

function SectionEyebrow({ text }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">{text}</p>
  );
}

export default function AmenitiesPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="The Arcas Hotel amenities"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72svh] w-full max-w-6xl flex-col justify-end px-6 pb-14 pt-28 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-7">
            <SectionEyebrow text="Amenities · The Arcas Hotel" />
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              Premium features
              <br />
              <span className="font-light italic">for a seamless stay.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Every detail at The Arcas Hotel is curated for comfort, convenience, and peace of mind — from the moment you arrive.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Ask about amenities
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore all <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 pt-2">
              {heroStats.map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-white/15 bg-black/30 px-5 py-3 backdrop-blur-sm">
                  <p className="text-xl font-bold text-white">{value}</p>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AMENITY GROUPS — Alternating editorial
      ══════════════════════════════════════ */}
      <section id="categories" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24 space-y-8">
          <div className="space-y-3 mb-12">
            <SectionEyebrow text="5 categories" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              Built around
              <span className="font-light italic"> your comfort.</span>
            </h2>
          </div>

          {amenityGroups.map((group, i) => {
            const Icon = group.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={group.title}
                className={`grid overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md md:grid-cols-2`}
              >
                {/* Image side */}
                <div className={`relative aspect-[4/3] md:aspect-auto ${isEven ? "md:order-last" : ""}`}>
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${group.accent} to-transparent md:bg-gradient-to-r`} />
                  <div className="absolute bottom-5 left-5 right-5 md:hidden">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                      <Icon className="h-3.5 w-3.5" /> {group.eyebrow}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center gap-6 p-8 md:p-10">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface-muted px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                      <Icon className="h-3.5 w-3.5 text-foreground" /> {group.eyebrow}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground md:text-3xl">
                      {group.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted md:text-base">
                      {group.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-fit items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground"
                  >
                    Ask about this <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          GUEST PROMISES — 4-col grid
      ══════════════════════════════════════ */}
      <section className="border-y border-black/8 bg-surface-muted/50">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 space-y-3">
            <SectionEyebrow text="Guest standards" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground sm:text-4xl">
              Our promise to every guest.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {guestPromises.map(({ title, eyebrow, icon: Icon, items }) => (
              <div
                key={title}
                className="flex flex-col gap-5 rounded-3xl border border-black/10 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="inline-flex rounded-2xl bg-surface-muted p-3 text-foreground w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted mb-1">{eyebrow}</p>
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                </div>
                <ul className="space-y-2.5 mt-auto">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DINING FEATURE BANNER
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="overflow-hidden rounded-[2.4rem] border border-black/10 shadow-xl shadow-black/8">
            <div className="relative aspect-[21/8] w-full">
              <Image
                src={images.dining}
                alt="Dining at The Arcas Hotel"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-lg space-y-4 px-8 md:px-12">
                  <SectionEyebrow text="Dining highlight" />
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                    Restaurant & 24/7 room service — always on.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    From a warm buffet breakfast to late-night room service, our kitchen is always ready to serve with care.
                  </p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask about dining
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-20">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-foreground px-8 py-12 text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_40%)]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg space-y-3">
                <SectionEyebrow text="Plan your visit" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Questions about amenities? We're on WhatsApp.
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Our team can walk you through exactly what's included for your dates and room type.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:bg-white/90"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp our team
                </a>
                <a
                  href="tel:+919565656100"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" /> +91 95656 56100
                </a>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap gap-5 border-t border-white/15 pt-6 text-[12px] font-semibold text-white/55">
              <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.1+ guest rating</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Free cancellation on select plans</span>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Eco-conscious property</span>
              <span className="flex items-center gap-2"><Zap className="h-4 w-4" /> 24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </div>
  );
}