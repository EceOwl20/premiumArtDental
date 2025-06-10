import React from 'react'
import Banner from '../components/subpages/Banner'
import FreeConsultationForm from '../components/homepage/FreeConsultationForm'
import InfoCards from '../components/subpages/InfoCards'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#ffffff] gap-[40px] lg:gap-[80px] overflow-x-hidden'>
      <Banner header="İLETİŞİM" text="Anasayfa » İletişim"/>
      <FreeConsultationForm/>
      <InfoCards/>
    </div>
  )
}

export default Page
