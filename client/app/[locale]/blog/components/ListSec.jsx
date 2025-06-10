import React from "react";

const ListSec = ({ header, span, texts = [] }) => {
  // texts elemanını "başlık: açıklama" formatında parse ediyoruz
  const items = texts.map((text) => {
    // İlk ":" karakterine kadar olan kısmı title, sonrası description
    const [titlePart, ...descParts] = text.split(":");
    return {
      title: titlePart.trim(),
      description: descParts.join(":").trim(),
    };
  });

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="flex flex-col w-[88%] lg:w-[80%] max-w-[1200px] items-start justify-center text-start">
        <h3 className="text-[20px] lg:text-[24px] leading-[120%]">
          {header}
        </h3>
        <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30] mt-2">
          {span}
        </p>
        <ol className="mt-4 list-decimal  space-y-4">
          {items.map((item, idx) => (
            <li key={idx}>
              <div className="text-[14px] lg:text-[16px] font-bold text-[#050a30]">
                {item.title}
              </div>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30] mt-1">
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
