// components/InfoCards.jsx
"use client";

import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl'

export default function InfoCards() {
  const t = useTranslations('Contact')

  return (
    <section className=" text-white px-4 lg:px-20 pb-10 lg:pb-16">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6">
        {/* ──────────── Lokasyon Kartı ──────────── */}
        <div className="flex-1  border border-gray-800 rounded-xl p-6 lg:p-10 flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiLocationMarker className="text-[#c1005c] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">{t("title1")}</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-[#1f84d2] hover:text-[#c1005c] transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            {t("subTitle1")}
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-[#1f84d2] text-center">
              <br />
            {t("text1")}
            </p>
          </div>
        </div>

        {/* ──────────── Ücretsiz Muayene Kartı ──────────── */}
        <div className="flex-1 border border-gray-800 rounded-xl p-6 lg:p-7 lg:min-w-[320px] flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiPhone className="text-[#c1005c] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">{t("title2")}</h3>

          {/* Alt metin */}
          <Link href="tel:+902428146010" className="flex items-center text-sm font-jost mb-4 text-[#1f84d2] hover:text-[#c1005c]">
            <HiPhone className="mr-2 text-base" />
            +90 242 814 60 10
          </Link>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto space-y-2 text-center">
            <p className="text-sm text-[#1f84d2]">
              Whatsapp +90 553 814 60 10
            </p>
            <p className="text-sm text-[#1f84d2]">Mail: info@premiumartdental.com</p>
          </div>
        </div>

        {/* ──────────── Çalışma Saatleri Kartı ──────────── */}
        <div className="flex-1  border border-gray-800 rounded-xl p-6 lg:p-10 flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiClock className="text-[#c1005c] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">{t("title3")}</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-[#1f84d2] hover:text-[#c1005c] transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            {t("subTitle3")}
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-[#1f84d2] text-center">
              {t("text3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
