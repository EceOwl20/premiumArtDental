// app/[locale]/treatments/e-max-veneers/page.jsx
"use client";

import Link from "next/link";
import React from 'react'
import Banner from '../../components/subpages/Banner'

const page = () => {
    const otherTreatments = [
    { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
    { title: "All-on-6 İmplant Tedavisi", slug: "all-on-6-implant-treatment" },
    { title: "Dijital Diş Hekimliği", slug: "digital-dentistry" },
    { title: "Lazerle Diş Beyazlatma", slug: "laser-teeth-whitening" },
    { title: "Lamine Kaplamalar", slug: "laminate-veneers" },
    { title: "Periodontoloji", slug: "periodontology" },
    { title: "Porselen Kaplamalar", slug: "porcelain-crowns" },
    { title: "Zirkonyum Kaplamalar", slug: "zirconium-crowns" },
    { title: "Invisalign", slug: "invisalign" },
  ];

  return (
    <div>
      <Banner header="E-max Crowns"/>
        <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">E-max Crowns</h1>

        <p className="text-base leading-relaxed">
          E-max crowns are a treatment method that has gained popularity in recent years,
          offering both aesthetic and functional restorations. Made from lithium disilicate
          ceramics, E-max is a highly aesthetic and extremely durable material. It stands out
          for its exceptional similarity to natural tooth structure and its ability to reflect
          light perfectly. E-max crowns offer an ideal solution for patients with aesthetic
          concerns while also enhancing the durability of the teeth.
        </p>

        <p className="text-base leading-relaxed">
          E-max crowns provide versatile advantages from both a dental and aesthetic perspective.
          Issues such as shape deformities, discoloration, fractures, or wear can be effectively
          and permanently addressed with these crowns. Unlike other types of crowns, E-max requires
          less tooth structure removal, thus preserving the natural tooth structure.
        </p>

        <h2 className="text-2xl font-semibold">Which Teeth Are Suitable for E-max Crowns?</h2>
        <p className="text-base leading-relaxed">
          E-max crowns have high light translucency, offering patients a natural appearance in the
          mouth. They are particularly preferred for front teeth. The types of teeth suitable for
          this treatment include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Teeth with multiple restorations needing aesthetic improvement</li>
          <li>Teeth with deformations or deficiencies in the protective enamel layer</li>
          <li>Teeth that have lost their appearance due to wear</li>
          <li>Teeth that have become discolored and lost whiteness due to root canal treatment</li>
          <li>Teeth affected by age, devitalization, fluorosis, or tetracycline-induced discoloration</li>
          <li>Broken teeth caused by trauma or decay</li>
          <li>Crooked teeth</li>
          <li>Yellowed teeth, including smaller molars with less force applied</li>
        </ul>

        <p className="text-base leading-relaxed">
          At Premium Art Dental Clinic, we create personalized E-max crowns using state-of-the-art
          digital measurement devices and 3D design technology. This ensures a perfect fit for each
          patient, resulting in a natural and aesthetic appearance. Throughout the treatment process,
          we prioritize your comfort by offering hotel accommodation and VIP transfer services at our
          clinic in Antalya.
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
