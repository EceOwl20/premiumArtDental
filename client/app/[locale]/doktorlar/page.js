import React from 'react'
import Banner from '../components/subpages/Banner'
import TeamCarousel from '../components/homepage/TeamCarousel'
import { useTranslations } from 'next-intl'

const Page = () => {
    const t = useTranslations('Header')

  return (
    <div>
      <Banner header={t("doctors")} text={t("homepage") + " » " + t("doctors")}  />
      <TeamCarousel/>
    </div>
  )
}

export default Page
