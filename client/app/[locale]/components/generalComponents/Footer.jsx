// components/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../../../../public/images/logo/logowhite.png"
import { MdEmail, MdLocationPin } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#050a30] text-white border-t-[0.5px] border-[#e29c2d]">
      {/* Üst Bölüm: Logo / İletişim / Adres */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-[8%]">
        {/* 1) Logo Sütunu */}
        <div className="flex-shrink-0 flex items-center space-x-4">
          <Image src={logo} alt="Premiumart" width={40} height={40} />
          <span className="text-xl lg:text-[24px] font-roboto bg-gradient-to-r from-[#1f84d2] via-[#2c744b] via-[#700079] via-[#c1005c] to-[#e46c59] bg-clip-text text-transparent">
  Premium Art Dental
</span>

        </div>

        {/* Dikey ayırıcı (büyük ekranlarda) */}
        <div className="hidden md:block h-12 border-l border-gray-700" />
        {/* 2) İletişim Bilgileri Sütunu */}
        <div className="flex-1">
          <ul className="space-y-2 lg:space-y-4">
            {/* Telefon ve e-posta satırı 1 */}
            <li className="flex items-center gap-3">
              <MdEmail className="w-6 h-6 text-[#2c744b]"/>
              <div className="flex flex-col">
                <Link href="/">
                  <div className="hover:underline font-jost text-[16px]">info@premiumartdental.com</div>
                </Link>
              </div>
            </li>
            {/* Telefon 2 */}
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="w-5 h-5 text-[var(--premiumgold)]" />
              <Link href="tel:+901234567890">
                <div className="hover:underline">+90 (123) 456 78 90</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Dikey ayırıcı (büyük ekranlarda) */}
        <div className="hidden md:block h-12 border-l border-gray-700" />

        {/* 3) Adres Sütunu */}
        <div className="flex items-center gap-3">
           <MdLocationPin className="w-6 h-6 text-[#1f84d2]"/>
          <p className="font-jost text-[#ffffff]">
             Kemer / Antalya
          </p>
        </div>
      </div>

      {/* Orta çizgi */}
      <div className="border-t border-gray-700" />

      {/* Alt Bölüm: Uyarı ve Telif Hakkı */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6 text-center space-y-4">
        {/* Uyarı Metni */}
        <p className="text-xs font-jost text-gray-400">
          Site İçeriğinde Bulunan Bilgiler Destek Sağlamak İçindir. Hekimin 
          Hastasını Tıbbi Amaçla Muayene, Tanı Ve Teşhis Koyması Yerine Geçmez!
        </p>

        {/* Telif Hakkı Metni */}
        <p className="text-sm font-jost text-gray-500">
          PremiumArtDental © {new Date().getFullYear()} • Powered by AlphaAshley
        </p>
      </div>
    </footer>
  );
}
