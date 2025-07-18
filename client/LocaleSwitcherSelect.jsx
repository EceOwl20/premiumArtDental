"use client";

import { useTransition, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import trData from "@/messages/tr.json";
import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import ruData from "@/messages/ru.json";
import { useLocale } from "next-intl";

// locale'a göre JSON'u döndüren yardımcı fonksiyon
function getLocaleData(locale) {
  switch (locale) {
    case "en":
      return enData;
    case "de":
      return deData;
    case "ru":
      return ruData;
    default:
      return trData;
  }
}

export default function LocaleSwitcherSelect({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");
    if (savedScroll) {
      window.scrollTo(0, Number(savedScroll));
      sessionStorage.removeItem("scrollPosition");
    }
  }, [pathname]);

  function handleLangChange(newLang) {
    sessionStorage.setItem("scrollPosition", window.scrollY);
    setIsOpen(false);

    startTransition(() => {
      const pathSegments = pathname.split("/");
      const currentLocale = pathSegments[1];

      if (pathSegments[2] === "blog" && pathSegments[3]) {
        const currentSlug = pathSegments[3];
        const currentData = getLocaleData(currentLocale);
        const matchedKey = Object.keys(currentData).find(
          (key) => currentData[key].slug === currentSlug
        );

        if (matchedKey) {
          const newData = getLocaleData(newLang);
          const newSlug = newData[matchedKey]?.slug;

          if (newSlug) {
            router.replace(`/${newLang}/blog/${newSlug}`);
            return;
          }
        }

        router.replace(`/${newLang}/blog`);
        return;
      }

      const newPathname = pathname.replace(`/${currentLocale}`, `/${newLang}`);
      router.replace(newPathname);
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center justify-center gap-1 rounded-md ml-1 px-[2px] py-[10px] lg:py-4 font-medium mix-blend-difference bg-transparent text-white uppercase w-full text-[16px] text-center"
      >
        {locale.toUpperCase()}
        <IoMdArrowDropdown />
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-0 rounded bg-darkB shadow-lg w-full">
          <ul className="py-0">
            {React.Children.map(children, (child) => {
              if (child.props.value === locale) return null;
              return (
                <li
                  key={child.props.value}
                  className="cursor-pointer px-[1px] bg-white uppercase py-[6px] mt-0 hover:bg-black hover:text-white text-black text-center items-center justify-center"
                  onClick={() => handleLangChange(child.props.value)}
                >
                  {child.props.value}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}