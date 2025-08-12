import AboutSection from "../component/about/aboutSection";
import LegacySection from "../component/about/legacySection";
import VisionMissionValues from "../component/about/visionMissionValues";
import WhyChoose from "../component/about/whyChoose";

// Example: about/page.tsx
export default function AboutPage() {
  return(  
    <>
    <LegacySection/>
    <AboutSection/>
    <WhyChoose/>
    <VisionMissionValues/>
    </>
)
}