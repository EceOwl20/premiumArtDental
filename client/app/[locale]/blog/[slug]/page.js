// app/blog/[slug]/page.jsx
"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import Banner from "../../components/subpages/Banner";
import IntroductionSec from "../components/IntroductionSec";
import ListSec from "../components/ListSec";
import trData from "@/messages/tr.json";
import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import ruData from "@/messages/ru.json";

// locale'a göre JSON'u döndüren
function getLocaleData(locale) {
  switch (locale) {
    case "en":
      return enData;
    case "de":
      return deData;
    case "ru":
      return ruData;
    default:
      return trData;
  }
}

export default function BlogDetailPage() {
  const params = useParams();       // { slug: "..." }
  const router = useRouter();
  const locale = useLocale();       // "tr" | "en" | "de" | "ru"

  // 1) Şu anki dilin JSON'u
  const data = getLocaleData(locale);

  // 2) JSON'un BlogN anahtarını bul
  const matchedKey = Object.keys(data).find(
    (key) => data[key].slug === params.slug
  );

  // 3) Eğer bulamadıysan 404
  if (!matchedKey) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Yazı bulunamadı</h1>
      </main>
    );
  }

  const matchedPost = data[matchedKey];

  // 4) Dil değiştirme fonksiyonu - DÜZELTİLDİ
  const changeLocale = (newLocale) => {
    const newData = getLocaleData(newLocale);
    
    // Aynı blog anahtarı (matchedKey) ile yeni dildeki slug'ı al
    const newSlug = newData[matchedKey]?.slug;
    
    // Eğer yeni dilde bu blog yoksa, ana blog sayfasına yönlendir
    if (!newSlug) {
      router.push(`/${newLocale}/blog`);
      return;
    }
    
    // Doğru slug ile yönlendir
    router.push(`/${newLocale}/blog/${newSlug}`);
  };

  return (
    <div className="flex flex-col gap-[30px] lg:gap-[60px] pb-10 lg:pb-20">
      {/* Dil değiştirici */}
      <div className="flex justify-end space-x-2">
        {["tr", "en", "de", "ru"].map((loc) => (
          <button
            key={loc}
            className={`px-3 py-1 rounded ${
              loc === locale ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => changeLocale(loc)}
          >
            {loc.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Banner */}
      <Banner header={matchedPost.header} text="" />

      {/* IntroductionSec */}
      <IntroductionSec
        header={matchedPost.header}
        text1={matchedPost.text1}
        text2={matchedPost.text2 ?? ""}
      />

      {/* ListSec 1 */}
      <ListSec
        header={matchedPost.ListSec1.header}
        span={matchedPost.ListSec1.text}
        texts={[
          `${matchedPost.ListSec1.list1_header}: ${matchedPost.ListSec1.list1}`,
          `${matchedPost.ListSec1.list2_header}: ${matchedPost.ListSec1.list2}`,
          `${matchedPost.ListSec1.list3_header}: ${matchedPost.ListSec1.list3}`,
        ]}
      />

      {/* ListSec 2 */}
      <ListSec
        header={matchedPost.ListSec2.header}
        span={matchedPost.ListSec2.text}
        texts={[
          `${matchedPost.ListSec2.list1_header}: ${matchedPost.ListSec2.list1}`,
          `${matchedPost.ListSec2.list2_header}: ${matchedPost.ListSec2.list2}`,
          `${matchedPost.ListSec2.list3_header}: ${matchedPost.ListSec2.list3}`,
        ]}
      />

      {/* ListSec 3 */}
      <ListSec
        header={matchedPost.ListSec3.header}
        span={matchedPost.ListSec3.text}
        texts={[
          `${matchedPost.ListSec3.list1_header}: ${matchedPost.ListSec3.list1}`,
          `${matchedPost.ListSec3.list2_header}: ${matchedPost.ListSec3.list2}`,
        ]}
      />

      {/* ListSec 4 (varsa) */}
      {matchedPost.ListSec4 && (
        <ListSec
          header={matchedPost.ListSec4.header}
          span={matchedPost.ListSec4.text}
          texts={[
            `${matchedPost.ListSec4.list1_header}: ${matchedPost.ListSec4.list1}`,
            `${matchedPost.ListSec4.list2_header}: ${matchedPost.ListSec4.list2}`,
            `${matchedPost.ListSec4.list3_header}: ${matchedPost.ListSec4.list3}`,
            `${matchedPost.ListSec4.list4_header}: ${matchedPost.ListSec4.list4}`,
          ]}
        />
      )}

      {/* BlogConclusion (varsa) */}
      {/* <ConclusionSec text={matchedPost.BlogConclusion.text} /> */}
    </div>
  );
}