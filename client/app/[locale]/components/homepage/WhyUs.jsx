
"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import img1 from "../../../../public/images/new/A_O01553.jpg"
import { useTranslations } from "next-intl";

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  return (
    <section className=" text-[#1f84d2] py-8 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        {/* Sol: Görsel */}
        <div className="w-[80%] md:w-[70%] lg:w-1/2">
          <Image
            src={img1} 
            alt="Neden Premium Art Dental"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Sağ: Metin ve Liste */}
        <div className="w-full lg:w-1/2 space-y-4 lg:space-y-6">
          {/* Başlık */}
          <h2 className="text-[26px] md:text-3xl lg:text-4xl font-roboto">
           {t("header")}
          </h2>

          {/* Paragraflar */}
          <div className="space-y-2 lg:space-y-4 font-raleway text-[14px] lg:text-base text-gray-800">
            <p>
           {t("paragraph1")}
            </p>
            <p>
       {t("paragraph2")}
            </p>
          </div>

          {/* Özellik Listesi */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 font-raleway">
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.0")}</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)]  w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.1")}</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)]  w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.2")}</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)]  w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.3")}</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)]  w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.4")}</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-4 h-4 md:w-6 md:h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">{t("features.5")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
