"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import logo1 from "@/public/images/trademark/3shape.png";
import logo2 from "@/public/images/trademark/astra.png";
import logo3 from "@/public/images/trademark/biolase.png";
import logo4 from "@/public/images/trademark/ivoclar-vivodent.png";
import logo5 from "@/public/images/trademark/medentika.png";
import logo6 from "@/public/images/trademark/neodent.png";
import logo7 from "@/public/images/trademark/nobel-biocare.png";
import logo8 from "@/public/images/trademark/straumann-group.png";

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
  { src: logo8, alt: "logo8" },
];

export default function LogoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // 🚀 Otomatik oynatma
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // 3 saniye

    // Cleanup: component unmount olursa interval iptal olsun
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="relative bg-gradient-to-r from-[#1f84d2] to-[#ffffff] py-4 lg:py-10 flex items-center justify-center w-screen">
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
    </section>
  );
}
