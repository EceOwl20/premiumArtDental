// app/[locale]/gallery/page.js
import {getTranslations} from "next-intl/server";

// Görselleriniz (sizin paylaştığınız importlar)
import img1 from "@/public/images/new/A_O01483 copy.jpg"
import img2 from "@/public/images/new/A_O01492.jpg"
import img3 from "@/public/images/new/A_O01502 copy.jpg"
import img4 from "@/public/images/new/A_O01510 copy.jpg"
import img5 from "@/public/images/new/A_O01515 copy.jpg"
import img6 from "@/public/images/new/A_O01529 copy.jpg"
import img7 from "@/public/images/new/A_O01553.jpg"
import img8 from "@/public/images/new/A_O01575 copy.jpg"
import img9 from "@/public/images/new/A_O01581 copy.jpg"
import img10 from "@/public/images/new/A_O01582 copy.jpg"
import img11 from "@/public/images/new/A_O01587 copy.jpg"
import img12 from "@/public/images/new/A_O01593 copy.jpg"
import img13 from "@/public/images/new/A_O01595 copy.jpg"
import img14 from "@/public/images/new/A_O01597 copy.jpg"
import img15 from "@/public/images/new//A_O01646 copy.jpg"
import img16 from "@/public/images/new/A_O01657 copy.jpg"
import img17 from "@/public/images/new/A_O01708 copy.jpg"
import img18 from "@/public/images/new/A_O01710 copy.jpg"
import img19 from "@/public/images/new/A_O01715 copy.jpg"
import img20 from "@/public/images/new/A_O01734 copy.jpg"
import img21 from "@/public/images/new/A_O01737 copy.jpg"
import img22 from "@/public/images/new/A_O01755 copy.jpg"
import img23 from "@/public/images/new/A_O01756copy.jpg"
import img24 from "@/public/images/new/DSC09608 copy.jpg"
import img25 from "@/public/images/new/DSC09612 copy.jpg"
import img26 from "@/public/images/new/DSC09629 copy.jpg"
import img27 from "@/public/images/new/DSC09580 copy.jpg"
import img28 from "@/public/images/new/DSC09584 copy.jpg"
import img29 from "@/public/images/new/DSC09593 copy.jpg"
import img30 from "@/public/images/new/DSC09671 copy.jpg"
import img31 from "@/public/images/new/A_O01599 copy.jpg"
import img32 from "@/public/images/new/A_O01678 copy.jpg"
import img33 from "@/public/images/new/A_O01609 copy.jpg"
import img34 from "@/public/images/new/A_O01539 copy.jpg"
import GalleryClient from "./GaleriClient";

export const metadata = {
  robots: "index,follow"
};

export default async function GalleryPage() {
  const t = await getTranslations("Gallery");

  const images = [
    {src: img1, alt: "Project 1"},
    {src: img2, alt: "Project 2"},
    {src: img3, alt: "Project 3"},
    {src: img4, alt: "Project 4"},
    {src: img5, alt: "Project 5"},
    {src: img6, alt: "Project 6"},
    {src: img7, alt: "Project 7"},
    {src: img8, alt: "Project 8"},
    {src: img9, alt: "Project 9"},
    {src: img10, alt: "Project 10"},
    {src: img11, alt: "Project 11"},
    {src: img12, alt: "Project 12"},
    {src: img13, alt: "Project 13"},
    {src: img14, alt: "Project 14"},
    {src: img15, alt: "Project 15"},
    {src: img16, alt: "Project 16"},
    {src: img17, alt: "Project 17"},
    {src: img18, alt: "Project 18"},
    {src: img19, alt: "Project 19"},
    {src: img20, alt: "Project 20"},
    {src: img21, alt: "Project 21"},
    {src: img22, alt: "Project 22"},
    {src: img23, alt: "Project 23"},
    {src: img24, alt: "Project 24"},
    {src: img25, alt: "Project 25"},
    {src: img26, alt: "Project 26"},
    {src: img27, alt: "Project 27"},
     {src: img28, alt: "Project 28"},
      {src: img29, alt: "Project 29"},
       {src: img30, alt: "Project 30"},
        {src: img31, alt: "Project 31"},
         {src: img32, alt: "Project 32"},
          {src: img33, alt: "Project 33"},
            {src: img34, alt: "Project 34"}
  ];

  return (
    <main className="min-h-dvh bg-white mt-20 lg:mt-32">
      <section className="container mx-auto px-4 py-10">
        {/* ÜST BAŞLIK */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#396ca3]">
            {t("title")}
          </h1>
          <p className="mt-3 text-base sm:text-lg text-neutral-600">
            {t("subtitle")}
          </p>
        </div>


        {/* Galeri (client) + Lightbox */}
        <GalleryClient
          images={images}
          i18n={{
            all: t("filter.all"),
            recent: t("filter.recent"),
            featured: t("filter.featured"),
            close: t("ui.close"),
            prev: t("ui.prev"),
            next: t("ui.next")
          }}
        />

        {/* Altta ek başlık */}
        <h2 className="mt-12 text-xl sm:text-2xl font-medium text-neutral-900 text-center">
          {t("section.bottomTitle")}
        </h2>

        {/* CTA */}
        <div className="mx-auto mt-6 flex max-w-2xl items-center justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center rounded-xl border px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            {t("cta.primary")}
          </a>
          <a
            href="/iletisim"
            className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            {t("cta.secondary")}
          </a>
        </div>
      </section>
    </main>
  );
}
