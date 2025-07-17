import React from 'react'
import Banner from '../components/subpages/Banner'
import BlogSection from '../components/subpages/BlogSection'
import { useTranslations } from 'next-intl'

const Page = () => {
   const t = useTranslations('Header')
  return (
    <div className='flex flex-col overflow-hidden'>
      <Banner header={t("blog")} text={t("homepage") + " » " + t("blog")}/>
      <BlogSection/>
    </div>
  )
}

export default Page
