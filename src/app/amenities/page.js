import { CheckCircle, Coffee, Leaf, ShieldCheck, Sparkles, Wifi } from "lucide-react";

const amenityGroups = [
  {
    title: "Comfort & Stay",
    items: [
      "Air-conditioned rooms",
      "Tea and coffee maker",
      "In-room refrigerator (select rooms)",
      "Smart TV with entertainment options",
      "Daily housekeeping",
    ],
    icon: Sparkles,
  },
  {
    title: "Dining & Service",
    items: [
      "Restaurant with buffet dinner",
      "24/7 room service",
      "Breakfast buffet (extra charge)",
      "Table service dining",
      "Concierge and grocery support",
    ],
    icon: Coffee,
  },
  {
    title: "Business & Events",
    items: [
      "Meeting rooms",
      "Business-ready Wi-Fi",
      "Wake-up calls",
      "Laundry services",
      "On-site parking",
    ],
    icon: Wifi,
  },
  {
    title: "Safety & Wellness",
    items: [
      "Enhanced cleaning protocols",
      "Contactless check-in/out",
      "Safety dividers at front desk",
      "Doctor on call",
      "No-contact housekeeping on request",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Sustainability",
    items: [
      "Energy-efficient lighting",
      "Responsible sourcing",
      "Water conservation program",
      "Recycling and waste reduction",
      "Eco-friendly toiletries",
    ],
    icon: Leaf,
  },
];

export default function AmenitiesPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Amenities</p>
          <h1 className="text-4xl font-semibold text-foreground font-display">
            Premium features for a seamless stay.
          </h1>
          <p className="text-base text-muted">
            Every detail at The Arcas Hotel is curated for comfort, convenience,
            and peace of mind. Explore what makes our hospitality exceptional.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {amenityGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="rounded-3xl bg-white p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {group.title}
                  </h2>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="mt-1 h-4 w-4 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
