import React from 'react'
import Banner from '../components/subpages/Banner'
import ServicesGrid from '../components/subpages/ServicesGrid'

const page = () => {
  return (
    <div>
      <Banner header="Tedaviler" text="Anasayfa » Tedaviler" /> 
      <ServicesGrid/>
    </div>
  )
}

export default page
