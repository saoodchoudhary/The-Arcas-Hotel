"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Calendar,
  Car,
  CheckCircle,
  Clock,
  Coffee,
  Leaf,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  Wifi,
} from "lucide-react";

// ─── Static Data ──────────────────────────────────────────
const stats = [
  { label: "Guest Rating", value: "4.1/5" },
  { label: "Verified Reviews", value: "214+" },
  { label: "Check-in", value: "14:00" },
  { label: "Check-out", value: "12:00" },
];

const highlights = [
  { title: "Prime Gomti Nagar Address", description: "5 km from Janeshwar Mishra Park and 22 km from the airport.", icon: MapPin },
  { title: "Refined Rooms & Suites", description: "Wi-Fi, tea and coffee makers, and calm residential views.", icon: BedDouble },
  { title: "Enhanced Safety Standards", description: "Contactless options, trained staff, and sanitized rooms.", icon: ShieldCheck },
  { title: "Sustainability First", description: "Energy-efficient systems and responsible sourcing practices.", icon: Leaf },
];

const amenities = [
  { title: "High-Speed Wi-Fi", description: "Stay connected throughout the property with secure access.", icon: Wifi },
  { title: "Restaurant & Buffet", description: "Local, Chinese, and Italian cuisines curated by our chefs.", icon: UtensilsCrossed },
  { title: "24/7 Room Service", description: "On-demand dining and concierge support, day or night.", icon: Coffee },
  { title: "Private Parking", description: "Complimentary self and valet parking for resident guests.", icon: Car },
  { title: "Couple-Friendly Stays", description: "A safe and welcoming environment for married couples.", icon: Users },
  { title: "Signature Sleep", description: "Premium bedding and curated comfort essentials in every room.", icon: BedDouble },
];

const rooms = [
  {
    name: "Deluxe King Room",
    description: "Sunlit interiors with plush bedding, Smart TV, Wi-Fi, and a serene residential view.",
    tag: "Most Popular",
    features: ["King bed", "Breakfast option", "Smart TV", "Wi-Fi"],
    image: "/images/rooms/deluxe-king.jpg",
  },
  {
    name: "Premium Twin Room",
    description: "Spacious layout designed for business or family stays with work desk and upgraded amenities.",
    tag: "Business Friendly",
    features: ["Twin beds", "Work desk", "Tea & coffee", "Air conditioning"],
    image: "/images/rooms/premium-twin.jpg",
  },
  {
    name: "Executive Suite",
    description: "Refined suite with kitchenette, lounge seating, refrigerator, and personalized concierge service.",
    tag: "Best Experience",
    features: ["Kitchenette", "Lounge area", "Refrigerator", "Priority service"],
    image: "/images/rooms/executive-suite.jpg",
  },
];

const bookingPartners = [
  { name: "Agoda", note: "Free cancellation available", tag: "Featured", highlight: true, url: "https://www.agoda.com" },
  { name: "OYO Official Site", note: "Direct booking · Free cancellation", tag: "Official", highlight: false, url: "https://www.oyorooms.com" },
  { name: "Booking.com", note: "Free Wi-Fi · Free cancellation", tag: "Popular", highlight: false, url: "https://www.booking.com" },
  { name: "Tripadvisor", note: "Free cancellation available", tag: "Deals", highlight: false, url: "https://www.tripadvisor.in" },
];

const testimonials = [
  { name: "Neelu Tiwari", role: "Google Review", rating: 5, quote: "Staff behaviour is good and proper guidance. A truly smooth experience from check-in to check-out." },
  { name: "Goutam Karmakar", role: "Google Review", rating: 5, quote: "Amazing hospitality and delicious food. The way people welcome us is just superb — I recommend it to all my friends." },
  { name: "Trisha Alisha", role: "Google Review", rating: 5, quote: "Extremely polite and helpful staff. Rooms and washrooms are clean and neat. I'll definitely visit again and again." },
  { name: "John Luke", role: "Google Review", rating: 5, quote: "Spacious, clean rooms and very helpful staff. The breakfast is absolutely delicious. Management is excellent." },
];

const policyHighlights = ["Check-in 14:00 · Check-out 12:00", "Smoke-free property", "Credit cards, debit cards & NFC payments accepted", "Couples must be married to book", "Child-friendly · No pets allowed"];
const transportHighlights = ["Free self and valet parking", "Airport shuttle available (extra charge)", "Local shuttle and car rental onsite", "Concierge-managed pickups and drop-offs"];
const businessHighlights = ["Meeting rooms and business Wi-Fi", "24/7 front desk and wake-up calls", "Full-service laundry and baggage storage", "Lobby lounge for informal meetings"];
const safetyHighlights = ["Enhanced cleaning of guest rooms and common areas", "Commercial-grade disinfectant used by trained staff", "Masks, gloves, and sanitiser available for guests", "Contactless check-in/out with safety dividers", "Physical distancing protocols across shared spaces"];
const sustainabilityHighlights = ["Energy-efficient lighting and cooling systems", "Recycling and food waste reduction program", "Refillable toiletry containers and eco-friendly amenities", "Locally sourced and responsibly prepared meals", "Water-efficient taps, showers, and towel reuse program"];

// ─── Helpers ─────────────────────────────────────────────
const getToday = () => new Date().toISOString().split("T")[0];
const getTomorrow = () => new Date(Date.now() + 86400000).toISOString().split("T")[0];

const formatWeekday = (d) => {
  if (!d) return "";
  return new Date(d + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long" });
};

const nightCount = (ci, co) => {
  if (!ci || !co) return 1;
  return Math.max(1, Math.ceil((new Date(co) - new Date(ci)) / 86400000));
};

// ─── Main Component ───────────────────────────────────────
export default function Home() {
  const [checkIn, setCheckIn] = useState(getToday());
  const [checkOut, setCheckOut] = useState(getTomorrow());
  const [guests, setGuests] = useState("2");

  const nights = nightCount(checkIn, checkOut);

  const handleSearch = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[95vh] overflow-hidden bg-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "linear-gradient(#000 1px,transparent 1px),linear-gradient(to right,#000 1px,transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 select-none text-[220px] font-black leading-none tracking-tighter text-black/[0.022] sm:text-[300px]">
          ARCAS
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">

          {/* Left */}
          <div className="space-y-9">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.35em] text-black/45 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              The Arcas Hotel · Gomti Nagar · Lucknow
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-[44px] font-bold leading-[1.06] tracking-tight text-foreground sm:text-[58px] md:text-[68px]">
              Where every{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">detail</span>
                <span className="absolute bottom-1.5 left-0 -z-0 h-3.5 w-full bg-foreground/8 skew-x-[-2deg]" />
              </span>{" "}
              speaks of care.
            </h1>

            <p className="max-w-[440px] text-[17px] leading-[1.75] text-muted">
              Experience elegant rooms, curated dining, and signature hospitality at Lucknow&apos;s most refined boutique address in Gomti Nagar.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#rooms"
                className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-[13px] font-semibold text-white shadow-lg shadow-black/20 transition-all duration-200 hover:gap-4 hover:bg-black hover:shadow-xl hover:shadow-black/30"
              >
                View Rooms <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+919565656100"
                className="inline-flex items-center gap-2.5 rounded-full border border-black/20 px-8 py-4 text-[13px] font-semibold text-foreground transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-white"
              >
                <Phone className="h-4 w-4" /> Call to Book
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/8 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-[27px] font-bold leading-none tracking-tight text-foreground">{stat.value}</p>
                  <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -left-6 top-6 z-20 hidden w-52 rounded-2xl border border-black/10 bg-white/96 p-4 shadow-2xl backdrop-blur-sm lg:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted">Featured Suite</p>
              <p className="mt-2.5 text-[15px] font-semibold text-foreground">Executive Suite</p>
              <p className="text-[12px] text-muted">Kitchenette · Lounge · Fridge</p>
              <div className="mt-3 border-t border-black/8 pt-3">
                <Link href="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-bold text-white">
                  Enquire Now <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="absolute -right-4 bottom-12 z-20 hidden w-52 rounded-2xl border border-black/10 bg-white/96 p-4 shadow-2xl backdrop-blur-sm lg:block">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`h-3.5 w-3.5 ${i <= 4 ? "fill-amber-400 text-amber-400" : "fill-black/10 text-black/10"}`} />
                ))}
              </div>
              <p className="mt-2 text-[14px] font-bold text-foreground">4.1 · 214 Reviews</p>
              <p className="mt-1.5 text-[12px] leading-snug text-muted">Highly rated for cleanliness, comfort & attentive service.</p>
            </div>

            <div className="relative aspect-[3/4] w-full max-w-[400px] overflow-hidden rounded-[2.5rem] bg-surface-muted shadow-2xl shadow-black/15">
              <Image src="/images/hero-lobby.jpg" alt="The Arcas Hotel lobby" fill className="object-cover grayscale" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/55 p-3.5 backdrop-blur-md">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Lobby & Lounge</p>
                <p className="mt-0.5 text-[13px] font-semibold text-white">The Arcas Hotel, Lucknow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AVAILABILITY BAR
      ═══════════════════════════════════════ */}
      <section className="relative z-30 mx-auto -mt-14 w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-[1.6rem] border border-black/12 bg-white/90 shadow-2xl shadow-black/12 backdrop-blur-xl">
          <div className="grid divide-y divide-black/6 md:grid-cols-4 md:divide-x md:divide-y-0">

            {/* Check In */}
            <div className="flex items-center gap-3 px-5 py-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-surface-muted">
                <Calendar className="h-4 w-4 text-foreground" />
              </div>
              <div className="w-full min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Check In</p>
                <input
                  type="date"
                  value={checkIn}
                  min={getToday()}
                  onChange={(e) => {
                    setCheckIn(e.target.value);
                    if (e.target.value >= checkOut) {
                      const next = new Date(new Date(e.target.value).getTime() + 86400000).toISOString().split("T")[0];
                      setCheckOut(next);
                    }
                  }}
                  className="w-full bg-transparent text-[14px] font-bold text-foreground outline-none [color-scheme:light] cursor-pointer"
                />
                <p className="text-[11px] text-muted">{formatWeekday(checkIn)}</p>
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-3 px-5 py-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-surface-muted">
                <Calendar className="h-4 w-4 text-foreground" />
              </div>
              <div className="w-full min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Check Out</p>
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || getToday()}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold text-foreground outline-none [color-scheme:light] cursor-pointer"
                />
                <p className="text-[11px] text-muted">
                  {formatWeekday(checkOut)}
                  {nights > 1 && <span className="ml-1.5 font-semibold text-foreground">· {nights} nights</span>}
                </p>
              </div>
            </div>

            {/* Guests */}
            <div className="flex items-center gap-3 px-5 py-5">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-surface-muted">
                <Users className="h-4 w-4 text-foreground" />
              </div>
              <div className="w-full min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted">Guests</p>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-transparent text-[14px] font-bold text-foreground outline-none cursor-pointer"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
                <p className="text-[11px] text-muted">1 Room</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center p-3">
              <button
                onClick={handleSearch}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-5 py-4 text-[13px] font-bold text-white shadow-md transition-all hover:bg-black hover:shadow-lg active:scale-[0.98]"
              >
                Check Availability <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Info strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-black/6 bg-surface-muted/40 px-5 py-3">
            <p className="flex items-center gap-1.5 text-[12px] text-muted">
              <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
              Free cancellation available on most bookings
            </p>
            <p className="text-[12px] text-muted">
              {nights} night{nights !== 1 ? "s" : ""} · {guests} guest{+guests !== 1 ? "s" : ""} · Call for group rates
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">About The Hotel</p>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
              Designed for guests who expect the best.
            </h2>
            <p className="text-[16px] leading-[1.8] text-muted">
              The Arcas Hotel blends contemporary comfort with warm hospitality in Lucknow&apos;s vibrant Gomti Nagar. From curated cuisine to thoughtful service, every detail is crafted to help you unwind in style.
            </p>
            <div className="space-y-3.5">
              {["24/7 room service and concierge support", "Complimentary self and valet parking", "Restaurant, lobby lounge, and buffet dining", "Doctor on call · Daily housekeeping"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-[14px] text-muted">
                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-foreground" />{item}
                </div>
              ))}
            </div>
            <Link href="/about" className="group mt-2 inline-flex items-center gap-2 border-b border-foreground/20 pb-0.5 text-[13px] font-bold text-foreground hover:border-foreground transition-colors">
              Our Story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    idx % 2 === 0 ? "border-black/10 bg-white" : "border-transparent bg-foreground"
                  }`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${idx % 2 === 0 ? "bg-surface-muted text-foreground" : "bg-white/10 text-white"}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-5 text-[15px] font-semibold ${idx % 2 === 0 ? "text-foreground" : "text-white"}`}>{item.title}</h3>
                  <p className={`mt-2 text-[13px] leading-relaxed ${idx % 2 === 0 ? "text-muted" : "text-white/65"}`}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          ROOMS
      ═══════════════════════════════════════ */}
      <section id="rooms" className="bg-[#f4f4f4] scroll-mt-8">
        <div className="mx-auto w-full max-w-6xl px-6 py-28">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Rooms & Suites</p>
              <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
                Crafted for rest and renewal.
              </h2>
              <p className="text-[14px] text-muted">Contact us directly for current rates and availability.</p>
            </div>
            <Link href="/rooms" className="group inline-flex items-center gap-2 text-[13px] font-bold text-foreground">
              View all rooms <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/12"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {room.tag}
                  </span>
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="text-[18px] font-semibold text-foreground">{room.name}</h3>
                  <p className="text-[13px] leading-relaxed text-muted">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <span key={f} className="rounded-full border border-black/8 bg-surface-muted px-3 py-1 text-[11px] font-medium text-foreground">{f}</span>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="group mt-2 flex items-center justify-between rounded-xl border border-black/10 px-4 py-3.5 text-[13px] font-semibold text-foreground transition-all hover:border-foreground hover:bg-foreground hover:text-white"
                  >
                    Enquire & Book <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOOKING PARTNERS
      ═══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="mb-14 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Book Online</p>
          <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
            Choose your preferred platform.
          </h2>
          <p className="max-w-lg text-[15px] text-muted">
            Available across all major booking platforms. Rates and cancellation policies vary by platform.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {bookingPartners.map((partner) => (
            <div
              key={partner.name}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                partner.highlight ? "border-foreground bg-foreground text-white shadow-lg" : "border-black/10 bg-white"
              }`}
            >
              {partner.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  ★ Featured
                </span>
              )}
              <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${partner.highlight ? "text-white/55" : "text-muted"}`}>
                {partner.tag}
              </p>
              <h3 className={`mt-3 text-[18px] font-semibold ${partner.highlight ? "text-white" : "text-foreground"}`}>
                {partner.name}
              </h3>
              <p className={`mt-2 text-[12px] leading-snug ${partner.highlight ? "text-white/60" : "text-muted"}`}>
                {partner.note}
              </p>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 flex items-center justify-center gap-2 rounded-xl py-2.5 text-[12px] font-bold transition-all ${
                  partner.highlight ? "bg-white text-foreground hover:bg-white/90" : "bg-foreground text-white hover:bg-black"
                }`}
              >
                Book on {partner.name} <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Direct call nudge */}
        <div className="mt-8 flex flex-wrap items-center gap-5 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-foreground text-white">
            <Phone className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-foreground">Prefer to book directly?</p>
            <p className="mt-0.5 text-[13px] text-muted">Call us for the best available rate, group bookings, or special requests — no platform fees.</p>
          </div>
          <a
            href="tel:+919565656100"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-[13px] font-bold text-white transition-colors hover:bg-black"
          >
            +91 95656 56100
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          AMENITIES
      ═══════════════════════════════════════ */}
      <section className="bg-[#f4f4f4]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Amenities</p>
              <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
                Everything you need, thoughtfully provided.
              </h2>
              <p className="text-[16px] leading-[1.8] text-muted">
                From curated dining to seamless connectivity, our amenities are designed to elevate every moment of your stay.
              </p>
              <div className="rounded-2xl border border-black/10 bg-foreground p-6 text-white">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5" />
                  <p className="text-[14px] font-semibold">Premium Touches</p>
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-white/65">
                  Evening turndown service, concierge support, grocery delivery, doctor on call, and wellness-ready comfort in every room.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <div key={amenity.title} className="group rounded-2xl border border-black/10 bg-white p-5 transition-all hover:border-black/20 hover:shadow-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-muted text-foreground transition-colors group-hover:bg-foreground group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-[14px] font-semibold text-foreground">{amenity.title}</h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{amenity.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          DINING
      ═══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-surface-muted shadow-2xl">
            <Image src="/images/dining.jpg" alt="Dining at The Arcas Hotel" fill className="object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/20 bg-black/55 p-4 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">Open Daily</p>
              <p className="text-[14px] font-semibold text-white">Breakfast · Lunch · Dinner · Room Service</p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Dining</p>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
              Crafted flavors for every palate.
            </h2>
            <p className="text-[16px] leading-[1.8] text-muted">
              Enjoy a refined restaurant menu featuring local Lucknowi favorites, Chinese classics, and Italian-inspired dishes. Breakfast buffet and dinner options available daily.
            </p>
            <div className="grid gap-3">
              {[
                { icon: UtensilsCrossed, text: "Restaurant with table service · Buffet dinner" },
                { icon: Coffee, text: "Breakfast buffet and à la carte options" },
                { icon: Phone, text: "In-room dining available 24/7" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3.5 rounded-xl border border-black/8 bg-white px-4 py-3.5">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-surface-muted">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <p className="text-[13px] font-medium text-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <Link href="/dining" className="group mt-2 inline-flex items-center gap-2.5 self-start rounded-full bg-foreground px-7 py-3.5 text-[13px] font-bold text-white transition hover:bg-black">
              Explore Dining Menu <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          POLICIES · TRANSPORT · BUSINESS
      ═══════════════════════════════════════ */}
      <section className="bg-[#f4f4f4]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28">
          <div className="mb-12 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Hotel Info</p>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">Policies, transport & services.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { label: "Policies & Payments", items: policyHighlights, icon: ShieldCheck },
              { label: "Parking & Transport", items: transportHighlights, icon: Car },
              { label: "Business & Events", items: businessHighlights, icon: Users },
            ].map((sec) => {
              const Icon = sec.icon;
              return (
                <div key={sec.label} className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[13px] font-bold text-foreground">{sec.label}</p>
                  </div>
                  <ul className="space-y-3">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-muted">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SAFETY + SUSTAINABILITY
      ═══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-black/10 bg-white p-8 transition-shadow hover:shadow-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Health & Safety</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[26px] font-bold leading-snug text-foreground">Elevated cleaning standards.</h2>
            <ul className="mt-6 space-y-3.5">
              {safetyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-muted">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[1.75rem] bg-foreground p-8 transition-shadow hover:shadow-2xl hover:shadow-black/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
              <Leaf className="h-6 w-6" />
            </div>
            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Sustainability</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[26px] font-bold leading-snug text-white">Responsible hospitality.</h2>
            <ul className="mt-6 space-y-3.5">
              {sustainabilityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[13px] text-white/65">
                  <Leaf className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════ */}
      <section className="bg-[#f4f4f4]">
        <div className="mx-auto w-full max-w-6xl px-6 py-28">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Guest Reviews</p>
              <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">Loved for warmth and comfort.</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2.5 text-[13px] font-bold text-foreground shadow-sm">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i <= 4 ? "fill-amber-400 text-amber-400" : "fill-black/10 text-black/10"}`} />
              ))}
              <span className="ml-1">4.1 · Google</span>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="group relative rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
                <Quote className="h-8 w-8 text-black/8 transition-colors group-hover:text-black/15" />
                <p className="mt-4 text-[14px] leading-[1.8] text-muted">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center justify-between border-t border-black/6 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-[12px] font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-foreground">{t.name}</p>
                      <p className="text-[11px] text-muted">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          LOCATION
      ═══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted">Location</p>
            <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-foreground">
              Connected to the city, calm by design.
            </h2>
            <p className="text-[16px] leading-[1.8] text-muted">
              Situated in a serene residential neighbourhood of Gomti Nagar, the hotel is close to shopping, parks, and corporate hubs — while offering a quiet retreat from the city.
            </p>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "Khargapur Plot no 4, STP Road, Ganpati Vihar, Gomti Nagar, Lucknow, UP 226010" },
                { icon: Phone, text: "+91 95656 56100" },
                { icon: Clock, text: "Check-in 14:00 · Check-out 12:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-start gap-3 text-[13px] text-muted">
                    <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground" />{item.text}
                  </div>
                );
              })}
            </div>
            <a
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 border-b border-foreground/20 pb-0.5 text-[13px] font-bold text-foreground transition-colors hover:border-foreground"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-muted">Nearby</p>
              <ul className="space-y-3">
                {[
                  ["Janeshwar Mishra Park", "5 km"],
                  ["Lulu Mall", "11 km"],
                  ["CCS International Airport", "22 km"],
                  ["Hazratganj Market", "8 km"],
                  ["Gomti Nagar Business Hub", "Nearby"],
                ].map(([place, dist]) => (
                  <li key={place} className="flex items-center justify-between border-b border-black/5 pb-3 text-[13px] last:border-0 last:pb-0">
                    <span className="font-medium text-foreground">{place}</span>
                    <span className="rounded-full bg-surface-muted px-2.5 py-1 text-[11px] font-bold text-muted">{dist}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-foreground p-6 text-white">
              <p className="text-[14px] font-semibold">Need a pickup?</p>
              <p className="mt-2 text-[12px] leading-relaxed text-white/60">Airport transfers, local shuttles, and private car rentals arranged by our concierge.</p>
              <Link href="/contact" className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[12px] font-bold text-white transition hover:bg-white hover:text-foreground">
                Arrange Transport <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="bg-foreground">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden px-6 py-24">
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[130px] font-black leading-none tracking-tighter text-white/[0.035]">
            STAY
          </div>
          <div className="relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/45">Plan Your Stay</p>
              <h2 className="font-[family-name:var(--font-display)] text-[36px] font-bold leading-tight text-white">
                Elevate your next visit to Lucknow.
              </h2>
              <p className="max-w-md text-[14px] leading-[1.8] text-white/60">
                Share your travel dates and preferences. Our team will craft the perfect stay experience for you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-8 py-4 text-[13px] font-bold text-foreground shadow-lg transition hover:bg-white/90">
                Book with Our Team <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="tel:+919565656100" className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 px-8 py-4 text-[13px] font-bold text-white transition hover:bg-white/10">
                <Phone className="h-4 w-4" /> +91 95656 56100
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}