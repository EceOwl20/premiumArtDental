import React from 'react'
import Banner from '../components/subpages/Banner'
import BlogSection from '../components/subpages/BlogSection'

const page = () => {
  return (
    <div>
      <Banner header="Blog" text="Anasayfa » Blog"/>
      <BlogSection/>
    </div>
  )
}

export default page
