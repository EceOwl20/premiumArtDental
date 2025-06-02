"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const logos = [
  { src: "/images/logos/astratech.png", alt: "AstraTech Dental" },
  { src: "/images/logos/biolase.png",   alt: "Biolase" },
  { src: "/images/logos/ivoclar.png",   alt: "Ivoclar Vivadent" },
  { src: "/images/logos/medentika.png", alt: "Medentika" },
  { src: "/images/logos/neodent.png",   alt: "Neodent" },
  { src: "/images/logos/nobel.png",     alt: "Nobel Biocare" },
    { src: "/images/logos/shape.png",     alt: "3 shape" },
      { src: "/images/logos/straumann.png",     alt: "Straumann" },
        { src: "/images/logos/astratech.png", alt: "AstraTech Dental" },
  { src: "/images/logos/biolase.png",   alt: "Biolase" },
  { src: "/images/logos/ivoclar.png",   alt: "Ivoclar Vivadent" },
  { src: "/images/logos/medentika.png", alt: "Medentika" },
  { src: "/images/logos/neodent.png",   alt: "Neodent" },
  { src: "/images/logos/nobel.png",     alt: "Nobel Biocare" },
    { src: "/images/logos/shape.png",     alt: "3 shape" },
      { src: "/images/logos/straumann.png",     alt: "Straumann" },
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
    <section className="relative bg-black/80 py-4 flex iems-center justify-center">
      {/* 1) Carousel viewport */}
      <div className="embla overflow-hidden border-b border-[#10271a] w-[90%] rounded-lg" ref={emblaRef}>
        <div className="embla__container flex items-center gap-8 px-8 ">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="embla__slide flex-shrink-0 w-auto h-20 px-5 flex items-center justify-center"
            >
              <Image
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
      <div className="pointer-events-none absolute inset-y-0 left-[5%] w-24 bg-gradient-to-r from-black/80 to-transparent rounded-lg shadow-xl" />
      <div className="pointer-events-none absolute inset-y-0 right-[5%] w-24 bg-gradient-to-l from-black/80 to-transparent rounded-lg shadow-xl" />


    </section>
  );
}
