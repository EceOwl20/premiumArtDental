// components/ReviewsCarousel.jsx
"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaStar, FaChevronLeft, FaChevronRight, FaGoogle, FaStarHalfAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import trustpilot from "../../../public/images/logos/trustpilot.png"

const trustpilotReviews = [
  {
    name: "Nikki Thomas",
    date: "13/03/2025",
    rating: 5,
    text: `Oradaki insanlar ve kapıdan giren herkese gösterilen genel ilgi gerçekten harikaydı. 
            İlk iletişime geçtiğim andan itibaren, ön bürodaki harika kızlar (teşekkürler Sıdıka!) 
            ve ardından bana atanan sevcan koordinatörüm (çok teşekkür ederim Ekin! 😊) ile.`,
  },
  {
    name: "Mr Colin Gilbert",
    date: "28/03/2025",
    rating: 5,
    text: `Baştan sona kusursuz bir deneyimdi. 24 adet zirkonyum kaplama yaptırdım. 
            Tedavi son derece profesyoneldi ve süreç boyunca her konuda bilgilendirildim. 
            Tüm ekip ihtiyaçlarımı çok iyi anladı ve çok iyi İngilizce konuşuyorlardı. 
            Ekip son derece sıcakkanlıydı.`,
  },
  {
    name: "Aimee Lawrence",
    date: "29/09/2024",
    rating: 5,
    text: `Her yönüyle mükemmel. Öncelikle, VAY CANINA. Dişçi fobim var ve 10 yıl aşkındır 
            hiç dişçiye gitmemiştim. Laracity ile WhatsApp üzerinden iletişime geçtiğim andan 
            kliniğe veda ettiğim son güne kadar iletişim ve profesyonellik gerçekten harikaydı. 
            Adeta bir aile ortamı.`,
  },
  {
    name: "Krassy Nanov",
    date: "10/05/2025",
    rating: 5,
    text: `Dünya Standartlarında 5 Yıldızlı Tedavi ve Misafirperverlik. Antalya’daki Laracity 
            Kliniği’ndeki diş tedavimden yeni döndük. Söyleyebileceğim tek şey; yaşadığım en olumlu deneyimlerden 
            biri olduğudur. 6 ay önce implantlarımı yerleştirmek için gitmiştim ve şimdi tedavi süreçlerim tamamlandı. 
            Minnettarım.`,
  },
];

const googleReviews = [
  {
    name: "Emma Johnson",
    date: "05/04/2025",
    rating: 5,
    text: `Harika bir deneyimdi! Doktorlar çok ilgili ve cana yakındı. Tedavi sürecim sorunsuz geçti.`,
  },
  {
    name: "Liam Smith",
    date: "22/01/2025",
    rating: 4.5,
    text: `Personel yardımsever ve profesyoneldi. Türkiye’ye gelmeden tüm adımları WhatsApp üzerinden 
           detaylıca öğrendik. Kesinlikle tavsiye ederim.`,
  },
  {
    name: "Sophia Brown",
    date: "15/12/2024",
    rating: 5,
    text: `Fiyat performans oranı muhteşem. Konaklama ve tedavi paketi gerçekten her şeyi kapsıyor. 
           Bayan doktorlar güler yüzlü ve işlerinde uzman.`,
  },
  {
    name: "Noah Davis",
    date: "30/10/2024",
    rating: 4,
    text: `Şeffaf ve net bir süreç vardı. Başarı oranı ve ekip uyumu beni etkiledi. 
           Tatilimi de çok güzel geçirdim.`,
  },
];

export default function ReviewsCarousel() {
  const [activeTab, setActiveTab] = useState("");

  const [emblaRefTrust, emblaApiTrust] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });
  const [emblaRefGoogle, emblaApiGoogle] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  // Autoplay her 5 sn bir slayt değişsin
  useEffect(() => {
    let timer;

    if (activeTab === "trust" && emblaApiTrust) {
      timer = setInterval(() => emblaApiTrust.scrollNext(), 5000);
    } else if (activeTab === "google" && emblaApiGoogle) {
      timer = setInterval(() => emblaApiGoogle.scrollNext(), 5000);
    }
    return () => clearInterval(timer);
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  const scrollPrev = useCallback(() => {
    if (activeTab === "trust" && emblaApiTrust) emblaApiTrust.scrollPrev();
    else if (activeTab === "google" && emblaApiGoogle) emblaApiGoogle.scrollPrev();
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  const scrollNext = useCallback(() => {
    if (activeTab === "trust" && emblaApiTrust) emblaApiTrust.scrollNext();
    else if (activeTab === "google" && emblaApiGoogle) emblaApiGoogle.scrollNext();
  }, [activeTab, emblaApiTrust, emblaApiGoogle]);

  // Kaç değerlendirme var bilgisi (Trustpilot için)
  const trustCount = 95;

  // Aktif sekmeye göre render edilecek liste
  const currentReviews = activeTab === "trust" ? trustpilotReviews : googleReviews;

  return (
    <section className="bg-black/80 text-white py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık */}
        <h2 className="text-4xl font-marcellus mb-2">Hasta Yorumları</h2>
        <p className="font-jost text-base mb-8 max-w-2xl">
          Gerçek hastalar, gerçek sonuçlar. <br />
          Memnuniyetlerini paylaşan hastalarımızın yorumlarıyla tanışın!
        </p>

        {/* Sekmeler */}
        <div className="flex space-x-4 border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 font-jost ${
              activeTab === "trust"
                ? "border-b-2 border-[var(--lago-gold)] text-[var(--lago-gold)]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("trust")}
          >
            Trustpilot
          </button>
          <button
            className={`px-4 py-2 font-jost ${
              activeTab === "google"
                ? "border-b-2 border-[var(--lago-gold)] text-[var(--lago-gold)]"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("google")}
          >
            Google Maps
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol ok */}
          <button
            onClick={scrollPrev}
            className="absolute -left-8 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Embla viewport (trust ya da google ref’i) */}
          <div
            className="embla overflow-hidden"
            ref={activeTab === "trust" ? emblaRefTrust : emblaRefGoogle}
          >
            <div className="embla__container flex gap-6">
              {currentReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 w-[calc(80%-24px)] 
                             sm:w-[calc(50%-24px)] md:w-[calc(33.3%-24px)] lg:w-[calc(25%-24px)]"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
                    {/* Yıldızlar + tarih */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {Array.from({ length: 5 }, (_, i) =>
                          i < Math.floor(review.rating) ? (
                            <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                          ) : review.rating - i >= 0.5 ? (
                            <FaStarHalfAlt key={i} className="text-yellow-400 w-5 h-5" />
                          ) : (
                            <FaStar key={i} className="text-gray-300 w-5 h-5" />
                          )
                        )}
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    {/* İsim */}
                    <h3 className="font-jost font-semibold text-lg text-black mb-2">
                      {review.name}
                    </h3>
                    {/* Yorum metni */}
                    <p className="font-jost text-gray-700 text-sm flex-grow mb-4">
                      {review.text}
                    </p>
                    {/* Kaynak ikonu + kaynak adı */}
                    <div className="mt-auto flex items-center text-sm font-jost text-gray-500">
                      {activeTab === "trust" ? (
                        <>
                          <Image
                            src={trustpilot}
                            alt="Trustpilot"
                            width={80}
                            height={20}
                            className="object-contain"
                          />
                        </>
                      ) : (
                        <>
                          <FaGoogle className="text-red-500 w-5 h-5 mr-2" />
                          Google Maps
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ ok */}
          <button
            onClick={scrollNext}
            className="absolute -right-8 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Alt not: Toplam puan */}
        {activeTab === "trust" && (
          <p className="text-center font-jost text-gray-400 mt-8">
            Trustpilot üzerinde {trustCount} değerlendirmeye göre 5 üzerinden 4,9 puan aldı.
          </p>
        )}
      </div>
    </section>
  );
}
