// components/ServicesGrid.jsx
"use client";

import React from "react";

// Hizmet verilerini burada tanımlıyoruz.
// Resim olarak placehold.co'dan 64x64 boyutunda bir placeholder kullanıldı.
const services = [
  {
    title: "Hizmet 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
  {
    title: "Hizmet 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-marcellus font-bold mb-8">
          Kliniğimizin Hizmetleri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 flex flex-col h-full transition hover:shadow-lg"
            >
              {/* İkon/Görsel */}
              <div className="w-12 h-12 mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Başlık */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {/* Açıklama */}
              <p className="text-sm text-gray-300 mb-6 flex-grow">
                {item.description}
              </p>

              {/* “Detaylı Bilgi” Butonu */}
              <button className="mt-auto inline-block self-start border border-[#d9b740] text-[#d9b740] rounded-md px-4 py-2 text-sm hover:bg-[#d9b740] hover:text-black transition">
                Detaylı Bilgi
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
