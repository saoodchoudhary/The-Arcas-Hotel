import Link from "next/link";
import { Mail, MapPin, Phone, Star } from "lucide-react";
import "./globals.css";

export const metadata = {
  title: "The Arcas Hotel | Gomti Nagar, Lucknow",
  description:
    "Premium boutique hotel in Gomti Nagar, Lucknow offering refined rooms, dining, and thoughtful hospitality.",
};

const navLinks = [
  { href: "/rooms", label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-black/10 bg-white/90 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-foreground" />
                    Gomti Nagar, Lucknow
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-foreground" />
                    +91 95656 56100
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-foreground">
                    <Star className="h-3.5 w-3.5 text-foreground" />
                    4.1 (214)
                  </span>
                </div>
                <span className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-foreground" />
                  reservations@thearcashotel.com
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-6">
                <Link href="/" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-white">
                    AH
                  </div>
                  <div>
                    <p className="text-lg font-semibold tracking-tight">The Arcas Hotel</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Premium Stay
                    </p>
                  </div>
                </Link>
                <nav className="flex flex-wrap items-center gap-5 text-sm font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-foreground/80 transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
                >
                  Check Availability
                </Link>
              </div>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-black/10 bg-white">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[2fr_1fr_1fr]">
              <div className="space-y-4">
                <p className="text-xl font-semibold">The Arcas Hotel</p>
                <p className="text-sm text-muted">
                  A refined boutique address in Gomti Nagar, designed for seamless stays,
                  elegant dining, and thoughtful hospitality.
                </p>
                <div className="space-y-2 text-sm text-muted">
                  <p>Khargapur Plot no 4, STP Road, Ganpati Vihar</p>
                  <p>Gomti Nagar, Lucknow, Uttar Pradesh 226010</p>
                  <p>Check-in 14:00 · Check-out 12:00</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <p className="font-semibold text-foreground">Quick Links</p>
                <ul className="space-y-2 text-muted">
                  {navLinks.map((link) => (
                    <li key={`footer-${link.href}`}>
                      <Link href={link.href} className="hover:text-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-3 text-sm">
                <p className="font-semibold text-foreground">Contact</p>
                <div className="space-y-2 text-muted">
                  <p>+91 95656 56100</p>
                  <p>reservations@thearcashotel.com</p>
                  <p>24/7 front desk support</p>
                  <p>Couples must be married to book</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-foreground px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
                >
                  Plan Your Stay
                </Link>
              </div>
            </div>
            <div className="border-t border-black/10">
              <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 text-xs text-muted">
                <p>© 2026 The Arcas Hotel. All rights reserved.</p>
                <p>Designed for premium hospitality experiences in Lucknow.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
