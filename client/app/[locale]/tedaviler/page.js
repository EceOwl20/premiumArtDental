import React from 'react'
import Banner from '../components/subpages/Banner'
import ServicesGrid from '../components/subpages/ServicesGrid'
import { useTranslations } from 'next-intl'

const page = () => {
  const t = useTranslations('Header')
  return (
    <div className='flex flex-col max-w-screen'>
      <Banner header={t("treatments")} text={t("homepage") + " » " + t("treatments")}  /> 
      <ServicesGrid/>
    </div>
  )
}

export default page
