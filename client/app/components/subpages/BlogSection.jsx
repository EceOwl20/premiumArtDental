// components/BlogSection.jsx
"use client";

import React from "react";
import Image from "next/image";

const leftPosts = [
  {
    title: "Alt ve Üst Çene İmplantlarında Nelere Dikkat Edilmeli?",
    excerpt:
      "Alt ve Üst Çene İmplantlarında Nelere Dikkat Edilmeli? Diş kaybı, hem estetik görünümü hem de günlük yaşam kalitesini olumsuz etkileyen önemli bir problemdir. Günümüzde diş implantları, bu soruna en doğal ve kalıcı çözüm olarak öne çıkıyor. Ancak başarılı bir implant tedavisi için özellikle alt ve üst çene uygulamalarında bazı kritik…",
    img: "https://placehold.co/300x200?text=Implant",
  },
  {
    title: "Full Çene İmplant ve Protez Arasındaki Fark Nedir?",
    excerpt:
      "Tüm dişlerini kaybetmiş bireylerin karşısına genellikle iki seçenek çıkar: Hareketli protezler veya full çene implant tedavisi. Her iki yöntem de eksik dişlerin yerini doldurmayı amaçlasa da, konfor, estetik ve uzun vadeli başarı açısından aralarında büyük farklar vardır. Antalya’da modern diş tedavilerini başarıyla uygulayan Dent Laracity olarak, sizin için bu iki…",
    img: "https://placehold.co/300x200?text=Protez",
  },
  {
    title: "Dişsiz Hastalar İçin Kalıcı Çözüm",
    excerpt:
      "Tüm dişlerini kaybetmiş olmak, sadece estetik açıdan değil; beslenme, konuşma ve özgüven üzerinde de ciddi etkiler yaratabilir. Ancak günümüzde diş hekimliği, dişsiz hastalar için artık kalıcı ve konforlu bir çözüm sunuyor: Full Ağız İmplant Tedavisi. Dent Laracity olarak Antalya’daki hastalarımıza, yaşam kalitelerini artıracak bu gelişmiş tedavi yöntemini en güncel teknoloji…",
    img: "https://placehold.co/300x200?text=Dişsiz",
  },
  {
    title: "Sedasyonlu İmplant Tedavisinin Avantajları",
    excerpt:
      "Sedasyon, diş tedavileri sırasında ortaya çıkabilecek olan ağrı, korku veya mide bulantısını ortadan kaldırmak amacıyla kullanılan bir tekniktir. Sedasyonlu implant tedavisi sayesinde hasta hem konforlu bir süreç yaşar hem de uzun süreli, kalıcı diş çözümlerine daha kolay erişir. Özellikle diş fobisi olan hastalar için sedasyonlu yöntemler, işlemi çok daha rahat ve stres…",
    img: "https://placehold.co/300x200?text=Sedasyon",
  },
  {
    title: "Diş Eti Hastalıklarında Erken Müdahale",
    excerpt:
      "Diş eti hastalıkları, genellikle ilerlediğinde diş kaybına kadar gidebilen önemli rahatsızlıklardır. Diş eti çekilmesi, diş eti iltihabı (gingivitis) ve periodontit gibi durumlar, zamanında müdahale edilmediğinde daha ciddi cerrahi işlemleri gerektirebilir. Düzenli check‐up’larla diş eti sağlığınızı kontrol altında tutabilir, böylece hem ağrı hissini hem de estetik kaybı önleyebilirsiniz. Dent Laracity olarak erken teşhis…",
    img: "https://placehold.co/300x200?text=Diş+Eti",
  },
  {
    title: "Estetik Gülüş Tasarımının İncelikleri",
    excerpt:
      "Estetik gülüş tasarımı, sadece dişlerin beyaz veya düzgün olması demek değildir. Yüzün genel hatları, dudak yapısı, diş eti çizgileri, dişlerin boyutları ve konumları bütünsel olarak değerlendirilir. Kişiye özel hazırlanan CAD/CAM destekli diş kaplamaları, ortodontik düzeltmeler ve lazer tedavileri ile “hayalinizdeki gülüşe” ulaşmanız artık mümkün. Dent Laracity, ileri teknoloji ve uzman ekibiyle sizi hayalinizdeki…",
    img: "https://placehold.co/300x200?text=Gülüş",
  },
];

const sidebarPosts = [
  "Çekilen Dişin Yerine Ne Zaman İmplant Yapılır?",
  "Implant’ta Neden 3 Ay Beklenir?",
  "Diş Tedavisi Sonrası Nelere Dikkat Edilmelidir?",
  "Estetik Diş Hekimliğinde En Yeni Trendler",
  "Full Ağız İmplant Tedavisi Nedir?",
  "Diş Taşı Temizliği Ne Sıklıkla Yapılmalı?",
  "Gülüş Tasarımı Kimlere Yapılabilir?",
  "Implant Tedavisi Sonrası İyileşme Süreci?",
  "Diş Beyazlatma Sonrası Dikkat Edilmesi Gerekenler",
];

export default function BlogSection() {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* ─────────── SOL TARAF (Gönderi Kartları) ─────────── */}
        <div className="flex-1 space-y-8">
          {leftPosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-[#d9b740] rounded-xl overflow-hidden flex flex-col lg:flex-row bg-gray-900"
            >
              {/* Görsel Alanı */}
              <div className="w-full lg:w-[35%] h-[200px] relative">
                <img
                  src={post.img}
                  alt={post.title}
                 
                  className="object-cover"
                />
              </div>

              {/* Metin İçeriği */}
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-marcellus mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm font-jost text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <button className="self-start border border-white text-white px-5 py-2 rounded-md hover:bg-white hover:text-black transition">
                  Devamını Oku
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────── SAĞ TARAF (Son Yazılar) ─────────── */}
        <div className="w-full lg:w-[30%]">
          <div className="border border-[#d9b740] rounded-xl bg-[#10271a] p-6">
            <h4 className="text-xl font-marcellus mb-4 text-center">
              Son Yazılar
            </h4>
            <ul className="space-y-2">
              {sidebarPosts.map((title, idx) => (
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
                  <span className="text-sm font-jost text-white">
                    {title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
