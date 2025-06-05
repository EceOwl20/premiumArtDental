// components/BlogSection.jsx
"use client";

import React from "react";
import Image from "next/image";

const leftPosts = [
  {
    title: "Diş İmplantı ve Diş Köprüsü: Sizin İçin Hangi Tedavi Daha Uygun?",
    excerpt:
      "Eksik dişlerin yerine yeni diş yaptırmak söz konusu olduğunda, diş implantları ve diş köprüleri en çok tercih edilen iki seçenektir. Her ikisi de etkili çözümler sunar, ancak ihtiyaçlarınıza en uygun olanı seçebilmek için aralarındaki farkları ve avantajları bilmek önemlidir. Premium Art Dental Clinic olarak, bu blog yazısında diş implantları ve diş köprülerini karşılaştırıyor, özelliklerini, avantajlarını ve dikkat edilmesi gereken noktaları sizinle paylaşıyoruz.",
    img: "https://placehold.co/300x200?text=Implant",
  },
  {
    title: "Diş İmplantları Yaşam Kalitenizi Nasıl Artırır?",
    excerpt:
      "Eksik dişlerinizi tamamlamak ve gülüşünüzü güzelleştirmek söz konusu olduğunda, diş implantları dünya genelinde milyonlarca hasta için en çok tercih edilen çözüm haline gelmiştir. Premium Art Dental Clinic olarak Türkiye’de en son diş teknolojilerini kullanarak yüksek kaliteli implant tedavileri sunuyoruz. Bu sayede implant tedavileri artık hem daha erişilebilir hem de daha uygun maliyetlidir.",
    img: "https://placehold.co/300x200?text=Protez",
  },
  {
    title: "Yurt Dışından Gelen Hastalar İçin Adım Adım Diş Tedavisi Süreci (Türkiye Rehberi)",
    excerpt:
      "Diş tedavinizi uygun fiyatlarla, yüksek kaliteyle ve tatil fırsatıyla birleştirmek ister misiniz? Türkiye, son yıllarda dental turizm alanında dünyanın en çok tercih edilen ülkelerinden biri haline geldi. Antalya/Kemer’deki Premium Art Diş Kliniğimiz, yurt dışından gelen hastalarımıza özel planlanmış VIP bir süreç sunuyoruz. Bu yazımızda, Türkiye’de diş tedavisi görmek isteyen yabancı hastalar için adım adım süreci anlatıyoruz. Böylece aklınızdaki tüm soru işaretleri netleşmiş olacak.",
    img: "https://placehold.co/300x200?text=Dişsiz",
  },
  {
    title: "Diş Eti Hastalıkları ve Türkiye’de Periodontal Tedavi Seçenekleri",
    excerpt:
      "Diş sağlığı sadece dişlerin değil, diş etlerinin de sağlıklı olmasını gerektirir. Diş eti hastalıkları, çoğu zaman fark edilmeden ilerleyen ancak zamanında tedavi edilmezse diş kaybına yol açabilen ciddi sorunlardır. Kliniğimizde bu hastalıkların tedavisinde hem ileri teknoloji hem de uzmanlıkla donatılmış modern ekipmanlar mevcuttur. Antalya/Kemer’de bulunan Premium Art Diş Kliniği olarak, yurt dışından gelen hastalarımıza özel diş eti tedavi çözümleri sunuyor, sağlıklı ve estetik bir gülüşe kavuşmalarına yardımcı oluyoruz. Bu yazımızda diş eti hastalıklarını, belirtilerini ve Türkiye’deki tedavi seçeneklerini adım adım açıklıyoruz.",
    img: "https://placehold.co/300x200?text=Sedasyon",
  },
  {
    title: "Gülüş Tasarımı (Smile Makeover) ile Yeni Bir Başlangıç: Diş Estetiği Türkiye’de",
    excerpt:
      "Gülüş tasarımı, diş estetiği ve gülüş estetiği gibi terimler, son yıllarda hem estetik kaygılarla hem de işlevsel gereksinimlerle gündeme gelmiştir. Türkiye'de gülüş tasarımı, her geçen gün daha fazla hastamız tarafından tercih edilmektedir. Bu yazımızda, gülüş tasarımı tedavisi, diş estetiği tedavileri ve gülüş tasarımı Türkiye hakkındaki tüm merak edilenleri ayrıntılı şekilde ele alıyoruz. Ayrıca, diş estetiği fiyatları, gülüş tasarımı süreci ve Türkiye’deki Premium Art Diş Kliniğimizdeki gülüş tasarımı ile ilgili en iyi diş hekimleri hakkında bilgi vereceğiz.",
    img: "https://placehold.co/300x200?text=Diş+Eti",
  },
  {
    title: "Diş İmplantı Tedavisi ile Sağlıklı ve Kalıcı Gülüşler: Premium Art Dental Clinic’te Profesyonel Hizmet",
    excerpt:
      "Diş kaybı estetik ve fonksiyonel açıdan önemli bir problem olabilir. Günümüzde, kaybolan dişlerin yerine konulması için en etkili çözümlerden biri diş implantıdır. Türkiye, özellikle Antalya gibi turistik bölgelerde dental turizm açısından popüler bir destinasyon haline gelmiştir. Premium Art Dental Clinic, hem yerli hem de yabancı hastalarına en kaliteli diş implantı tedavisi hizmetini sunmaktadır. Bu yazımızda, diş implantı tedavisi, dental implant, tedavi süreci, avantajları ve Premium Art Dental Clinic’te neden tercih edilmesi gerektiğini ayrıntılı şekilde ele alıyoruz.",
    img: "https://placehold.co/300x200?text=Gülüş",
  },
];

const sidebarPosts = [
  "All-on-4 ve All-on-6 İmplantlar ",
  "Diş Tedaviniz İçin Neden Antalya En İyi Tercih? – 5 Neden",
  "Diş İmplantı Fiyatları Ne Kadar?",
  "Diş İmplantı Güvenli mi?"
];

export default function BlogSection() {
  return (
    <section className=" text-[#050a30] py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* ─────────── SOL TARAF (Gönderi Kartları) ─────────── */}
        <div className="flex-1 space-y-8">
          {leftPosts.map((post, idx) => (
            <div
              key={idx}
              className="border border-[#e29c2d] rounded-xl overflow-hidden flex flex-col lg:flex-row "
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
                  <h3 className="text-2xl font-marcellus mb-3 text-[#be231d]">
                    {post.title}
                  </h3>
                  <p className="text-sm font-jost mb-4 text-[#050a30] line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>
                <button className="self-start border border-white text-[#050a30] px-5 py-2 rounded-md hover:bg-white hover:text-gray-300 transition">
                  Devamını Oku
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────── SAĞ TARAF (Son Yazılar) ─────────── */}
        <div className="w-full lg:w-[30%]">
          <div className="border border-[#e29c2d] rounded-xl bg-[#2c744b] p-6">
            <h4 className="text-xl font-marcellus mb-4 text-center text-[#e29c2d]">
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
