// app/[locale]/treatments/zirconium-crowns/page.jsx
"use client";

import Link from "next/link";
import React from 'react'
import Banner from '../../components/subpages/Banner';

const page = () => {
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
      <Banner/>
      <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Zirconium Crowns</h1>

        <p className="text-base leading-relaxed">
          Zirconium crowns are among the most preferred solutions in modern dentistry,
          offering both aesthetic appeal and functional durability. Unlike metal-supported
          crowns, zirconium is biocompatible and integrates seamlessly with the gums,
          preventing dark lines at the gum margin over time. Thanks to its light-transmitting
          structure, it closely mimics the appearance of natural teeth, providing a highly
          aesthetic and lifelike result.
        </p>

        <p className="text-base leading-relaxed">
          Zirconium crowns are ideal for restoring discolored, broken, or misshapen teeth,
          or replacing old fillings. They are highly resistant to wear, offer long-term
          durability, and do not cause sensitivity thanks to their low thermal conductivity.
        </p>

        <p className="text-base leading-relaxed">
          At Premium Art Dental Clinic, we use the latest digital scanning systems and
          CAD/CAM technology to design zirconium crowns tailored specifically to your
          dental structure. Our goal is to ensure a perfect fit, maximum comfort, and a
          natural look. Throughout your treatment, we prioritize your comfort and
          convenience by offering hotel accommodation and VIP transfer services during
          your stay in Antalya.
        </p>

        <p className="text-base leading-relaxed">
          With the expertise and experience of our highly skilled dental team, we create
          a personalized smile design that’s not only beautiful but also healthy and
          natural. At Premium Art Dental Clinic, we are committed to delivering not just
          aesthetic results, but long-lasting satisfaction, trust, and exceptional quality.
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
