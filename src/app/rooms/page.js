import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Coffee,
  Users,
  ShieldCheck,
  Sparkles,
  Wifi,
  MapPin,
  MessageCircle,
  CheckCircle,
  Phone,
  Star,
  Clock,
  Layers,
} from "lucide-react";

const WHATSAPP_PHONE_NUMBER = "919565656100";

const images = {
  hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1800&q=85",
  heroAlt: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=85",
  rooms: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=85",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=85",
  ],
  lounge: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85",
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
  bath: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85",
};

const roomTypes = [
  {
    name: "Deluxe King Room",
    description:
      "Elegant king-size accommodations with premium bedding, calm interiors, and a quiet residential view.",
    size: "28 m²",
    guests: "2 Adults",
    image: images.rooms[0],
    tag: "Most Booked",
    tagColor: "bg-amber-500/90",
    features: ["King bed", "Smart TV", "High-speed Wi‑Fi", "Tea & coffee"],
    highlight: "City-facing calm interiors with soft ambient lighting.",
  },
  {
    name: "Premium Twin Room",
    description:
      "Twin beds, a dedicated work desk, and airy views — ideal for business and extended stays.",
    size: "30 m²",
    guests: "2–3 Adults",
    image: images.rooms[1],
    tag: "Business Ready",
    tagColor: "bg-blue-600/90",
    features: ["Twin beds", "Work desk", "Air conditioning", "Room service"],
    highlight: "Designed for productivity with restful transitions.",
  },
  {
    name: "Executive Suite",
    description:
      "Suite living with kitchenette, lounge seating, refined finishes, and concierge-led touches.",
    size: "42 m²",
    guests: "2–4 Adults",
    image: images.rooms[2],
    tag: "Signature Stay",
    tagColor: "bg-foreground/90",
    features: ["Kitchenette", "Lounge seating", "Priority support", "Premium bath"],
    highlight: "The most spacious stay with premium curated details.",
  },
];

const inclusions = [
  {
    icon: Wifi,
    title: "High-speed Wi‑Fi",
    text: "Stable, fast internet across every room and public space.",
    stat: "100 Mbps",
  },
  {
    icon: BedDouble,
    title: "Premium sleep",
    text: "Curated bedding layered for restorative, uninterrupted rest.",
    stat: "5-star linen",
  },
  {
    icon: Coffee,
    title: "In-room refreshment",
    text: "Tea & coffee setup ready on arrival for every guest.",
    stat: "Complimentary",
  },
  {
    icon: ShieldCheck,
    title: "Safe & verified",
    text: "Enhanced cleaning, trained staff, and contactless options.",
    stat: "Daily protocol",
  },
];

const experienceHighlights = [
  {
    title: "In-room essentials",
    items: ["Wi‑Fi connectivity", "Smart TV", "Tea & coffee maker", "Daily housekeeping"],
  },
  {
    title: "Comfort upgrades",
    items: ["Kitchenette in suites", "Lounge seating", "Premium bedding", "Work desk"],
  },
  {
    title: "Service promise",
    items: ["24/7 room service", "Laundry support", "Wake-up calls", "Concierge assistance"],
  },
];

const policies = [
  { icon: Clock, label: "Check-in", value: "2:00 PM onwards" },
  { icon: Clock, label: "Check-out", value: "By 12:00 PM" },
  { icon: CheckCircle, label: "Cancellation", value: "Free on select plans" },
  { icon: Users, label: "Extra guest", value: "On request basis" },
];

function buildWhatsAppUrl(room = "") {
  const message = room
    ? `Hello The Arcas Hotel team,\nI'm interested in the ${room}.\n\nCould you please share:\n• Availability\n• Inclusions\n• Check-in/out timings\n\nThank you!`
    : `Hello The Arcas Hotel team,\nI'd like to enquire about room availability and best options.\n\nPlease share:\n• Available room types\n• Inclusions\n• Check-in/out timings\n\nThank you!`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function SectionEyebrow({ text }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">{text}</p>
  );
}

export default function RoomsPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════════
          HERO — Full-bleed split with large image
      ══════════════════════════════════════════ */}
      <section className="relative isolate min-h-[620px] overflow-hidden bg-foreground">
        {/* bg image */}
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="The Arcas Hotel suite interior"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[92svh] w-full max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-8">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5" /> Rooms & Suites · Arcas Hotel
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              Rooms crafted
              <br />
              <span className="font-light italic">for every kind</span>
              <br />
              of stay.
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Three distinct room types — refined, practical, and calm. Designed for business travelers, couples, and families seeking a premium city escape.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </a>
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View all rooms <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: BedDouble, label: "3 Room Types" },
                { icon: Star, label: "4.1+ Rated" },
                { icon: Users, label: "Up to 4 guests" },
                { icon: Layers, label: "28–42 m² rooms" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-white/60" /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 md:flex">
          <div className="h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
            Scroll
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INCLUSIONS STRIP — 4-col stat cards
      ══════════════════════════════════════════ */}
      <section className="border-b border-black/8 bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inclusions.map(({ icon: Icon, title, text, stat }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-black/8 bg-background p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-semibold text-muted">
                    {stat}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ROOM CARDS — Editorial 3-col
      ══════════════════════════════════════════ */}
      <section id="rooms" className="bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          {/* Section header */}
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <SectionEyebrow text="Room Types" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                Choose your
                <br />
                <span className="font-light italic">perfect stay.</span>
              </h2>
              <p className="max-w-md text-base text-muted">
                Our team shares personalised options and availability on WhatsApp — no guesswork.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
            >
              Get all options <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {roomTypes.map((room, i) => (
              <article
                key={room.name}
                className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/12"
              >
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden bg-surface-muted">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                  {/* Tag */}
                  <span className={`absolute left-4 top-4 ${room.tagColor} rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-lg`}>
                    {room.tag}
                  </span>

                  {/* Room name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-xl font-bold text-white">{room.name}</h3>
                    <p className="mt-1 text-[12px] font-semibold text-white/70">
                      {room.size} &nbsp;·&nbsp; {room.guests}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-5 p-6">
                  {/* Highlight callout */}
                  <p className="rounded-xl border border-black/8 bg-surface-muted px-4 py-2.5 text-[12px] font-semibold italic text-muted">
                    "{room.highlight}"
                  </p>

                  <p className="text-sm leading-relaxed text-muted">{room.description}</p>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-surface-muted px-3 py-1 text-[11px] font-semibold text-foreground"
                      >
                        <CheckCircle className="h-3 w-3 text-emerald-600" /> {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto flex gap-3 pt-1">
                    <a
                      href={buildWhatsAppUrl(room.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                    >
                      <MessageCircle className="h-4 w-4" /> Enquire
                    </a>
                    <a
                      href="tel:+919565656100"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/15 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-surface-muted"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPLIT FEATURE — Lounge wide image
      ══════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="overflow-hidden rounded-[2.4rem] border border-black/10 shadow-2xl shadow-black/10">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={images.lounge}
                alt="The Arcas Hotel lounge"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

              {/* Left overlay content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-md px-8 md:px-12 space-y-4">
                  <SectionEyebrow text="Lobby & Arrival" />
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-white md:text-4xl">
                    A calm, considered welcome.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    From the moment you arrive, our front desk team ensures a seamless check-in — swift, warm, and unhurried.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
                  >
                    <MessageCircle className="h-4 w-4" /> Plan your stay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERIENCE GRID — 2-col details + image
      ══════════════════════════════════════════ */}
      <section className="bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 space-y-4">
            <SectionEyebrow text="What to expect" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Details that feel
              <br />
              <span className="font-light italic">considered, not complicated.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Highlight cards */}
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
              {experienceHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl border border-black/8 bg-surface p-6 shadow-sm"
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted">
                    {highlight.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {highlight.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Right: stacked images */}
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-black/10">
                <Image src={images.dining} alt="Hotel dining" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">In-house dining</p>
                  <p className="mt-0.5 text-sm text-white">Breakfast · à la carte · 24/7 room service</p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-black/10">
                <Image src={images.bath} alt="Premium bath" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/40 px-4 py-3 backdrop-blur-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Premium bath</p>
                  <p className="mt-0.5 text-sm text-white">Curated amenities · refreshing design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          POLICY STRIP
      ══════════════════════════════════════════ */}
      <section className="border-y border-black/8 bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {policies.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-black/8 bg-background px-5 py-4">
                <div className="inline-flex shrink-0 rounded-xl bg-surface-muted p-2.5 text-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-foreground px-8 py-12 text-white md:px-12 md:py-14">
            {/* Subtle pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_40%)]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg space-y-3">
                <SectionEyebrow text="Ready to book?" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Our team is ready to find you the perfect room.
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Share your dates, guest count, and preferences on WhatsApp. We'll respond with the best available options and direct rates.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={whatsappUrl}
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

            {/* Bottom trust row */}
            <div className="relative mt-8 flex flex-wrap gap-4 border-t border-white/15 pt-6 text-[12px] font-semibold text-white/60">
              <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.1+ guest rating</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Free cancellation on select plans</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Gomti Nagar, Lucknow</span>
              <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> 214+ verified reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
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