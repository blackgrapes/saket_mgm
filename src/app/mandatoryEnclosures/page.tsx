import DocumentsTable from "../component/mandatoryEnclosures/DocumentsTable";
import ResultsTable from "../component/mandatoryEnclosures/ResultsTable";
import SchoolInfoCard from "../component/mandatoryEnclosures/SchoolInfoCard";
import SchoolInfrastructure from "../component/mandatoryEnclosures/SchoolInfrastructure";
import StaffInfo from "../component/mandatoryEnclosures/StaffTable";

export default function MandatoryEnclosuresPage() {
  return (
    <>
      <SchoolInfoCard />
      <ResultsTable/>
      <StaffInfo/>
      <DocumentsTable/>
      <SchoolInfrastructure/>
    </>
  );
}
