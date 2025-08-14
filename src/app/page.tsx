import AppRouteRouteModule from "next/dist/server/route-modules/app-route/module";
import Achievements from "./component/landing/achievements";
import FacilitiesSection from "./component/landing/FacilitiesSection";
import GlanceSection from "./component/landing/glanceSection";
import HeroSection from "./component/landing/herosection";
import PrincipalMessage from "./component/landing/PrincipalMessage";
import ApproachSection from "./component/landing/approachsection";
import TestimonialsSection from "./component/landing/testimonialssection";
import GallerySection from "./component/landing/GallerySection";
import NewsSection from "./component/landing/news";

export default function Home() {
  return (
    <>
    <HeroSection />
    <PrincipalMessage/>
    <GlanceSection/>
    <NewsSection/>
    <Achievements/>
    <FacilitiesSection/>
    <ApproachSection/>
    <TestimonialsSection/>
    <GallerySection/>
    </>
  );
}
