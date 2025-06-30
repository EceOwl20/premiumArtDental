// components/ReviewsCarousel.jsx
"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaChevronLeft, FaChevronRight, FaGoogle, FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import trustpilot from "../../../../public/images/trustpilot.png"
import { useTranslations } from "next-intl";


export default function ReviewsCarousel() {
  const t = useTranslations("PatientReviews")

  const trustpilotReviews = [
  {
    name: "Elif Yılmaz",
    date: "17/03/2023",
    rating: 5,
    text: t("text1")
  },
  {
    name: "James Thompson",
    date: "24/03/2024",
    rating: 5,
    text: t("text2")
  },
  {
    name: "Merve Demir",
    date: "01/09/2024",
    rating: 5,
    text: t("text3")
  },
  {
    name: "Sophia Müller",
    date: "10/05/2024",
    rating: 5,
    text: t("text4")
  },
  {
    name: "Ali Kaya",
    date: "05/06/2024",
    rating: 5,
    text: t("text5")
  },
  {
    name: "Anna Petrova",
    date: "12/06/2024",
    rating: 5,
    text: t("text6")
  },
  {
    name: "Ahmet Şahin",
    date: "22/06/2024",
    rating: 5,
    text: t("text7")
  },
  {
    name: "Emily Davis",
    date: "28/06/2024",
    rating: 5,
    text: t("text8")
  }
]


const googleReviews = [
   {
    name: "Elif Yılmaz",
    date: "17/03/2023",
    rating: 5,
    text: t("text1")
  },
  {
    name: "James Thompson",
    date: "24/03/2024",
    rating: 5,
    text: t("text2")
  },
  {
    name: "Merve Demir",
    date: "01/09/2024",
    rating: 5,
    text: t("text3")
  },
  {
    name: "Sophia Müller",
    date: "10/05/2024",
    rating: 5,
    text: t("text4")
  },
  {
    name: "Ali Kaya",
    date: "05/06/2024",
    rating: 5,
    text: t("text5")
  },
  {
    name: "Anna Petrova",
    date: "12/06/2024",
    rating: 5,
    text: t("text6")
  },
  {
    name: "Ahmet Şahin",
    date: "22/06/2024",
    rating: 5,
    text: t("text7")
  },
  {
    name: "Emily Davis",
    date: "28/06/2024",
    rating: 5,
    text: t("text8")
  }
]

  const [activeTab, setActiveTab] = useState("");

  const [emblaRefTrust, emblaApiTrust] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });
  const [emblaRefGoogle, emblaApiGoogle] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  // Autoplay her 5 sn bir slayt değişsin
  useEffect(() => {
    let timer;

    if (activeTab === "trust" && emblaApiTrust) {
      timer = setInterval(() => emblaApiTrust.scrollNext(), 5000);
    } else if (activeTab === "google" && emblaApiGoogle) {
      timer = setInterval(() => emblaApiGoogle.scrollNext(), 5000);
    }
    return () => clearInterval(timer);
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  const scrollPrev = useCallback(() => {
    if (activeTab === "trust" && emblaApiTrust) emblaApiTrust.scrollPrev();
    else if (activeTab === "google" && emblaApiGoogle) emblaApiGoogle.scrollPrev();
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  const scrollNext = useCallback(() => {
    if (activeTab === "trust" && emblaApiTrust) emblaApiTrust.scrollNext();
    else if (activeTab === "google" && emblaApiGoogle) emblaApiGoogle.scrollNext();
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  // Kaç değerlendirme var bilgisi (Trustpilot için)
  const trustCount = 95;

  // Aktif sekmeye göre render edilecek liste
  const currentReviews = activeTab === "trust" ? trustpilotReviews : googleReviews;

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
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("trust")}
          >
            Trustpilot
          </button>
          <button
            className={`px-4 py-2 font-jost ${
              activeTab === "google"
                ? "border-b-2 border-[var(--premiumgold)] text-[var(--premiumgold)]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("google")}
          >
            Google Maps
          </button>
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

          {/* Embla viewport (trust ya da google ref’i) */}
          <div
            className="embla overflow-hidden"
            ref={activeTab === "trust" ? emblaRefTrust : emblaRefGoogle}
          >
            <div className="embla__container flex gap-6">
              {currentReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(62%-24px)] 
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
                    {/* Kaynak ikonu + kaynak adı */}
                    <div className="mt-auto flex items-center text-sm font-jost text-gray-500">
                      {activeTab === "trust" ? (
                        <>
                          <Image
                            src={trustpilot}
                            alt="Trustpilot"
                            width={80}
                            height={20}
                            className="object-contain"
                          />
                        </>
                      ) : (
                        <>
                          <FaGoogle className="text-red-500 w-5 h-5 mr-2" />
                          Google Maps
                        </>
                      )}
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

        {/* Alt not: Toplam puan */}
        {/* {activeTab === "trust" && (
          <p className="text-center font-jost text-gray-400 mt-8">
            Trustpilot üzerinde {trustCount} değerlendirmeye göre 5 üzerinden 4,9 puan aldı.
          </p>
        )} */}
      </div>
    </section>
  );
}
