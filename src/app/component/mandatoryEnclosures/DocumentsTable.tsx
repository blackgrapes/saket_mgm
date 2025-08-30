"use client";

const documents = [
  {
    id: 1,
    title: "Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation, if any",
    file: "/pdfs/affiliation.pdf",
  },
  {
    id: 2,
    title: "Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable",
    file: "/pdfs/societies.pdf",
  },
  {
    id: 3,
    title: "Copy of No Objection Certificate (NOC) issued, if applicable by the State Govt / UT",
    file: "/pdfs/no_objection.pdf",
  },
  {
    id: 4,
    title: "Copies of Recognition Certificate under RTE Act 2009, and its Renewal if applicable",
    file: "/pdfs/recognition.pdf",
  },
  {
    id: 5,
    title: "Copy of Valid Building Safety Certificate as per the National Building Code",
    file: "/pdfs/building_safety.pdf",
  },
  {
    id: 6,
    title: "Copy of Valid Fire Safety Certificate issued by the competent authority",
    file: "/pdfs/fire_safety.pdf",
  },
  {
    id: 7,
    title: "Copy of the DEO Certificate submitted by the school for Affiliation / Upgradation / Extension or self-certification by school",
    file: "/pdfs/deo_certificate.pdf",
  },
  {
    id: 8,
    title: "Copies of valid Water, Health and Sanitation Certificates",
    file: "/pdfs/water_health.pdf",
  },
  {
    id: 9,
    title: "Land Certificate",
    file: "/pdfs/land_certificate.pdf",
  },
];

const results = [
  {
    id: 1,
    title: "Fee Structure of the School",
    file: "/pdfs/fees.pdf",
  },
  {
    id: 2,
    title: "Annual Academic Calendar",
    file: "/pdfs/anual.pdf",
  },
  {
    id: 3,
    title: "List of School Management Committee (SMC)",
    file: "/pdfs/SCHOOL-MANAGEMENT-COMMITTEE-(SMC)-1736592835.pdf",
  },
  {
    id: 4,
    title: "List of Parents Teachers Association (PTA) Members",
    file: "/pdfs/LIST-OF-PARENTS--TEACHERS-ASSOCIATION-(PTA)-MEMBERS--1721800189.pdf",
  },
  {
    id: 5,
    title: "Last Three-Year Result of the Board Examination as per applicability",
    file: "/pdfs/consolidated-Result-of-AISSE-AISSCE-Examination--1686540272.pdf",
  },
];

export default function DocumentsTable() {
  return (
    <div className="px-4 md:px-8 py-12 max-w-6xl mx-auto">
      {/* Documents and Information */}
      <h2 className="text-2xl font-semibold mb-6">Documents and Information</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">SL. No.</th>
              <th className="p-3 text-left">Documents / Information</th>
              <th className="p-3 text-left">Documents</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <tr key={doc.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-3">{doc.id}</td>
                <td className="p-3">{doc.title}</td>
                <td className="p-3">
                  <a
                    href={doc.file}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Result and Academics */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">Result and Academics</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">SL. No.</th>
              <th className="p-3 text-left">Documents / Information</th>
              <th className="p-3 text-left">Documents</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res) => (
              <tr key={res.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-3">{res.id}</td>
                <td className="p-3">{res.title}</td>
                <td className="p-3">
                  <a
                    href={res.file}
                    target="_blank"
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
