"use client";

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function SocialSidebar() {
  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center space-y-4 bg-[#050a30] p-4 rounded-lg">
      {/* WhatsApp */}
      <Link href="/"
      // href="https://wa.me/901234567890"
       target="_blank" aria-label="WhatsApp">
        <div className="flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-md shadow-lg hover:opacity-90 transition">
          <FaWhatsapp className="text-white w-8 h-8" />
        </div>
      </Link>
      {/* Ayrıcı Çizgi */}
      <div className="w-[80%] h-[1px] bg-gray-600" />

      {/* Instagram */}
      <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-pink-500 to-yellow-500 rounded-md shadow-lg hover:opacity-90 transition">
          <FaInstagram className="text-white w-8 h-8" />
        </div>
      </Link>
      <div className="w-[80%] h-[1px] bg-gray-600" />

      {/* Facebook */}
      <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
        <div className="flex items-end justify-center w-12 h-12 bg-[#1877F2] rounded-full shadow-lg hover:opacity-90 transition">
          <FaFacebookF className="text-white w-9 h-9" />
        </div>
      </Link>
      <div className="w-[80%] h-[1px] bg-gray-600" />

      {/* YouTube */}
      <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
        <div className="flex items-center justify-center w-12 h-12 bg-[#FF0000] rounded-full shadow-lg hover:opacity-90 transition">
          <FaYoutube className="text-white w-8 h-8" />
        </div>
      </Link>
    </div>
  );
}
