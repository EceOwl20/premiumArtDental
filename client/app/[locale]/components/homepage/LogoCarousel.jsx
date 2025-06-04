"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const logos = [
  { src: "https://placehold.co/600x400", alt: "logo1" },
  { src: "https://placehold.co/600x400",   alt: "logo2" },
  { src: "https://placehold.co/600x400",   alt: "logo3" },
  { src: "https://placehold.co/600x400", alt: "logo4" },
  { src: "https://placehold.co/600x400",   alt: "logo5" },
  { src: "https://placehold.co/600x400",     alt: "logo6" },
    { src: "https://placehold.co/600x400",     alt: "logo7" },
      { src: "https://placehold.co/600x400",     alt: "logo8" },
        { src: "https://placehold.co/600x400", alt: "logo9" },
  { src: "https://placehold.co/600x400",   alt: "logo10" },
  { src: "https://placehold.co/600x400",   alt: "logo11" },
  { src: "https://placehold.co/600x400", alt: "logo12" },
  { src: "https://placehold.co/600x400",   alt: "logo13" },
  { src: "https://placehold.co/600x400",     alt: "logo14" },
    { src: "https://placehold.co/600x400",     alt: "logo15" },
      { src: "https://placehold.co/600x400",     alt: "logo16" },
];

export default function LogoCarousel() {
  // Embla carousel için loop:true, align:"center", containScroll:"trimSnaps"
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  // Opsiyonel: İleri / geri butonları eklerseniz kullanabilirsiniz
  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="relative bg-[#1f84d2] py-4 lg:py-10 flex items-center justify-center w-screen">
      {/* 1) Carousel viewport */}
      <div className="embla overflow-hidden border-b border-[#2c744b] w-[100%] rounded-lg" ref={emblaRef}>
        <div className="embla__container flex items-center gap-8 px-8 ">
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

      {/* 2) Sol ve sağ “fade” (karartma) overlayleri */}
      <div className="pointer-events-none absolute inset-y-0 left-[0%] w-24 bg-gradient-to-r from-black/80 to-transparent rounded-lg shadow-xl" />
      <div className="pointer-events-none absolute inset-y-0 right-[0%] w-24 bg-gradient-to-l from-black/80 to-transparent rounded-lg shadow-xl" />


    </section>
  );
}
