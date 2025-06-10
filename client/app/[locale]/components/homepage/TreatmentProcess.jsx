// components/TreatmentProcess.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaClipboardList, FaPlane, FaUmbrellaBeach } from "react-icons/fa";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdArrowForwardIos } from "react-icons/md";

export default function TreatmentProcess() {
  // ----------------------
  // İSTATİSTİK COUNT-UP LOJİĞİ
  // ----------------------
  const statsRef = useRef(null);
  const [countStarted, setCountStarted] = useState(false);

  // Hedef değerler
  const TARGETS = {
    experience: 10,    // 10+
    happyPatients: 5000,  // 5,000+
    countries: 30,    // 30+
  };

  // Şu anki sayılar
  const [experience, setExperience] = useState(0);
  const [happyPatients, setHappyPatients] = useState(0);
  const [countries, setCountries] = useState(0);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countStarted) {
          setCountStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [countStarted]);

  // Count-up animasyonu
  useEffect(() => {
    if (!countStarted) return;

    // Her biri için farklı süre ve adım sayısı belirliyoruz
    const duration = 2000; // 2 saniyede tamamla
    const frameRate = 60;  // saniyede 60 kare
    const totalFrames = Math.round((duration / 1000) * frameRate);

    // experience: 0 → 10
    let frame = 0;
    const expIncrement = TARGETS.experience / totalFrames;
    const patIncrement = TARGETS.happyPatients / totalFrames;
    const cntIncrement = TARGETS.countries / totalFrames;

    const counter = setInterval(() => {
      frame++;
      // Yeni değerleri hesapla
      setExperience((prev) => {
        const val = prev + expIncrement;
        return frame >= totalFrames ? TARGETS.experience : val;
      });
      setHappyPatients((prev) => {
        const val = prev + patIncrement;
        return frame >= totalFrames ? TARGETS.happyPatients : val;
      });
      setCountries((prev) => {
        const val = prev + cntIncrement;
        return frame >= totalFrames ? TARGETS.countries : val;
      });

      if (frame >= totalFrames) {
        clearInterval(counter);
      }
    }, Math.round(duration / totalFrames));

    return () => clearInterval(counter);
  }, [countStarted]);

  // Rakamları “10+”, “5,000+” ve “30+” formatına çevirecek yardımcı
  const formatNumber = (num, withPlus = true) => {
    const rounded = Math.floor(num);
    if (withPlus) return new Intl.NumberFormat("tr-TR").format(rounded) + "+";
    return new Intl.NumberFormat("tr-TR").format(rounded);
  };

  return (
    <div className=" py-10 lg:py-16 text-[#050a30]">
      {/* ---------------------- */}
      {/* TEDAVİ SÜRECİ BAŞLIĞI + BUTON */}
      {/* ---------------------- */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-2 lg:gap-0">
          <h2 className="text-[32px] md:text-4xl lg:text-[44px] font-bold font-roboto text-[#1f84d2]">Tedavi Süreci</h2>
          <Link href="/planlama">
            <div className="flex items-center gap-2 border border-[#e29c2d] text-[#e29c2d]  px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-[#e29c2d] hover:text-black transition text-[14px] md:text-[16px] lg:text-[18px] font-lora">
              Tedavinizi Planlayın
              <GoArrowUpRight size={20} className="flex lg:hidden"/>
              <GoArrowUpRight size={30} className="hidden lg:flex"/>
            </div>
          </Link>
        </div>

        {/* Altın çizgi */}
        <div className="h-px bg-[#2c744b] mb-8" />

        {/* ---------------------- */}
        {/* TEDAVİ ADIMLARI KISMI */}
        {/* ---------------------- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[#050a30]">
          {/* Adım 1 */}
          <div className="flex-1 border border-[#242424] hover:border-[#e29c2d] rounded-lg px-6 py-6 lg:py-12 flex flex-col items-center text-center font-raleway">
            <FaClipboardList className="text-[#c1005c] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4" />
            <h3 className="font-jost text-[18px] lg:text-xl mb-2">Ücretsiz Ön Görüşme</h3>
            <p className="font-jost text-[12px] md:text-[14px] lg:text-[16px] line-clamp-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea molestiae ducimus voluptatem eligendi illum debitis. Officia optio itaque recusandae magni iusto libero, pariatur consectetur voluptate error, sequi reiciendis maiores.
            </p>
          </div>

          {/* Ok ikonu */}
          <MdArrowForwardIos className="text-[#c1005c] hidden lg:flex w-16 h-16 md:mt-0 mt-4" />

          {/* Adım 2 */}
          <div className="flex-1 border border-[#242424] hover:border-[#e29c2d]  rounded-lg px-6 py-6 lg:py-12 flex flex-col items-center text-center">
            <FaPlane className="text-[#c1005c] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-4" />
            <h3 className="font-jost text-[18px] lg:text-xl mb-2">Seyahat ve Konaklama</h3>
            <p className="font-jost text-[12px] md:text-[14px] lg:text-[16px] line-clamp-6">
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto soluta iure ipsa voluptatum. Dolor blanditiis, quibusdam exercitationem iste omnis totam ipsam assumenda repellat consequuntur vitae temporibus accusantium officiis earum neque!
            </p>
          </div>

          {/* Ok ikonu */}
          <MdArrowForwardIos className="text-[#c1005c] hidden lg:flex w-16 h-16 md:mt-0 mt-4" />

          {/* Adım 3 */}
          <div className="flex-1 border border-[#242424] hover:border-[#e29c2d]  rounded-lg px-6 py-6 lg:py-12 flex flex-col items-center text-center">
            <FaUmbrellaBeach className="text-[#c1005c] w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12  mb-4" />
            <h3 className="font-jost text-[18px] lg:text-xl mb-2">Tatilinizin Tadını Çıkarın</h3>
            <p className="font-jost   text-sm line-clamp-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil eos aspernatur modi, tempore beatae soluta, ex dicta pariatur nesciunt voluptatum? Laudantium, iste? Placeat magni itaque incidunt. Earum, fuga facere!
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------- */}
      {/* İSTATİSTİK BAR */}
      {/* ---------------------- */}
      <div 
        ref={statsRef} 
        className="container mx-auto px-4 md:px-2 xl:px-16"
      >
        <div className="bg-gradient-to-r from-[var(--premiumblue)] to-[var(--premiumgreen)] rounded-xl p-6 flex flex-col sm:grid sm:grid-cols-2 md:flex md:flex-row items-center text-center md:text-left justify-between w-full gap-5 sm:gap-2 text-white">
          
          {/* 1. Kolon */}
          <div className="flex items-center mr-[3%] gap-4 xl:gap-8">
            <div className="text-4xl md:text-5xl lg:text-[64px] font-roboto ">
              {formatNumber(experience)}
            </div>
              <div className="hidden md:block border-l border-[#2c744b] h-16" />
            <div className="font-raleway text-sm md:text-[18px] lg:text-[24px]">Yıllık Deneyim</div>
          </div>  

          {/* 2. Kolon */}
          <div className="flex items-center mr-[3%] gap-8">
            <div className="text-4xl md:text-5xl lg:text-[64px] font-roboto ">
              {formatNumber(happyPatients)}
            </div>
                  <div className="hidden md:block border-l border-[#2c744b] h-16" />
            <div className="font-raleway  text-sm md:text-[18px] lg:text-[24px]">Mutlu Hasta</div>
          </div>

          {/* 3. Kolon */}
          <div className="flex items-center md:mr-[3%] gap-8 col-span-2 justify-center">
            <div className="text-4xl md:text-5xl lg:text-[64px] font-roboto ">
              {formatNumber(countries)}
            </div>
                  <div className="hidden md:block border-l border-[#2c744b] h-16" />
            <div className="font-raleway  text-sm md:text-[18px] lg:text-[24px]">Ülkeden Ziyaretçi</div>
          </div>

        </div>
      </div>
    </div>
  );
}
