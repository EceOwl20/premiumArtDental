import React from 'react'
import imgBanner from "../../../../public/images/tedaviler/invisalign.png"
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

        <Image
        width={220}
        height={250}
          src={imgBanner}
          alt='image'
          className='hidden lg:flex'
        />

        <Image
         width={100}
        height={150}
          src={imgBanner}
          alt='image'
           className='flex lg:hidden'
        />
      </div>
    </div>
  )
}

export default Banner
