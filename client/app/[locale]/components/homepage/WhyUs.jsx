
"use client";

import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import img1 from "../../../../public/images/patient.jpg"

export default function WhyUs() {
  return (
    <section className=" text-[#1f84d2] py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8">
        {/* Sol: Görsel */}
        <div className="w-full lg:w-1/2">
          <Image
            src={img1} 
            alt="Neden Premium Art Dental"
            width={800}
            height={600}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Sağ: Metin ve Liste */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Başlık */}
          <h2 className="text-3xl lg:text-4xl font-roboto">
            Neden Premium Art Dental&nbsp;?
          </h2>

          {/* Paragraflar */}
          <div className="space-y-4 font-raleway text-base text-gray-800">
            <p>
           Premium Art Dental, en son dijital teknolojiyle donatılmış kliniğinde
              ağrısız ve hızlı tedavi çözümleri sunar. Uzman hekim kadromuz, her hastanın
              ağız yapısına özel planlama yaparak hem estetik hem de fonksiyonel mükemmelliği
              hedefler. Hollywood gülüşünden implant rehabilitasyonuna kadar geniş bir yelpazede
              hizmet verir; her aşamada kalite standartlarımızdan ödün vermeyiz.
            </p>
            <p>
           Sadece tedavi sürecinde değil, sonrasında da profesyonel destekle yanınızdayız.
              Hijyen protokollerine titizlikle uyar, konforlu bekleme alanlarımızda stresinizi
              en aza indiririz. Güler yüzlü ekibimiz, uluslararası akreditasyonlu hizmet
              anlayışımızla Premium Art Dental, bir diş kliniğinden çok daha fazlası—güvenilir
              bir sağlık ortağıdır.
            </p>
          </div>

          {/* Özellik Listesi */}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-raleway">
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Kişiye Özel Tedavi Planı</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Dijital Görüntüleme Sistemleri</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Ağrısız Sedasyon Seçenekleri</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Hızlı ve Konforlu Operasyon</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Uluslararası Standartlarda Hijyen</span>
            </div>
            <div className="flex items-start gap-3">
              <FaCheck className="text-[var(--premiumgold)] w-6 h-6 flex-shrink-0 mt-1" />
              <span className="font-jost font-semibold">Tedavi Sonrası Uzun Dönem Takip</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
