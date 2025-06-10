// components/BlogSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function BlogSection() {
  const t1 = useTranslations("Blog1");
  const t2 = useTranslations("Blog2");
  const t3 = useTranslations("Blog3");
  const t4 = useTranslations("Blog4");
  const t5 = useTranslations("Blog5");
  const t6 = useTranslations("Blog6");
  const t7 = useTranslations("Blog7");
  const t8 = useTranslations("Blog8");

  // çeviri fonksiyonlarını bir diziye alıyoruz
  const translators = [t1, t2, t3, t4];

  const leftPosts = [
    {
      title: t1("header"),
      slug: t1("slug"),
      excerpt: t1("text1"),
      img: "https://placehold.co/300x200?text=Implant",
    },
    {
      title: t2("header"),
      slug: t2("slug"),
      excerpt: t2("text1"),
      img: "https://placehold.co/300x200?text=Protez",
    },
    {
      title: t3("header"),
      slug: t3("slug"),
      excerpt: t3("text1"),
      img: "https://placehold.co/300x200?text=Dişsiz",
    },
    {
      title: t4("header"),
      slug: t4("slug"),
      excerpt: t4("text1"),
      img: "https://placehold.co/300x200?text=Sedasyon",
    },

    {
      title: t5("header"),
      slug: t5("slug"),
      excerpt: t5("text1"),
      img: "https://placehold.co/300x200?text=Sedasyon",
    },

    {
      title: t6("header"),
      slug: t6("slug"),
      excerpt: t6("text1"),
      img: "https://placehold.co/300x200?text=Sedasyon",
    }
  ];

  const sidebarPosts = [
 t7("header"),
 t8("header"),
  "Diş İmplantı Fiyatları Ne Kadar?",
  "Diş İmplantı Güvenli mi?",
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
              <div className="w-full lg:w-[35%] h-[140px] lg:h-[200px] relative">
                <img
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
                    Devamını Oku
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
                      <img
                        src={`https://placehold.co/100x100?text=Img${idx + 1}`}
                        alt={title}
                        width={40}
                        height={40}
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
