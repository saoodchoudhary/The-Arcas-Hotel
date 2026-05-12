import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  MessageCircle,
  Phone,
  Star,
  MapPin,
} from "lucide-react";

const WHATSAPP_NUMBER = "919565656100";
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to enquire about a stay after browsing your gallery.\n\nThank you!"
)}`;

// All real Unsplash images — replace with actual hotel photos later
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=85",
    label: "Grand Arrival",
    category: "Lobby & Lounge",
    span: "col-span-2 row-span-2", // hero image — large
  },
  {
    src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85",
    label: "Deluxe King Room",
    category: "Signature Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=85",
    label: "Lobby Lounge",
    category: "Lobby & Lounge",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=85",
    label: "Restaurant Dining",
    category: "Dining",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=85",
    label: "Premium Twin Room",
    category: "Signature Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85",
    label: "Executive Suite",
    category: "Signature Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=85",
    label: "Curated Dining",
    category: "Dining",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=85",
    label: "Refined Suite",
    category: "Signature Rooms",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=85",
    label: "Hotel Exterior",
    category: "Exterior",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=900&q=85",
    label: "Premium Bath",
    category: "Amenities",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=85",
    label: "Quiet Evenings",
    category: "Lobby & Lounge",
    span: "",
  },
];

const categories = [
  "All",
  "Lobby & Lounge",
  "Signature Rooms",
  "Dining",
  "Amenities",
  "Exterior",
];

const heroStats = [
  { value: `${galleryImages.length}`, label: "Photographs" },
  { value: "5", label: "Categories" },
  { value: "3", label: "Room types" },
  { value: "4.1+", label: "Guest rating" },
];

function SectionEyebrow({ text }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-muted">{text}</p>
  );
}

export default function GalleryPage() {
  return (
    <div className="bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate min-h-[65svh] overflow-hidden bg-foreground">
        <div className="absolute inset-0">
          <Image
            src={galleryImages[0].src}
            alt="The Arcas Hotel gallery hero"
            fill
            priority
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[65svh] w-full max-w-6xl flex-col justify-end px-6 pb-14 pt-28 md:justify-center md:pb-0 md:pt-0">
          <div className="max-w-2xl space-y-7">
            <SectionEyebrow text="Gallery · The Arcas Hotel" />
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-white sm:text-6xl md:text-7xl">
              Visual stories
              <br />
              <span className="font-light italic">from The Arcas.</span>
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
              Browse rooms, dining spaces, and curated interiors — each photograph reflects the calm, deliberate design of The Arcas Hotel.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#grid"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <Camera className="h-4 w-4" /> Browse gallery
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Book a stay <ArrowRight className="h-4 w-4" />
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
          CATEGORY PILLS
      ══════════════════════════════════════ */}
      <section className="sticky top-0 z-30 border-b border-black/8 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-6xl px-6 py-3">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            <SectionEyebrow text="Filter:" />
            {categories.map((cat) => (
              <span
                key={cat}
                className={`shrink-0 cursor-pointer rounded-full px-4 py-1.5 text-[12px] font-semibold transition ${
                  cat === "All"
                    ? "bg-foreground text-white"
                    : "border border-black/10 bg-surface-muted text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BENTO GRID GALLERY
      ══════════════════════════════════════ */}
      <section id="grid" className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">

          {/* Bento grid — 4 columns on desktop */}
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className={`group relative overflow-hidden rounded-2xl border border-black/10 bg-surface-muted shadow-sm transition hover:shadow-xl hover:shadow-black/10 ${img.span}`}
              >
                <div className={`relative w-full ${
                  img.span === "col-span-2 row-span-2"
                    ? "aspect-square"
                    : img.span === "col-span-2"
                    ? "aspect-[2/1]"
                    : "aspect-[4/3]"
                }`}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    loading={i < 4 ? "eager" : "lazy"}
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Label — always visible at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:p-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                      <Camera className="h-3 w-3" /> {img.category}
                    </span>
                    <p className="mt-1.5 text-sm font-bold text-white">{img.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-8 rounded-2xl border border-black/8 bg-surface px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted">
              Showing <span className="font-semibold text-foreground">{galleryImages.length} photographs</span> across 5 categories.
            </p>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:underline"
            >
              <MessageCircle className="h-4 w-4" /> Enquire about a stay <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED ROOMS — 3-col mini showcase
      ══════════════════════════════════════ */}
      <section className="bg-surface-muted/40 border-t border-black/8">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-18">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <SectionEyebrow text="Inside the rooms" />
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                Rooms designed for deep comfort.
              </h2>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground"
            >
              View all rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                src: galleryImages[1].src,
                name: "Deluxe King Room",
                tag: "Most Booked",
                href: "/rooms",
              },
              {
                src: galleryImages[4].src,
                name: "Premium Twin Room",
                tag: "Business Ready",
                href: "/rooms",
              },
              {
                src: galleryImages[5].src,
                name: "Executive Suite",
                tag: "Signature Stay",
                href: "/rooms",
              },
            ].map(({ src, name, tag, href }) => (
              <Link
                key={name}
                href={href}
                className="group relative overflow-hidden rounded-[2rem] border border-black/10 shadow-md transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={src} alt={name} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                    {tag}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <p className="text-base font-bold text-white">{name}</p>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition group-hover:bg-white group-hover:text-foreground">
                      <ArrowRight className="h-4 w-4 text-white group-hover:text-foreground" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="bg-background">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-foreground px-8 py-12 text-white md:px-12 md:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.04),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.03),transparent_40%)]" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-lg space-y-3">
                <SectionEyebrow text="Like what you see?" />
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
                  Book your stay at The Arcas Hotel.
                </h2>
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Share your dates on WhatsApp and our team will help you find the perfect room.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:bg-white/90"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
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
              <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Gomti Nagar, Lucknow</span>
              <span className="flex items-center gap-2"><Camera className="h-4 w-4" /> {galleryImages.length}+ curated photos</span>
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