// components/ReviewsCarousel.jsx
"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaChevronLeft, FaChevronRight, /* FaGoogle, */ FaStarHalfAlt } from "react-icons/fa";
import { Link } from '@/i18n/navigation';
import Image from "next/image";
// import trustpilot from "../../../../public/images/trustpilot.png"
import { useTranslations } from "next-intl";

export default function ReviewsCarousel() {
  const t = useTranslations("PatientReviews");

  // doktorsitesi.com (eski trustpilot) – i18n'den 76 kayıt çek
  const trustpilotReviews = Array.from({ length: 76 }, (_, i) => {
    const id = i + 1;
    return {
      name: t(`name${id}`),
      date: t(`date${id}`),
      rating: 5,
      text: t(`text${id}`)
    };
  });

  // --- GOOGLE BLOĞU ŞİMDİLİK KAPALI ---
  /*
  const googleReviews = [
    { name: "Elif Yılmaz", date: "17/03/2023", rating: 5, text: t("text1") },
    ...
  ];
  */

  // sadece doktorsitesi.com sekmesi
  const [activeTab, setActiveTab] = useState("trust");

  const [emblaRefTrust, emblaApiTrust] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  // --- GOOGLE CAROUSEL REF'İ KAPALI ---
  // const [emblaRefGoogle, emblaApiGoogle] = useEmblaCarousel({ ... });

  // Autoplay (yalnızca trust)
  useEffect(() => {
    const timer = setInterval(() => emblaApiTrust?.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApiTrust]);

  const scrollPrev = useCallback(() => {
    emblaApiTrust?.scrollPrev();
  }, [emblaApiTrust]);

  const scrollNext = useCallback(() => {
    emblaApiTrust?.scrollNext();
  }, [emblaApiTrust]);

  // Tek liste (doktorsitesi.com)
  const currentReviews = trustpilotReviews;

  return (
    <section className=" text-[#050a30] py-16 max-w-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık */}
        <h2 className="text-[26px] md:text-3xl lg:text-4xl font-roboto mb-2 text-[#e29c2d]">{t("header")}</h2>
        <p className="font-jost text-[14px] text-base mb-8 max-w-2xl">
          {t("description")}
        </p>

        {/* Sekmeler */}
        <div className="flex space-x-4 border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 font-jost ${
              activeTab === "trust"
                ? "border-b-2 border-[var(--premiumgold)] text-[var(--premiumgold)]"
                : "text-gray-400 hover:text-[#e29c2d]"
            }`}
            onClick={() => setActiveTab("trust")}
          >
            doktorsitesi.com
          </button>
          {/* GOOGLE SEKME BUTONU GİZLENDİ
          <button ... onClick={() => setActiveTab("google")}>Google Maps</button>
          */}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol ok */}
          <button
            onClick={scrollPrev}
            className="absolute -left-8 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Sadece doktorsitesi.com viewport */}
          <div className="embla overflow-hidden" ref={emblaRefTrust}>
            <div className="embla__container flex gap-6">
              {currentReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(93%-24px)] 
                             sm:w-[calc(50%-24px)] md:w-[calc(40.5%-24px)] lg:w-[calc(33.3%-24px)] xl:w-[calc(25%-24px)]"
                >
                  <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 flex flex-col h-full">
                    {/* Yıldızlar + tarih */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, i) =>
                          i < Math.floor(review.rating) ? (
                            <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                          ) : review.rating - i >= 0.5 ? (
                            <FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />
                          ) : (
                            <FaStar key={i} className="text-gray-300 w-5 h-5" />
                          )
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>

                    {/* İsim */}
                    <h3 className="font-jost font-semibold text-[16px] lg:text-lg text-black mb-2">
                      {review.name}
                    </h3>

                    {/* Yorum metni */}
                    <p className="font-jost text-gray-700 text-[12px] lg:text-sm flex-grow mb-4">
                      {review.text}
                    </p>

                    {/* Kaynak etiketi (logo yok) */}
                    <div className="mt-auto flex items-center text-sm font-jost text-gray-500">
                      <span className="font-medium">doktorsitesi.com</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ ok */}
          <button
            onClick={scrollNext}
            className="absolute -right-8 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black p-2 rounded-md transition"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
