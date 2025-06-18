"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../../public/images/smile.jpg"

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
      className=" text-[#050a30] py-10 lg:py-20  flex flex-col md:flex-row items-center gap-4 lg:gap-8 justify-center max-w-[1500px]"
    >
      {/* SOLDAN KAYAN METİN BLOĞU */}
      <div
        className={`md:w-[48%] space-y-4 w-[90%] lg:w-[45%] text-[12px] md:text-[14px] lg:text-[16px] ${
          inView ? "animate-slide-in-left" : "opacity-0"
        }`}
        style={{ animationDelay: "0.3s" }}
      >
        <h2 className="font-roboto text-[26px] md:text-3xl lg:text-4xl text-[#1f84d2]">
          Mükemmel Gülüşler, Kusursuz Dokunuşlar!
        </h2>
        <p className="font-jost">
       Premium Art Dental Clinic'e, güzel Kemer bölgesinde, Antalya'da hoş geldiniz. Kliniğimiz, özverili karı-koca ekibi olan Dt. Kivanc Ozkaral ve Dt. Firuzan Ozkaral tarafından yönetilmektedir. Kliniğimiz, diş hekimliğinde sanatçılık, son teknoloji ve şefkatli bakım ilkeleri üzerine kurulmuştur; tüm bunlar, olağanüstü gülüşler yaratmayı amaçlamaktadır.


        </p>
        <p className="font-jost">
       Geniş ve modern bir tesiste yer alan kliniğimiz, konforlu ve etkili bir tedavi deneyimi sağlamak için en son teknolojiyle donatılmış çeşitli ileri düzey diş hizmetleri sunmaktadır. On yılı aşkın bir deneyime sahip olan kliniğimiz, Birleşik Krallık ve Almanya da dahil olmak üzere 30'dan fazla ülkeden binlerce hastayı gururla tedavi etmiştir. Her hasta, benzersiz bir birey olarak ele alınmakta ve gelen herkes için sıcak, samimi bir ortam sunmaktayız.
        </p>
        <Link href="/randevu">
          <div className="inline-block bg-[#2c744b] hover:bg-black text-white font-jost capitalize transition px-[12px] py-[6px] lg:px-[24px] lg:py-[10px]">
            Hemen Randevu Oluştur
          </div>
        </Link>
      </div>

      {/* SAĞDAN KAYAN GÖRSEL BLOĞU */}
      <div
        className={`md:w-[40%] w-[86%] sm:w-[70%] mt-2 lg:w-[40%] ${
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
