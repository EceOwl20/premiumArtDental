// app/[locale]/treatments/porcelain-crowns/page.jsx
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
    { title: "Zirkonyum Kaplamalar", slug: "zirconium-crowns" },
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];


  return (
    <div>
      <Banner header="Porcelain Crowns"/>
       <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Porcelain Crowns</h1>

        <p className="text-base leading-relaxed">
          Porcelain crowns with metal substructure are a type of dental restoration
          where durable and biocompatible metal alloys are used beneath the porcelain
          layer to provide strength and support. These metal alloys are specifically
          designed for use in dentistry and are highly compatible with both the teeth
          and surrounding gum tissues. Metal-based porcelain crowns are among the most
          widely used and long-lasting crown types. When fabricated with precision,
          they offer both durability and satisfactory aesthetic results. Additionally,
          they are considered a cost-effective solution.
        </p>

        <p className="text-base leading-relaxed">
          Porcelain crowns are frequently chosen to correct both aesthetic and
          structural imperfections of teeth. They are ideal for restoring broken,
          cracked, discolored, or misshapen teeth. The porcelain material is applied
          to the front surface of the tooth, delivering a natural look while also
          preserving the tooth's function.
        </p>

        <p className="text-base leading-relaxed">
          At Premium Art Dental Clinic, all porcelain crowns are custom-made using
          advanced 3D design technologies and digital oral scanners. This ensures a
          perfect fit and a result harmonizing with your natural smile. Throughout
          the entire treatment process, your comfort is our top priority.
        </p>

        <p className="text-base leading-relaxed">
          During your visit to our clinic in Antalya, we provide luxury hotel
          accommodation and VIP transfer services between the clinic and the airport.
          Our experienced team of dentists carefully plans each treatment based on
          your individual needs and facial features, designing the most suitable
          smile for you. At Premium Art, we combine aesthetic excellence with dental
          health to help you smile with confidence.
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
