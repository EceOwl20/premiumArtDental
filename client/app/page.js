import Image from "next/image";
import HeroBanner from "./components/homepage/HeroBanner";
import SlideSection from "./components/homepage/SlideSection";
import TreatmentCarousel from "./components/homepage/TreatmentCarousel";
import LogoCarousel from "./components/homepage/LogoCarousel";
import VideoCarousel from "./components/homepage/VideoCarousel";
import TreatmentProcess from "./components/homepage/TreatmentProcess";
import ReviewsCarousel from "./components/homepage/ReviewCarousel";

export default function Home() {
  return (
    <div>
     <HeroBanner/>
     <SlideSection/>
     <TreatmentCarousel/>
     <LogoCarousel/>
     <VideoCarousel/>
     <TreatmentProcess/>
     <ReviewsCarousel/>
    </div>
  );
}
