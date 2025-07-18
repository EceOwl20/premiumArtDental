// app/[locale]/treatments/digital-dentistry/page.jsx
"use client";

import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";
import React from 'react'
import Banner from '../../components/subpages/Banner'

const Page = () => {
    const t = useTranslations("DigitalDentistry")
     const otherTreatments = [
   { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
    { title: "All-on-6 İmplantlar", slug: "all-on-6-implant-treatment" },
    { title: "Digital Dentistry", slug: "digital-dentistry" },
    { title: "Teeth Whitening", slug: "teeth-whitening" },
    { title: "Laminate Veneers", slug: "laminate-veneers" },
    { title: "Periodontology", slug: "periodontology" },
    { title: "Porcelain Veneers", slug: "porcelain-veneers" },
    { title: "Zirconium Crowns", slug: "zirconium-crowns" },
    { title: "E-max Veneers", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];

  return (
    <div>
      <Banner header={t("header1")}/>
        <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Sol sütun: içerik %70 */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
          {t("header1")}
        </h1>
        <p className="text-base leading-relaxed">{t("text1")}</p>

        <h2 className="text-2xl font-semibold">{t("header2")}</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("list1")}</li>
          <li>{t("list2")}</li>
          <li>{t("list3")}</li>
          <li>{t("list4")}</li>
          <li>{t("list5")}</li>
          <li>{t("list6")}</li>
        </ul>

        <h2 className="text-2xl font-semibold">{t("header3")}</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("list7")}</li>
          <li>{t("list8")}</li>
          <li>{t("list9")}</li>
          <li>{t("list10")}</li>
          <li>{t("list11")}</li>
          <li>{t("list12")}</li>
        </ul>

        <p className="mt-4 text-base leading-relaxed">{t("text2")}</p>
      </div>

      {/* Sağ sütun: diğer tedaviler %30 */}
      <aside className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Other Title</h3>
        <ul className="space-y-3">
          {otherTreatments.map((tmt) => (
            <li key={tmt.slug}>
              <Link
                href={`/treatments/${tmt.slug}`}
                className="text-blue-600 hover:underline"
              >
                {tmt.title}
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
