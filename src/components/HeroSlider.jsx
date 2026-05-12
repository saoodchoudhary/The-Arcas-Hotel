"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=85",
    label: "Grand Lobby",
    subtitle: "Design-forward welcome",
  },
  {
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1800&q=85",
    label: "Signature Suite",
    subtitle: "Premium interiors",
  },
  {
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1800&q=85",
    label: "Premium Interiors",
    subtitle: "Curated for comfort",
  },
  {
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1800&q=85",
    label: "Luxury Comfort",
    subtitle: "Restorative calm",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current,     setCurrent]     = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress,    setProgress]    = useState(0);

  const slidesRef  = useRef([]);
  const timerRef   = useRef(null);
  const progressRef = useRef(null);

  const startProgress = useCallback(() => {
    if (progressRef.current) {
      gsap.killTweensOf(progressRef.current);
      gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(progressRef.current, { scaleX: 1, duration: INTERVAL / 1000, ease: "none" });
    }
  }, []);

  const goTo = useCallback(
    (nextIndex, dir = -1) => {
      if (isAnimating || nextIndex === current) return;
      setIsAnimating(true);

      const currentEl = slidesRef.current[current];
      const nextEl    = slidesRef.current[nextIndex];
      if (!currentEl || !nextEl) return;

      gsap.set(nextEl, { x: dir === -1 ? "100%" : "-100%", autoAlpha: 1 });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(currentEl, { autoAlpha: 0, x: "0%" });
          setCurrent(nextIndex);
          setIsAnimating(false);
          startProgress();
        },
      });

      tl.to(currentEl, { x: dir === -1 ? "-7%" : "7%", autoAlpha: 0, duration: 1.0, ease: "power3.inOut" })
        .to(nextEl,     { x: "0%", autoAlpha: 1,        duration: 1.0, ease: "power3.inOut" }, "<");
    },
    [current, isAnimating, startProgress]
  );

  useEffect(() => {
    slidesRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { autoAlpha: i === 0 ? 1 : 0, x: "0%" });
    });
    startProgress();
  }, [startProgress]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const next = (current + 1) % SLIDES.length;
      goTo(next, -1);
    }, INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [current, goTo]);

  const handleDot = (i) => {
    clearInterval(timerRef.current);
    goTo(i, i > current ? -1 : 1);
  };

  const handlePrev = () => {
    clearInterval(timerRef.current);
    goTo((current - 1 + SLIDES.length) % SLIDES.length, 1);
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    goTo((current + 1) % SLIDES.length, -1);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.label}
          ref={(el) => (slidesRef.current[i] = el)}
          className="absolute inset-0 will-change-transform"
          style={{ visibility: "hidden" }}
        >
          <Image
            src={slide.image}
            alt={slide.label}
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Gradient layers */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/38 to-black/12" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
        </div>
      ))}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/15">
        <div ref={progressRef} className="h-full bg-white/80" style={{ transform: "scaleX(0)", transformOrigin: "left center" }} />
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/35 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/60 md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Bottom dots + label */}
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => handleDot(i)}
            aria-label={`Slide ${i + 1}: ${slide.label}`}
            className={`rounded-full transition-all duration-500 ${
              i === current ? "h-2 w-10 bg-white" : "h-2 w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Vertical bars — right side */}
      <div className="absolute right-7 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-center gap-2.5 md:flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === current ? "h-10 w-0.5 bg-white" : "h-4 w-0.5 bg-white/28 hover:bg-white/55"
            }`}
          />
        ))}
      </div>

      {/* Slide label — bottom right */}
      <div className="absolute bottom-7 right-20 z-20 hidden md:block text-right">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/45">
          {SLIDES[current].label}
        </p>
        <p className="mt-0.5 text-[10px] font-medium tracking-wide text-white/30">
          {SLIDES[current].subtitle}
        </p>
      </div>

      {/* Slide counter — top right */}
      <div className="absolute right-8 top-8 z-20 hidden md:block">
        <p className="text-[11px] font-bold tabular-nums text-white/40">
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
}