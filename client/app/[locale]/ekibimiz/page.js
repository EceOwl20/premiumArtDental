import React from 'react'
import Banner from '../components/subpages/Banner'
import TeamCarousel from '../components/homepage/TeamCarousel'
import { useTranslations } from 'next-intl';

const Page = () => {
    const t = useTranslations('OurTeam');

  return (
    <div>
      <Banner header={t("header")} text={t("span")}/>
      <TeamCarousel/>
    </div>
  )
}

export default Page
