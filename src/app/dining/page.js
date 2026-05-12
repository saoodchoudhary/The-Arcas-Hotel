import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Coffee,
  MessageCircle,
  Phone,
  Star,
  UtensilsCrossed,
  CheckCircle,
  Sparkles,
  Flame,
} from "lucide-react";

const WHATSAPP_NUMBER = "919565656100";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to reserve a table or enquire about dining options.\n\nThank you!"
)}`;

const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=85",
  breakfast: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85",
  roomservice: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1200&q=85",
  spread: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=85",
  lucknow: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?auto=format&fit=crop&w=1200&q=85",
  chinese: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
  italian: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
};

const heroStats = [
  { value: "3", label: "Cuisine styles" },
  { value: "24/7", label: "Room service" },
  { value: "07:00", label: "Opens daily" },
  { value: "∞", label: "Flavor moments" },
];

const diningHighlights = [
  {
    title: "All-day Restaurant",
    eyebrow: "Dine in",
    description: "Local, Chinese, and Italian menus curated daily with seasonal ingredients and warm table service.",
    image: images.spread,
    icon: UtensilsCrossed,
  },
  {
    title: "Breakfast Buffet",
    eyebrow: "Morning ritual",
    description: "Start your day with fresh, seasonal selections — hot dishes, cold spreads, and brewed coffee.",
    image: images.breakfast,
    icon: Coffee,
  },
  {
    title: "24/7 Room Service",
    eyebrow: "In-room dining",
    description: "Enjoy a full menu delivered to your door at any hour with attentive, discreet service.",
    image: images.roomservice,
    icon: Sparkles,
  },
];

const diningSchedule = [
  { label: "Breakfast buffet", time: "07:00 – 10:30", note: "Extra charge applies", icon: Coffee },
  { label: "Lunch service", time: "12:30 – 15:30", note: "Table service", icon: UtensilsCrossed },
  { label: "Dinner service", time: "19:00 – 22:30", note: "Table service + buffet", icon: Flame },
  { label: "In-room dining", time: "24/7", note: "On-demand, any time", icon: Clock },
];

const signatureMenus = [
  {
    title: "Lucknow Classics",
    eyebrow: "Local heritage",
    description: "Traditional flavors inspired by the city's rich culinary legacy — slow-cooked, spice-forward, and deeply satisfying.",
    image: images.lucknow,
    accent: "from-amber-900/75",
    dishes: ["Dum Biryani", "Galawati Kebab", "Nihari", "Sheermal"],
  },
  {
    title: "Chinese Favorites",
    eyebrow: "Asian kitchen",
    description: "Wok-tossed specials, comforting noodle bowls, and aromatic sauces crafted fresh every service.",
    image: images.chinese,
    accent: "from-red-900/75",
    dishes: ["Hakka Noodles", "Chilli Paneer", "Dim Sum", "Fried Rice"],
  },
  {
    title: "Italian-inspired",
    eyebrow: "European touch",
    description: "Fresh pastas, rustic sauces, and artisan desserts — light, flavourful, and elegantly plated.",
    image: images.italian,
    accent: "from-emerald-900/75",
    dishes: ["Penne Arrabbiata", "Margherita Pizza", "Tiramisu", "Bruschetta"],
  },
];

function SectionEyebrow({ text }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">{text}</p>
  );
}

export default function DiningPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate min-h-[80svh] overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="The Arcas Hotel restaurant"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col justify-end px-6 pb-14 pt-32 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-7">
            <SectionEyebrow text="Dining · The Arcas Hotel" />
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              Culinary moments
              <br />
              <span className="font-light italic">worth remembering.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Our restaurant blends Lucknow's local heritage with global classics — refined flavors, warm service, and a kitchen that never sleeps.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Reserve a table
              </a>
              <a
                href="#menus"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                View menus <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Stats */}
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
          DINING HIGHLIGHTS — 3 cards with images
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 space-y-3">
            <SectionEyebrow text="Dining experience" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              Three ways to
              <span className="font-light italic"> dine with us.</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {diningHighlights.map(({ title, eyebrow, description, image, icon: Icon }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5" /> {eyebrow}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-sm leading-relaxed text-muted">{description}</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:underline"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FULL SPREAD BANNER
      ══════════════════════════════════════ */}
      <section className="bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-6 pb-16">
          <div className="overflow-hidden rounded-[2.4rem] border border-black/10 shadow-xl">
            <div className="relative aspect-[21/8] w-full">
              <Image src={images.spread} alt="Restaurant spread" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-lg space-y-4 px-8 md:px-12">
                  <SectionEyebrow text="Restaurant" />
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                    A table for every moment — breakfast to midnight.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    Our restaurant is designed for both quick business meals and long, unhurried dinners.
                  </p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
                  >
                    <MessageCircle className="h-4 w-4" /> Book your table
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DINING HOURS + SCHEDULE
      ══════════════════════════════════════ */}
      <section className="bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 md:pb-20">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Hours card */}
            <div className="rounded-[2rem] border border-black/10 bg-surface p-8 shadow-md">
              <div className="space-y-2 mb-8">
                <SectionEyebrow text="Timings" />
                <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground md:text-3xl">
                  Dining hours
                </h2>
                <p className="text-sm text-muted">All timings are for walk-in and room service guests.</p>
              </div>

              <ul className="space-y-5">
                {diningSchedule.map(({ label, time, note, icon: Icon }) => (
                  <li key={label} className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-black/8 bg-surface-muted/60 px-5 py-4">
                    <div className="inline-flex shrink-0 rounded-xl bg-background p-2.5 text-foreground shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-center sm:text-left text-foreground">{label}</p>
                      <p className="text-[11px] font-semibold  text-center sm:text-left uppercase tracking-[0.18em] text-muted">{note}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-foreground px-3 py-1 text-[12px] font-bold tabular-nums text-white">
                      {time}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-black/8 bg-surface-muted/60 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted mb-1">Room service order</p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" /> Order on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-4">
              <div className="rounded-[2rem] border border-black/10 bg-surface p-7 shadow-md flex-1">
                <SectionEyebrow text="What's included" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground mt-2 mb-5">
                  Dining inclusions at a glance
                </h3>
                <ul className="space-y-3">
                  {[
                    "Table service lunch and dinner",
                    "Breakfast buffet (extra charge)",
                    "24/7 in-room dining menu",
                    "Curated beverages and mocktails",
                    "Special dietary requests on notice",
                    "Concierge meal assistance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[2rem] border border-black/10 bg-foreground p-7 text-white shadow-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55 mb-2">Need a reservation?</p>
                <p className="text-base font-semibold mb-4">Message us on WhatsApp for priority table booking.</p>
                <div className="flex flex-wrap gap-3">
                  <a href={WA_URL} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-white/90">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <a href="tel:+919565656100"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Phone className="h-4 w-4" /> Call us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SIGNATURE MENUS — 3 cuisine cards
      ══════════════════════════════════════ */}
      <section id="menus" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 space-y-3">
            <SectionEyebrow text="Signature menus" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              Three cuisines,
              <span className="font-light italic"> one kitchen.</span>
            </h2>
            <p className="max-w-xl text-base text-muted">
              Our chefs draw from three distinct culinary traditions to create a menu that satisfies every craving.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {signatureMenus.map(({ title, eyebrow, description, image, accent, dishes }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} to-transparent`} />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-sm">
                    {eyebrow}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="space-y-4 p-6">
                  <p className="text-sm leading-relaxed text-muted">{description}</p>

                  {/* Signature dishes */}
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted mb-2">Signatures</p>
                    <div className="flex flex-wrap gap-2">
                      {dishes.map((dish) => (
                        <span key={dish} className="rounded-full border border-black/10 bg-surface-muted px-3 py-1 text-[11px] font-semibold text-foreground">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-black/15 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> Order or enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
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
                <SectionEyebrow text="Reserve your table" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Great food deserves a great table. Book yours.
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Message our team on WhatsApp to reserve a table, pre-order a meal, or arrange in-room dining for any occasion.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href={WA_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:bg-white/90">
                  <MessageCircle className="h-4 w-4" /> WhatsApp reservation
                </a>
                <a href="tel:+919565656100"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Phone className="h-4 w-4" /> +91 95656 56100
                </a>
              </div>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-5 border-t border-white/15 pt-6 text-[12px] font-semibold text-white/55">
              <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.1+ guest rating</span>
              <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Dietary requests welcome</span>
              <span className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4" /> 3 cuisine menus daily</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 24/7 room service</span>
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