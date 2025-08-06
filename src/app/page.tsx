import Achievements from "./component/landing/achievements";
import FacilitiesSection from "./component/landing/FacilitiesSection";
import GlanceSection from "./component/landing/glanceSection";
import HeroSection from "./component/landing/herosection";
import NewsSection from "./component/landing/news";
import PrincipalMessage from "./component/landing/PrincipalMessage";

export default function Home() {
  return (
    <>
    <HeroSection />
    <PrincipalMessage/>
    <GlanceSection/>
    <NewsSection/>
    <Achievements/>
    <FacilitiesSection/>
    </>
  );
}
