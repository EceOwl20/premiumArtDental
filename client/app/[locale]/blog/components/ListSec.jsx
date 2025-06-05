import React from "react";

const ListSec = ({ header, span, texts = [] }) => {
  // texts array’ini (çift index’teki açıklama, tek index’teki başlık) çiftler halinde kullanacağız.
  // Örneğin: texts = [a0, a1, a2, a3, …]
  // a1, a3, a5, … li metni; a0, a2, a4, … ise li içindeki p metni olacak.

  // Çiftler oluşturmak için:
  const items = [];
  for (let i = 1; i < texts.length; i += 2) {
    const title = texts[i];       // tek index (1, 3, 5, …)
    const description = texts[i - 1]; // bir önceki (0, 2, 4, …)
    items.push({ title, description });
  }

  return (
    <div className="flex w-screen items-center justify-center ">
      <div className="flex flex-col w-[88%] lg:w-[80%] max-w-[1200px] items-start justify-center text-start">
        <h3 className="text-[20px] lg:text-[24px] leading-[120%]">
          {header} 
        </h3>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30] mt-2">
         {span}
        </p>
        <ol className="mt-4 list-decimal list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30] font-bold">
              {item.title}
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30] font-normal mt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ListSec;
