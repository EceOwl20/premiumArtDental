import React from 'react'
import Banner from '../components/subpages/Banner'
import BlogSection from '../components/subpages/BlogSection'

const Page = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Banner header="Blog" text="Anasayfa » Blog"/>
      <BlogSection/>
    </div>
  )
}

export default Page
