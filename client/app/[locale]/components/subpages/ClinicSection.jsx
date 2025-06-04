// components/ClinicSection.jsx
"use client";

import useCounter from "../../hooks/useCounter";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function ClinicSection() {
    const t = useTranslations('OurClinic');
  // Her bir istatistik için sayacı çalıştırıyoruz
  const experienceYears = useCounter(10, 1000);       // 10+ Yıllık Deneyim
  const visitorCountries = useCounter(30, 1000);      // 30+ Farklı Ülkeden Ziyaretçi
  const happyPatients = useCounter(5000, 1200);       // 5,000+ Mutlu Hasta (animasyon biraz daha uzun)
  const moreExperienceYears = useCounter(10, 1000);   // Tekrar 10+ Yıllık Deneyim

  // Bilgileri “dizi” olarak tanımladık, map ile render edeceğiz
  const stats = [
    { value: experienceYears, label: "Yıllık Deneyim" },
    { value: visitorCountries, label: "Farklı Ülkeden Ziyaretçi" },
    { value: happyPatients, label: "Mutlu Hasta" },
    { value: moreExperienceYears, label: "Yıllık Deneyim" },
  ];

  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* SOL KISIM: Başlık + Paragraflar */}
        <div className="space-y-6">
          {/* Klinik Etiketi */}
          <span className="inline-block px-4 py-1 border border-white rounded-full text-sm font-jost">
            PremiumAnt Dental
          </span>

          {/* Başlık */}
          <h2 className="text-3xl lg:text-4xl font-marcellus font-bold">
           {t("header")}
          </h2>

          {/* Paragraflar */}
          <div className="space-y-4 text-sm lg:text-base font-jost leading-relaxed">
            <p>
                {t("text1")}
            </p>
            <p>
              {t("text2")}
            </p>
            <p>
             {t("text3")}
            </p>
          </div>
        </div>

        {/* SAĞ KISIM: İstatistik Kartları */}
        <div className="grid grid-cols-2  gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center space-y-2"
            >
              {/* Hızlıca sayan sayı */}
              <div className="text-4xl lg:text-5xl font-marcellus text-[#e29c2d]">
                {stat.value.toLocaleString()}<span className="text-2xl">+</span>
              </div>
              {/* Açıklama */}
              <div className="text-sm lg:text-base font-jost text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
