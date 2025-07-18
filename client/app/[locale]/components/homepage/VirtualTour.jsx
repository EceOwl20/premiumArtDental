// components/VirtualTour.jsx
"use client";

import Image from "next/image";
import { Link } from '@/i18n/navigation';
import img1 from "../../../../public/images/patient3.jpg";

export default function VirtualTour() {
  return (
    <section className="bg-black/80 text-white py-16 flex max-w-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-8 w-[80%] max-w-[1400px]">
        {/* Sol: Başlık, Açıklama ve Buton */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-roboto">360° Sanal Tur</h2>
          <div className="font-jost text-base text-gray-200 space-y-2">
            <p>Ziyaretinizden önce kliniğimizin içini keşfedin.</p>
            <p>360° sanal tur ile tedavi alanlarımızı adım adım inceleyin.</p>
          </div>
          <Link href="https://premiumartdental.com/360-tour" passHref>
            <div className="inline-block bg-[#e29c2d] hover:bg-yellow-600 text-text font-raleway uppercase py-3 px-6 transition">
              360° Sanal Klinik Turu İçin Tıklayın
            </div>
          </Link>
        </div>

        {/* Sağ: Görsel */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px]">
            <Image
              src={img1}
              alt="360 derece sanal tur örnek"
              width={1100}
              height={700}
              className="w-full h-auto rounded-xl object-cover shadow-xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
