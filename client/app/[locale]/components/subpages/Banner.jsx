import React from 'react'
import imgBanner from "../../../../public/images/stock/dental-teeth-model-with-dentist-tool-for-dentistry-2025-02-25-14-54-52-utc.jpg"
import Image from 'next/image'

const Banner = ({ header, text, img }) => {
  return (
    <div className='flex w-screen h-[40vh] items-center justify-center bg-gradient-to-r from-[#1f84d2] to-[#2c744b] max-w-screen'>
      <div className='flex items-center justify-between w-[90%] lg:w-[80%] h-full mt-[10%] lg:mt-[7%]'>
        <div className='flex flex-col items-start justify-start gap-8 lg:gap-12'>
          <h2 className='text-[28px] md:text-[32px] lg:text-[48px] text-white leading-[130%] font-bold lg:mt-8'>
            {header}
          </h2>
          <p className='text-[18px] lg:text-[20px] text-white leading-[19px] font-light'>
            {text}
          </p>
        </div>

        {/* LARGE SCREEN IMAGE - fade kenarlı */}
        <div className='hidden lg:flex relative w-[280px] h-[220px]'>
          <Image
            src={imgBanner}
            alt='image'
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-xl'
          />
          {/* Mask için overlay div */}
          <div className="absolute inset-0 pointer-events-none rounded-xl"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)',
              maskImage: 'linear-gradient(90deg, transparent 0%, black 12%, black 88%, transparent 100%)'
            }}
          />
        </div>

        {/* MOBILE IMAGE - fade kenarlı */}
        <div className='flex lg:hidden relative w-[100px] h-[150px]'>
          <Image
            src={imgBanner}
            alt='image'
            fill
            style={{ objectFit: 'cover' }}
            className='rounded-lg'
          />
          <div className="absolute inset-0 pointer-events-none rounded-lg"
            style={{
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)',
              maskImage: 'linear-gradient(90deg, transparent 0%, black 18%, black 82%, transparent 100%)'
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default Banner
