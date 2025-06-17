// app/[locale]/treatments/periodontology/page.jsx
"use client";

import Link from "next/link";
import React from 'react'
import Banner from '../../components/subpages/Banner'
import { useTranslations } from "next-intl";

const page = () => {
   const t = useTranslations("Periodontology")

     const otherTreatments = [
    { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
    { title: "All-on-6 İmplant Tedavisi", slug: "all-on-6-implant-treatment" },
    { title: "Dijital Diş Hekimliği", slug: "digital-dentistry" },
    { title: "Diş Beyazlatma", slug: "teeth-whitening" },
    { title: "Lamine Kaplamalar", slug: "laminate-veneers" },
    { title: "Porselen Kaplamalar", slug: "porcelain-veneers" },
    { title: "Zirkonyum Kaplamalar", slug: "zirconium-crowns" },
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];
  
  return (
    <div>
      <Banner header={t("header1")}/>
       <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
         {t("header1")}
        </h1>

        <p className="text-base leading-relaxed">
         {t("text1")}
        </p>

        <p className="text-base leading-relaxed">
         {t("text2")}
        </p>

        <h2 className="text-2xl font-semibold">{t("header2")}</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
           {t("list1")}
          </li>
          <li>
              {t("list2")}
          </li>
          <li>
              {t("list3")}
          </li>
          <li>
               {t("list4")}
          </li>
          <li>
              {t("list5")}
          </li>
        </ul>

        <p className="text-base leading-relaxed">
            {t("text3")}
        </p>

        <p className="mt-4 text-base leading-relaxed">
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

export default page
