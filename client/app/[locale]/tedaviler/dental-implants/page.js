"use client";

import Link from "next/link";
import React from 'react'
import Banner from "../../components/subpages/Banner";

const page = () => {
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
      <Banner header="Dental Implants"/>
      <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">Dental Implants</h1>

        <p className="text-base leading-relaxed">
          Dental implants are one of the most reliable and permanent solutions in modern
          dentistry to replace missing teeth, closely mimicking the appearance and function
          of natural teeth. Made of titanium, dental implants integrate perfectly with the
          jawbone, providing a stable and long-lasting solution. Dental implants are the most
          effective treatment for restoring both the aesthetic and functional aspects of
          missing teeth.
        </p>

        <p className="text-base leading-relaxed">
          The greatest advantage of dental implants is their ability to function like natural
          teeth. They are more durable, long-lasting, and aesthetically superior compared to
          other types of prosthetics. Additionally, implants stimulate the jawbone, preventing
          bone loss and halting the deterioration of the bone over time. With dental implants,
          patients not only achieve a more attractive smile but also regain the natural function
          of their teeth.
        </p>

        <h2 className="text-2xl font-semibold">Advantages of Dental Implants:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Natural Look and Function:</strong> Dental implants look and function like natural
            teeth, ensuring aesthetic and functional excellence.
          </li>
          <li>
            <strong>Long-Term Solution:</strong> With proper care and maintenance, dental implants remain
            healthy and durable for many years.
          </li>
          <li>
            <strong>Prevents Bone Loss:</strong> Implants fuse with the jawbone, preventing bone loss and
            preserving the structure of the jaw.
          </li>
          <li>
            <strong>Comfort and Stability:</strong> Unlike other prosthetics, implants are stable and
            comfortable, eliminating issues like shifting or moving during speech or eating.
          </li>
          <li>
            <strong>No Damage to Surrounding Teeth:</strong> Implants are placed directly into the jawbone,
            preserving the healthy tooth structure around them without damaging adjacent teeth.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Applications of Dental Implants:</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Single tooth loss.</li>
          <li>Multiple tooth loss.</li>
          <li>Prosthetic stabilization for complete edentulism (lack of teeth).</li>
          <li>Restoration of teeth with decay, fractures, or shape deformities.</li>
        </ul>

        <p className="mt-4 text-base leading-relaxed">
          At <strong>Premium Art Dental Clinic</strong>, we perform dental implant treatments using
          state-of-the-art equipment, experienced specialists, and personalized treatment plans.
          We ensure a smooth and comfortable treatment experience by guiding you through every
          step of the implant process. Throughout your treatment journey, we offer hotel
          accommodation and VIP transfer services at our clinic in Antalya to ensure maximum
          comfort during your care.
        </p>
      </div>

      {/* Sağdaki link listesi */}
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
