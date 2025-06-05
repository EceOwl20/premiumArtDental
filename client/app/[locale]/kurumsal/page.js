import React from 'react'
import Banner from '../components/subpages/Banner'
import img1 from "../../../public/images/patient.jpg"
import FounderMessage from '../components/subpages/FounderMessage'
import ClinicSection from '../components/subpages/ClinicSection'
import TeamCarousel from '../components/homepage/TeamCarousel'
import LogoCarousel from '../components/homepage/LogoCarousel'
import { useTranslations } from 'next-intl';

const Page = () => {
      const t = useTranslations('AboutUs');

  return (
    <div className='overflow-x-hidden'>
      <Banner  header={t("header")} text={t("span")} img={img1}/>
      <FounderMessage/>
      <ClinicSection/>
      <TeamCarousel/>
      <LogoCarousel/>
    </div>
  )
}

export default Page
