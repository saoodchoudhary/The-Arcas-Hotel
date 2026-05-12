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
} from "lucide-react";

const WHATSAPP_PHONE_NUMBER = "919565656100";
// Slightly above one viewport per scene keeps transitions readable while scrubbing.
const SCROLL_DISTANCE_PER_SCENE_PERCENT = 110;

const imageSet = {
  hero:
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80",
  dining:
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
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
      image:
        "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Refined Suites",
      label: "Scene 02",
      text: "Soft lighting, layered textures, and premium comfort curated for restorative sleep.",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Curated Dining",
      label: "Scene 03",
      text: "Locally inspired flavors and global classics served with warm, attentive hospitality.",
      image:
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=80",
    },
    {
      title: "Quiet Evenings",
      label: "Scene 04",
      text: "A polished city retreat where every detail is designed around comfort and peace.",
      image:
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1800&q=80",
    },
  ],
};

const roomCards = [
  {
    name: "Deluxe King",
    tag: "Most Booked",
    text: "Plush bedding, premium bath amenities, smart TV, and serene city-facing windows.",
    image: imageSet.rooms[0],
  },
  {
    name: "Premium Twin",
    tag: "Business Ready",
    text: "Spacious twin layout with work area, high-speed internet, and elevated room service.",
    image: imageSet.rooms[1],
  },
  {
    name: "Executive Suite",
    tag: "Signature Stay",
    text: "Lounge seating, kitchenette, and concierge-led touches for long and luxury stays.",
    image: imageSet.rooms[2],
  },
];

const trustPoints = [
  "4.1+ rating across major travel platforms",
  "Free cancellation on select plans",
  "Verified hygiene and safety protocols",
  "Dedicated support on WhatsApp",
];

const amenities = [
  { icon: Wifi, title: "Fast Wi-Fi", text: "Stable high-speed internet across rooms and public spaces." },
  { icon: UtensilsCrossed, title: "In-house Dining", text: "Breakfast, dinner, and curated à la carte offerings daily." },
  { icon: ShieldCheck, title: "Safe Stay", text: "Enhanced sanitation, trained staff, and contactless support options." },
  { icon: Sparkles, title: "Premium Service", text: "24/7 room service, concierge support, and thoughtful in-room touches." },
];

const getToday = () => new Date().toISOString().split("T")[0];
const getTomorrow = () => new Date(Date.now() + 86400000).toISOString().split("T")[0];

const getNights = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) return 1;
  const diff = Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000);
  return Math.max(1, diff);
};

const formatReservationDate = (date) =>
  new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const pluralize = (count, singular, plural = `${singular}s`) =>
  `${count} ${Number(count) === 1 ? singular : plural}`;

const sectionWrap = "mx-auto w-full max-w-6xl px-6 py-20 md:py-28";

function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="space-y-4 md:space-y-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-muted">{eyebrow}</p>
      <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {text ? <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">{text}</p> : null}
    </div>
  );
}

export default function Home() {
  const [checkIn, setCheckIn] = useState(getToday());
  const [checkOut, setCheckOut] = useState(getTomorrow());
  const [guests, setGuests] = useState("2");
  const [activeScene, setActiveScene] = useState(0);
  const galleryRef = useRef(null);
  const scenesRef = useRef([]);
  const activeSceneIndexRef = useRef(0);

  const nights = getNights(checkIn, checkOut);

  const whatsappUrl = useMemo(() => {
    const message = [
      "Hello The Arcas Hotel team,",
      "I would like to check availability.",
      "",
      `Check-in: ${formatReservationDate(checkIn)}`,
      `Check-out: ${formatReservationDate(checkOut)}`,
      `Guests: ${guests}`,
      `Nights: ${nights}`,
      "",
      "Please share the best available options.",
    ].join("\n");

    return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [checkIn, checkOut, guests, nights]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const galleryElement = galleryRef.current;
    const sceneElements = scenesRef.current.filter(Boolean);
    if (!galleryElement || sceneElements.length <= 1) return;

    gsap.set(sceneElements, { autoAlpha: 0, scale: 1.08 });
    gsap.set(sceneElements[0], { autoAlpha: 1, scale: 1 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: galleryElement,
        start: "top top",
        end: `+=${sceneElements.length * SCROLL_DISTANCE_PER_SCENE_PERCENT}%`,
        scrub: 1,
        pin: true,
        snap: {
          snapTo: 1 / (sceneElements.length - 1),
          duration: { min: 0.2, max: 0.5 },
          delay: 0.04,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const next = Math.round(self.progress * (sceneElements.length - 1));
          if (next !== activeSceneIndexRef.current) {
            activeSceneIndexRef.current = next;
            setActiveScene(next);
          }
        },
      },
    });

    for (let index = 1; index < sceneElements.length; index += 1) {
      timeline
        .to(sceneElements[index - 1], { autoAlpha: 0, scale: 1.12, duration: 1 }, index - 1)
        .to(sceneElements[index], { autoAlpha: 1, scale: 1, duration: 1 }, index - 1);
    }

    return () => {
      timeline.scrollTrigger?.kill();
      timeline.kill();
    };
  }, []);

  return (
    <div className="overflow-x-hidden bg-background text-foreground">
      <section className="relative isolate overflow-hidden border-b border-black/5 bg-surface">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.06),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(0,0,0,0.045),transparent_40%)]" />
        <div className={`${sectionWrap} relative grid items-center gap-12 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pt-30`}>
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-surface-muted px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
              <MapPin className="h-3.5 w-3.5 text-foreground" /> Gomti Nagar · Lucknow
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Boutique luxury,
              <br />
              designed for modern travel.
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
              The Arcas Hotel blends cinematic interiors, personalized service, and calm city comfort for leisure and business guests alike.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-black"
              >
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-foreground hover:bg-surface-muted"
              >
                Explore Experience <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <p key={point} className="flex items-start gap-2.5 rounded-xl border border-black/8 bg-background/70 px-4 py-3 text-sm text-muted">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-foreground" /> {point}
                </p>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-black/10 bg-surface-muted shadow-2xl shadow-black/15">
            <Image src={imageSet.hero} alt="The Arcas Hotel premium lobby" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/25 bg-black/45 p-4 backdrop-blur-md">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Signature Hospitality</p>
              <p className="mt-1 text-sm text-white">4.1 guest rating · 24/7 concierge · curated dining</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 mx-auto -mt-10 w-full max-w-6xl px-6">
        <div className="rounded-[1.6rem] border border-black/10 bg-surface shadow-xl shadow-black/10">
          <div className="grid gap-1 p-2 md:grid-cols-[1fr_1fr_0.8fr_0.95fr]">
            <label className="rounded-2xl border border-transparent bg-surface-muted/65 px-4 py-3 focus-within:border-black/25">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Check In</p>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-foreground" />
                <input
                  type="date"
                  value={checkIn}
                  min={getToday()}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCheckIn(value);
                    if (value >= checkOut) {
                      setCheckOut(new Date(new Date(value).getTime() + 86400000).toISOString().split("T")[0]);
                    }
                  }}
                  className="w-full bg-transparent text-sm font-semibold text-foreground outline-none [color-scheme:light]"
                />
              </div>
            </label>

            <label className="rounded-2xl border border-transparent bg-surface-muted/65 px-4 py-3 focus-within:border-black/25">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Check Out</p>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-foreground" />
                <input
                  type="date"
                  value={checkOut}
                  min={checkIn || getToday()}
                  onChange={(event) => setCheckOut(event.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-foreground outline-none [color-scheme:light]"
                />
              </div>
            </label>

            <label className="rounded-2xl border border-transparent bg-surface-muted/65 px-4 py-3 focus-within:border-black/25">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Guests</p>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-foreground" />
                <select
                  value={guests}
                  onChange={(event) => setGuests(event.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-foreground outline-none"
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
            </label>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-foreground px-4 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Check Availability <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-black/8 px-5 py-3 text-xs text-muted">
            <span>{pluralize(nights, "night")}, {pluralize(guests, "guest")}</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-emerald-600" /> Instant confirmation on WhatsApp</span>
          </div>
        </div>
      </section>

      <section id="experience" ref={galleryRef} className="relative mt-16 overflow-hidden border-y border-black/5 bg-foreground text-white">
        <div className="absolute inset-0">
          {imageSet.gallery.map((scene, index) => (
            <div
              key={scene.title}
              ref={(node) => (scenesRef.current[index] = node)}
              role="region"
              aria-roledescription="slide"
              aria-label={`Scene ${index + 1} of ${imageSet.gallery.length}: ${scene.title}`}
              className="absolute inset-0"
            >
              <Image src={scene.image} alt={scene.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/55" />
            </div>
          ))}
        </div>
        <div className="relative mx-auto grid min-h-[84vh] w-full max-w-6xl items-end gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
          <div className="space-y-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/65">Immersive Stay Journey</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
              Scroll through The Arcas experience.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              A smooth, scene-by-scene transition designed to mirror the pace and polish of your stay.
            </p>
          </div>
          <div className="rounded-3xl border border-white/20 bg-black/35 p-6 backdrop-blur-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">{imageSet.gallery[activeScene].label}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{imageSet.gallery[activeScene].title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/75">{imageSet.gallery[activeScene].text}</p>
            <div
              className="mt-6 flex gap-2"
              role="progressbar"
              aria-label="Experience scene progress"
              aria-valuemin={1}
              aria-valuemax={imageSet.gallery.length}
              aria-valuenow={activeScene + 1}
            >
              {imageSet.gallery.map((scene, index) => (
                <div
                  key={scene.title}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    index === activeScene ? "bg-white" : "bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className={`${sectionWrap} space-y-10`}>
        <SectionHead
          eyebrow="Rooms & Suites"
          title="Premium spaces, built for deep comfort."
          text="From short city breaks to extended stays, each room is crafted with practical luxury and intentional calm."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {roomCards.map((room) => (
            <article key={room.name} className="overflow-hidden rounded-3xl border border-black/10 bg-surface shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] bg-surface-muted">
                <Image src={room.image} alt={room.name} fill className="object-cover" />
                <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  {room.tag}
                </span>
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-foreground">{room.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{room.text}</p>
                <Link href="/rooms" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline">
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface-muted/60">
        <div className={`${sectionWrap} grid gap-12 lg:grid-cols-[1fr_1fr]`}>
          <div className="space-y-8">
            <SectionHead
              eyebrow="Dining & Services"
              title="Elevated dining with effortless service."
              text="Enjoy all-day menus, local favorites, and responsive in-room assistance for a complete premium stay."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {amenities.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-black/8 bg-surface p-5">
                    <div className="inline-flex rounded-xl bg-surface-muted p-2.5 text-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/10 bg-surface shadow-lg">
            <Image src={imageSet.dining} alt="Dining at The Arcas Hotel" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/45 p-4 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Open Daily</p>
              <p className="mt-1 text-sm text-white">Breakfast buffet · À la carte lunch & dinner · 24/7 room service</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionWrap} pb-24`}>
        <div className="rounded-[2rem] border border-black/10 bg-foreground px-6 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Plan Your Stay</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">Get tailored options in minutes.</h2>
              <p className="max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                Share your dates and preferences with our team for the best direct rate and priority support.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Booking
              </a>
              <a
                href="tel:+919565656100"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> +91 95656 56100
              </a>
            </div>
          </div>
          <div className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-sm text-white/75 sm:grid-cols-3">
            <p className="flex items-center gap-2"><Star className="h-4 w-4" /> 214+ verified reviews</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Prime Gomti Nagar location</p>
            <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4" /> Free cancellation on select bookings</p>
          </div>
        </div>
      </section>
    </div>
  );
}
