import React from 'react'
import Banner from '../components/subpages/Banner'
import FreeConsultationForm from '../components/homepage/FreeConsultationForm'
import InfoCards from '../components/subpages/InfoCards'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('Header')
  return (
    <div className='flex flex-col items-center justify-center bg-[#ffffff] gap-[40px] lg:gap-[80px] overflow-x-hidden'>
      <Banner header={t("contact")} text={t("homepage") + " » " + t("contact")}/>
      <FreeConsultationForm/>
      <InfoCards/>
    </div>
  )
}

export default Page
