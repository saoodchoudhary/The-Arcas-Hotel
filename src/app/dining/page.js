import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Phone, UtensilsCrossed } from "lucide-react";

const diningHighlights = [
  {
    title: "All-day restaurant",
    description: "Local, Chinese, and Italian menus curated daily.",
  },
  {
    title: "Breakfast buffet",
    description: "Start your day with fresh, seasonal selections.",
  },
  {
    title: "Room service",
    description: "Enjoy in-room dining with 24/7 attentive service.",
  },
];

const diningSchedule = [
  { label: "Breakfast buffet", time: "07:00 - 10:30", note: "Extra charge" },
  { label: "Lunch & dinner", time: "12:30 - 22:30", note: "Table service" },
  { label: "In-room dining", time: "24/7", note: "On-demand service" },
];

const signatureMenus = [
  {
    title: "Lucknow classics",
    description: "Traditional flavors inspired by the city’s culinary heritage.",
  },
  {
    title: "Chinese favourites",
    description: "Wok-tossed specials and comforting signature bowls.",
  },
  {
    title: "Italian-inspired plates",
    description: "Fresh pastas, wood-fired selections, and artisan desserts.",
  },
];

export default function DiningPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Dining</p>
            <h1 className="text-4xl font-semibold text-foreground font-display">
              Culinary moments worth remembering.
            </h1>
            <p className="text-base text-muted">
              Our restaurant blends local favorites with global classics, offering
              refined flavors throughout the day. Enjoy buffet dinners, crafted
              beverages, and personalized in-room dining.
            </p>
            <div className="space-y-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="h-4 w-4 text-foreground" />
                Table service and buffet options
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-foreground" />
                Breakfast buffet available (extra charge)
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-foreground" />
                In-room dining 24/7
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white"
            >
              Reserve a table <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted shadow-lg">
            <Image
              src="/images/dining.jpg"
              alt="Restaurant dining"
              width={720}
              height={900}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {diningHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-black/10 bg-white p-6"
              >
                <h2 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted\">Dining hours</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {diningSchedule.map((item) => (
                <li key={item.label} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {item.note}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {signatureMenus.map((menu) => (
              <div
                key={menu.title}
                className="rounded-3xl border border-black/10 bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">{menu.title}</h3>
                <p className="mt-2 text-sm text-muted">{menu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
