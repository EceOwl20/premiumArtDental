// app/[locale]/treatments/laser-teeth-whitening/page.jsx
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
    { title: "Periodontoloji", slug: "periodontology" },
    { title: "Porselen Kaplamalar", slug: "porcelain-veneers" },
    { title: "Zirkonyum Kaplamalar", slug: "zirconium-crowns" },
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
    { title: "Invisalign", slug: "invisalign" },
  ];

  return (
    <div>
      <Banner header="Teeth Whitening"/>
       <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
          Laser Teeth Whitening
        </h1>

        <p className="text-base leading-relaxed">
          Laser teeth whitening is one of the fastest and most effective modern
          treatment methods in the field of dental aesthetics. Using laser
          technology, this whitening procedure restores the natural whiteness
          of your teeth while providing long-lasting and permanent results. The
          laser light interacts with the whitening gel to deeply whiten the
          teeth, offering superior outcomes.
        </p>

        <h2 className="text-2xl font-semibold">
          Advantages of Laser Teeth Whitening:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Fast Results:</strong> Laser whitening can be applied in a
            very short time and typically achieves the desired level of
            whiteness in a single session.
          </li>
          <li>
            <strong>Less Sensitivity:</strong> Compared to traditional whitening
            methods, laser treatment leads to less tooth sensitivity, providing
            a more comfortable post-treatment experience.
          </li>
          <li>
            <strong>More Effective:</strong> The laser light interacts with the
            whitening gel to provide a deep, lasting effect, delivering more
            permanent and effective results.
          </li>
          <li>
            <strong>Safe and Controlled:</strong> Laser technology allows for
            precise application without harming the teeth, ensuring the
            protection of the enamel.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">What Is It Used For?</h2>
        <p className="text-base leading-relaxed">
          The outer layer of a tooth is called the enamel. The color of natural
          teeth is the result of light reflecting off the enamel and combining
          with the underlying dentin. Genetics influence the thickness and
          smoothness of the enamel. Thinner enamel allows more of the dentin’s
          color to show through. Smoother or rougher enamel can also affect the
          light reflection and, consequently, the color of the teeth.
        </p>
        <p className="text-base leading-relaxed">
          A thin layer (pellicle) forms on the enamel every day and traps
          stains. Tooth enamel also contains pores that can hold stains.
        </p>

        <h2 className="text-2xl font-semibold">
          Common Causes of Staining:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Tobacco use</li>
          <li>Drinking dark-colored beverages like coffee, cola, tea, and red wine</li>
          <li>Poor dental care</li>
          <li>Aging, as enamel thins and dentin darkens over time</li>
        </ul>

        <p className="text-base leading-relaxed">
          Internal stains, known as intrinsic stains, are also possible. For
          example, excessive fluoride exposure during childhood development can
          cause intrinsic staining. Other causes include tetracycline
          antibiotics taken during pregnancy or early childhood, and dental
          trauma.
        </p>

        <p className="mt-4 text-base leading-relaxed">
          At Premium Art Dental Clinic, we offer personalized solutions using
          the latest technology in laser teeth whitening treatments. The
          whitening process, powered by laser light, restores your teeth’s
          natural brightness and gives your smile a fresh and healthy
          appearance.
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
