"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Star,
  Mail,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { href: "/",          label: "Home" },
  { href: "/rooms",     label: "Rooms & Suites" },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining",    label: "Dining" },
  { href: "/gallery",   label: "Gallery" },
  { href: "/about",     label: "About" },
  { href: "/contact",   label: "Contact" },
];

const WA_URL = `https://wa.me/919565656100?text=${encodeURIComponent(
  "Hello The Arcas Hotel,\nI'd like to check availability.\n\nThank you!"
)}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [scrollDir,  setScrollDir]    = useState("up");   // hide on scroll-down
  const [visible,    setVisible]      = useState(true);
  const pathname                       = usePathname();
  const lastScrollY                    = useRef(0);

  /* ── Scroll behaviour ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (y > lastScrollY.current + 6 && y > 80) {
        setVisible(false);
        setScrollDir("down");
      } else if (y < lastScrollY.current - 4) {
        setVisible(true);
        setScrollDir("up");
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Body lock when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* ── Close mobile on route change ── */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <>
      {/* ══════════════════════════════════════
          TOP INFO BAR
      ══════════════════════════════════════ */}
      <div
        className={`relative z-50 border-b border-white/8 bg-[#0d0d0d] text-white transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:px-6">

          {/* Left info */}
          <div className="flex items-center gap-4 text-[11px] font-medium text-white/50">
            <a
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition hover:text-white/80"
            >
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="hidden xs:inline">Gomti Nagar, Lucknow</span>
              <span className="xs:hidden">Lucknow</span>
            </a>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <a
              href="tel:+919565656100"
              className="hidden items-center gap-1.5 transition hover:text-white/80 sm:flex"
            >
              <Phone className="h-3 w-3 shrink-0" /> +91 95656 56100
            </a>
            <span className="hidden h-3 w-px bg-white/10 md:block" />
            <a
              href="mailto:reservations@thearcashotel.com"
              className="hidden items-center gap-1.5 truncate transition hover:text-white/80 md:flex"
            >
              <Mail className="h-3 w-3 shrink-0" /> reservations@thearcashotel.com
            </a>
          </div>

          {/* Right — rating + WhatsApp */}
          <div className="flex items-center gap-2.5">
            <span className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-semibold text-white/70 sm:inline-flex">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              4.1 · 214 reviews
            </span>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-3 py-1 text-[11px] font-semibold text-[#25D366] transition hover:bg-[#25D366]/25"
            >
              <MessageCircle className="h-3 w-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          MAIN HEADER
      ══════════════════════════════════════ */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-[200%]"
        } ${
          scrolled
            ? "border-b border-black/8 bg-white/96 shadow-[0_2px_24px_rgba(0,0,0,0.07)] backdrop-blur-xl"
            : "bg-white/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

          {/* ── Logo ── */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-[#0d0d0d] shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <span className="text-sm font-black tracking-tight text-white">AH</span>
              {/* Amber dot — premium indicator */}
              <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />
                <span className="relative h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400" />
              </span>
            </div>
            <div className="block">
              <p className="text-[15px] font-bold tracking-tight text-[#0d0d0d] transition group-hover:text-black">
                The Arcas Hotel
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#888]">
                Premium Stay · Lucknow
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all duration-200
                    ${active
                      ? "text-[#0d0d0d]"
                      : "text-[#0d0d0d]/60 hover:bg-black/4 hover:text-[#0d0d0d]"
                    }`}
                >
                  {link.label}
                  {/* Active underline */}
                  {active && (
                    <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-[#0d0d0d]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-2.5">
            {/* WhatsApp pill — visible md+ */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/8 px-4 py-2 text-[13px] font-semibold text-[#1a9e4a] transition hover:bg-[#25D366]/15 md:inline-flex"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-[#0d0d0d] px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-black/15 transition-all duration-200 hover:bg-black hover:shadow-lg hover:shadow-black/20 active:scale-[0.97] sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Check Availability
            </Link>

            {/* Hamburger — visible below lg */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm transition hover:bg-black/4 lg:hidden"
            >
              <span
                className={`transition-all duration-200 ${mobileOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"} absolute`}
              >
                <Menu className="h-5 w-5 text-[#0d0d0d]" />
              </span>
              <span
                className={`transition-all duration-200 ${mobileOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"} absolute`}
              >
                <X className="h-5 w-5 text-[#0d0d0d]" />
              </span>
            </button>
          </div>
        </div>

        {/* ── Active page indicator bar ── */}
        <div
          className={`h-[2px] w-full bg-gradient-to-r from-transparent via-[#0d0d0d]/12 to-transparent transition-opacity duration-300 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>

      {/* ══════════════════════════════════════
          MOBILE MENU OVERLAY
      ══════════════════════════════════════ */}

      {/* Backdrop */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-50 flex h-[100dvh] w-full max-w-[320px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-black/8 px-5 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0d0d0d]">
              <span className="text-xs font-black text-white">AH</span>
            </div>
            <div>
              <p className="text-[13px] font-bold text-[#0d0d0d]">The Arcas Hotel</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#999]">Lucknow</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/8 transition hover:bg-black/5"
            aria-label="Close menu"
          >
            <X className="h-4.5 w-4.5 text-[#0d0d0d]" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          <div className="space-y-0.5">
            {navLinks.map((link, i) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ animationDelay: `${i * 40}ms` }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-all duration-150
                    ${active
                      ? "bg-[#0d0d0d] text-white"
                      : "text-[#0d0d0d] hover:bg-black/5"
                    }`}
                >
                  <span>{link.label}</span>
                  {active && <ArrowRight className="h-4 w-4 opacity-60" />}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-5 h-px bg-black/6" />

          {/* Quick contact */}
          <div className="space-y-2 px-1">
            <p className="px-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#aaa]">Contact</p>
            <a
              href="tel:+919565656100"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#333] transition hover:bg-black/4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/6">
                <Phone className="h-3.5 w-3.5" />
              </span>
              +91 95656 56100
            </a>
            <a
              href="mailto:reservations@thearcashotel.com"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#333] transition hover:bg-black/4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/6">
                <Mail className="h-3.5 w-3.5" />
              </span>
              <span className="truncate">reservations@thearcashotel.com</span>
            </a>
            <a
              href="https://maps.app.goo.gl/Nks2QCnDYTsn7CzN6"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-[#333] transition hover:bg-black/4"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/6">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              Gomti Nagar, Lucknow
            </a>
          </div>
        </nav>

        {/* Panel footer — CTAs */}
        <div className="space-y-2.5 border-t border-black/8 px-4 py-5">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0d0d0d] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-black active:scale-[0.97]"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Check Availability
          </Link>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/35 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#1a9e4a] transition hover:bg-[#25D366]/18 active:scale-[0.97]"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>

          {/* Rating strip */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-amber-200 text-amber-200"}`}
              />
            ))}
            <span className="ml-1 text-[11px] font-semibold text-[#888]">4.1 · 214 reviews</span>
          </div>
        </div>
      </div>
    </>
  );
}