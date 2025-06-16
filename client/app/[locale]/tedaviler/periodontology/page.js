// app/[locale]/treatments/periodontology/page.jsx
"use client";

import Link from "next/link";
import React from 'react'
import Banner from '../../components/subpages/Banner'

const page = () => {
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
      <Banner header="Periodontology"/>
       <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Periodontology (Gum Diseases and Treatments)
        </h1>

        <p className="text-base leading-relaxed">
          Periodontology is the branch of dentistry focused on maintaining the health of
          the supporting structures around the teeth — especially the gums and jawbone —
          and treating diseases affecting these tissues. Gum diseases often progress
          silently, and without early diagnosis, they can eventually lead to tooth loss.
        </p>

        <p className="text-base leading-relaxed">
          The most common periodontal conditions include <em>gingivitis</em> (gum inflammation)
          and <em>periodontitis</em> (advanced gum disease). Symptoms such as bleeding gums,
          persistent bad breath, swelling, gum recession, and loose teeth may all be warning
          signs of these issues.
        </p>

        <h2 className="text-2xl font-semibold">Our Periodontal Treatments:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Scaling and Root Planing (Deep Cleaning):</strong> Removal of plaque and
            tartar buildup on the teeth and below the gumline to prevent inflammation.
          </li>
          <li>
            <strong>Root Surface Smoothing (Curettage):</strong> Deep cleaning of gum pockets
            to remove harmful bacteria and promote healing of the gums.
          </li>
          <li>
            <strong>Laser Gum Therapy:</strong> A minimally invasive, painless treatment with
            faster healing and no bleeding.
          </li>
          <li>
            <strong>Gum Surgery:</strong> In advanced cases, procedures such as gum contouring,
            bone grafting, or flap surgery may be necessary.
          </li>
          <li>
            <strong>Aesthetic Gum Treatments (Gummy Smile Correction):</strong> Reshaping
            excessive gum tissue to achieve a more balanced and attractive smile.
          </li>
        </ul>

        <p className="text-base leading-relaxed">
          Throughout all treatments, we use pain-free techniques, state-of-the-art technology,
          and personalized planning to ensure the highest level of comfort for our patients.
          During your stay in Antalya, we provide luxury hotel accommodation and VIP transfer
          services between the airport and the clinic for a smooth and worry-free experience.
        </p>

        <p className="mt-4 text-base leading-relaxed">
          Thanks to our experienced periodontology specialists, we don’t just treat your gums —
          we help restore and protect your overall oral health. Because a healthy smile starts
          with healthy gums.
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
