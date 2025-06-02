// components/FreeConsultationForm.jsx
"use client";

import { useState } from "react";
import Image from "next/image";

export default function FreeConsultationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+90"); // Varsayılan Türkiye kodu

  return (
    <div className="w-full max-w-6xl bg-black/80 rounded-xl p-6 flex flex-col lg:flex-row items-center gap-6 shadow-lg">
      {/* Soldaki Başlık ve Açıklama */}
      <div className="flex-1 text-white space-y-2">
        <h3 className="text-xl lg:text-2xl font-marcellus">
          Ücretsiz Danışmanlık Alın!
        </h3>
        <p className="text-sm font-jost text-gray-300">
          Uzman ekibimiz size en kısa sürede ulaşarak merak ettiğiniz her konuda
          yardımcı olabilir. Formu doldurun, sizi arayalım!
        </p>
      </div>

      {/* Form Alanı */}
      <div className="flex-1 flex flex-col sm:flex-row items-center gap-4">
        {/* İsim Soyisim */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız & Soyadınız"
          className="w-full sm:w-[45%] bg-white/10 text-white placeholder-gray-300 font-jost rounded-md px-4 py-2
          3 focus:outline-none focus:ring-2 focus:ring-[var(--lago-gold)]"
        />

        {/* Telefon numarası */}
        <div className="relative w-full sm:w-[45%]">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="absolute left-0 top-0 h-full bg-transparent pl-3 pr-8 text-white text-sm appearance-none focus:outline-none"
          >
            <option value="+90">🇹🇷 +90</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+49">🇩🇪 +49</option>
            {/* İstediğiniz ülkeleri ekleyebilirsiniz */}
          </select>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Telefon Numaranız"
            className="w-full bg-white/10 text-white placeholder-gray-300 font-jost rounded-md pl-20 pr-9 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--lago-gold)]"
          />
        </div>
      </div>

      {/* Gönder Butonu */}
      <button
        type="button"
        className="self-stretch lg:self-auto bg-[#d9b740] hover:bg-yellow-600 text-white font-jost uppercase px-10 py-3 rounded-sm transition"
      >
        Beni Arayın
      </button>
    </div>
  );
}
