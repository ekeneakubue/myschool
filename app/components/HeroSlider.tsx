"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type SliderImage = {
  src: string;
  alt: string;
};

type HeroSliderProps = {
  images: SliderImage[];
  intervalMs?: number;
};

export default function HeroSlider({ images, intervalMs = 5000 }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const safeImages = useMemo(() => images.filter(Boolean), [images]);

  useEffect(() => {
    if (safeImages.length <= 1) return;
    timerRef.current = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeImages.length);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [safeImages.length, intervalMs]);

  const goTo = (index: number) => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setActiveIndex(index);
  };

  const goNext = () => goTo((activeIndex + 1) % safeImages.length);
  const goPrev = () => goTo((activeIndex - 1 + safeImages.length) % safeImages.length);

  return (
    <div className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        {safeImages.map((img, index) => (
          <div
            key={`${img.src}-${index}`}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-neutral-900/25" />
          </div>
        ))}
      </div>

      {safeImages.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-neutral-900/60 text-white grid place-items-center hover:bg-neutral-900/80"
          >
            {/* left arrow */}
            <span className="sr-only">Previous</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            aria-label="Next slide"
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-neutral-900/60 text-white grid place-items-center hover:bg-neutral-900/80"
          >
            {/* right arrow */}
            <span className="sr-only">Next</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {safeImages.map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === activeIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


