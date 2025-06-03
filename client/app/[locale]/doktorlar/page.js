import React from 'react'
import Banner from '../components/subpages/Banner'
import TeamCarousel from '../components/homepage/TeamCarousel'

const page = () => {
  return (
    <div>
      <Banner header="Doktorlar" text="Anasayfa » Doktorlar"/>
      <TeamCarousel/>
    </div>
  )
}

export default page
