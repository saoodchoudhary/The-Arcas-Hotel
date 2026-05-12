import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
  Zap,
  Heart,
  Globe,
} from "lucide-react";

const WHATSAPP_NUMBER = "919565656100";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to know more about the hotel and book a stay.\n\nThank you!"
)}`;

const images = {
  hero: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1800&q=85",
  lobby: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=85",
  team: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
  city: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=85",
  eco: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=85",
  room: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
};

const heroStats = [
  { value: "4.1+", label: "Guest rating" },
  { value: "214+", label: "Reviews" },
  { value: "3", label: "Room types" },
  { value: "24/7", label: "Service" },
];

const values = [
  {
    title: "Warm hospitality",
    description: "Every guest receives attentive, personalised care from arrival to departure — a commitment to making you feel genuinely at home.",
    icon: Heart,
    eyebrow: "Our foundation",
    image: images.team,
  },
  {
    title: "Contemporary comfort",
    description: "Thoughtfully designed interiors, premium amenities, and calm spaces that elevate every hour of your stay.",
    icon: Sparkles,
    eyebrow: "Design philosophy",
    image: images.room,
  },
  {
    title: "Local connection",
    description: "Rooted in Gomti Nagar, Lucknow — we curate neighbourhood experiences, local flavours, and authentic city moments.",
    icon: Building2,
    eyebrow: "Our city",
    image: images.city,
  },
  {
    title: "Sustainable living",
    description: "Energy-efficient systems, responsible sourcing, and eco-conscious choices woven into everything we do.",
    icon: Leaf,
    eyebrow: "Responsibility",
    image: images.eco,
  },
];

const hotelDetails = [
  "Rooms with Wi-Fi, smart TVs, and tea & coffee makers",
  "Executive suites with kitchenettes and lounge seating",
  "Restaurant serving Lucknow, Chinese & Italian cuisines",
  "Lobby lounge with 24/7 room service",
  "Meeting rooms and business-ready facilities",
  "Concierge, laundry, and wake-up call services",
];

const sustainabilityPoints = [
  "Carbon-free energy sources",
  "Refillable toiletry containers",
  "Food waste reduction program",
  "Water-efficient fixtures throughout",
  "Eco-friendly in-room toiletries",
  "Locally sourced culinary ingredients",
];

const nearbyPlaces = [
  { name: "Janeshwar Mishra Park", dist: "0.8 km" },
  { name: "Lulu Mall", dist: "1.2 km" },
  { name: "Gomti Riverfront", dist: "3.5 km" },
  { name: "Lucknow Airport", dist: "14 km" },
];

function SectionEyebrow({ text }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">{text}</p>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate min-h-[80svh] overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src={images.hero}
            alt="The Arcas Hotel"
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col justify-end px-6 pb-14 pt-32 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-7">
            <SectionEyebrow text="About · The Arcas Hotel" />
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              A modern boutique
              <br />
              <span className="font-light italic">hotel with heart.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              The Arcas Hotel is an intimate destination in Gomti Nagar — designed to balance contemporary luxury with the warmth of Lucknow's celebrated hospitality.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> Book a stay
              </a>
              <a
                href="#story"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Our story <ArrowRight className="h-4 w-4" />
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
          STORY + LOCATION — Split
      ══════════════════════════════════════ */}
      <section id="story" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <SectionEyebrow text="Our story" />
              <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
                Designed for the
                <span className="font-light italic"> thoughtful traveller.</span>
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                The Arcas Hotel was built around a simple idea — that a great hotel should feel effortless. From our lobby lounge to our curated dining experience, each touchpoint is crafted to make you feel at home in Lucknow.
              </p>
              <p className="text-base leading-relaxed text-muted">
                We blend the city's legendary tehzeeb with modern comforts, creating a stay that is both polished and personal. Whether you're here for business or leisure, our team treats every guest as a welcome guest.
              </p>

              {/* Location card */}
              <div className="rounded-2xl border border-black/10 bg-surface p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">Location</p>
                    <p className="text-sm font-semibold text-foreground">Gomti Nagar, Lucknow</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {nearbyPlaces.map(({ name, dist }) => (
                    <div key={name} className="rounded-xl border border-black/8 bg-surface-muted/60 px-3 py-2">
                      <p className="text-[11px] font-semibold text-foreground">{name}</p>
                      <p className="text-[11px] text-muted">{dist} away</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-black/10 shadow-2xl shadow-black/12">
              <Image src={images.lobby} alt="The Arcas Hotel lobby" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Signature lobby</p>
                <p className="mt-1 text-sm text-white">Calm, design-forward welcome · concierge-first service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          VALUES — 4 alternating cards
      ══════════════════════════════════════ */}
      <section className="bg-surface-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 space-y-3">
            <SectionEyebrow text="What we stand for" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              Four values that
              <span className="font-light italic"> guide every stay.</span>
            </h2>
          </div>

          <div className="space-y-6">
            {values.map(({ title, description, icon: Icon, eyebrow, image }, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={title}
                  className={`grid overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md md:grid-cols-2`}
                >
                  {/* Image */}
                  <div className={`relative aspect-[16/9] md:aspect-auto ${isEven ? "md:order-last" : ""}`}>
                    <Image src={image} alt={title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="absolute inset-0 flex items-end p-6 md:hidden">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                        <Icon className="h-3.5 w-3.5" /> {eyebrow}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
                    <span className="inline-flex items-center gap-2 w-fit rounded-full border border-black/10 bg-surface-muted px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                      <Icon className="h-3.5 w-3.5 text-foreground" /> {eyebrow}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-foreground md:text-3xl">
                      {title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOTEL DETAILS + SUSTAINABILITY — 2-col
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
          <div className="mb-12 space-y-3">
            <SectionEyebrow text="Inside the hotel" />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              At a glance —
              <span className="font-light italic"> what to expect.</span>
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Hotel details */}
            <div className="rounded-[2rem] border border-black/10 bg-surface p-8 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex rounded-2xl bg-surface-muted p-3 text-foreground">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <SectionEyebrow text="Hotel highlights" />
                  <h3 className="text-lg font-bold text-foreground mt-0.5">What's included</h3>
                </div>
              </div>
              <ul className="space-y-3">
                {hotelDetails.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 rounded-xl border border-black/8 bg-surface-muted/50 px-4 py-3 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sustainability */}
            <div className="flex flex-col gap-5">
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 shadow-md flex-1">
                <div className="relative aspect-[4/3]">
                  <Image src={images.eco} alt="Sustainability" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                    <SectionEyebrow text="Sustainability" />
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                      Our commitment to the planet.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-black/10 bg-surface p-6 shadow-md">
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Eco initiatives</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {sustainabilityPoints.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-xl border border-black/8 bg-surface-muted/50 px-3 py-2.5 text-[12px] text-foreground">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CITY BANNER
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 pb-6">
          <div className="overflow-hidden rounded-[2.4rem] border border-black/10 shadow-xl">
            <div className="relative aspect-[21/8] w-full">
              <Image src={images.city} alt="Lucknow city" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-lg space-y-4 px-8 md:px-12">
                  <SectionEyebrow text="Our city" />
                  <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                    Lucknow — the city of Nawabs and neighbourhoods.
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75 md:text-base">
                    We are proud to be part of Gomti Nagar — one of the city's most vibrant and well-connected residential and commercial hubs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-foreground px-8 py-12 text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_40%)]" />
            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg space-y-3">
                <SectionEyebrow text="Come stay with us" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Experience The Arcas difference for yourself.
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Share your dates and preferences — our team will respond on WhatsApp with the best available options.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href={WA_URL} target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:bg-white/90">
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a href="tel:+919565656100"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Phone className="h-4 w-4" /> +91 95656 56100
                </a>
              </div>
            </div>
            <div className="relative mt-8 flex flex-wrap gap-5 border-t border-white/15 pt-6 text-[12px] font-semibold text-white/55">
              <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 4.1+ guest rating</span>
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Gomti Nagar, Lucknow</span>
              <span className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Eco-conscious property</span>
              <span className="flex items-center gap-2"><Globe className="h-4 w-4" /> 3 cuisine menus daily</span>
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