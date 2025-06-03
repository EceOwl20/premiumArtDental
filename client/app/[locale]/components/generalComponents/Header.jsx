// components/Header.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Proje dizinindeki resimler
import logo from "@/public/images/logo/logowhite.png";       
// import trFlag from "@/public/flags/tr.png";     // Türk bayrağı

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Arka plan resmi */}
      <div className="flex relative h-20 md:h-28 lg:h-32 bg-[#050a30]/30 backdrop-blur-sm max-w-screen items-center justify-center border-b-[0.5px] border-[#d9b740]">
     
        {/* Koyu yarı saydam katman + blur */}
        <div className="absolute flex items-center justify-between w-[90%] lg:w-[80%] lg:min-w-[1295px]">
          
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image src={logo} alt="Dent" width={50} height={50} />
              <span className="ml-2 text-white font-marcellus text-md lg:text-lg">
              Premium Art Dental
              </span>
            </div>
          </Link>

          {/* Desktop navigasyon */}
          <nav className="hidden lg:flex items-center text-center lg:space-x-3 xl:space-x-7 text-white font-jost uppercase text-sm xl:text-[16px]">
            {["Kurumsal","Tedaviler","Ekibimiz","Doktorlar","Blog","Galeri","Iletisim"].map((item, i) => (
              <span key={item} className="flex items-center">
                <Link href={`/${item.toLowerCase()}`}>
                  <div className="px-2 hover:underline">{item}</div>
                </Link>
                {i < 6 && <span className="text-white ml-3 xl:ml-5">|</span>}
              </span>
            ))}
          </nav>

          {/* Sağ taraf: dil seçici + hamburger */}
          <div className="flex items-center space-x-3 md:space-x-6">
            {/* Dil seçici (masaüstü) */}
            <button className="hidden md:flex items-center gap-1 text-white text-sm font-jost">
              {/* <Image src={trFlag} alt="Türkçe" width={20} height={14} /> */}
              Türkçe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Hamburger (mobil) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#050a30]/50 backdrop-blur-sm px-4 py-4 space-y-4 text-white font-jost uppercase">
          {["Kurumsal","Tedaviler","Ekibimiz","Doktorlar","Blog","Galeri","Iletisim"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`}>
              <div
                onClick={() => setMobileOpen(false)}
                className="block py-2 md:py-3 hover:underline"
              >
                {item}
              </div>
            </Link>
          ))}
          {/* Mobil dil seçici */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/30">
            {/* <Image src={trFlag} alt="Türkçe" width={20} height={14} /> */}
            <span>Türkçe</span>
          </div>
        </div>
      )}
    </header>
  );
}
