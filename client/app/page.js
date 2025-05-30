import Image from "next/image";
import HeroBanner from "./components/homepage/HeroBanner";
import SlideSection from "./components/homepage/SlideSection";
import TreatmentCarousel from "./components/homepage/TreatmentCarousel";

export default function Home() {
  return (
    <div>
     <HeroBanner/>
     <SlideSection/>
     <TreatmentCarousel/>
    </div>
  );
}
