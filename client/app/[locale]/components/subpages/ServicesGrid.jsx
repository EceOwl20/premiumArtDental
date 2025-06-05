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
    color: "#e29c2d",
  },
  {
    title: "Hizmet 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#1f84d2",
  },
  {
    title: "Hizmet 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#50a14f",
  },
  {
    title: "Hizmet 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#be231d",
  },
  {
    title: "Hizmet 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#b8915e",
  },
  {
    title: "Hizmet 6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#c1005c",
  },
  {
    title: "Hizmet 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#700079",
  },
  {
    title: "Hizmet 8",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.",
    img: "https://placehold.co/64x64?text=Icon",
    color: "#38b2ac",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-roboto font-bold mb-8">
          Kliniğimizin Hizmetleri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 flex flex-col h-full transition hover:shadow-lg"
              style={{ backgroundColor: item.color }}
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
              <p className="text-sm text-gray-100 mb-6 flex-grow">
                {item.description}
              </p>

              {/* “Detaylı Bilgi” Butonu */}
              <button className="mt-auto inline-block self-start border border-white text-white rounded-md px-2 py-1 lg:px-4 lg:py-2 text-sm hover:bg-white hover:text-black transition">
                Detaylı Bilgi
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
