// components/Navbar.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  MapPin,
  Phone,
  Star,
  Mail,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/rooms",
    label: "Rooms & Suites",
    children: [
      { href: "/rooms#deluxe", label: "Deluxe Room" },
      { href: "/rooms#premium", label: "Premium Suite" },
      { href: "/rooms#kitchenette", label: "Room with Kitchenette" },
    ],
  },
  { href: "/amenities", label: "Amenities" },
  { href: "/dining", label: "Dining" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="border-b border-black/5 bg-[#0f0f0f] text-white/80">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs sm:text-sm">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <span className="flex items-center gap-1.5 transition hover:text-white">
              <MapPin className="h-3.5 w-3.5" />
              Gomti Nagar, Lucknow
            </span>
            <span className="hidden sm:flex items-center gap-1.5 transition hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              +91 95656 56100
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden md:flex items-center gap-1.5 transition hover:text-white">
              <Mail className="h-3.5 w-3.5" />
              reservations@thearcashotel.com
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-0.5 text-xs font-semibold text-white backdrop-blur">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              4.1 (214 reviews)
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-black/10 bg-white/95 shadow-[0_1px_20px_rgba(0,0,0,0.06)] backdrop-blur-xl"
            : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3.5">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-[#0f0f0f] text-white transition-transform duration-300 group-hover:scale-105">
              <span className="text-base font-bold tracking-tight">AH</span>
              <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400 transition-colors group-hover:bg-amber-300" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-[#0f0f0f]">
                The Arcas Hotel
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#5a5a5a]">
                Premium Stay · Lucknow
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() =>
                  link.children && setActiveDropdown(link.href)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium text-[#0f0f0f]/75 transition-all duration-200 hover:bg-black/5 hover:text-[#0f0f0f]"
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.href && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="w-56 rounded-xl border border-black/8 bg-white p-2 shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-4 py-2.5 text-sm text-[#0f0f0f]/70 transition hover:bg-black/5 hover:text-[#0f0f0f]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#0f0f0f] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:bg-black hover:shadow-xl hover:shadow-black/15 active:scale-[0.97]"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Check Availability
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 transition hover:bg-black/5 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between border-b border-black/8 px-6 py-4">
            <p className="text-sm font-bold uppercase tracking-widest text-[#5a5a5a]">
              Menu
            </p>
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-black/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => !link.children && setMobileOpen(false)}
                      className="flex-1 rounded-lg px-4 py-3 text-base font-medium text-[#0f0f0f] transition hover:bg-black/5"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <button
                        onClick={() =>
                          setMobileSubmenu(
                            mobileSubmenu === link.href ? null : link.href
                          )
                        }
                        className="flex h-9 w-9 items-center justify-center rounded-lg transition hover:bg-black/5"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileSubmenu === link.href ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {link.children && mobileSubmenu === link.href && (
                    <div className="ml-4 space-y-0.5 border-l-2 border-black/10 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-3 py-2.5 text-sm text-[#5a5a5a] transition hover:bg-black/5 hover:text-[#0f0f0f]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="border-t border-black/8 px-6 py-5 space-y-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0f0f0f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Check Availability
            </Link>
            <div className="space-y-2 text-center text-xs text-[#5a5a5a]">
              <p className="flex items-center justify-center gap-1.5">
                <Phone className="h-3.5 w-3.5" /> +91 95656 56100
              </p>
              <p className="flex items-center justify-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> reservations@thearcashotel.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}