import AdmissionProcedure from "../component/admission/admissionProcedure";
import AdmissionProcess from "../component/admission/admissionProcess";
import AdmissionsHeader from "../component/admission/admissionsHeader";

export default function AdmissionsPage() {
  return(
    <>
    <AdmissionsHeader/>
    <AdmissionProcess/>
    <AdmissionProcedure/>
    </>
  )
}
