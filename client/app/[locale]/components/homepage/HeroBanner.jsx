// components/HeroBanner.jsx
"use client";

import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[92vh] overflow-hidden">
      {/* Video arka plan */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/deneme.mp4"     
        autoPlay
        loop
        muted
        playsInline
      /> */}

      <img
      src="https://placehold.co/1900x1000"
      alt="Hero Banner"
      className="object-cover h-full w-full"
      />

      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* İçerik */}
      <div className="absolute inset-0 flex items-center mt-[4%]">
        <div className="container w-[80%] ml-[6%] lg:w-[53%] lg:ml-[13%]">
          {/* Küçük başlık */}
          <h4
            className="font-jost text-white text-[12px] lg:text-sm uppercase mb-2
                       opacity-0 animate-slide-down delay-200">
           Premium Art Dental Ağız ve Diş Sağlığı Polikliniği
          </h4>

          {/* Ana başlık */}
          <h1
            className="font-roboto text-white text-[26px] sm:text-[32px] md:text-5xl lg:text-6xl leading-tight mb-4
                       opacity-0 animate-slide-down delay-400">
            En yeni teknolojilerle ağrısız, konforlu ve hızlı çözümler!
          </h1>

          {/* Ayırıcı çizgi */}
          <hr className="bg-white/40 mb-4 opacity-0 animate-expand-line delay-1000" />

          {/* Açıklama */}
          <p
            className="font-jost text-white max-w-lg mb-6
                       opacity-0 animate-slide-up delay-1200 text-[12px] lg:text-[14px]">
            Konfor, hız ve güvenliği bir araya getiriyoruz. Modern cihazlarla desteklenen tedavi süreçlerimizle, gülümsemek artık çok daha kolay.
          </p>

          {/* Çağrı butonu */}
          <Link href="/services" className="opacity-0 animate-slide-up delay-1400">
            <div className="inline-block hover:bg-white text-white bg-[#e29c2d] hover:text-[#e29c2d] px-[12px] py-[6px] lg:px-[24px] lg:py-[10px] font-jost capitalize text-[14px] lg:text-[17px] transition">
              Sunduğumuz Hizmetler
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
