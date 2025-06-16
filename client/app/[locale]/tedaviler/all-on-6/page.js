import React from 'react'
import Banner from '../../components/subpages/Banner'
import Link from 'next/link';
import { useTranslations } from "next-intl";

const page = () => {
   const t = useTranslations("Allon4")

     const otherTreatments = [
    { title: "All-on-4 İmplantlar", slug: "all-on-4-dental-implants" },
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
      <Banner header="All on 6"/>
       <section className="flex flex-col lg:flex-row gap-8 px-4 py-16 max-w-[1200px] mx-auto">
      {/* Soldaki İçerik */}
      <div className="w-full lg:w-[70%] space-y-8">
        <h1 className="text-3xl lg:text-4xl font-bold">
        {t("header1")}
        </h1>

        <p className="text-base leading-relaxed">
          {t("text1")}
        </p>

        <h2 className="text-2xl font-semibold">  {t("header2")}</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>  {t("list1")}</li>
          <li>{t("list2")}.</li>
          <li>{t("list3")}</li>
        </ul>

        <h2 className="text-2xl font-semibold">Kimler All-on-6 İçin Uygundur?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Üst veya alt çenesinde tüm dişlerini kaybetmiş hastalar</li>
          <li>Hareketli protezlerinden memnun olmayan kişiler</li>
          <li>Kemik hacmi yeterli veya greft sonrası uygun hale gelmiş hastalar</li>
          <li>Ağız fonksiyonlarını (çiğneme, konuşma) en üst seviyeye çıkarmak isteyenler</li>
          <li>Estetik bir gülüşe kalıcı şekilde sahip olmak isteyenler</li>
        </ul>

        <h2 className="text-2xl font-semibold">All-on-6 Tedavisinin Avantajları</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Sabit Dişler:</strong> Geçici protezler dahil süreç boyunca sabit diş kullanımı sağlanır.
          </li>
          <li>
            <strong>Doğal Görünüm:</strong> Porselen veya zirkonyum kaplamalar sayesinde gerçek diş görünümünde estetik sonuç elde edilir.
          </li>
          <li>
            <strong>Kemik Kaybını Önler:</strong> İmplantlar çene kemiğini uyarır, erimeyi durdurur.
          </li>
          <li>
            <strong>Uzun Ömürlü Çözüm:</strong> Düzenli bakım ile ömür boyu garantili implantlardır.
          </li>
          <li>
            <strong>Güvenli ve Konforlu Süreç:</strong> Lokal anestezi ile ağrısız uygulama, hızlı iyileşme dönemi.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold">Tedavi Süreci Nasıl İlerler?</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Ücretsiz Online Danışmanlık:</strong> Size özel detaylı tedavi planı hazırlanır. 3D çene tomografisi ile analiz yapılır.
          </li>
          <li>
            <strong>İlk Antalya Ziyareti (5–7 Gün):</strong> 6 adet implant çeneye yerleştirilir; geçici sabit diş takılır; iyileşme süreci başlatılır.
          </li>
          <li>
            <strong>İyileşme Süreci (3–6 Ay):</strong> İmplantlar kemikle tamamen kaynaşır.
          </li>
          <li>
            <strong>İkinci Ziyaret (4–5 Gün):</strong> Kalıcı zirkonyum dişler takılır; son kontroller yapılır.
          </li>
        </ol>

        <p className="mt-4 text-base">
          Kendi tedavi planınızı öğrenmek için bizimle iletişime geçin. Antalya’da hem sağlığınıza kavuşun hem tatilin keyfini çıkarın!
        </p>
      </div>

      {/* Sağdaki Link Listesi */}
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
