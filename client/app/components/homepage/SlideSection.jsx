"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/smile.jpg"

export default function SlideSection() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(ref.current);
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-black text-white py-16 max-w-screen flex flex-col md:flex-row items-center gap-8 justify-center"
    >
      {/* SOLDAN KAYAN METİN BLOĞU */}
      <div
        className={`md:w-1/2 space-y-4 w-[90%] lg:w-[35%] ${
          inView ? "animate-slide-in-left" : "opacity-0"
        }`}
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="font-marcellus text-3xl lg:text-4xl">
          Mükemmel Gülüşler, Kusursuz Dokunuşlar!
        </h2>
        <p className="font-jost">
          Bir gülüş, fark edilmenin en zarif yoludur. Özgüvenle gülümsediğinizde,
          kapılar açılır, insanlar size daha yakın hisseder ve{" "}
          <strong>siz, bulunduğunuz her ortamda ışıldarsınız</strong>. Ama ya
          gülüşünüz sizi yansıtmıyorsa?
        </p>
        <p className="font-jost">
          Bir fotoğraf çekilirken dudaklarınızı sıkıyor musunuz? Kahkaha
          atarken elinizi ağzınıza götürüyor musunuz?{" "}
          <strong>Gülüşünüzü saklamak zorunda değilsiniz.</strong> Dent
          Laracity olarak, sizi kısıtlayan tüm endişeleri geride bırakmanız için
          buradayız.
        </p>
        <p className="font-jost">
          Siz, gülüşünüzle hatırlanmayı hak ediyorsunuz.{" "}
          <strong>Kendinizi ifade etmekten korkmayın.</strong> Şimdi yeni bir
          başlangıç yapın.
        </p>
        <Link href="/randevu">
          <div className="inline-block bg-lagoBlack hover:bg-lagoBlack2 text-white font-jost uppercase py-3 rounded-lg transition">
            Hemen Randevu Oluştur
          </div>
        </Link>
      </div>

      {/* SAĞDAN KAYAN GÖRSEL BLOĞU */}
      <div
        className={`md:w-1/2 w-[90%] lg:w-[40%] ${
          inView ? "animate-slide-in-right" : "opacity-0"
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={img}
            alt="Gülüş"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
