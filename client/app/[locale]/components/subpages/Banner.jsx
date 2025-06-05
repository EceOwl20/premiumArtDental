import React from 'react'

const Banner = ({ header, text, img }) => {
  return (
    <div className='flex w-screen h-[40vh] items-center justify-center bg-gradient-to-r from-[#1f84d2] to-[#2c744b] max-w-screen'>
      <div className='flex items-center justify-between w-[90%] lg:w-[80%] h-full mt-[10%] lg:mt-[6%]'>
        <div className='flex flex-col items-start justify-start gap-8 lg:gap-12'>
          <h2 className='text-[32px] lg:text-[48px] text-white leading-[19px] font-bold'>
            {header}
          </h2>
          <p className='text-[18px] lg:text-[20px] text-white leading-[19px] font-light'>
            {text}
          </p>
        </div>

        <img
          src={'https://placehold.co/200x250'}
          alt='image'
          className='hidden lg:flex'
        />

        <img
          src={'https://placehold.co/100x150'}
          alt='image'
           className='flex lg:hidden'
        />
      </div>
    </div>
  )
}

export default Banner
