"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
  Wifi,
  BadgeCheck,
  Clock,
  Leaf,
} from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

const WHATSAPP_PHONE_NUMBER = "919565656100";
const SCROLL_DISTANCE_PER_SCENE_PERCENT = 110;

const imageSet = {
  dining: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  rooms: [
    "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  ],
  gallery: [
    {
      title: "Grand Arrival",
      label: "Scene 01",
      text: "A calm, design-forward welcome with concierge-first service and effortless check-in.",
      image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Refined Suites",
      label: "Scene 02",
      text: "Soft lighting, layered textures, and premium comfort curated for restorative sleep.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Curated Dining",
      label: "Scene 03",
      text: "Locally inspired flavors and global classics served with warm, attentive hospitality.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Quiet Evenings",
      label: "Scene 04",
      text: "A polished city retreat where every detail is designed around comfort and peace.",
      image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

const roomCards = [
  {
    name: "Deluxe King",
    tag: "Most Booked",
    tagColor: "bg-amber-500/90",
    text: "Plush bedding, premium bath amenities, smart TV, and serene city-facing windows.",
    image: imageSet.rooms[0],
    features: ["King bed", "City view", "Smart TV", "Bath amenities"],
  },
  {
    name: "Premium Twin",
    tag: "Business Ready",
    tagColor: "bg-blue-600/90",
    text: "Spacious twin layout with work area, high-speed internet, and elevated room service.",
    image: imageSet.rooms[1],
    features: ["Twin beds", "Work desk", "High-speed Wi-Fi", "Room service"],
  },
  {
    name: "Executive Suite",
    tag: "Signature Stay",
    tagColor: "bg-emerald-600/90",
    text: "Lounge seating, kitchenette, and concierge-led touches for long and luxury stays.",
    image: imageSet.rooms[2],
    features: ["Lounge area", "Kitchenette", "Concierge", "Premium bath"],
  },
];

const amenities = [
  { icon: Wifi,           title: "Fast Wi-Fi",       text: "Stable high-speed internet across all rooms and public spaces." },
  { icon: UtensilsCrossed,title: "In-house Dining",  text: "Breakfast, dinner, and curated à la carte offerings daily." },
  { icon: ShieldCheck,    title: "Safe Stay",         text: "Enhanced sanitation, trained staff, and contactless check-in." },
  { icon: Sparkles,       title: "Premium Service",  text: "24/7 room service, concierge support, and in-room touches." },
];

const trustBadges = [
  { icon: Star,       label: "4.1+ Guest Rating" },
  { icon: BadgeCheck, label: "Free Cancellation" },
  { icon: Clock,      label: "24/7 WhatsApp Support" },
  { icon: Leaf,       label: "Eco-conscious Stay" },
];

const getToday    = () => new Date().toISOString().split("T")[0];
const getTomorrow = () => new Date(Date.now() + 86400000).toISOString().split("T")[0];
const getNights   = (ci, co) => !ci || !co ? 1 : Math.max(1, Math.ceil((new Date(co) - new Date(ci)) / 86400000));
const formatDate  = (d) => new Date(`${d}T00:00:00`).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
const pluralize   = (n, s, p = `${s}s`) => `${n} ${Number(n) === 1 ? s : p}`;
const sectionWrap = "mx-auto w-full max-w-6xl px-6 py-20 md:py-28";

function SectionEyebrow({ text, light = false }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${light ? "text-white/55" : "text-muted"}`}>
      {text}
    </p>
  );
}

function SectionHead({ eyebrow, title, text, light = false }) {
  return (
    <div className="space-y-4 md:space-y-5">
      <SectionEyebrow text={eyebrow} light={light} />
      <h2 className={`font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {text && (
        <p className={`max-w-2xl text-base leading-relaxed md:text-lg ${light ? "text-white/70" : "text-muted"}`}>
          {text}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [checkIn,  setCheckIn]  = useState(getToday());
  const [checkOut, setCheckOut] = useState(getTomorrow());
  const [guests,   setGuests]   = useState("2");
  const [activeScene, setActiveScene] = useState(0);

  const galleryRef          = useRef(null);
  const scenesRef           = useRef(new Array(imageSet.gallery.length).fill(null));
  const activeSceneIndexRef = useRef(0);

  const nights = getNights(checkIn, checkOut);

  const whatsappUrl = useMemo(() => {
    const msg = [
      "Hello The Arcas Hotel team,",
      "I would like to check availability.",
      "",
      `Check-in:  ${formatDate(checkIn)}`,
      `Check-out: ${formatDate(checkOut)}`,
      `Guests:    ${guests}`,
      `Nights:    ${nights}`,
      "",
      "Please share the best available options.",
    ].join("\n");
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [checkIn, checkOut, guests, nights]);

  const roomWhatsapp = (name) => {
    const msg = `Hello, I'm interested in the ${name} at The Arcas Hotel.\n\nCheck-in: ${formatDate(checkIn)}\nCheck-out: ${formatDate(checkOut)}\nGuests: ${guests}\n\nPlease share availability.`;
    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const galleryEl  = galleryRef.current;
    const sceneEls   = scenesRef.current.filter(Boolean);
    if (!galleryEl || sceneEls.length <= 1) return;

    gsap.set(sceneEls,    { autoAlpha: 0, scale: 1.08 });
    gsap.set(sceneEls[0], { autoAlpha: 1, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: galleryEl,
        start: "top top",
        end: `+=${sceneEls.length * SCROLL_DISTANCE_PER_SCENE_PERCENT}%`,
        scrub: 1,
        pin: true,
        snap: {
          snapTo:   1 / (sceneEls.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay:    0.04,
          ease:     "power1.inOut",
        },
        onUpdate: (self) => {
          const next = Math.round(self.progress * (sceneEls.length - 1));
          if (next !== activeSceneIndexRef.current) {
            activeSceneIndexRef.current = next;
            setActiveScene(next);
          }
        },
      },
    });

    for (let i = 1; i < sceneEls.length; i++) {
      tl.to(sceneEls[i - 1], { autoAlpha: 0, scale: 1.12, duration: 1 }, i - 1)
        .to(sceneEls[i],     { autoAlpha: 1, scale: 1,    duration: 1 }, i - 1);
    }

    return () => { tl.scrollTrigger?.kill(); tl.kill(); };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-foreground">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <HeroSlider />

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-40 pt-24 md:pb-44">
          <div className="max-w-2xl space-y-6">

            {/* Location pill */}
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
              <MapPin className="h-3.5 w-3.5 text-white/60" /> Gomti Nagar · Lucknow
            </span>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-md sm:text-6xl md:text-[5.5rem]">
              Boutique luxury,
              <br />
              <em className="font-light not-italic opacity-80">designed for</em>
              <br />
              modern travel.
            </h1>

            {/* Subtext */}
            <p className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">
              The Arcas Hotel — cinematic interiors, personalised service, and calm city comfort in the heart of Gomti Nagar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-2xl shadow-black/40 transition hover:-translate-y-0.5 hover:bg-white/92 active:scale-95"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95"
              >
                Explore Rooms <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {trustBadges.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-black/35 px-3 py-1.5 text-[11px] font-semibold text-white/75 backdrop-blur-sm"
                >
                  <Icon className="h-3 w-3 text-emerald-400" /> {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-[13.5rem] left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex">
          <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40">Scroll</p>
          <div className="h-12 w-px bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOOKING BAR  — floats below hero
      ══════════════════════════════════════ */}
      <section className="relative z-20 mx-auto -mt-12 w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-surface shadow-2xl shadow-black/12">

          {/* Tabs / eyebrow */}
          <div className="flex items-center gap-3 border-b border-black/8 px-6 py-3">
            <SectionEyebrow text="Check Availability" />
            <span className="ml-auto flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
              <CheckCircle className="h-3.5 w-3.5" /> Instant WhatsApp confirmation
            </span>
          </div>

          {/* Fields */}
          <div className="grid gap-1 p-2 sm:grid-cols-[1fr_1fr_0.75fr_auto]">

            {/* Check-in */}
            <label className="group rounded-2xl border border-transparent bg-surface-muted/60 px-4 py-3.5 transition focus-within:border-black/20 focus-within:bg-surface hover:bg-surface-muted/80 cursor-pointer">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
                <Calendar className="h-3 w-3" /> Check-in
              </p>
              <input
                type="date"
                value={checkIn}
                min={getToday()}
                onChange={(e) => {
                  const v = e.target.value;
                  setCheckIn(v);
                  if (v >= checkOut)
                    setCheckOut(new Date(new Date(v).getTime() + 86400000).toISOString().split("T")[0]);
                }}
                className="w-full bg-transparent text-sm font-bold text-foreground outline-none [color-scheme:light]"
              />
            </label>

            {/* Check-out */}
            <label className="group rounded-2xl border border-transparent bg-surface-muted/60 px-4 py-3.5 transition focus-within:border-black/20 focus-within:bg-surface hover:bg-surface-muted/80 cursor-pointer">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
                <Calendar className="h-3 w-3" /> Check-out
              </p>
              <input
                type="date"
                value={checkOut}
                min={checkIn || getToday()}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-foreground outline-none [color-scheme:light]"
              />
            </label>

            {/* Guests */}
            <label className="group rounded-2xl border border-transparent bg-surface-muted/60 px-4 py-3.5 transition focus-within:border-black/20 focus-within:bg-surface hover:bg-surface-muted/80 cursor-pointer">
              <p className="mb-1.5 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-muted">
                <Users className="h-3 w-3" /> Guests
              </p>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-bold text-foreground outline-none cursor-pointer"
              >
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
                <option value="4">4 Adults</option>
              </select>
            </label>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-foreground px-5 py-3.5 text-sm font-bold text-white transition hover:bg-black hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-black/20 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              Check Availability
            </a>
          </div>

          {/* Footer strip */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/8 px-5 py-2.5 text-[11px] text-muted">
            <span className="font-semibold text-foreground">
              {pluralize(nights, "night")} · {pluralize(guests, "guest")}
            </span>
            <span>{formatDate(checkIn)} → {formatDate(checkOut)}</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <section className="mx-auto w-full max-w-5xl px-6 pt-10 pb-4">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { value: "4.1+",  label: "Guest rating",    sub: "Based on 214+ reviews" },
            { value: "3",     label: "Room types",       sub: "Deluxe to executive" },
            { value: "24/7",  label: "Service always",  sub: "Front desk & concierge" },
            { value: "100%",  label: "Smoke-free",       sub: "Eco-conscious property" },
          ].map(({ value, label, sub }) => (
            <div key={label} className="rounded-2xl border border-black/8 bg-surface p-5 text-center shadow-sm">
              <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-foreground">{value}</p>
              <p className="mt-0.5 text-sm font-semibold text-foreground">{label}</p>
              <p className="mt-0.5 text-[11px] text-muted">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ROOMS
      ══════════════════════════════════════ */}
      <section id="rooms" className={`${sectionWrap} space-y-12`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead
            eyebrow="Rooms & Suites"
            title={<>Premium spaces,<br /><span className="font-light italic">built for deep comfort.</span></>}
            text="From short city breaks to extended stays, each room is crafted with practical luxury and intentional calm."
          />
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground shrink-0"
          >
            All rooms <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {roomCards.map((room) => (
            <article
              key={room.name}
              className="group overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-md transition hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white ${room.tagColor}`}>
                  {room.tag}
                </span>
                {/* Feature chips on hover */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {room.features.map((f) => (
                    <span key={f} className="rounded-full border border-white/20 bg-black/55 px-2.5 py-0.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="space-y-4 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">{room.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{room.text}</p>
                <div className="flex items-center justify-between border-t border-black/8 pt-4">
                  <a
                    href={roomWhatsapp(room.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground"
                  >
                    <MessageCircle className="h-4 w-4" /> Enquire
                  </a>
                  <Link href="/rooms" className="inline-flex items-center gap-1 text-sm font-semibold text-muted transition hover:text-foreground">
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          GSAP SCROLL GALLERY
      ══════════════════════════════════════ */}
      <section
        id="experience"
        ref={galleryRef}
        aria-label="Experience Gallery"
        className="relative overflow-hidden border-y border-black/5 bg-foreground text-white"
      >
        <div className="absolute inset-0">
          {imageSet.gallery.map((scene, i) => (
            <div
              key={scene.title}
              ref={(el) => (scenesRef.current[i] = el)}
              role="region"
              aria-roledescription="slide"
              aria-label={`${scene.label}: ${scene.title}`}
              className="absolute inset-0"
            >
              <Image src={scene.image} alt={scene.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/52" />
            </div>
          ))}
        </div>

        <div className="relative mx-auto grid min-h-[88svh] w-full max-w-6xl items-end gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          {/* Left headline */}
          <div className="space-y-6">
            <SectionEyebrow text="Immersive Stay Journey" light />
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl text-white">
              Scroll through
              <br />
              <span className="font-light italic">The Arcas experience.</span>
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
              A smooth, scene-by-scene transition designed to mirror the pace and polish of your stay.
            </p>
            {/* Scene dots row */}
            <div className="flex items-center gap-3">
              {imageSet.gallery.map((scene, i) => (
                <div key={scene.title} className="flex items-center gap-2">
                  <div className={`h-1.5 rounded-full transition-all duration-700 ${i === activeScene ? "w-10 bg-white" : "w-3 bg-white/28"}`} />
                  {i === activeScene && (
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/65">
                      {scene.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right info card */}
          <div className="rounded-[1.8rem] border border-white/15 bg-black/40 p-6 backdrop-blur-md md:p-8 space-y-4">
            <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white/65">
              {imageSet.gallery[activeScene].label}
            </span>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
              {imageSet.gallery[activeScene].title}
            </h3>
            <p className="text-sm leading-relaxed text-white/72 md:text-base">
              {imageSet.gallery[activeScene].text}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-white/90 mt-2"
            >
              <MessageCircle className="h-4 w-4" /> Book this experience
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DINING & AMENITIES
      ══════════════════════════════════════ */}
      <section className="bg-surface-muted/50 border-y border-black/6">
        <div className={`${sectionWrap} grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center`}>

          {/* Left: amenities grid */}
          <div className="space-y-8">
            <SectionHead
              eyebrow="Dining & Services"
              title={<>Elevated dining,<br /><span className="font-light italic">effortless service.</span></>}
              text="All-day menus, local favourites, and responsive in-room assistance for a complete premium stay."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-black/8 bg-surface p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
            <Link
              href="/dining"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white hover:border-foreground"
            >
              View dining page <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right: dining photo */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-black/10 shadow-2xl shadow-black/10">
            <Image src={imageSet.dining} alt="Dining at The Arcas Hotel" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            {/* Overlay card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/45 p-5 backdrop-blur-md space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">Open Daily</p>
              <p className="text-sm font-semibold text-white leading-snug">
                Breakfast buffet · À la carte lunch & dinner
              </p>
              <p className="text-xs text-white/60">24/7 in-room service available</p>
              <div className="flex gap-4 pt-1 text-[11px] font-semibold text-white/55">
                <span>07:00 – Breakfast</span>
                <span>12:30 – Lunch</span>
                <span>19:00 – Dinner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIAL STRIP
      ══════════════════════════════════════ */}
      <section className="bg-background border-b border-black/6">
        <div className="mx-auto w-full max-w-6xl px-6 py-14">
          <div className="mb-8 flex items-center justify-between">
            <SectionEyebrow text="Guest reviews" />
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map((s) => <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="ml-2 text-sm font-bold text-foreground">4.1 / 5</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "Priya M.", loc: "Mumbai", stars: 5, text: "Absolutely loved the stay. The rooms were spotless, staff super attentive, and the breakfast was fantastic." },
              { name: "Rohan S.", loc: "Delhi",  stars: 4, text: "Great location in Gomti Nagar. Business trip made comfortable with reliable Wi-Fi and 24/7 room service." },
              { name: "Ananya K.", loc: "Bangalore", stars: 5, text: "Perfect boutique experience. Felt like a home away from home. Will definitely return on my next Lucknow visit." },
            ].map(({ name, loc, stars, text }) => (
              <div key={name} className="rounded-2xl border border-black/8 bg-surface p-5 shadow-sm space-y-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">"{text}"</p>
                <div className="border-t border-black/8 pt-3 flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-surface-muted flex items-center justify-center text-xs font-bold text-foreground">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-foreground">{name}</p>
                    <p className="text-[11px] text-muted">{loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className={`${sectionWrap}`}>
        <div className="relative overflow-hidden rounded-[2.4rem] bg-foreground px-8 py-12 text-white md:px-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,255,255,0.05),transparent_45%),radial-gradient(circle_at_88%_80%,rgba(255,255,255,0.03),transparent_45%)]" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg space-y-3">
              <SectionEyebrow text="Plan Your Stay" light />
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl text-white">
                Get tailored options
                <br />
                <span className="font-light italic">in minutes.</span>
              </h2>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                Share your dates and preferences with our team for the best direct rate and priority support.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-xl transition hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Booking
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
            <span className="flex items-center gap-2"><Star className="h-4 w-4" /> 214+ verified reviews</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Prime Gomti Nagar location</span>
            <span className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Free cancellation on select bookings</span>
            <span className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Eco-conscious property</span>
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