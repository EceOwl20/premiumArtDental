// components/TeamCarousel.jsx
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from '@/i18n/navigation';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import { getDoctorProfiles } from "./doctorProfiles";



export default function TeamCarousel() {
  const t = useTranslations('OurTeam');
  const locale = useLocale();
  const profileContent = useMemo(() => getDoctorProfiles(locale), [locale]);
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);
  // loop: true olduğu için Embla, başa ve sona clone slide ekliyor
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const teamMembers = profileContent.doctors;
  const selectedDoctor = teamMembers.find((member) => member.id === selectedDoctorId) ?? null;

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // İsteğe bağlı: 5 saniyede bir otomatik kaydırma
  useEffect(() => {
    if (!emblaApi || selectedDoctor) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi, selectedDoctor]);

  useEffect(() => {
    if (!selectedDoctor) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedDoctorId(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDoctor]);

  return (
    <>
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
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="
                    embla__slide flex-shrink-0
                    w-[calc(75%-1.5rem)]       /* küçük ekran: 1 slayt genişliği %80 - gap */
                    sm:w-[calc(50%-1.5rem)]   /* sm: 2 slayt, her bir %50 - gap */
                    md:w-[calc(33.333%-1.5rem)] /* md: 3 slayt, her bir %33.333 - gap */
                    lg:w-[calc(25%-1.5rem)]    /* lg: 4 slayt, her bir %25 - gap */
                  "
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedDoctorId(member.id)}
                      className="group w-full overflow-hidden bg-[var(--lago-gray)] text-left transition-transform duration-300 hover:-translate-y-1"
                    >
                      <div className="relative overflow-hidden aspect-[4/5]">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(min-width: 1024px) 24vw, (min-width: 768px) 32vw, 72vw"
                          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${member.imageClassName ?? "object-center"}`}
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.26),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                      </div>
                      <div className="space-y-3 p-4">
                        <div>
                          <h3 className="font-raleway text-lg font-semibold text-[#050a30]">
                            {member.name}
                          </h3>
                          <p className="mt-1 font-jost text-sm text-[#5e6b7f]">
                            {member.specialty}
                          </p>
                        </div>

                        <div className="inline-flex items-center gap-2 font-jost text-sm text-[#1f84d2]">
                          <span>{profileContent.ui.viewProfile}</span>
                          <GoArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </div>
                    </button>
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

      {selectedDoctor && (
        <div
          className="fixed inset-0 z-[100] bg-[#050a30]/75 backdrop-blur-sm px-4 py-6 lg:px-10 lg:py-10"
          onClick={() => setSelectedDoctorId(null)}
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="max-h-full w-full overflow-hidden rounded-[28px] bg-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#e8eef7] px-5 py-4 lg:px-8">
                <div>
                  <p className="text-xs font-jost uppercase tracking-[0.25em] text-[#1f84d2]/70">
                    Premium Art Dental
                  </p>
                  <h3 className="mt-1 font-roboto text-xl text-[#050a30] lg:text-3xl">
                    {selectedDoctor.name}
                  </h3>
                  <p className="mt-1 font-jost text-sm text-[#c1005c] lg:text-base">
                    {selectedDoctor.title}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedDoctorId(null)}
                  className="rounded-full border border-[#d8e2f0] px-3 py-2 text-sm font-jost text-[#050a30] transition hover:border-[#c1005c] hover:text-[#c1005c]"
                >
                  {profileContent.ui.close}
                </button>
              </div>

              <div className="max-h-[calc(100vh-9rem)] overflow-y-auto">
                <div className="grid gap-8 px-5 py-5 lg:grid-cols-[340px_minmax(0,1fr)] lg:px-8 lg:py-8">
                  <div className="space-y-5">
                    <div className="relative overflow-hidden rounded-[24px] bg-[#eef5fb] aspect-[4/5]">
                      <Image
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        fill
                        sizes="(min-width: 1024px) 340px, 100vw"
                        className={`object-cover ${selectedDoctor.imageClassName ?? "object-center"}`}
                      />
                    </div>

                    <div className="rounded-[24px] border border-[#e5edf7] bg-[#f8fbff] p-5">
                      <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                        {profileContent.ui.currentPosition}
                      </p>
                      <p className="mt-2 font-raleway text-sm leading-6 text-[#050a30]">
                        {selectedDoctor.currentPosition}
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                      <div className="rounded-[24px] border border-[#e5edf7] p-5">
                        <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                          {profileContent.ui.education}
                        </p>
                        <div className="mt-3 space-y-2 font-raleway text-sm leading-6 text-[#050a30]">
                          {selectedDoctor.education.map((item) => (
                            <p key={item}>{item}</p>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-[#e5edf7] p-5">
                        <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                          {profileContent.ui.experience}
                        </p>
                        <p className="mt-3 font-raleway text-sm leading-6 text-[#050a30]">
                          {selectedDoctor.experience}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <section className="rounded-[24px] border border-[#e5edf7] p-5 lg:p-6">
                      <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                        {profileContent.ui.overview}
                      </p>
                      <p className="mt-3 font-raleway text-[15px] leading-7 text-[#050a30]">
                        {selectedDoctor.overview}
                      </p>
                    </section>

                    <section className="rounded-[24px] border border-[#e5edf7] p-5 lg:p-6">
                      <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                        {profileContent.ui.expertise}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        {selectedDoctor.expertise.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[#dce7f5] bg-[#f6faff] px-4 py-2 font-jost text-sm text-[#050a30]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </section>

                    <div className="grid gap-6 xl:grid-cols-2">
                      <section className="rounded-[24px] border border-[#e5edf7] p-5 lg:p-6">
                        <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                          {profileContent.ui.strengths}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {selectedDoctor.strengths.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#c1005c]" />
                              <span className="font-raleway text-sm leading-6 text-[#050a30]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section className="rounded-[24px] border border-[#e5edf7] p-5 lg:p-6">
                        <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                          {profileContent.ui.postgraduate}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {selectedDoctor.postgraduate.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#1f84d2]" />
                              <span className="font-raleway text-sm leading-6 text-[#050a30]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    <section className="rounded-[24px] border border-[#e5edf7] bg-[linear-gradient(135deg,#fff8f8_0%,#f7fbff_100%)] p-5 lg:p-6">
                      <p className="font-jost text-xs uppercase tracking-[0.22em] text-[#1f84d2]/70">
                        {profileContent.ui.biography}
                      </p>
                      <p className="mt-3 font-raleway text-[15px] leading-7 text-[#050a30]">
                        {selectedDoctor.biography}
                      </p>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
