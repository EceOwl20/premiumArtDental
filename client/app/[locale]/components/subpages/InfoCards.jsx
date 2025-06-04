// components/InfoCards.jsx
"use client";

import { HiLocationMarker, HiPhone, HiClock } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";

export default function InfoCards() {
  return (
    <section className=" text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6">
        {/* ──────────── Lokasyon Kartı ──────────── */}
        <div className="flex-1  border border-gray-800 rounded-xl p-6 lg:p-10 flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiLocationMarker className="text-[#d9b740] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-marcellus mb-2">Lokasyon</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-gray-300 hover:text-white transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            Google Maps ile Göster
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full bg-gray-900 rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-gray-200 text-center">
              Çağlayan, Barınaklar Blv. No:19/A<br />
              Muratpaşa/Antalya
            </p>
          </div>
        </div>

        {/* ──────────── Ücretsiz Muayene Kartı ──────────── */}
        <div className="flex-1 border border-gray-800 rounded-xl p-6 lg:p-10 flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiPhone className="text-[#d9b740] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-marcellus mb-2">Ücretsiz Muayene</h3>

          {/* Alt metin */}
          <div className="flex items-center text-sm font-jost mb-4 text-gray-300">
            <HiPhone className="mr-2 text-base" />
            +90 (242) 505 88 98
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full bg-gray-900 rounded-md px-4 py-3 mt-auto space-y-2">
            <p className="text-sm text-gray-200">
              Whatsapp +90 (532) 411 33 98
            </p>
            <p className="text-sm text-gray-200">Mail: info@premiumartdental.com</p>
          </div>
        </div>

        {/* ──────────── Çalışma Saatleri Kartı ──────────── */}
        <div className="flex-1  border border-gray-800 rounded-xl p-6 lg:p-10 flex flex-col items-center">
          {/* İkon */}
          <div className="mb-4">
            <HiClock className="text-[#d9b740] text-4xl" />
          </div>

          {/* Başlık */}
          <h3 className="text-xl font-marcellus mb-2">Çalışma Saatleri</h3>

          {/* Alt metin / link */}
          <div className="flex items-center text-sm font-jost mb-4 text-gray-300 hover:text-white transition cursor-pointer">
            <FiChevronRight className="mr-1" />
            Randevu Oluştur
          </div>

          {/* Bilgi Kutusu */}
          <div className="w-full bg-gray-900 rounded-md px-4 py-3 mt-auto">
            <p className="text-sm leading-snug text-gray-200 text-center">
              Pazartesi – Cumartesi: 09:00 – 18:30<br />
              Pazar: Kapalı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
