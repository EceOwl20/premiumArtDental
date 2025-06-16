// app/[locale]/treatments/all-on-4/page.jsx
"use client";

import Link from "next/link";
import Banner from "../../components/subpages/Banner";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("Allon4")

     const otherTreatments = [
    { title: "All-on-6 İmplantlar", slug: "all-on-6-implants" },
    { title: "Dental Implants", slug: "dental-implants" },
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
    <Banner header="All on 4"/>
     <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki İçerik */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
         {t("header1")}
        </h1>

        <p className="text-base leading-relaxed">
         {t("text1")}
        </p>

        <h2 className="text-2xl font-semibold">
         {t("header2")}
        </h2>
        <p className="text-base leading-relaxed">
        {t("text2")}
        </p>

        <h3 className="text-xl font-semibold">{t("header3")}</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("list1")}</li>
          <li>{t("list2")}</li>
          <li>{t("list3")}</li>
        </ul>

        <h3 className="text-xl font-semibold">
         {t("header4")}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("list4")}</li>
          <li>{t("list5")}</li>
          <li>{t("list6")}</li>
          <li>{t("list7")}</li>
          <li>{t("list8")}</li>
        </ul>

        <h3 className="text-xl font-semibold">
         {t("header5")}
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>{t("list9")}</li>
          <li>{t("list10")}</li>
          <li>{t("list11")}</li>
          <li>{t("list12")}</li>
          <li>{t("list13")}</li>
        </ul>

        <h3 className="text-xl font-semibold">
          {t("header6")}
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            {t("list14")}
          </li>
          <li>
            {t("list15")}
          </li>
          <li>
             {t("list16")}
          </li>
          <li>
             {t("list17")}
          </li>
        </ol>

        <p className="mt-4 text-base">
           {t("text3")}
        </p>
      </div>

      {/* Sağdaki Link Listesi */}
      <aside className="w-full lg:w-[30%] bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Diğer Tedaviler</h3>
        <ul className="space-y-3">
          {otherTreatments.map((t) => (
            <li key={t.slug}>
              <Link
                href={`/treatments/${t.slug}`}
                className="text-blue-600 hover:underline"
              >
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
