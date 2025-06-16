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
    { title: "E-max Kaplamalar", slug: "e-max-veneers" },
  ];

  return (
    <div>
      <Banner header="Invisalign"/>
         <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki içerik (%70) */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
          What Is Invisalign Treatment?
        </h1>
        <p className="text-base leading-relaxed">
          Clear aligner (Invisalign) treatment is one of the most aesthetic and
          comfortable methods for correcting dental crowding today. This modern
          orthodontic solution has replaced traditional metal braces. At our
          clinic, we offer this method using custom-made clear aligners that
          gradually move your teeth into their ideal positions.
        </p>

        <h2 className="text-2xl font-semibold">
          Who Is Invisalign Treatment Suitable For?
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Individuals with crowded, spaced (diastema), or misaligned teeth</li>
          <li>Patients with bite problems (open bite, deep bite, crossbite)</li>
          <li>Adults and teenagers who prefer not to wear visible metal braces</li>
          <li>Those who want the flexibility to remove their aligners easily during treatment</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Advantages of Invisalign Treatment:
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Aesthetic:</strong> The clear aligners are virtually invisible,
            allowing you to smile confidently in social settings.
          </li>
          <li>
            <strong>Comfortable:</strong> Smooth surfaces prevent irritation or damage
            to the gums, minimizing discomfort.
          </li>
          <li>
            <strong>Removable:</strong> You can easily remove the aligners during meals
            or while brushing your teeth, ensuring excellent oral hygiene.
          </li>
          <li>
            <strong>Custom-Made:</strong> Produced to fit your teeth perfectly using
            3D digital scanners.
          </li>
          <li>
            <strong>Faster Results:</strong> In mild to moderate cases, results can be
            achieved in a shorter time compared to traditional braces.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">
          How Does the Invisalign Process Work at Premium Art Dental Clinic?
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Free Consultation & Digital Scan:</strong> Your teeth are digitally
            scanned for detailed analysis.
          </li>
          <li>
            <strong>Treatment Plan Preparation:</strong> You’ll receive a personalized
            3D simulation showing how your teeth will look after treatment.
          </li>
          <li>
            <strong>Aligner Production:</strong> A custom-made set of aligners is prepared
            at the Invisalign center.
          </li>
          <li>
            <strong>Wearing the Aligners:</strong> Each aligner is worn for about 1–2 weeks,
            20–22 hours a day, depending on your plan.
          </li>
          <li>
            <strong>Check-ups:</strong> Regular clinical check-ups are performed approximately
            every 6–8 weeks.
          </li>
          <li>
            <strong>End of Treatment:</strong> Once the desired result is achieved, retainers
            are provided to ensure long-term stability.
          </li>
        </ol>

        <p className="mt-4 text-base leading-relaxed">
          Throughout the treatment process, we prioritize your comfort by offering hotel
          accommodation and VIP transfer services at our clinic in Antalya. With our expert
          team of dentists, we are here to help you design a natural and healthy smile.
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
