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
                <UtensilsCrossed className="h-4 w-4 text-brand" />
                Table service and buffet options
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="h-4 w-4 text-brand" />
                Breakfast buffet available (extra charge)
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand" />
                In-room dining 24/7
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white"
            >
              Reserve a table <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-surface-muted">
            <Image
              src="/images/dining.jpg"
              alt="Restaurant dining"
              width={720}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {diningHighlights.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6">
                <h2 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
