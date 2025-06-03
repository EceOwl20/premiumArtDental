// components/TreatmentCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

// SVG yerine react-icons kullanıyoruz
import {
  FaTooth,          // Dolgu Tedavisi
  FaTeethOpen,      // Ortodonti
  FaSmileBeam,      // Diş Eti Tedavisi
  FaChild,          // Çocuk Diş Hekimliği
  FaBone,           // İmplant (örnek)
  FaStethoscope,    // Kanal Tedavisi (örnek)
  FaPaintBrush,     // Estetik Diş Hekimliği
  FaMagic           // Diş Beyazlatma
} from "react-icons/fa";

const treatments = [
  {
    title: "Dolgu Tedavisi",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaTooth,
  },
  {
    title: "Ortodonti",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaTeethOpen,
  },
  {
    title: "Diş Eti Hastalıkları Tedavisi",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaSmileBeam,
  },
  {
    title: "Çocuk Diş Hekimliği (Pedodonti)",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaChild,
  },
  {
    title: "İmplant Tedavisi",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaBone,
  },
  {
    title: "Kanal Tedavisi",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaStethoscope,
  },
  {
    title: "Estetik Diş Hekimliği",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaPaintBrush,
  },
  {
    title: "Diş Beyazlatma",
    description:
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, perspiciatis mollitia magni modi temporibus culpa. Perferendis exercitationem repellat fugiat sed dignissimos, voluptatem possimus beatae molestiae cum tenetur. Dolores, eaque? Provident.",
    Icon: FaMagic,
  },
];

export default function TreatmentCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

    useEffect(() => {
    if (!emblaApi) return;

    // 4000ms = 4 saniye
    const intervalID = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 3000);

    return () => clearInterval(intervalID);
  }, [emblaApi]);

  return (
    <section className="flex max-w-screen bg-[#050a30] items-center justify-center py-10">
      <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[90%] max-w-[1300px]">
      <h2 className="text-3xl md:text-4xl lg:text-[45px] font-roboto text-white mb-6 lg:mb-8">Tedavilerimiz</h2>
<div className="relative ">
  {/* Sol ok */}
  <button
    onClick={scrollPrev}
    className="absolute -left-[4%] top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  {/* Carousel viewport */}
  <div className="embla overflow-hidden " ref={emblaRef}>
    <div className="embla__container flex gap-6">
      {treatments.map(({ title, description, Icon }, idx) => (
        <div
          key={idx}
          className="embla__slide flex-shrink-0 w-[calc(80%-24px)] sm:w-[calc(50%-24px)]  md:w-[calc(33.3%-24px)]">
          <div className="h-full bg-lagoGray/10 border border-[#383838] hover:border-[#d9b740] rounded-xl shadow-xl p-6 flex flex-col">
            {/* Icon renklerini Tailwind ile kontrol ediyoruz */}
            <Icon className="w-12 h-12 mb-4 text-white" />
            <h3 className="font-jost text-white text-xl mb-2">{title}</h3>
            <p className="font-jost text-white text-sm flex-grow line-clamp-4 lg:line-clamp-6">
              {description}
            </p>
            <Link
              href={`/tedavi/${title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}>
              <div className="mt-4 inline-block border border-[#d9b740] text-white font-jost uppercase text-sm py-2 px-4 rounded hover:bg-lagoGold hover:text-black hover:bg-white transition">
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
    className="absolute -right-[4%] top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white"
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
