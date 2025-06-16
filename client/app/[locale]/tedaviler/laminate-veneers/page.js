
// app/[locale]/treatments/laminate-veneers/page.jsx
"use client";

import Link from "next/link";import React from 'react'
import Banner from '../../components/subpages/Banner'

const page = () => {
    const otherTreatments = [
    { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
    { title: "All-on-6 İmplant Tedavisi", slug: "all-on-6-implant-treatment" },
    { title: "Dijital Diş Hekimliği", slug: "digital-dentistry" },
    { title: "Diş Beyazlatma", slug: "teeth-whitening" },
    { title: "Periodontoloji", slug: "periodontology" },
    { title: "Porselen Kaplamalar", slug: "porcelain-veneers" },
    { title: "Zirkonyum Kaplamalar", slug: "zirconium-crowns" },
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];
  
  return (
    <div>
      <Banner header="Laminate Veneers"/>
        <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Laminate Veneers</h1>

        <p className="text-base leading-relaxed">
          Veneers are one of the most commonly used and effective treatments in the field of dental
          aesthetics. These thin porcelain shells are specially applied to the front surface of the
          teeth. Veneers provide an excellent solution for patients concerned with aesthetics,
          effectively addressing issues such as discoloration, shape irregularities, cracks, and gaps
          between teeth.
        </p>

        <p className="text-base leading-relaxed">
          One of the greatest advantages of veneers is their ability to be applied with minimal enamel
          removal, preserving the natural structure of the tooth. This makes the treatment process
          minimally invasive compared to other procedures. Veneers not only enhance the aesthetic
          appearance of the teeth but also add strength and durability to them.
        </p>

        <p className="text-base leading-relaxed">
          At Premium Art Dental Clinic, we offer personalized veneer designs tailored to each patient.
          Our clinic uses the latest digital measurement devices and 3D design systems, ensuring perfect
          fit and aesthetic results. With veneers, you can achieve a flawless smile while maintaining the
          functional health of your teeth.
        </p>

        <p className="text-base leading-relaxed">
          Throughout your treatment process, we prioritize your comfort by offering hotel accommodation
          and VIP transfer services in Antalya. Our experienced dentists and professional team are here to
          turn your dream smile into reality.
        </p>
      </div>

      {/* Sağdaki link listesi (%30) */}
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
