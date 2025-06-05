import React from 'react'

const IntroductionSec = ({ header, text1, text2 }) => {
  return (
    <div className='flex w-screen items-center justify-center'>
      <div className='flex flex-col w-[88%] lg:w-[80%] max-w-[1200px] items-start justify-center text-start'>
        {/* <h2 className='text-[26px] lg:text-[32px] leading-[120%] text-[#2c744b] mb-2 lg:mb-5'>
          {header}
        </h2> */}
        <p className='text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30]'>
          {text1}
        </p>
        {text2 && (
          <p className='text-[12px] md:text-[14px] lg:text-[16px] text-[#050a30]'>
            {text2}
          </p>
        )}
      </div>
    </div>
  )
}

export default IntroductionSec
