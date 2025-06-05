// components/TreatmentCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

import {
  FaTooth,
  FaTeethOpen,
  FaSmileBeam,
  FaChild,
  FaBone,
  FaStethoscope,
  FaPaintBrush,
  FaMagic,
} from "react-icons/fa";

// Her tedavi nesnesine "color" özelliği ekledik
const treatments = [
  {
    title: "Dolgu Tedavisi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaTooth,
    color: "#e29c2d",
  },
  {
    title: "Ortodonti",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaTeethOpen,
    color: "#1f84d2",
  },
  {
    title: "Diş Eti Hastalıkları Tedavisi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaSmileBeam,
    color: "#50a14f",
  },
  {
    title: "Çocuk Diş Hekimliği (Pedodonti)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaChild,
    color: "#be231d",
  },
  {
    title: "İmplant Tedavisi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaBone,
    color: "#b8915e",
  },
  {
    title: "Kanal Tedavisi",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaStethoscope,
    color: "#c1005c",
  },
  {
    title: "Estetik Diş Hekimliği",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaPaintBrush,
    color: "#700079",
  },
  {
    title: "Diş Beyazlatma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa.…",
    Icon: FaMagic,
    color: "#38b2ac",
  },
];

export default function TreatmentCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const intervalID = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(intervalID);
  }, [emblaApi]);

  return (
    <section className="flex max-w-screen items-center justify-center py-10">
      <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[90%] max-w-[1300px]">
        <h2 className="text-3xl md:text-4xl lg:text-[45px] font-roboto text-[#1f84d2] mb-6 lg:mb-8">
          Tedavilerimiz
        </h2>
        <div className="relative">
          {/* Sol ok */}
          <button
            onClick={scrollPrev}
            className="absolute -left-[4%] top-1/2 z-20 -translate-y-1/2 bg-gray-200 hover:bg-[#050a30] p-2 rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#050a30] hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel viewport */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {treatments.map(({ title, description, Icon, color }, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(80%-24px)] sm:w-[calc(50%-24px)] md:w-[calc(40%-24px)] lg:w-[calc(33.3%-24px)]"
                >
                  <div className="h-full bg-lagoGray/10 border border-[#383838] hover:border-[#e29c2d] rounded-xl shadow-xl p-6 flex flex-col">
                    {/* İkonu dinamik renkte gösteriyoruz */}
                    <Icon className="w-12 h-12 mb-4" style={{ color: color }} />

                    {/* Başlığı dinamik renkte gösteriyoruz */}
                    <h3 className="font-jost text-xl mb-2" style={{ color: color }}>
                      {title}
                    </h3>

                    {/* Açıklama */}
                    <p className="font-jost text-[#050a30] text-sm flex-grow line-clamp-4 lg:line-clamp-6">
                      {description}
                    </p>

                    <Link href={`/tedavi/${title.toLowerCase().replace(/\s+/g, "-")}`}>
                      <div className="mt-4 inline-block border border-[#e29c2d] text-[#e29c2d] font-jost uppercase text-sm py-2 px-4 rounded hover:bg-lagoGold hover:text-black hover:bg-white transition">
                        Detaylı Bilgi
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ ok */}
          <button
            onClick={scrollNext}
            className="absolute -right-[4%] top-1/2 z-20 -translate-y-1/2 bg-gray-200 hover:bg-[#050a30] hover:text-white p-2 rounded-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#050a30] hover:text-white" 
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
