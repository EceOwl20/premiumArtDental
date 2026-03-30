// components/TeamCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from '@/i18n/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useTranslations } from 'next-intl';
// import dtece from "@/public/images/doctors/DtEceYellice.jpg" 
import dteceSolo from "@/public/images/doctors/DtEceYelliceSolo.jpg" 
import dtfiruzan from "@/public/images/doctors/DtFiruzanKucukozkaral.jpg" 
// import dtkivanc from "@/public/images/doctors/DtKivancozkaral.jpg" 
import dtkivancSolo from "@/public/images/new/A_O01597 copy.jpg"
import Image from "next/image";



export default function TeamCarousel() {
     const t = useTranslations('OurTeam');
  // loop: true olduğu için Embla, başa ve sona clone slide ekliyor
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const teamMembers = [
  { name: "Dt. Kıvanç Özkaral", role: t("dentist"), img: dtkivancSolo, imageClassName: "object-[70%_center]" },
  { name: "Dt. Firuzan Küçük Özkaral", role: t("dentist"), img: dtfiruzan, imageClassName: "object-center" },
    { name: "Dt. Ece Yellice", role: t("dentist"), img: dteceSolo, imageClassName: "object-center" },
  
  // { name: "Dr. Adipiscing Elit",    role: "Hijyen Personeli", img: "https://placehold.co/300x400?text=Hello+World" },
  // { name: "Dr. Lorem Lorem",        role: "Diş Hekimi",    img: "https://placehold.co/300x400?text=Hello+World" },
  // { name: "Dr. Dolor Dolor",        role: "Ortodontist",   img: "https://placehold.co/300x400?text=Hello+World" },
  // { name: "Dr. Amet Amet",          role: "Diş Hekimi",    img: "https://placehold.co/300x400?text=Hello+World" },
  // { name: "Dr. Adipiscing Adipiscing",role:"Diş Hekimi",  img: "https://placehold.co/300x400?text=Hello+World" },
];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // İsteğe bağlı: 5 saniyede bir otomatik kaydırma
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className=" text-[#050a30] py-8 lg:py-16 max-w-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık ve "Tüm Ekibimiz" butonu */}
        <div className="flex items-center justify-between mb-8 relative">
          <div>
            <h2 className="text-[28px] lg:text-4xl font-roboto mb-2 text-[#c1005c]">{t("header")}</h2>
            <p className="font-raleway text-[#050a30] text-[14px] lg:text-[16px]">
              {t("text1")}
                {t("text2")}
            </p>
          </div>
          <Link href="/team">
            <div className="absolute right-0 -top-2 lg:flex border border-[#c1005c] text-[#c1005c] px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-[#c1005c] hover:text-white transition flex items-center gap-1 text-[14px] lg:text-[18px]">
             {t("buttonText")}
              <span className="ml-1">
                <GoArrowUpRight size={30} className="hidden lg:flex" />{" "}
                <GoArrowUpRight size={20} className="flex lg:hidden" />
              </span>
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol ok */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Embla viewport */}
          <div ref={emblaRef} className="embla overflow-hidden">
            {/*
              Önemli: Burada `gap-6` (1.5rem) boşluk ve
              `px-3` (0.75rem *her iki tarafta*) ekliyoruz.
              - px-3: Klon ile gerçek slayt arasında boşluk bırakacak.
              - gap-6: Her slayt arasındaki boşluğu koruyacak.
              Slide genişliğini de gap kadar çıkarıyoruz: 
              w-[calc(25%-1.5rem)] örneği, çünkü 1.5rem = gap-6.
            */}
            <div className="embla__container flex gap-6 px-3">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="
                    embla__slide flex-shrink-0
                    w-[calc(75%-1.5rem)]       /* küçük ekran: 1 slayt genişliği %80 - gap */
                    sm:w-[calc(50%-1.5rem)]   /* sm: 2 slayt, her bir %50 - gap */
                    md:w-[calc(33.333%-1.5rem)] /* md: 3 slayt, her bir %33.333 - gap */
                    lg:w-[calc(25%-1.5rem)]    /* lg: 4 slayt, her bir %25 - gap */
                  "
                >
                  <div className="bg-[var(--lago-gray)] overflow-hidden group">
                    <div className="relative overflow-hidden aspect-[4/5]">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 72vw"
                        className={`object-cover transition-transform duration-500 group-hover:scale-110 ${member.imageClassName ?? "object-center"}`}
                      />
                      {/* Hover efekti: ortadan başlayıp kenarlara açılan yarı saydam beyaz gradient */}
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
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
