// components/ServicesGrid.jsx
"use client";

import Image from "next/image";
import React from "react";
import {useTranslations} from "next-intl"
import img1 from "../../../../public/images/tedaviler/Allon4.png"
import img2 from "../../../../public/images/tedaviler/Allon6.png"
import img3 from "../../../../public/images/tedaviler/beyazlatma.png"
import img4 from "../../../../public/images/tedaviler/digitaldentistry.png"
import img5 from "../../../../public/images/tedaviler/disimplant.png"
import img6 from "../../../../public/images/tedaviler/emaxkaplama.png"
import img7 from "../../../../public/images/tedaviler/invisalign.png"
import img8 from "../../../../public/images/tedaviler/laminakaplama.png"
import img9 from "../../../../public/images/tedaviler/periodontoloji.png"
import img10 from "../../../../public/images/tedaviler/porselenkaplama.png"
import img11 from "../../../../public/images/tedaviler/zirkonyumkaplama.png"
import Link from "next/link";

export default function ServicesGrid() {

  const t = useTranslations("Treatment")
  const t2 = useTranslations("Allon4")
  const t3 = useTranslations("Allon6")
  const t4 = useTranslations("DentalImplants")
  const t5 = useTranslations("DigitalDentistry")
  const t6 = useTranslations("TeethWhitening")
  const t7 = useTranslations("LaminateVeneers")
  const t8 = useTranslations("Periodontology")
  const t9 = useTranslations("PorcelainCrowns")
  const t10 = useTranslations("ZirconiumCrowns")
  const t11 = useTranslations("EmaxCrowns")
  const t12 = useTranslations("Invisalign")
  // Hizmet verilerini burada tanımlıyoruz.
// Resim olarak placehold.co'dan 64x64 boyutunda bir placeholder kullanıldı.
const services = [
  {
    title: t("treatment1"),
    description:
      t2("text1"),
    img: img1,
    color: "#e29c2d",
    link:"/tedaviler/all-on-4"
  },
  {
    title: t("treatment2"),
    description:
       t3("text1"),
      img: img2,
    color: "#1f84d2",
      link:"/tedaviler/all-on-6"
  },
  {
    title: t("treatment3"),
    description:
       t4("text1"),
      img: img5,
    color: "#50a14f",
      link:"/tedaviler/dental-implants"
  },
  {
   title: t("treatment4"),
    description:
       t5("text1"),
      img: img4,
    color: "#be231d",
      link:"/tedaviler/digital-dentistry"
  },
  {
    title: t("treatment5"),
    description:
        t6("text1"),
     img: img3,
    color: "#b8915e",
      link:"/tedaviler/teeth-whitening"
  },
  {
    title: t("treatment6"),
    description:
      t7("text1"),
      img: img8,
    color: "#c1005c",
      link:"/tedaviler/laminate-veneers"
  },
  {
     title: t("treatment7"),
    description:
        t8("text1"),
     img: img9,
    color: "#700079",
      link:"/tedaviler/periodontology"
  },
  {
     title: t("treatment8"),
    description:
     t9("text1"),
     img: img10,
    color: "#38b2ac",
      link:"/tedaviler/porcelain-crowns"
  },
    {
     title: t("treatment9"),
    description:
       t10("text1"),
     img: img11,
    color: "#e46c59",
      link:"/tedaviler/zirconium-crowns"
  },
    {
     title: t("treatment10"),
    description:
        t11("text1"),
     img: img6,
    color: "#2c012f",
      link:"/tedaviler/emax-crowns"
  },

      {
     title: "Invisalign",
    description:
      t12("text1"),
     img: img7,
    color: "#e6d113",
      link:"/tedaviler/invisalign"
  },
];

  return (
    <section className="bg-white text-white py-0 pb-12 lg:pb-16 lg:py-16 px-8 lg:px-24 xl:px-20 ">
      <div className="max-w-[1500px] mx-auto">
        <h2 className="text-3xl lg:text-4xl font-roboto font-bold mb-8">
          Kliniğimizin Hizmetleri
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl p-4 xl:p-6 flex flex-col h-full transition hover:shadow-lg items-center justify-center text-center lg:text-start"
              style={{ backgroundColor: item.color }}
            >
              {/* İkon/Görsel */}
              <div className="w-full mb-4 items-center justify-center flex">
                <Image
                width={150}
                height={150}
                  src={item.img}
                  alt={item.title}
                  className="w-[90%] lg:.w-full h-full object-cover rounded-sm"
                />
              </div>

              {/* Başlık */}
              <h3 className="text-lg font-semibold lg:mb-2">{item.title}</h3>

              {/* Açıklama */}
              <p className="text-sm text-gray-100 mb-3 lg:mb-6 flex-grow line-clamp-3">
                {item.description}
              </p>

              {/* “Detaylı Bilgi” Butonu */}
              <Link href={item.link} className="mt-auto inline-block self-center lg:self-start border border-white text-white rounded-md px-2 py-1 lg:px-4 lg:py-2 text-sm hover:bg-white hover:text-black transition">
            {t("buttonText")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
