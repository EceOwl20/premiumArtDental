// components/TreatmentCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import {useTranslations} from "next-intl"

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

export default function TreatmentCarousel() {
   const t = useTranslations("Treatment")
    const t2 = useTranslations("Allon4")
     const t3 = useTranslations("Allon6")
      const t4 = useTranslations("DentalImplants")
       const t5 = useTranslations("DigitalDentistry")
        const t6 = useTranslations("TeethWhitening")
         const t7 = useTranslations("LaminateVeneers")
            const t8 = useTranslations("Periodontology")
               const t9 = useTranslations("PorcelainCrowns")
                  const t10 = useTranslations("ZirconiumCrowns")
                    const t11 = useTranslations("EmaxCrowns")
                      const t12 = useTranslations("Invisalign")

                      // Her tedavi nesnesine "color" özelliği ekledik
const treatments = [
 {
     title: t("treatment1"),
     description:
       t2("text1"),
      Icon: FaTooth,
     color: "#e29c2d",
     link:"/tedaviler/all-on-4"
   },
   {
     title: t("treatment2"),
     description:
        t3("text1"),
        Icon: FaTooth,
     color: "#1f84d2",
       link:"/tedaviler/all-on-6"
   },
   {
     title: t("treatment3"),
     description:
        t4("text1"),
         Icon: FaBone,
     color: "#50a14f",
       link:"/tedaviler/dental-implants"
   },
   {
    title: t("treatment4"),
     description:
        t5("text1"),
        Icon: FaStethoscope,  
     color: "#be231d",
       link:"/tedaviler/digital-dentistry"
   },
   {
     title: t("treatment5"),
     description:
         t6("text1"),
        Icon: FaSmileBeam,
     color: "#b8915e",
       link:"/tedaviler/teeth-whitening"
   },
   {
     title: t("treatment6"),
     description:
       t7("text1"),
         Icon: FaTooth,
     color: "#c1005c",
       link:"/tedaviler/laminate-veneers"
   },
   {
      title: t("treatment7"),
     description:
         t8("text1"),
         Icon: FaTeethOpen,
     color: "#700079",
       link:"/tedaviler/periodontology"
   },
   {
      title: t("treatment8"),
     description:
      t9("text1"),
         Icon: FaPaintBrush,
     color: "#38b2ac",
       link:"/tedaviler/porcelain-crowns"
   },
     {
      title: t("treatment9"),
     description:
        t10("text1"),
         Icon: FaPaintBrush,
     color: "#e46c59",
       link:"/tedaviler/zirconium-crowns"
   },
     {
      title: t("treatment10"),
     description:
         t11("text1"),
         Icon: FaTooth,
     color: "#2c012f",
       link:"/tedaviler/emax-crowns"
   },
 
       {
      title: "Invisalign",
     description:
       t12("text1"),
         Icon: FaMagic,
     color: "#e6d113",
       link:"/tedaviler/invisalign"
   },
];
                      
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
      <div className="flex flex-col w-[90%] md:w-[85%] lg:w-[90%] max-w-[1400px]">
        <h2 className="text-[26px] md:text-4xl lg:text-[45px] font-roboto text-[#1f84d2] mb-6 lg:mb-8 xl:mb-12">
          {t("header")}
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
              {treatments.map(({ title, description, Icon, color,link }, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(90%-34px)] sm:w-[calc(50%-24px)] md:w-[calc(40%-24px)] lg:w-[calc(33.2%-24px)] lg:min-h-[220px]"
                >
                  <div className="h-full bg-lagoGray/10 border  hover:border-[#e29c2d] rounded-xl shadow-xl p-4 md:p-6 flex flex-col" style={{ color: color }}>
                    {/* İkonu dinamik renkte gösteriyoruz */}
                    <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4 flex " style={{ color: color }} />

                    {/* Başlığı dinamik renkte gösteriyoruz */}
                    <h3 className="font-jost text-[18px] md:text-xl mb-2 line-clamp-1" style={{ color: color }}>
                      {title}
                    </h3>

                    {/* Açıklama */}
                    <p className="font-jost text-[#050a30] text-[12px] md:text-sm flex-grow line-clamp-3 lg:line-clamp-4">
                      {description}
                    </p>

                    <Link href={link}>
                      <div className="mt-2 lg:mt-4 inline-block border  font-jost uppercase text-[12px] md:text-sm py-2 px-4 rounded hover:bg-lagoGold hover:text-black hover:bg-white transition" style={{ color: color }}>
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
