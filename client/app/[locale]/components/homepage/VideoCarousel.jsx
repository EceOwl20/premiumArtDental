"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function VideoCarousel() {
  // Embla kurulumu: loop yok, align start (kaydırma sol baştan başlasın)
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

  // Buraya kendi YouTube video ID’lerinizi ekleyin:
  const videos = [
    "VIDEO_ID_1",
    "VIDEO_ID_2",
    "VIDEO_ID_3",
    "VIDEO_ID_4",
    "VIDEO_ID_5",
  ];

  return (
    <section className=" py-8 lg:py-16 text-[#050a30]">
      {/* Başlık ve açıklama */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 max-w-[1400px]">
        <h2 className="text-3xl lg:text-4xl font-marcellus mb-4">Hasta Videoları</h2>
        <p className="font-jost mb-8 max-w-2xl">
          Kliniğimizde tedavi gören hastalarımızın deneyimlerini izleyin. <br />
          Her bir video, sunduğumuz kaliteli hizmetin ve güvenin bir yansımasıdır.
        </p>
      </div>

      {/* Carousel kapsayıcı: genişlik %80, ortada hizalı */}
      <div className="relative w-4/5 mx-auto max-w-[1400px]">
        {/* Önceki ok tuşu */}
        <button
          onClick={scrollPrev}
          className="absolute -left-12 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#050a30]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Embla viewport */}
        <div className="embla overflow-hidden h-auto " ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {videos.map((videoId, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 
                           w-[60vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] max-w-[380px] min-h-[300px] md:min-h-[400px] xl:min-h-[550px]
                           rounded-xl overflow-hidden"
              >
                {/* 16:9 oranında responsive iframe */}
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full object-cover rounded-xl min-h-[300px] md:min-h-[400px] xl:min-h-[550px]"
                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
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

        {/* Sonraki ok tuşu */}
        <button
          onClick={scrollNext}
          className="absolute -right-12 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-[#050a30] "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
