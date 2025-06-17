// app/[locale]/treatments/zirconium-crowns/page.jsx
"use client";

import Link from "next/link";
import React from 'react'
import Banner from '../../components/subpages/Banner';
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("ZirconiumCrowns")
  
     const otherTreatments = [
    { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
    { title: "All-on-6 İmplant Tedavisi", slug: "all-on-6-implant-treatment" },
    { title: "Dijital Diş Hekimliği", slug: "digital-dentistry" },
    { title: "Lazerle Diş Beyazlatma", slug: "laser-teeth-whitening" },
    { title: "Lamine Kaplamalar", slug: "laminate-veneers" },
    { title: "Periodontoloji", slug: "periodontology" },
    { title: "Porselen Kaplamalar", slug: "porcelain-crowns" },
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];

  return (
    <div>
      <Banner header={t("header1")}/>
      <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">{t("header1")}</h1>

        <p className="text-base leading-relaxed">
          {t("text1")}
        </p>

        <p className="text-base leading-relaxed">
         {t("text2")}
        </p>

        <p className="text-base leading-relaxed">
         {t("text3")}
        </p>

        <p className="text-base leading-relaxed">
          {t("text4")}
        </p>
      </div>

      {/* Sağdaki link listesi (%30) */}
      <aside className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Diğer Tedaviler</h3>
        <ul className="space-y-3">
          {otherTreatments.map((t) => (
            <li key={t.slug}>
              <Link href={`/treatments/${t.slug}`} className="text-blue-600 hover:underline">
                {t.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </section>

    </div>
  )
}

export default Page
