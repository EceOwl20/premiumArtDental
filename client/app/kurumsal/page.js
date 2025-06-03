import React from 'react'
import Banner from '../components/subpages/Banner'
import img1 from "../../public/images/patient.jpg"
import FounderMessage from '../components/subpages/FounderMessage'

const page = () => {
  return (
    <div>
      <Banner  header="Kurumsal" text="Anasayfa » Kurumsal" img={img1}/>
      <FounderMessage/>
    </div>
  )
}

export default page
