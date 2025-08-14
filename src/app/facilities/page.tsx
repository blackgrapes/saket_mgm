import CampusGallery from "../component/Facilities/campusGallery";
import FacilitiesHero from "../component/Facilities/facilitiesHero";
import LabsSection from "../component/Facilities/labSections";
import LibrarySection from "../component/Facilities/librarySection";
import SafetyAndConvenience from "../component/Facilities/safetyAndConvenience";
import SportsFacilities from "../component/Facilities/sportsFacilities";

export default function facilitiesPage() {
  return (
    <>
    <FacilitiesHero/>
    <LabsSection/>
    <LibrarySection/>
    <SportsFacilities/>
    <SafetyAndConvenience/>
    <CampusGallery/>
    </>
  )
}
