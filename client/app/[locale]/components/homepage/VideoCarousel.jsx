"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslations } from "next-intl";

export default function VideoCarousel() {
  const t = useTranslations("PatientVideos")
  // Embla kurulumu: loop açık, hizalama başlangıç
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

  // Gerçek YouTube embed linkleri (örnek)
  const videos = [
    "https://youtube.com/embed/qC8QaOE1FNk",
    "https://www.youtube.com/embed/mWcXqI0DHbY",
    "https://www.youtube.com/embed/RCBn1Car1gk",
  ];

  return (
    <section className="py-8 lg:py-16 text-[#050a30] max-w-screen flex flex-col items-center justify-center">
      {/* Başlık ve açıklama */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        <h2 className="text-[26px] md:text-3xl lg:text-4xl font-roboto mb-4 text-[#2c744b]">
         {t("header")}
        </h2>
        <p className="font-jost mb-5 lg:mb-8 max-w-2xl text-[12px] md:text-[14px] lg:text-[16px]">
          {t("description")}
        </p>
      </div>

      {/* Carousel kapsayıcı */}
      <div className="relative w-[90%] lg:w-[100%] max-w-[1800px]">
        {/* Önceki ok */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 lg:-left-12 top-1/2 z-20 -translate-y-1/2 bg-[#2c744b] hover:bg-gray-200 p-1 lg:p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#ffffff]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Embla viewport */}
        <div className="embla overflow-hidden h-auto " ref={emblaRef}>
          <div className="embla__container flex gap-3 lg:gap-6">
            {videos.map((videoUrl, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 
                           w-[55vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] xl:w-[20vw] max-w-[480px] min-h-[300px] md:min-h-[400px] xl:min-h-[550px]
                           rounded-xl overflow-hidden"
              >
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover rounded-xl min-h-[300px] md:min-h-[400px] xl:min-h-[550px]"
                    src={videoUrl}
                    title={`Hasta videosu ${idx + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sonraki ok */}
        <button
          onClick={scrollNext}
          className="absolute -right-4 lg:-right-12 top-1/2 z-20 -translate-y-1/2 bg-[#2c744b] hover:bg-gray-200 p-1 lg:p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#ffffff]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
