import Image from "next/image";
import HeroBanner from "./components/homepage/HeroBanner";
import SlideSection from "./components/homepage/SlideSection";
import TreatmentCarousel from "./components/homepage/TreatmentCarousel";
import LogoCarousel from "./components/homepage/LogoCarousel";
import VideoCarousel from "./components/homepage/VideoCarousel";
import TreatmentProcess from "./components/homepage/TreatmentProcess";
import ReviewsCarousel from "./components/homepage/ReviewCarousel";
import WhyUs from "./components/homepage/WhyUs";
import VirtualTour from "./components/homepage/VirtualTour";
import TeamCarousel from "./components/homepage/TeamCarousel";
import BlogCarousel from "./components/homepage/BlogCarousel";
import FreeConsultationForm from "./components/homepage/FreeConsultationForm";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
     <HeroBanner/>
          <div className="hidden lg:flex absolute inset-x-0 lg:top-[75vh] xl:top-[80vh] justify-center px-4">
        {/* Burada top değeriyle formu yukarıdan konumlandırabilirsiniz */}
        <FreeConsultationForm />
      </div>
     <SlideSection/>
     <TreatmentCarousel/>
     <LogoCarousel/>
     <VideoCarousel/>
     <TreatmentProcess/>
     <ReviewsCarousel/>
     <WhyUs/>
     <TeamCarousel/>
     <BlogCarousel/>
    </div>
  );
}
