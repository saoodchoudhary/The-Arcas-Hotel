import { Building2, Leaf, Sparkles, Users } from "lucide-react";

const values = [
  {
    title: "Warm hospitality",
    description: "Every guest receives attentive and personalized care.",
    icon: Users,
  },
  {
    title: "Contemporary comfort",
    description: "Thoughtful interiors and premium amenities elevate each stay.",
    icon: Sparkles,
  },
  {
    title: "Local connection",
    description: "Rooted in Lucknow with curated neighborhood experiences.",
    icon: Building2,
  },
  {
    title: "Sustainable living",
    description: "Energy-efficient systems and responsible sourcing.",
    icon: Leaf,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">About</p>
          <h1 className="text-4xl font-semibold text-foreground font-display">
            A modern boutique hotel with heart.
          </h1>
          <p className="text-base text-muted">
            The Arcas Hotel is an intimate destination in Gomti Nagar designed to
            balance contemporary luxury with the warmth of Lucknow&apos;s renowned
            hospitality. From our lobby lounge to our curated dining experience,
            each touchpoint is crafted to make you feel at home.
          </p>
          <div className="rounded-3xl bg-white p-6 text-sm text-muted">
            <p className="font-semibold text-foreground">Location summary</p>
            <p className="mt-2">
              Set in a residential area with nearby shops, the hotel is moments
              from Janeshwar Mishra Park, Lulu Mall, and key business hubs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-3xl bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">
                    {value.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-foreground font-display">
              Commitment to sustainability.
            </h2>
            <p className="text-base text-muted">
              We are committed to environmental sustainability through energy
              efficiency, waste reduction, and responsible sourcing. Guests can
              enjoy eco-friendly amenities, water conservation initiatives, and
              locally sourced culinary ingredients.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-6 text-sm text-muted">
            <p className="font-semibold text-foreground">Highlights</p>
            <ul className="mt-3 space-y-2">
              <li>Carbon-free energy sources</li>
              <li>Refillable toiletry containers</li>
              <li>Food waste reduction program</li>
              <li>Water-efficient fixtures</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
