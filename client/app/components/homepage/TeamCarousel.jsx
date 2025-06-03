// components/TeamCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const teamMembers = [
  {
    name: "Dr. Lorem Ipsum",
    role: "Kurucu Diş Hekimi",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Dolor Sit",
    role: "Ortodontist",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Amet Consectetur",
    role: "Diş Hekimi",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Adipiscing Elit",
    role: "Hijyen Personeli",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
    {
    name: "Dr. Lorem Ipsum",
    role: "Kurucu Diş Hekimi",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Dolor Sit",
    role: "Ortodontist",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Amet Consectetur",
    role: "Diş Hekimi",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
  {
    name: "Dr. Adipiscing Elit",
    role: "Hijyen Personeli",
    img: "https://placehold.co/300x400?text=Hello+World",
  },
];

export default function TeamCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Optional: autoplay every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="bg-[#050a30] text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık ve Açıklama */}
        <div className="flex items-center justify-between mb-8 relative">
          <div>
            <h2 className="text-3xl lg:text-4xl font-roboto mb-2">Ekibimiz</h2>
            <p className="font-raleway text-gray-300">
              Sizlere en iyi hizmeti sunmak için çalışan güçlü bir ekibiz! Sağlıklı, konforlu ve güvenilir bir deneyim için her zaman yanınızdayız.
            </p>
          </div>
          <Link href="/team">
            <div className="absolute right-0 -top-2 lg:flex border border-[var(--premiumgold)] text-[var(--premiumgold)] px-4 py-2 rounded-md hover:bg-[var(--premiumgold)] hover:text-black transition flex items-center gap-1 text-[14px] lg:text-[18px]">
              Tüm Ekibimiz <span className="ml-1"><GoArrowUpRight size={30} className="hidden lg:flex"/> <GoArrowUpRight size={20} className="flex lg:hidden"/></span>
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol ok */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Embla viewport */}
          <div className="embla overflow-hidden " ref={emblaRef}>
            <div className="embla__container flex gap-6 lg:gap-10">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(80%-24px)] sm:w-[calc(50%-24px)] md:w-[calc(33.3%-24px)] lg:w-[calc(25%-24px)]"
                >
                  <div className="bg-[var(--lago-gray)] overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.img}
                        alt={member.name}
                        width={300}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-raleway font-semibold text-lg">{member.name}</h3>
                      <p className="font-raleway text-sm text-gray-300">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ ok */}
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
