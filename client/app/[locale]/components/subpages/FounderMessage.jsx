// components/FounderMessage.jsx
"use client";

import Image from "next/image";
import { FaClinicMedical, FaPhoneAlt } from "react-icons/fa";

export default function FounderMessage() {
  return (
    <section className="bg-black text-white py-16 px-4 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* SOL TARAF: Klinik ve Kurucu Görselleri */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Büyük Klinik Görseli */}
          <div className="w-full lg:w-[90%] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/clinic.jpg"           // → Kendi klinik fotoğrafınızın yolu
              alt="Premium Ant Dental Clinic"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Küçük Kurucu Görseli (Büyük görselin üzerinde overlap) */}
          <div className="absolute bottom-0 right-0 lg:right-[-4rem] lg:bottom-[-2rem] w-48 h-64 lg:w-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/founder.jpg"         
              alt="Dr. Lorem Lorem"
              width={400}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SAĞ TARAF: Metin İçerikleri */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Klinik İsmi + Simge */}
          <div className="flex items-center space-x-2 text-gray-300">
            <FaClinicMedical className="text-2xl" />
            <span className="font-jost text-sm">Premium Art Dental</span>
          </div>

          {/* Başlık */}
          <h2 className="text-3xl lg:text-4xl font-marcellus font-bold">
           Lorem ipsum dolor sit amet, consectetur 
          </h2>

          {/* Paragraflar */}
          <div className="space-y-4 text-sm lg:text-base font-jost leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat repellendus molestiae necessitatibus ullam quas in porro, nobis nihil? Beatae, veniam. Quibusdam quam quasi quas aspernatur a mollitia quis perspiciatis dignissimos!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus numquam assumenda quis autem libero vero ut a, voluptatem quibusdam cumque culpa commodi odit quia corrupti eum consequatur debitis ullam soluta?
            </p>
            <p>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus aliquid, saepe atque iure dolore, ea, quibusdam itaque corporis voluptate voluptatem fugit nostrum eligendi nisi accusamus dolorem. Veniam odio dicta doloremque.
            </p>
            <p>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero rerum dolores dolore quaerat dicta? Laborum at, quam eum nam illum impedit recusandae
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores rem laboriosam minus fugit iusto saepe. Ad aut 
            </p>
          </div>

          {/* Randevu Butonu */}
          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 border border-[#d9b740] text-[#d9b740] hover:bg-[#d9b740] hover:text-black font-jost font-semibold uppercase px-5 py-2 lg:px-6 lg:py-3 rounded-md transition text-[14px] lg:text-[18px]"
          >
            <FaPhoneAlt />
            Randevu Oluştur
          </button>
        </div>
      </div>
    </section>
  );
}
