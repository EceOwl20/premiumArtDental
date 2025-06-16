// app/[locale]/treatments/all-on-4/page.jsx
"use client";

import Link from "next/link";
import Banner from "../../components/subpages/Banner";

const page = () => {

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
          All-on-4 Dental Implants
        </h1>

        <p className="text-base leading-relaxed">
          All-on-4 dental implant treatment is a practical and cost-effective full
          jaw restoration method designed for patients who have lost all their
          teeth. In this method, only 4 implants are placed to support a full
          fixed prosthesis, providing a faster and less invasive solution
          compared to traditional implant treatments.
        </p>

        <h2 className="text-2xl font-semibold">
          What Is All-on-4 Dental Implant Treatment?
        </h2>
        <p className="text-base leading-relaxed">
          The All-on-4 technique involves placing 4 strategically positioned
          implants into the jawbone, onto which a fixed dental bridge is
          attached. Two implants are placed vertically, while the other two are
          angled to maximize contact with the existing bone. This often
          eliminates the need for bone grafting.
        </p>

        <h3 className="text-xl font-semibold">Key Features</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Fixed teeth solution with fewer implants</li>
          <li>Minimal or no need for bone grafting</li>
          <li>Faster procedure and healing time</li>
        </ul>

        <h3 className="text-xl font-semibold">
          Who Is a Suitable Candidate for All-on-4?
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Individuals who have lost all teeth in the upper or lower jaw</li>
          <li>Patients with limited bone volume but sufficient jawbone for implant support</li>
          <li>Those who want to regain fixed teeth in a short period</li>
          <li>People seeking a cost-effective full jaw restoration</li>
          <li>Individuals who no longer wish to use removable dentures</li>
        </ul>

        <h3 className="text-xl font-semibold">
          Advantages of All-on-4 Treatment
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Quick Results: Temporary fixed teeth can often be fitted the same day</li>
          <li>Less Invasive Procedure: Only 4 implants are needed to restore an entire arch</li>
          <li>Bone Graft Usually Not Required: Angled implant placement reduces or eliminates the need</li>
          <li>Budget-Friendly: More affordable than full-mouth traditional implants</li>
          <li>Natural Look and Function: High aesthetic results and restored chewing ability</li>
        </ul>

        <h3 className="text-xl font-semibold">
          How Does the Treatment Process Work in Antalya?
        </h3>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Free Online Consultation:</strong> A personalized treatment
            plan is prepared after detailed analysis using a 3D jaw scan.
          </li>
          <li>
            <strong>First Visit to Antalya (5–7 Days):</strong> 4 implants are
            placed; temporary fixed teeth fitted same day; healing begins.
          </li>
          <li>
            <strong>Healing Period (3–4 Months):</strong> Implants fully
            integrate with the bone (osseointegration).
          </li>
          <li>
            <strong>Second Visit (4–5 Days):</strong> Permanent zirconium teeth
            are placed; final checks completed.
          </li>
        </ol>

        <p className="mt-4 text-base">
          Contact us today for your individual price quote and detailed treatment
          plan. Enjoy world-class dental care and an unforgettable holiday in
          Antalya!
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
