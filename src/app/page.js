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
  { label: "Check-in", value: "14:00" },
  { label: "Check-out", value: "12:00" },
];

const highlights = [
  {
    title: "Prime Gomti Nagar address",
    description: "5 km from Janeshwar Mishra Park and 22 km from the airport.",
    icon: MapPin,
  },
  {
    title: "Refined rooms and suites",
    description: "Wi-Fi, tea and coffee makers, and calm residential views.",
    icon: BedDouble,
  },
  {
    title: "Enhanced cleanliness & safety",
    description: "Contactless options, trained staff, and sanitized rooms.",
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
    title: "Couple-friendly stays",
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
    name: "Sachin Jaiswal",
    quote:
      "Very comfortable stay with excellent service and well-kept rooms.",
  },
  {
    name: "John Luke",
    quote:
      "Spacious, clean rooms and helpful staff. Breakfast is delicious too.",
  },
];

const bookingPartners = [
  {
    name: "Agoda",
    price: "₹1,544",
    note: "Free cancellation until 3 Jul",
    tag: "Featured option",
  },
  {
    name: "OYO Official Site",
    price: "₹1,594",
    note: "Free cancellation until 4 Jul",
    tag: "Official site",
  },
  {
    name: "Booking.com",
    price: "₹1,350",
    note: "Free Wi-Fi · Free cancellation until 26 May",
    tag: "Online partner",
  },
  {
    name: "Tripadvisor",
    price: "₹900",
    note: "Free cancellation until 25 May",
    tag: "Value pick",
  },
];

const policyHighlights = [
  "Check-in 14:00 · Check-out 12:00",
  "Smoke-free property",
  "Credit cards, debit cards, NFC payments, and cash accepted",
  "Couples must be married to book",
  "Child-friendly stays · No pets",
];

const transportHighlights = [
  "Free self and valet parking",
  "Airport shuttle and private car service (extra charge)",
  "Local shuttle and car rental available",
  "Concierge-managed pickups and drop-offs",
];

const businessHighlights = [
  "Meeting rooms and business-ready Wi-Fi",
  "24/7 front desk, wake-up calls",
  "Full-service laundry and baggage storage",
  "Lobby lounge for informal meetings",
];

const safetyHighlights = [
  "Enhanced cleaning of guest rooms and common areas",
  "Commercial-grade disinfectant used by trained staff",
  "Masks, gloves, and sanitiser available for guests",
  "Contactless check-in/out with safety dividers",
  "Physical distancing protocols across shared spaces",
];

const sustainabilityHighlights = [
  "Energy-efficient lighting and cooling systems",
  "Recycling and food waste reduction program",
  "Refillable toiletry containers and eco-friendly amenities",
  "Locally sourced and responsibly prepared meals",
  "Water-efficient taps, showers, and towel reuse program",
];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-surface-muted" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              The Arcas Hotel
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl md:text-6xl font-display">
              The premium boutique stay in Gomti Nagar, Lucknow.
            </h1>
            <p className="text-lg text-muted">
              Experience elegant rooms, curated dining, and signature hospitality with
              seamless access to the city&apos;s best parks, malls, and business hubs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
              >
                Check Availability
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 rounded-full border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
              >
                Explore Rooms
              </Link>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-black/10 bg-white p-4">
                  <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-6 hidden w-56 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-lg backdrop-blur lg:block">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Featured Suite
              </p>
              <p className="mt-2 text-lg font-semibold">Executive Suite</p>
              <p className="text-sm text-muted">Kitchenette · Lounge</p>
              <p className="mt-3 text-sm font-semibold text-foreground">From ₹2,100</p>
            </div>
            <div className="absolute -right-6 bottom-8 hidden w-56 rounded-2xl border border-black/10 bg-white/90 p-4 shadow-lg backdrop-blur lg:block">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Star className="h-4 w-4 text-foreground" /> 4.1 (214 reviews)
              </div>
              <p className="mt-2 text-xs text-muted">
                Rated highly for cleanliness, comfort, and attentive service.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted shadow-xl">
              <Image
                src="/images/hero-lobby.jpg"
                alt="The Arcas Hotel lobby"
                width={720}
                height={900}
                className="h-full w-full object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-10 w-full max-w-6xl px-6">
        <div className="grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-lg md:grid-cols-4">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Check In</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4 text-foreground" /> 26 May
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Check Out</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Calendar className="h-4 w-4 text-foreground" /> 27 May
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Guests</p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Users className="h-4 w-4 text-foreground" /> 2 Adults
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
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
                <CheckCircle className="h-4 w-4 text-foreground" />
                24/7 room service and concierge support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-foreground" />
                Complimentary parking with valet assistance
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-foreground" />
                Restaurant, lobby lounge, and buffet dining
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-foreground">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              View all rooms <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] bg-surface-muted">
                  <Image
                    src={room.image}
                    alt={room.name}
                    width={640}
                    height={480}
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {room.name}
                    </h3>
                    <span className="text-sm font-semibold text-foreground">
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
            <div className="rounded-2xl border border-black/10 bg-surface-muted p-6">
              <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                <Sparkles className="h-5 w-5 text-foreground" /> Premium touches
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
                <div
                  key={amenity.title}
                  className="rounded-2xl border border-black/10 bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-foreground">
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
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted shadow-lg">
            <Image
              src="/images/dining.jpg"
              alt="Dining at The Arcas Hotel"
              width={720}
              height={900}
              className="h-full w-full object-cover grayscale"
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
                <UtensilsCrossed className="h-4 w-4 text-foreground" />
                Restaurant with table service
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-foreground" />
                Breakfast buffet and à la carte options
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-foreground" />
                In-room dining available 24/7
              </div>
            </div>
            <Link
              href="/dining"
              className="inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
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
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Pricing & booking
              </p>
              <h2 className="text-3xl font-semibold text-foreground font-display">
                Compare rates across trusted partners.
              </h2>
            </div>
            <p className="text-sm text-muted">
              Free cancellation options are available with most bookings.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bookingPartners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  {partner.tag}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {partner.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-foreground">
                  {partner.price}
                </p>
                <p className="mt-2 text-sm text-muted">{partner.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Policies & payments
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {policyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Parking & transport
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {transportHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Business & events
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {businessHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Health & safety
            </p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Staying safe with elevated cleaning standards.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {safetyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Sustainability
            </p>
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Responsible hospitality, thoughtfully delivered.
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {sustainabilityHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Leaf className="mt-0.5 h-4 w-4 text-foreground" />
                  {item}
                </li>
              ))}
            </ul>
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
              <Star className="h-4 w-4 text-foreground" /> 4.1 rating on Google
            </div>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
              >
                <Quote className="h-6 w-6 text-foreground" />
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
                <MapPin className="h-4 w-4 text-foreground" />
                Khargapur Plot no 4, STP Road, Ganpati Vihar, Gomti Nagar
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-foreground" /> +91 95656 56100
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-foreground" /> Check-in 14:00 ·
                Check-out 12:00
              </div>
            </div>
            <Link
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-3xl border border-black/10 bg-surface-muted p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Nearby</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>Janeshwar Mishra Park · 5 km</li>
              <li>Lulu Mall · 11 km</li>
              <li>Chaudhary Charan Singh Airport · 22 km</li>
              <li>Gomti Nagar metro & key offices nearby</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
              <p className="text-sm font-semibold text-foreground">Need a pickup?</p>
              <p className="mt-2 text-sm text-muted">
                Ask about airport transfers, local shuttle service, and private car
                rentals arranged by our concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground text-white">
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
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground"
          >
            Book with our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
