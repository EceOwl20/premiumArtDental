// components/HeroBanner.jsx
"use client";

import { Link } from '@/i18n/navigation';
import imgBanner from "../../../../public/images/stock/close-up-partial-view-of-dentist-comparing-teeth-o-2024-11-17-14-44-27-utc.jpg"
//close-up-dental-office-girl-dentist-applies-protec-2024-11-28-19-38-16-utc.jpg
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function HeroBanner() {
  const t = useTranslations("HeroBanner");
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* Video arka plan */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/anasayfavideo.mp4"     
        autoPlay
        loop
        muted
        playsInline
      />

      {/* <Image
      width={imgBanner.width}
      height={imgBanner.height}
      src={imgBanner}
      alt="Hero Banner"
      className="object-cover h-full w-full"
      /> */}

      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-black/35"></div>
      {/* İçerik */}
      <div className="absolute inset-0 flex items-center mt-[4%]">
        <div className="container w-[80%] ml-[6%] lg:w-[53%] lg:ml-[13%]">
          {/* Küçük başlık */}
          <h4
            className="font-jost text-white text-[12px] lg:text-sm uppercase mb-2
                       opacity-0 animate-slide-down delay-200">
           {t("subtitle")}
          </h4>

          {/* Ana başlık */}
          <h1
            className="font-roboto text-white text-[26px] sm:text-[32px] md:text-5xl lg:text-6xl leading-tight mb-4
                       opacity-0 animate-slide-down delay-400">
             {t("title")}
          </h1>

          {/* Ayırıcı çizgi */}
          <hr className="bg-white/40 mb-4 opacity-0 animate-expand-line delay-1000" />

          {/* Açıklama */}
          <p
            className="font-jost text-white max-w-lg mb-6
                       opacity-0 animate-slide-up delay-1200 text-[12px] lg:text-[14px]">
            {t("text")}
          </p>

          {/* Çağrı butonu */}
          <Link href={t("buttonLink")} className="opacity-0 animate-slide-up delay-1400">
            <div className="inline-block  bg-gradient-to-r
    from-[#1f84d2]
    via-[#2c744b]
    via-[#700079]
    via-[#c1005c]
    to-[#e46c59]
    text-white
    font-semibold


    rounded hover:bg-white  bg hover:text-[#700079] px-[12px] py-[6px] lg:px-[24px] lg:py-[10px] font-jost capitalize text-[14px] lg:text-[17px] transition">
               {t("buttonText")}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
