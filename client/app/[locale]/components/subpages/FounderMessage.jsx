// components/FounderMessage.jsx
"use client";

import Image from "next/image";
import { FaClinicMedical, FaPhoneAlt } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function FounderMessage() {
    const t = useTranslations('AboutUs');
  return (
    <section className=" text-[#050a30] py-16 px-4 lg:px-10 xl:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* SOL TARAF: Klinik ve Kurucu Görselleri */}
        <div className="relative w-full lg:w-[46%] flex justify-between">
          {/* Büyük Klinik Görseli */}
          <div className="w-full lg:w-[90%] rounded-xl overflow-hidden shadow-lg items-start justify-start">
            <Image
              src="/images/clinic.jpg"           // → Kendi klinik fotoğrafınızın yolu
              alt="Premium Ant Dental Clinic"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Küçük Kurucu Görseli (Büyük görselin üzerinde overlap) */}
          <div className="absolute bottom-0 right-0 lg:right-[-1rem] lg:bottom-[-2rem] w-48 h-64 lg:w-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/founder.jpg"         
              alt="Dr. Lorem Lorem"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SAĞ TARAF: Metin İçerikleri */}
        <div className="w-full lg:w-[52%] space-y-6">
          {/* Klinik İsmi + Simge */}
          <div className="flex items-center space-x-2 text-gray-500">
            <FaClinicMedical className="text-2xl" />
            <span className="font-jost text-sm">Premium Art Dental</span>
          </div>

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
            <p>
            {t("text4")}
            </p>
            <p>
            L{t("text5")}
            </p>
          </div>

          {/* Randevu Butonu */}
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 border border-[#e29c2d] text-[#e29c2d] hover:bg-[#e29c2d] hover:text-black font-jost font-semibold uppercase px-5 py-2 lg:px-6 lg:py-3 rounded-md transition text-[14px] lg:text-[18px]"
          >
            <FaPhoneAlt />
            Randevu Oluştur
          </button>
        </div>
      </div>
    </section>
  );
}
