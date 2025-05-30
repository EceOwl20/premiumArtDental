// components/TreatmentCarousel.jsx
"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

// SVG yerine react-icons kullanıyoruz
import {
  FaTooth,          // Dolgu Tedavisi
  FaTeethOpen,      // Ortodonti
  FaSmileBeam,      // Diş Eti Tedavisi
  FaChild,          // Çocuk Diş Hekimliği
  FaBone,           // İmplant (örnek)
  FaStethoscope,    // Kanal Tedavisi (örnek)
  FaPaintBrush,     // Estetik Diş Hekimliği
  FaMagic           // Diş Beyazlatma
} from "react-icons/fa";

const treatments = [
  {
    title: "Dolgu Tedavisi",
    description:
      "Restoratif diş tedavisi veya bilinen adıyla dolgu en çok kullanılan diş tedavisi yöntemlerinden biridir. Dişler, vücutta yer alan en önemli yapılardan biridir; iyi bakım yapılmadığı takdirde çürük oluşur.",
    Icon: FaTooth,
  },
  {
    title: "Ortodonti",
    description:
      "Ortodonti halk arasında diş teli tedavisi olarak bilinir; erken yaşlarda meydana gelen veya tedavide geç kalındığı için ileri yaşlarda görülen diş bozukluklarının tedavisini içerir.",
    Icon: FaTeethOpen,
  },
  {
    title: "Diş Eti Hastalıkları Tedavisi",
    description:
      "Sağlıklı dişeti açık pembe renklidir ve dişi sıkıca sarar. Ağızda çürük bulunmasa bile, dişi kötü durumda olması ilerleyen süreçlerde dişin kaybına neden olabilir.",
    Icon: FaSmileBeam,
  },
  {
    title: "Çocuk Diş Hekimliği (Pedodonti)",
    description:
      "Çocukların bebeklik dönemlerinden itibaren ağız ve diş sağlığı ile ilgilenen diş hekimliği dalına Pedodonti denilmektedir.",
    Icon: FaChild,
  },
  {
    title: "İmplant Tedavisi",
    description:
      "Eksik dişlerin yerine titanyum vidalar yerleştirerek destek sağlar; kemik entegrasyonu ile uzun ömürlü ve estetik çözümler sunar.",
    Icon: FaBone,
  },
  {
    title: "Kanal Tedavisi",
    description:
      "Dişin sinir dokusunda oluşan enfeksiyonları temizleyip dolgu veya kuronla kapatarak dişi kurtarma işlemidir.",
    Icon: FaStethoscope,
  },
  {
    title: "Estetik Diş Hekimliği",
    description:
      "Gülüş tasarımı, porselen lamineler, bonding gibi yöntemlerle dişlerin form ve rengini iyileştirerek estetik bir görünüm kazandırır.",
    Icon: FaPaintBrush,
  },
  {
    title: "Diş Beyazlatma",
    description:
      "Ofis tipi veya ev tipi uygulamalarla dişlerin üzerindeki lekeler giderilip ışıltılı bir beyazlık sağlanır.",
    Icon: FaMagic,
  },
];

export default function TreatmentCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: false,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-black/80">
      <h2 className="text-4xl font-marcellus text-white mb-8">Tedavilerimiz</h2>

      <div className="relative">
        {/* Sol ok */}
        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Carousel viewport */}
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {treatments.map(({ title, description, Icon }, idx) => (
              <div
                key={idx}
                className="embla__slide flex-shrink-0 w-[80%] sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <div className="h-full bg-lagoGray/10 border rounded-xl p-6 flex flex-col">
                  {/* Icon renklerini Tailwind ile kontrol ediyoruz */}
                  <Icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="font-jost text-white text-xl mb-2">{title}</h3>
                  <p className="font-jost text-white text-sm flex-grow">
                    {description}
                  </p>
                  <Link
                    href={`/tedavi/${title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <div className="mt-4 inline-block border border-lagoGold text-white font-jost uppercase text-sm py-2 px-4 rounded hover:bg-lagoGold hover:text-black hover:bg-white transition">
                      Detaylı Bilgi
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ ok */}
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
