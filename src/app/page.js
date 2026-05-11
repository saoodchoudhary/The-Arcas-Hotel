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

const stats = [
  { label: "Guest Rating", value: "4.1/5" },
  { label: "Verified Reviews", value: "214+" },
  { label: "Rooms & Suites", value: "35" },
];

const highlights = [
  {
    title: "Prime Gomti Nagar address",
    description: "5 km from Janeshwar Mishra Park and 22 km from the airport.",
    icon: MapPin,
  },
  {
    title: "Check-in at 14:00, check-out at 12:00",
    description: "Flexible support with 24/7 front desk assistance.",
    icon: Clock,
  },
  {
    title: "Enhanced cleanliness & safety",
    description: "Sanitized rooms, contactless options, and trained staff.",
    icon: ShieldCheck,
  },
  {
    title: "Sustainability in every stay",
    description: "Energy-efficient systems and responsible sourcing practices.",
    icon: Leaf,
  },
];

const rooms = [
  {
    name: "Deluxe King Room",
    description:
      "Sunlit interiors with plush bedding, Wi-Fi, and a serene residential view.",
    price: "₹1,544",
    features: ["King bed", "Breakfast option", "Smart TV"],
    image: "/images/rooms/deluxe-king.jpg",
  },
  {
    name: "Premium Twin Room",
    description:
      "Spacious layout designed for business or family stays with upgraded amenities.",
    price: "₹1,694",
    features: ["Twin beds", "Work desk", "Tea & coffee"],
    image: "/images/rooms/premium-twin.jpg",
  },
  {
    name: "Executive Suite",
    description:
      "Refined suite with kitchenette, lounge seating, and personalized service.",
    price: "₹2,100",
    features: ["Kitchenette", "Lounge area", "Priority service"],
    image: "/images/rooms/executive-suite.jpg",
  },
];

const amenities = [
  {
    title: "High-speed Wi-Fi",
    description: "Stay connected throughout the property with secure access.",
    icon: Wifi,
  },
  {
    title: "Restaurant & buffet",
    description: "Local, Chinese, and Italian cuisines curated by our chefs.",
    icon: UtensilsCrossed,
  },
  {
    title: "24/7 room service",
    description: "On-demand dining and concierge support, day or night.",
    icon: Coffee,
  },
  {
    title: "Private parking",
    description: "Complimentary self and valet parking for resident guests.",
    icon: Car,
  },
  {
    title: "Couple-friendly",
    description: "A safe and welcoming environment for married couples.",
    icon: Users,
  },
  {
    title: "Signature sleep",
    description: "Premium bedding and curated comfort essentials in every room.",
    icon: BedDouble,
  },
];

const testimonials = [
  {
    name: "Neelu Tiwari",
    quote:
      "Staff behaviour is good and proper guidance. A truly smooth experience.",
  },
  {
    name: "Goutam Karmakar",
    quote:
      "Amazing hospitality and delicious food. We felt welcomed from the start.",
  },
  {
    name: "Trisha Alisha",
    quote:
      "Rooms and washrooms are clean and neat. Exceptional service every time.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              The Arcas Hotel
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl font-display">
              Premium hospitality for refined stays in Lucknow.
            </h1>
            <p className="text-lg text-muted">
              A boutique address in Gomti Nagar with elegant rooms, curated dining,
              and heartfelt service for families, professionals, and weekend escapes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                Check Availability
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
              >
                Explore Rooms
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-6 hidden w-52 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Featured
              </p>
              <p className="mt-2 text-lg font-semibold">Executive Suite</p>
              <p className="text-sm text-muted">Kitchenette · Lounge</p>
              <p className="mt-3 text-sm font-semibold text-brand">From ₹2,100</p>
            </div>
            <div className="absolute -right-6 bottom-8 hidden w-52 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur lg:block">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Star className="h-4 w-4 text-brand" /> 4.1 (214 reviews)
              </div>
              <p className="mt-2 text-xs text-muted">
                Rated highly for cleanliness, comfort, and staff hospitality.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted">
              <Image
                src="/images/hero-lobby.jpg"
                alt="The Arcas Hotel lobby"
                width={720}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 w-full max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-lg md:grid-cols-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Check In</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4 text-brand" /> 26 May
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Check Out</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4 text-brand" /> 27 May
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Guests</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Users className="h-4 w-4 text-brand" /> 2 Adults
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Check Availability
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Overview</p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Designed for guests who expect the best.
            </h2>
            <p className="text-base text-muted">
              The Arcas Hotel blends contemporary comfort with warm hospitality in
              Lucknow&apos;s vibrant Gomti Nagar. From curated cuisine to thoughtful
              service, every detail is crafted to help you unwind in style.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand" />
                24/7 room service and concierge
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand" />
                Complimentary parking and airport transfers
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-brand" />
                Curated dining and breakfast buffet
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="rooms" className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Rooms</p>
              <h2 className="text-3xl font-semibold text-foreground font-display">
                Rooms crafted for rest and renewal.
              </h2>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              View all rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => (
              <div key={room.name} className="overflow-hidden rounded-3xl bg-white">
                <div className="aspect-[4/3] bg-surface-muted">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {room.name}
                    </h3>
                    <span className="text-sm font-semibold text-brand">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-surface-muted px-3 py-1 text-xs text-muted"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Amenities
            </p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Everything you need, thoughtfully provided.
            </h2>
            <p className="text-base text-muted">
              From curated dining to seamless connectivity, our amenities are
              designed to elevate every moment of your stay.
            </p>
            <div className="rounded-2xl bg-surface-muted p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <Sparkles className="h-5 w-5 text-brand" /> Premium touches
              </div>
              <p className="mt-3 text-sm text-muted">
                Evening turndown service, concierge support, grocery delivery, and
                wellness-ready comfort in every room.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((amenity) => {
              const Icon = amenity.icon;
              return (
                <div key={amenity.title} className="rounded-2xl bg-white p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {amenity.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{amenity.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted">
            <Image
              src="/images/dining.jpg"
              alt="Dining at The Arcas Hotel"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Dining</p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Crafted flavors for every palate.
            </h2>
            <p className="text-base text-muted">
              Enjoy a refined restaurant menu featuring local favorites, Chinese
              classics, and Italian-inspired dishes. Breakfast and buffet dinner
              options are available daily.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-brand" />
                Restaurant with table service
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-brand" />
                Breakfast buffet and à la carte options
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                In-room dining available 24/7
              </div>
            </div>
            <Link
              href="/dining"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-5 py-2 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              Explore dining
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">Reviews</p>
              <h2 className="text-3xl font-semibold text-foreground font-display">
                Loved by guests for warmth and comfort.
              </h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Star className="h-4 w-4 text-brand" /> 4.1 rating on Google
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl bg-white p-6">
                <Quote className="h-6 w-6 text-brand" />
                <p className="mt-4 text-sm text-muted">{testimonial.quote}</p>
                <p className="mt-4 text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Location</p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Connected to the city, calm by design.
            </h2>
            <p className="text-base text-muted">
              Situated in a serene residential neighborhood, the hotel is close
              to shopping, parks, and corporate hubs while offering a quiet retreat.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                Khargapur Plot no 4, STP Road, Ganpati Vihar, Gomti Nagar
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" /> +91 95656 56100
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" /> Check-in 14:00 ·
                Check-out 12:00
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl bg-surface-muted p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Nearby</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Janeshwar Mishra Park · 5 km</li>
              <li>Lulu Mall · 11 km</li>
              <li>Chaudhary Charan Singh Airport · 22 km</li>
              <li>Gomti Nagar metro & key offices nearby</li>
            </ul>
            <div className="mt-6 rounded-2xl bg-white p-5">
              <p className="text-sm font-semibold text-foreground">
                Need a pickup?
              </p>
              <p className="mt-2 text-sm text-muted">
                Ask about airport transfers, local shuttle service, and private
                car rentals arranged by our concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">
              Plan your stay
            </p>
            <h2 className="text-3xl font-semibold font-display">
              Elevate your next visit to Lucknow.
            </h2>
            <p className="text-sm text-white/80">
              Share your travel dates and preferences. We will craft the perfect
              stay for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand"
          >
            Book with our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
