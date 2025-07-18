// components/BlogSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";
import img1 from "../../../../public/images/stock/dental-implant-and-x-ray-picture-as-background-2025-01-09-05-46-02-utc.jpg"
import img2 from "../../../../public/images/stock/close-up-of-dental-model-with-implant-patient-of-2024-11-27-17-58-45-utc.jpg"
import img3 from "../../../../public/images/stock/top-view-of-dentist-with-veneers-palette-stock-pho-2025-03-05-20-15-40-utc.jpg"
import img4 from "../../../../public/images/stock/dental-prosthetics-concept-showing-the-installati-2025-04-22-03-27-19-utc.jpg"
import img5 from "../../../../public/images/stock/dental-teeth-model-with-dentist-tool-for-dentistry-2025-02-25-14-54-52-utc.jpg"
import img6 from "../../../../public/images/stock/the-dentist-shines-on-the-patient-s-teeth-with-an-2025-01-08-23-24-01-utc.jpg"
import img7 from "../../../../public/images/stock/ceramic-braces-installation-process-2025-01-16-22-13-46-utc.jpg"
import img8 from "../../../../public/images/stock/the-dentist-shines-on-the-patient-s-teeth-with-an-2025-01-08-23-24-01-utc.jpg"
import img9 from "../../../../public/images/stock/close-up-dental-office-girl-dentist-applies-protec-2024-12-04-04-55-22-utc.jpg"
import img10 from "../../../../public/images/stock/top-view-of-dentist-with-veneers-palette-stock-pho-2025-03-05-20-15-40-utc.jpg"
import img11 from "../../../../public/images/stock/zirconium-porcelain-tooth-plate-in-dentist-store-2025-04-02-16-12-49-utc.jpg"

export default function BlogSection() {
  const t1 = useTranslations("Blog1");
  const t2 = useTranslations("Blog2");
  const t3 = useTranslations("Blog3");
  const t4 = useTranslations("Blog4");
  const t5 = useTranslations("Blog5");
  const t6 = useTranslations("Blog6");
  const t7 = useTranslations("Blog7");
  const t8 = useTranslations("Blog8");
  const t9 = useTranslations("Blog9");
  const t10 = useTranslations("Blog10");

  // çeviri fonksiyonlarını bir diziye alıyoruz
  const translators = [t1, t2, t3, t4];

  const leftPosts = [
    {
      title: t1("header"),
      slug: t1("slug"),
      excerpt: t1("text1"),
      img: img5,
    },
    {
      title: t2("header"),
      slug: t2("slug"),
      excerpt: t2("text1"),
      img: img2,
    },
    {
      title: t3("header"),
      slug: t3("slug"),
      excerpt: t3("text1"),
      img: img3,
    },
    {
      title: t4("header"),
      slug: t4("slug"),
      excerpt: t4("text1"),
      img: img9,
    },

    {
      title: t5("header"),
      slug: t5("slug"),
      excerpt: t5("text1"),
      img: img8,
    },

    {
      title: t6("header"),
      slug: t6("slug"),
      excerpt: t6("text1"),
      img: img1,
    }
  ];

  const sidebarPosts = [
 t7("header"),
 t8("header"),
 t9("header"),
 t10("header"),
];

  const sidebarImage = [
 img4,
 img6,
 img7,
 img10
];

  return (
    <section className="text-[#050a30] py-8 lg:py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* ─── SOL TARAF (Gönderi Kartları) ─── */}
        <div className="flex-1 space-y-6 lg:space-y-8">
          {leftPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-[#e29c2d] rounded-xl overflow-hidden flex flex-col lg:flex-row"
            >
              <div className="w-full lg:min-w-[200px] h-[140px] lg:h-[280px] relative">
                <Image
                width={post.width}
                height={post.height}
                  src={post.img}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-4 py-2 lg:p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-[18px] md:text-[20px] lg:text-2xl font-roboto mb-1 lg:mb-3 text-[#be231d]">
                    {post.title}
                  </h3>
                  <p className="text-[12px] lg:text-sm font-jost mb-1 lg:mb-4 text-[#050a30] line-clamp-2 lg:line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <div className="self-start border text-[14px] lg:text-[16px] border-white text-[#1f84d2] pr-5 lg:px-5 py-2 rounded-md hover:bg-white hover:text-gray-300 transition">
                  {t1("buttonText")}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─── SAĞ TARAF (Son Yazılar) ─── */}
        <div className="w-full lg:w-[30%]">
          <div className="rounded-xl bg-[#2c744b] p-6">
            <h4 className="text-xl font-roboto mb-4 text-center text-[#ddde64]">
              Son Yazılar
            </h4>
            <ul className="space-y-2">
              {sidebarPosts.map((title, idx) => {
                // idx’e göre doğru çeviri fonksiyonunu al, sonra slug’ı çek
                const slug = translators[idx]("slug");
                return (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-[#ddde64] transition"
                  >
                    <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={sidebarImage[idx]}
                        alt={title}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <Link href={`/blog/${slug}`}>
                      <div className="text-sm font-jost text-white line-clamp-2">
                        {title}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
