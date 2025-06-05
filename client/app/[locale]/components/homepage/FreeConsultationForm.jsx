// components/FreeConsultationForm.jsx
"use client";

import { useState } from "react";

export default function FreeConsultationForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+90"); // Varsayılan Türkiye kodu

  async function handleSubmit(e) {
    e.preventDefault();

    // Basit validasyon (isim ve telefon girilmiş mi diye kontrol edelim)
    if (!name.trim() || !phone.trim()) {
      alert("Lütfen hem Ad Soyad hem de Telefon numaranızı girin.");
      return;
    }

    // “countryCode” ile birleştirilmiş tam telefon numarası
    const fullPhone = countryCode + phone;

    try {
      const res = await fetch("/api/free-consultation/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: fullPhone.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error("Sunucu hatası.");
      }

      // Gönderim başarılı ise sadece alert gösterelim
      alert("Teşekkürler! Başvurunuz alınmıştır.");

      // İsterseniz formu temizlemek için state'leri sıfırlayın
      setName("");
      setPhone("");
      setCountryCode("+90");
    } catch (err) {
      console.error(err);
      alert("Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[1200px] bg-[#2c744b] rounded-xl p-6 flex flex-col lg:flex-row items-center gap-6 shadow-lg"
    >
      {/* Soldaki Başlık ve Açıklama */}
      <div className="flex-1 text-white space-y-2">
        <h3 className="text-xl lg:text-2xl font-roboto">
          Ücretsiz Danışmanlık Alın!
        </h3>
        <p className="text-sm font-jost text-gray-300">
          Uzman ekibimiz size en kısa sürede ulaşarak merak ettiğiniz her konuda
          yardımcı olabilir. Formu doldurun, sizi arayalım!
        </p>
      </div>

      {/* Form Alanları */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full lg:w-auto gap-4 lg:gap-6">
        {/* İsim Soyisim */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Adınız & Soyadınız"
          className="w-full sm:w-[45%] bg-white text-[#2c744b] placeholder-[#2c744b] font-jost  rounded-md px-4 py-2 lg:py-3 focus:outline-none focus:ring-2 focus:ring-[var(--premiumgold)]"
        />

        {/* Telefon numarası */}
        <div className="relative w-full sm:w-[50%] ">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="absolute left-0 top-0 h-full pl-3 pr-8 text-[#2c744b] text-sm appearance-none focus:outline-none"
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
            className="w-full bg-white text-[#2c744b] placeholder-[#2c744b] font-jost rounded-md  pl-16 pr-9 py-2 lg:py-3 focus:outline-none focus:ring-2 focus:ring-[var(--premiumgold)]"
          />
        </div>
      </div>

      {/* Gönder Butonu */}
      <button
        type="submit"
        className="self-stretch lg:self-auto bg-[#e29c2d] hover:bg-yellow-600 text-white font-jost uppercase px-10 py-3 rounded-sm transition"
      >
        Beni Arayın
      </button>
    </form>
  );
}
