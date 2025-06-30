// components/BlogCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslations } from "next-intl";
import img1 from "../../../../public/images/stock/dental-implant-and-x-ray-picture-as-background-2025-01-09-05-46-02-utc.jpg"
import img2 from "../../../../public/images/stock/close-up-of-dental-model-with-implant-patient-of-2024-11-27-17-58-45-utc.jpg"
import img3 from "../../../../public/images/stock/top-view-of-dentist-with-veneers-palette-stock-pho-2025-03-05-20-15-40-utc.jpg"
import img4 from "../../../../public/images/stock/dental-prosthetics-concept-showing-the-installati-2025-04-22-03-27-19-utc.jpg"
import img5 from "../../../../public/images/stock/dental-teeth-model-with-dentist-tool-for-dentistry-2025-02-25-14-54-52-utc.jpg"
import img6 from "../../../../public/images/stock/the-dentist-shines-on-the-patient-s-teeth-with-an-2025-01-08-23-24-01-utc.jpg"
import img7 from "../../../../public/images/stock/ceramic-braces-installation-process-2025-01-16-22-13-46-utc.jpg"
import img8 from "../../../../public/images/stock/the-dentist-shines-on-the-patient-s-teeth-with-an-2025-01-08-23-24-01-utc.jpg"
import img9 from "../../../../public/images/stock/close-up-dental-office-girl-dentist-applies-protec-2024-12-04-04-55-22-utc.jpg"
import img10 from "../../../../public/images/stock/top-view-of-dentist-with-veneers-palette-stock-pho-2025-03-05-20-15-40-utc.jpg"
import img11 from "../../../../public/images/stock/zirconium-porcelain-tooth-plate-in-dentist-store-2025-04-02-16-12-49-utc.jpg"


export default function BlogCarousel() {
    const t = useTranslations("BlogSection");
   const t1 = useTranslations("Blog1");
  const t2 = useTranslations("Blog2");
  const t3 = useTranslations("Blog3");
  const t4 = useTranslations("Blog4");
  const t5 = useTranslations("Blog5");
  const t6 = useTranslations("Blog6");
  const t7 = useTranslations("Blog7");
  const t8 = useTranslations("Blog8");
  const t9 = useTranslations("Blog9");
  const t10 = useTranslations("Blog10");



  const blogPosts = [
  {
    title: t1("header"),
     text: t1("text1"),
     slug: t1("slug"),
    img: img5,
  },
  {
    title: t2("header"),
     text: t2("text1"),
     slug: t2("slug"),
    img: img2,
  },
  {
    title: t3("header"),
     text: t3("text1"),
     slug: t3("slug"),
    img: img3,
  },
  {
    title: t4("header"),
     text: t4("text1"),
     slug: t4("slug"),
    img: img9,
  },
  {
   title: t5("header"),
     text: t5("text1"),
     slug: t5("slug"),
    img: img8,
  },
    {
    title: t1("header"),
     text: t1("text1"),
     slug: t1("slug"),
    img: img5,
  },
  {
    title: t2("header"),
     text: t2("text1"),
     slug: t2("slug"),
    img: img2,
  },
  {
    title: t3("header"),
     text: t3("text1"),
     slug: t3("slug"),
    img: img3,
  },
  {
    title: t4("header"),
     text: t4("text1"),
     slug: t4("slug"),
    img: img9,
  },
  {
   title: t5("header"),
     text: t5("text1"),
     slug: t5("slug"),
    img: img8,
  },
];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    loop: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  // Otomatik kaydırma (opsiyonel)
  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi]);

  return (
    <section className="bg-[#2c744b] text-white py-10 lg:py-16 w-screen">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık ve Tüm Yazılar Butonu */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-roboto">{t("header")}</h2>
            <div className="h-px bg-white mt-2 w-24" />
          </div>
          <Link href="/blog">
            <div className="border border-white text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md hover:bg-white hover:text-black transition flex items-center gap-1 text-[14px] lg:text-[18px]">
             {t("buttonText")} <span>→</span>
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol Ok */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 bg-black hover:bg-black  p-1 lg:p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
          </button>

          {/* Embla viewport */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {blogPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 
                             w-[calc(75%-24px)] 
                             sm:w-[calc(50%-24px)] 
                             md:w-[calc(40%-24px)] 
                             lg:w-[calc(33.3%-24px)] 
                             xl:w-[calc(25%-24px)]"
                >
                  <div className="bg-white border border-gray-700 rounded-xl overflow-hidden flex flex-col h-full">
                    {/* Resim */}
                    <div className="relative h-32 md:h-40 overflow-hidden group">
                      <Image
                      width={post.img.width}
                      height={post.img.height}
                        src={post.img}
                        alt={post.title}
                        className="transition-transform duration-500 group-hover:scale-110 object-cover"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    {/* İçerik */}
                    <div className="p-3 lg:p-6 flex flex-col flex-grow">
                      <h3 className="font-raleway font-semibold text-[16px] lg:text-lg mb-1 lg:mb-2 line-clamp-2 text-[#050a30]">
                        {post.title}
                      </h3>
                      <p className="font-raleway text-[12px] lg:text-sm text-[#050a30] flex-grow mb-1 lg:mb-4 line-clamp-3">
                        {post.text}
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <div className="mt-auto inline-block border border-[#2c744b] text-[#2c744b] font-raleway uppercase text-[13px] lg:text-sm py-1 lg:py-2 px-2 lg:px-4 rounded hover:bg-[#2c744b] hover:text-white transition">
                              Devamını Oku
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sağ Ok */}
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 bg-black  p-1 lg:p-2 rounded-md transition"
          >
            <FaChevronRight className="w-5 lg:w-6 h-5 lg:h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
