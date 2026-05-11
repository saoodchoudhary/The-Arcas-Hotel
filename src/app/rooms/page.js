import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BedDouble, Coffee, Users } from "lucide-react";

const roomTypes = [
  {
    name: "Deluxe King Room",
    description:
      "Elegant king-size accommodations with premium bedding and calm interiors.",
    size: "28 m²",
    guests: "2 Adults",
    image: "/images/rooms/deluxe-king.jpg",
    price: "₹1,544",
  },
  {
    name: "Premium Twin Room",
    description:
      "Twin beds, a dedicated work desk, and airy views for extended stays.",
    size: "30 m²",
    guests: "2-3 Adults",
    image: "/images/rooms/premium-twin.jpg",
    price: "₹1,694",
  },
  {
    name: "Executive Suite",
    description:
      "Suite living with kitchenette, lounge seating, and bespoke service.",
    size: "42 m²",
    guests: "2-4 Adults",
    image: "/images/rooms/executive-suite.jpg",
    price: "₹2,100",
  },
];

const inclusions = [
  "High-speed Wi-Fi",
  "Smart TV and streaming-ready setup",
  "Tea & coffee maker",
  "Daily housekeeping",
  "24/7 room service",
];

const experienceHighlights = [
  {
    title: "In-room essentials",
    items: ["Wi-Fi connectivity", "Smart TV", "Tea & coffee maker", "Daily housekeeping"],
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

export default function RoomsPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Rooms</p>
            <h1 className="text-4xl font-semibold text-foreground font-display">
              Stay in thoughtfully designed rooms and suites.
            </h1>
            <p className="text-base text-muted">
              Discover refined accommodations tailored for business travelers,
              families, and weekend escapes. Each room includes modern amenities
              and a restful ambience.
            </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                  <BedDouble className="h-4 w-4 text-foreground" /> Premium bedding
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                  <Users className="h-4 w-4 text-foreground" /> Spacious layouts
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2">
                  <Coffee className="h-4 w-4 text-foreground" /> In-room refreshments
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-surface-muted p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Room inclusions
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {inclusions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold text-foreground">
                  Best available rates
                </p>
                <p className="mt-2 text-sm text-muted">
                  Free cancellation options are available with most bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {roomTypes.map((room) => (
              <article
                key={room.name}
                className="rounded-3xl border border-black/10 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-t-3xl bg-surface-muted">
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
                    <h2 className="text-lg font-semibold text-foreground">
                      {room.name}
                    </h2>
                    <span className="text-sm font-semibold text-foreground">
                      {room.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{room.description}</p>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                    <span>{room.size}</span>
                    <span>{room.guests}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {experienceHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-3xl border border-black/10 bg-white p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {highlight.title}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {highlight.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Need assistance?
            </p>
            <p className="text-lg font-semibold text-foreground">
              Our reservations team is ready to help.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white"
          >
            Talk to reservations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
