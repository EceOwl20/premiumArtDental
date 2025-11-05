import React from 'react'
import Banner from '../components/subpages/Banner'
import kanyon from "@/public/images/travel/goynukkanyonu.jpg"
import idyrosantik from "@/public/images/travel/idyrosantik.jpg"
import tekne from "@/public/images/travel/kemer-tekne.jpg"
import yanartas from "@/public/images/travel/yanartas.jpeg"
import kemerplajlar from "@/public/images/travel/kemerplajlar.jpg"
import kemergecehayat from "@/public/images/travel/kemerdegecehayat.jpg"

import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Page = () => {
    const t2 = useTranslations('Header')

      const t = useTranslations("dentaltatil"); // namespace: tr.json içinde "dentaltatil": { ... } ise

  // tr/en/de/ru json'da oluşturduğumuz yapı:
  // "dentaltatil": { "kemer_beaches": { title, intro, sections, recommendation } }
  const kemerBeaches = t.raw("kemer_beaches");
   const canyon = t.raw("goynuk_canyon");
    const boatTours = t.raw("boat_tours");
    const idyrosData = t.raw("idyros_ancient_city");
    const data = t.raw("yanartas_chimera");
    const data2 = t.raw("kemer_nightlife");




  return (
    <div className='overflow-x-hidden items-center text-center justify-start w-full flex flex-col'>
      <Banner header={t2("dental")} text={t2("homepage") + " » " + t2("dental")}  />
      <div className='flex flex-col max-w-[1300px] mt-10 items-center lg:items-start text-center lg:text-start text-[14px] lg:text-[16px]'>
        <p className='mb-8'>{t2("dentalparagraf")}</p>

       <div className="flex w-full flex-col md:flex-row gap-8 justify-center md:justify-around items-center">
      {/* METİN KISMI */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        {/* Başlık */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          {kemerBeaches.title}
        </h2>

        {/* Giriş paragrafı */}
        <p className="text-sm md:text-base text-gray-600">
          {kemerBeaches.intro}
        </p>

        {/* Alt başlıklar + paragraflar */}
        {kemerBeaches.sections?.map((section, index) => (
          <div key={index} className="">
            <h3 className="font-semibold text-base md:text-lg">
              {section.heading}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-normal">
              {section.text}
            </p>
          </div>
        ))}

        {/* Tavsiye kısmı */}
        <p className="text-sm md:text-base font-medium">
          {kemerBeaches.recommendation}
        </p>
      </div>

      {/* GÖRSEL KISMI */}
      <Image
        src={kemerplajlar}
        alt="Kemer Plajlar"
        width={kemerplajlar.width}
        height={kemerplajlar.height}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>



<div className="flex w-full flex-col md:flex-row-reverse gap-8 justify-center md:justify-around items-center mt-10">
      {/* METİN ALANI */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        {/* Başlık */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          {canyon.title}
        </h2>

        {/* İlk paragraf (intro) */}
        <p className="text-sm md:text-base text-gray-600 leading-normal">
          {canyon.intro}
        </p>

        {/* Diğer paragraflar */}
        {canyon.paragraphs?.map((p, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base text-gray-600 leading-normal"
          >
            {p}
          </p>
        ))}
      </div>

      {/* GÖRSEL ALANI */}
      <Image
        src={kanyon}
        alt="Göynük kanyonu"
        width={kanyon.width}
        height={kanyon.height}
        className="w-full md:w-[45%] h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>



<div className="flex w-full flex-col md:flex-row gap-8 justify-center md:justify-around items-center mt-10">
      {/* METİN KISMI */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        {/* Başlık */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          {boatTours.title}
        </h2>

        {/* Intro */}
        <p className="text-sm md:text-base text-gray-600 leading-normal">
          {boatTours.intro}
        </p>

        {/* Diğer paragraflar */}
        {boatTours.paragraphs?.map((p, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base text-gray-600 leading-normal"
          >
            {p}
          </p>
        ))}
      </div>

      {/* GÖRSEL KISMI */}
      <Image
        src={tekne}
        alt="Kemer tekne turu"
        width={tekne.width}
        height={tekne.height}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>

    

    <div className="flex w-full flex-col md:flex-row-reverse gap-8 justify-center md:justify-around items-center mt-10">
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        {/* Başlık */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          {idyrosData.title}
        </h2>

        {/* Intro */}
        <p className="text-sm md:text-base text-gray-600 leading-normal">
          {idyrosData.intro}
        </p>

        {/* Diğer paragraflar */}
        {idyrosData.paragraphs?.map((p, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base text-gray-600 leading-normal"
          >
            {p}
          </p>
        ))}
      </div>

      <Image
        src={idyrosantik}
        alt="Idyros Antik Kenti"
        width={idyrosantik.width}
        height={idyrosantik.height}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>


        <div className="flex w-full flex-col md:flex-row gap-8 justify-center md:justify-around items-center mt-10">
      {/* METİN ALANI */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data.title}
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-normal">
          {data.intro}
        </p>

        {data.paragraphs?.map((p, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base text-gray-600 leading-normal"
          >
            {p}
          </p>
        ))}
      </div>

      {/* GÖRSEL ALANI */}
      <Image
        src={yanartas}
        alt="Yanartaş (Chimera)"
        width={yanartas.width}
        height={yanartas.height}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>


     <div className="flex w-full flex-col md:flex-row-reverse gap-8 justify-center md:justify-around items-center mt-10 mb-16 ">
      {/* METİN ALANI */}
      <div className="w-full md:w-1/2 max-w-xl space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          {data2.title}
        </h2>

        <p className="text-sm md:text-base text-gray-600 leading-normal">
          {data2.intro}
        </p>

        {data2.paragraphs?.map((p, idx) => (
          <p
            key={idx}
            className="text-sm md:text-base text-gray-600 leading-normal"
          >
            {p}
          </p>
        ))}

        {/* Tavsiye kısmı biraz öne çıksın */}
        <p className="text-sm md:text-base leading-normal font-medium italic mt-2">
          {data2.recommendation}
        </p>
      </div>

      {/* GÖRSEL ALANI */}
      <Image
        src={kemergecehayat}
        alt="Kemer gece hayatı"
        width={kemergecehayat.width}
        height={kemergecehayat.height}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover max-h-[450px]"
      />
    </div>


      </div>
    </div>
  )
}

export default Page
