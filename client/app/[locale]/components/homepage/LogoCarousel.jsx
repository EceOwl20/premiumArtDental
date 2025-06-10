// components/LogoCarousel.jsx
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const logos = [
  { src: "https://placehold.co/600x400", alt: "logo1" },
  { src: "https://placehold.co/600x400", alt: "logo2" },
  { src: "https://placehold.co/600x400", alt: "logo3" },
  { src: "https://placehold.co/600x400", alt: "logo4" },
  { src: "https://placehold.co/600x400", alt: "logo5" },
  { src: "https://placehold.co/600x400", alt: "logo6" },
  { src: "https://placehold.co/600x400", alt: "logo7" },
  { src: "https://placehold.co/600x400", alt: "logo8" },
  { src: "https://placehold.co/600x400", alt: "logo9" },
  { src: "https://placehold.co/600x400", alt: "logo10" },
  { src: "https://placehold.co/600x400", alt: "logo11" },
  { src: "https://placehold.co/600x400", alt: "logo12" },
  { src: "https://placehold.co/600x400", alt: "logo13" },
  { src: "https://placehold.co/600x400", alt: "logo14" },
  { src: "https://placehold.co/600x400", alt: "logo15" },
  { src: "https://placehold.co/600x400", alt: "logo16" },
];

export default function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="relative bg-gradient-to-r from-[#38b2ac] to-[#1f84d2] py-4 lg:py-10 flex items-center justify-center w-screen">
      {/* Carousel viewport */}
      <div className="embla overflow-hidden w-full rounded-lg" ref={emblaRef}>
        <div className="embla__container flex items-center gap-0 lg:gap-8 px-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="embla__slide flex-shrink-0 w-auto h-20 px-5 flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sol ve sağ “fade” overlayleri */}
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/80 to-transparent rounded-lg shadow-xl" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/80 to-transparent rounded-lg shadow-xl" /> */}
    </section>
  );
}
