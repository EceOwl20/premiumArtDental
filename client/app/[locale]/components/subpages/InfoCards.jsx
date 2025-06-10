// components/InfoCards.jsx
"use client";

import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";

export default function InfoCards() {
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
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">Lokasyon</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-[#1f84d2] hover:text-[#c1005c] transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            Google Maps ile Göster
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-[#1f84d2] text-center">
              <br />
              Kemer/Antalya
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
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">Ücretsiz Muayene</h3>

          {/* Alt metin */}
          <div className="flex items-center text-sm font-jost mb-4 text-[#1f84d2]">
            <HiPhone className="mr-2 text-base" />
            +90 (123) 456 78 90
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto space-y-2 text-center">
            <p className="text-sm text-[#1f84d2]">
              Whatsapp +90 (123) 456 78 90
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
          <h3 className="text-xl font-roboto mb-2 text-[#1f84d2]">Çalışma Saatleri</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-[#1f84d2] hover:text-white transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            Randevu Oluştur
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-[#1f84d2] text-center">
              Pazartesi – Cumartesi: 09:00 – 18:30<br />
              Pazar: Kapalı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
