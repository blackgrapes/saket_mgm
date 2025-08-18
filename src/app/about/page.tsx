// app/about/page.tsx
import AboutSection from "../component/about/aboutSection";
import LegacySection from "../component/about/legacySection";
import VisionMissionValues from "../component/about/visionMissionValues";
import WhyChoose from "../component/about/whyChoose";

// SEO metadata for this page
export const metadata = {
  title: "mgm about us",
};

export default function AboutPage() {
  return (
    <>
      <LegacySection />
      <AboutSection />
      <WhyChoose />
      <VisionMissionValues />
    </>
  );
}
