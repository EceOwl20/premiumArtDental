import React from 'react'
import Banner from '../components/subpages/Banner'

import { useTranslations } from 'next-intl'

const Page = () => {
    const t = useTranslations('Header')

  return (
    <div className='overflow-x-hidden h-[80vh]'>
      <Banner header={t("dental")} text={t("homepage") + " » " + t("doctors")}  />
      
    </div>
  )
}

export default Page
