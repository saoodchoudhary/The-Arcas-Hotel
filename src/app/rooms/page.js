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
} from "lucide-react";

const WHATSAPP_PHONE_NUMBER = "919565656100";

// Unsplash placeholders (replace later with your real images)
const images = {
  hero:
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=80",
  rooms: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1400&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
  ],
  lounge:
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
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
    features: ["King bed", "Smart TV", "High-speed Wi‑Fi", "Tea & coffee"],
  },
  {
    name: "Premium Twin Room",
    description:
      "Twin beds, a dedicated work desk, and airy views—ideal for business and extended stays.",
    size: "30 m²",
    guests: "2–3 Adults",
    image: images.rooms[1],
    tag: "Business Ready",
    features: ["Twin beds", "Work desk", "Air conditioning", "Room service"],
  },
  {
    name: "Executive Suite",
    description:
      "Suite living with kitchenette, lounge seating, refined finishes, and concierge-led touches.",
    size: "42 m²",
    guests: "2–4 Adults",
    image: images.rooms[2],
    tag: "Signature Stay",
    features: ["Kitchenette", "Lounge seating", "Priority support", "Premium bath"],
  },
];

const inclusions = [
  {
    icon: Wifi,
    title: "High-speed Wi‑Fi",
    text: "Stable internet across rooms and public areas.",
  },
  {
    icon: BedDouble,
    title: "Premium sleep",
    text: "Comfort-first bedding with a restful ambiance.",
  },
  {
    icon: Coffee,
    title: "In-room refreshment",
    text: "Tea & coffee setup for every stay.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & clean",
    text: "Enhanced cleaning and trained staff protocols.",
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

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="space-y-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function RoomsPage() {
  const whatsappUrl = buildWhatsAppUrl(
    [
      "Hello The Arcas Hotel team,",
      "I’d like to enquire about room availability and the best options.",
      "",
      "Please share:",
      "• Available room types",
      "• Inclusions",
      "• Check-in/out timings",
      "",
      "Thank you!",
    ].join("\n")
  );

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-black/5 bg-surface">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.06),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(0,0,0,0.045),transparent_45%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              <MapPin className="h-3.5 w-3.5 text-foreground" />
              Rooms · The Arcas Hotel
            </span>

            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Thoughtfully designed rooms & suites — made for calm.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Refined accommodations tailored for business travelers, families, and weekend escapes.
              Quiet interiors, modern amenities, and service that feels effortless.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-black"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-surface-muted"
              >
                Contact team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                <BedDouble className="h-4 w-4 text-foreground" /> Premium bedding
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                <Users className="h-4 w-4 text-foreground" /> Spacious layouts
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                <Coffee className="h-4 w-4 text-foreground" /> In-room refreshment
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-black/10 bg-surface-muted shadow-2xl shadow-black/15">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={images.hero}
                alt="The Arcas Hotel room interior"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Premium comfort
                </p>
                <p className="mt-1 text-sm text-white">
                  Calm interiors · modern essentials · concierge support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUSIONS */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
          <div className="grid gap-6 lg:grid-cols-4">
            {inclusions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROOM CARDS */}
      <section className="bg-surface-muted/60">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow="Room Types"
              title="Choose the stay style that fits you."
              text="No pricing shown here—our team will share the best available options on WhatsApp based on your dates."
            />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Get options <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {roomTypes.map((room) => (
              <article
                key={room.name}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {room.tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{room.name}</h3>
                    <p className="mt-1 text-sm text-white/75">
                      {room.size} · {room.guests}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <p className="text-sm leading-relaxed text-muted">
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-black/10 bg-surface-muted px-3 py-1 text-[11px] font-semibold text-foreground"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
                    >
                      Enquire <MessageCircle className="h-4 w-4" />
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/15 px-4 py-3 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-surface-muted"
                    >
                      Contact <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <SectionHead
                eyebrow="What to expect"
                title="Details that feel considered — not complicated."
                text="Everything is designed to keep your stay smooth: essentials in-room, comfort upgrades where it matters, and service that responds quickly."
              />

              <div className="rounded-3xl border border-black/10 bg-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold">Premium touches</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Concierge assistance, responsive housekeeping, and a calm environment—ideal for business, couples, and families.
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {experienceHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-3xl border border-black/10 bg-surface p-6 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted">
                    {highlight.title}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    {highlight.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-lg">
            <div className="relative aspect-[16/7] w-full">
              <Image src={images.lounge} alt="Hotel lounge" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
              <div className="absolute left-6 top-6 max-w-md rounded-2xl border border-white/20 bg-black/40 p-5 text-white backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
                  Lounge & welcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  A polished first impression with calm, intentional interiors and attentive service from the moment you arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-black/10 bg-foreground p-8 text-white shadow-sm md:p-10">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">
                Need assistance?
              </p>
              <p className="text-xl font-semibold">
                Our reservations team is ready to help.
              </p>
              <p className="text-sm text-white/75">
                Tell us your dates and guests on WhatsApp. We’ll share the best available options.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact form <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}