// components/BlogCarousel.jsx
"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
           vehicula sapien nec purus aliquet, vitae suscipit nulla
           interdum. Integer non purus vitae tortor varius euismod.`,
    img: "https://placehold.co/400x200?text=Placeholder+Image+1",
  },
  {
    title: "Consectetur Adipiscing Elit",
    text: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
           posuere cubilia curae; Sed vitae orci nec arcu fermentum
           aliquet. Nulla facilisi. Integer auctor tristique neque.`,
    img: "https://placehold.co/400x200?text=Placeholder+Image+2",
  },
  {
    title: "Sed Do Eiusmod Tempor",
    text: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco
           laboris nisi ut aliquip ex ea commodo consequat.`,
    img: "https://placehold.co/400x200?text=Placeholder+Image+3",
  },
  {
    title: "Ut Enim Ad Minim Veniam",
    text: `Duis aute irure dolor in reprehenderit in voluptate velit esse
           cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
           cupidatat non proident.`,
    img: "https://placehold.co/400x200?text=Placeholder+Image+4",
  },
  {
    title: "Quis Nostrud Exercitation",
    text: `Curabitur sit amet mauris quis turpis euismod feugiat. Nulla
           facilisi. Aliquam erat volutpat. Cras dignissim quam sed
           risus pellentesque venenatis.`,
    img: "https://placehold.co/400x200?text=Placeholder+Image+5",
  },
];

export default function BlogCarousel() {
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
    <section className="bg-[#10271a] text-white py-10 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Başlık ve Tüm Yazılar Butonu */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-roboto">Blog Yazıları</h2>
            <div className="h-px bg-gray-700 mt-2 w-24" />
          </div>
          <Link href="/blog">
            <div className="border border-[var(--premiumgold)] text-[var(--premiumgold)] px-4 py-2 rounded-md hover:bg-[var(--premiumgold)] hover:text-black transition flex items-center gap-1 text-[14px] lg:text-[18px]">
              Tüm Yazılar <span>→</span>
            </div>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Sol Ok */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Embla viewport */}
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {blogPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="embla__slide flex-shrink-0 
                             w-[calc(80%-24px)] 
                             sm:w-[calc(50%-24px)] 
                             md:w-[calc(33.3%-24px)] 
                             lg:w-[calc(25%-24px)]"
                >
                  <div className="bg-[var(--lago-gray)] border border-gray-700 rounded-xl overflow-hidden flex flex-col h-full">
                    {/* Resim */}
                    <div className="relative h-32 md:h-40 overflow-hidden group">
                      <img
                        src={post.img}
                        alt={post.title}
                        layout="fill"
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent)] opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                    </div>
                    {/* İçerik */}
                    <div className="p-3 lg:p-6 flex flex-col flex-grow">
                      <h3 className="font-raleway font-semibold text-lg mb-2">
                        {post.title}
                      </h3>
                      <p className="font-raleway text-sm text-gray-300 flex-grow mb-2 lg:mb-4">
                        {post.text}
                      </p>
                      <Link href={`/blog/${idx + 1}`}>
                        <div className="mt-auto inline-block border border-[var(--premiumgold)] text-[var(--premiumgold)] font-raleway uppercase text-sm py-2 px-4 rounded hover:bg-[var(--premiumgold)] hover:text-black transition">
                          Detaylı Bilgi
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
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 bg-lagoBlack2 hover:bg-lagoBlack p-2 rounded-md transition"
          >
            <FaChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
