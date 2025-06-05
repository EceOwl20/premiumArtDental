// app/blog/[slug]/page.jsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl"; // ← next-intl’den useLocale’ü import edin
import Banner from "../../components/subpages/Banner";
import IntroductionSec from "../components/IntroductionSec";
import ListSec from "../components/ListSec";

// Dört dildeki JSON dosyalarınızı import edin
import trData from "@/messages/tr.json";
import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import ruData from "@/messages/ru.json";

// Gelen locale’a göre doğru JSON’u döndüren yardımcı fonksiyon
function getLocaleData(locale) {
  switch (locale) {
    case "en":
      return enData;
    case "de":
      return deData;
    case "ru":
      return ruData;
    default:
      return trData; // Varsayılan: Türkçe
  }
}

export default function BlogDetailPage() {
  const params = useParams();      // { slug: "..." }
  const locale = useLocale();      // next-intl’den gelen aktif dil (örneğin "tr", "en", "de", "ru")
  const data = getLocaleData(locale);

  // JSON içindeki tüm BlogN objelerini diziye dönüştür:
  const allPosts = Object.values(data);

  // URL’den gelen slug’a göre eşleşeni bul:
  const matchedPost = allPosts.find((post) => post.slug === params.slug);

  // Hiç eşleşme yoksa 404 benzeri bir ekran gösterelim:
  if (!matchedPost) {
    return (
      <main className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Yazı bulunamadı</h1>
      </main>
    );
  }

  // Eşleşen nesne matchedPost, içinde:
  // matchedPost.header, matchedPost.text1, matchedPost.ListSec1, ListSec2, ListSec3, ListSec4, BlogConclusion…

  return (
    <div className="flex flex-col gap-[30px] lg:gap-[60px] pb-10 lg:pb-20">
      {/* ─────────── Banner ─────────── */}
      <Banner header={matchedPost.header} text="" />

      {/* ─────────── IntroductionSec ─────────── */}
      <IntroductionSec
        header={matchedPost.header}
        text1={matchedPost.text1}
        text2={matchedPost.text2 ?? ""}
      />

      {/* ─────────── ListSec 1 ─────────── */}
      <ListSec
        header={matchedPost.ListSec1.header}
        span={matchedPost.ListSec1.text}
        texts={[
          `${matchedPost.ListSec1.list1_header}: ${matchedPost.ListSec1.list1}`,
          `${matchedPost.ListSec1.list2_header}: ${matchedPost.ListSec1.list2}`,
          `${matchedPost.ListSec1.list3_header}: ${matchedPost.ListSec1.list3}`,
        ]}
      />

      {/* ─────────── ListSec 2 ─────────── */}
      <ListSec
        header={matchedPost.ListSec2.header}
        span={matchedPost.ListSec2.text}
        texts={[
          `${matchedPost.ListSec2.list1_header}: ${matchedPost.ListSec2.list1}`,
          `${matchedPost.ListSec2.list2_header}: ${matchedPost.ListSec2.list2}`,
          `${matchedPost.ListSec2.list3_header}: ${matchedPost.ListSec2.list3}`,
        ]}
      />

      {/* ─────────── ListSec 3 ─────────── */}
      <ListSec
        header={matchedPost.ListSec3.header}
        span={matchedPost.ListSec3.text}
        texts={[
          `${matchedPost.ListSec3.list1_header}: ${matchedPost.ListSec3.list1}`,
          `${matchedPost.ListSec3.list2_header}: ${matchedPost.ListSec3.list2}`,
        ]}
      />

      {/* ─────────── ListSec 4 (varsa göster) ─────────── */}
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

      {/* Eğer BlogConclusion’u da ayrı bir bileşenle göstermek isterseniz: */}
      {/* <ConclusionSec text={matchedPost.BlogConclusion.text} /> */}
    </div>
  );
}
