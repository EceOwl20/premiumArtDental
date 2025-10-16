// components/FounderMessage.jsx
"use client";

import Image from "next/image";
import { FaClinicMedical, FaPhoneAlt } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import img1 from "@/public/images/new/A_O01756copy.jpg"
import img2 from "@/public/images/logo/PremiumArtBlack.png"

export default function FounderMessage() {
    const t = useTranslations('AboutUs');
  return (
    <section className="flex text-[#050a30] py-16 px-4 lg:px-10 xl:px-16 ">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* SOL TARAF: Klinik ve Kurucu Görselleri */}
        <div className="relative w-[95%] lg:w-[46%] flex flex-col sm:items-start items-center justify-center sm:justify-start">
          {/* Büyük Klinik Görseli */}
          <div className="w-[80%] sm:w-[60%] lg:w-[96%] rounded-xl overflow-hidden shadow-lg bg-red-800 items-start justify-start">
            <Image
              src={img1}          // → Kendi klinik fotoğrafınızın yolu
              alt="Premium Ant Dental Clinic"
              width={900}
              height={700}
              className="w-full object-cover"
            />
          </div>

          {/* Küçük Kurucu Görseli (Büyük görselin üzerinde overlap) */}
          <div className="absolute bottom-0 right-0 hidden sm:flex lg:right-[-1rem] lg:bottom-[-2rem] w-48 h-48 lg:min-w-64 lg:h-40 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={img2}     
              alt="Dr. Lorem Lorem"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SAĞ TARAF: Metin İçerikleri */}
        <div className="w-full lg:w-[52%] space-y-6 text-center items-center justify-center lg:items-start lg:justify-start lg:text-start">
          {/* Klinik İsmi + Simge */}
          <div className="flex items-center space-x-2 text-gray-500 justify-center lg:items-atrt lg:justify-start">
            <FaClinicMedical className="text-2xl" />
            <span className="font-jost text-sm">Premium Art Dental</span>
          </div>

          {/* Başlık */}
          <h2 className="text-3xl lg:text-4xl font-roboto font-bold">
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
            className="mt-4 inline-flex items-center gap-2 border border-[#e29c2d] text-[#e29c2d] hover:bg-[#e29c2d] hover:text-white font-jost font-semibold uppercase px-5 py-2 lg:px-6 lg:py-3 rounded-md transition text-[14px] lg:text-[18px]"
          >
            <FaPhoneAlt />
           {t("buttonText")}
          </button>
        </div>
      </div>
    </section>
  );
}
