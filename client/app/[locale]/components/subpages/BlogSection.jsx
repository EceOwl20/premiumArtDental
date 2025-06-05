// components/BlogSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

function makeSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const sidebarPosts = [
  "All-on-4 ve All-on-6 İmplantlar",
  "Diş Tedaviniz İçin Neden Antalya En İyi Tercih? – 5 Neden",
  "Diş İmplantı Fiyatları Ne Kadar?",
  "Diş İmplantı Güvenli mi?",
];

export default function BlogSection() {
  const t = useTranslations('Blog1');
  const t2 = useTranslations('Blog2');
  const t3= useTranslations('Blog3');
   const t4= useTranslations('Blog4');

  const leftPosts = [
  {
    title: t("header"),
    slug:t("slug"),
    excerpt:t("text1"),
    img: "https://placehold.co/300x200?text=Implant",
  },
  {
    title: t2("header"),
  slug:t2("slug"),
     excerpt:t2("text1"),
    img: "https://placehold.co/300x200?text=Protez",
  },
  {
   title: t3("header"),
    slug:t3("slug"),
    excerpt:t3("text1"),
    img: "https://placehold.co/300x200?text=Dişsiz",
  },
  {
     title: t4("header"),
    slug:t4("slug"),
    excerpt:t4("text1"),
    img: "https://placehold.co/300x200?text=Sedasyon",
  },
  // {
  //   title: "Gülüş Tasarımı (Smile Makeover) ile Yeni Bir Başlangıç: Diş Estetiği Türkiye’de",
  //   slug: makeSlug("Gülüş Tasarımı (Smile Makeover) ile Yeni Bir Başlangıç: Diş Estetiği Türkiye’de"),
  //   excerpt:
  //     "Gülüş tasarımı, diş estetiği ve gülüş estetiği gibi terimler, son yıllarda hem estetik kaygılarla hem de işlevsel gereksinimlerle gündeme gelmiştir. Türkiye'de gülüş tasarımı, her geçen gün daha fazla hastamız tarafından tercih edilmektedir. Bu yazımızda, gülüş tasarımı tedavisi, diş estetiği tedavileri ve gülüş tasarımı Türkiye hakkındaki tüm merak edilenleri ayrıntılı şekilde ele alıyoruz. Ayrıca, diş estetiği fiyatları, gülüş tasarımı süreci ve Türkiye’deki Premium Art Diş Kliniğimizdeki gülüş tasarımı ile ilgili en iyi diş hekimleri hakkında bilgi vereceğiz.",
  //   img: "https://placehold.co/300x200?text=Diş+Eti",
  // },
  // {
  //   title: "Diş İmplantı Tedavisi ile Sağlıklı ve Kalıcı Gülüşler: Premium Art Dental Clinic’te Profesyonel Hizmet",
  //   slug: makeSlug("Diş İmplantı Tedavisi ile Sağlıklı ve Kalıcı Gülüşler: Premium Art Dental Clinic’te Profesyonel Hizmet"),
  //   excerpt:
  //     "Diş kaybı estetik ve fonksiyonel açıdan önemli bir problem olabilir. Günümüzde, kaybolan dişlerin yerine konulması için en etkili çözümlerden biri diş implantıdır. Türkiye, özellikle Antalya gibi turistik bölgelerde dental turizm açısından popüler bir destinasyon haline gelmiştir. Premium Art Dental Clinic, hem yerli hem de yabancı hastalarına en kaliteli diş implantı tedavisi hizmetini sunmaktadır. Bu yazımızda, diş implantı tedavisi, dental implant, tedavi süreci, avantajları ve Premium Art Dental Clinic’te neden tercih edilmesi gerektiğini ayrıntılı şekilde ele alıyoruz.",
  //   img: "https://placehold.co/300x200?text=Gülüş",
  // },
];

  return (
    <section className="text-[#050a30] py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* ─────────── SOL TARAF (Gönderi Kartları) ─────────── */}
        <div className="flex-1 space-y-8">
          {leftPosts.map((post) => (
            <div
              key={post.slug}
              className="border border-[#e29c2d] rounded-xl overflow-hidden flex flex-col lg:flex-row"
            >
              {/* Görsel Alanı */}
              <div className="w-full lg:w-[35%] h-[200px] relative">
                <img
                  src={post.img}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Metin İçeriği */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-roboto mb-3 text-[#be231d]">
                    {post.title}
                  </h3>
                  <p className="text-sm font-jost mb-4 text-[#050a30] line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <div className="self-start border border-white text-[#050a30] px-5 py-2 rounded-md hover:bg-white hover:text-gray-300 transition">
                    Devamını Oku
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────── SAĞ TARAF (Son Yazılar) ─────────── */}
        <div className="w-full lg:w-[30%]">
          <div className="border border-[#e29c2d] rounded-xl bg-[#2c744b] p-6">
            <h4 className="text-xl font-roboto mb-4 text-center text-[#e29c2d]">
              Son Yazılar
            </h4>
            <ul className="space-y-2">
              {sidebarPosts.map((title, idx) => {
                const slug = makeSlug(title);
                return (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 transition"
                  >
                    {/* Mini Thumbnail (küçük placeholder) */}
                    <div className="w-10 h-10 bg-gray-700 rounded-md overflow-hidden flex-shrink-0">
                      <img
                        src={`https://placehold.co/100x100?text=Img${idx + 1}`}
                        alt={title}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    {/* Başlık */}
                    <Link href={`/blog/${slug}`}>
                      <div className="text-sm font-jost text-white">{title}</div>
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
