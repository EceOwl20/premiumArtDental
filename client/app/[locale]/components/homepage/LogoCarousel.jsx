// components/LogoCarousel.jsx
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import logo1 from "@/public/images/trademark/3shape.png"
import logo2 from "@/public/images/trademark/astra.png"
import logo3 from "@/public/images/trademark/biolase.png"
import logo4 from "@/public/images/trademark/ivoclar-vivodent.png"
import logo5 from "@/public/images/trademark/medentika.png"
import logo6 from "@/public/images/trademark/neodent.png"
import logo7 from "@/public/images/trademark/nobel-biocare.png"
import logo8 from "@/public/images/trademark/straumann-group.png"

const logos = [
  { src: logo1, alt: "logo1" },
  { src: logo2, alt: "logo2" },
  { src: logo3, alt: "logo3" },
  { src: logo4, alt: "logo4" },
  { src: logo5, alt: "logo5" },
  { src: logo6, alt: "logo6" },
  { src: logo7, alt: "logo7" },
  { src: logo8, alt: "logo8" },
    { src: logo1, alt: "logo1" },
  { src: logo2, alt: "logo2" },
  { src: logo3, alt: "logo3" },
  { src: logo4, alt: "logo4" },
  { src: logo5, alt: "logo5" },
  { src: logo6, alt: "logo6" },
  { src: logo7, alt: "logo7" },
  { src: logo8, alt: "logo8" }
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
    <section className="relative bg-gradient-to-r from-[#4ef8f0] to-[#259df9] py-4 lg:py-10 flex items-center justify-center w-screen">
      {/* Carousel viewport */}
      <div className="embla overflow-hidden w-[90%] rounded-lg max-w-[1500px]" ref={emblaRef}>
        <div className="embla__container flex items-center gap-0 lg:gap-8 px-8">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="embla__slide flex-shrink-0 w-auto h-20 px-5 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={150}
                height={80}
                className="object-contain invert"
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
