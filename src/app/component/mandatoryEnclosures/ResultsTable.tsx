// components/mandatoryEnclosures/ResultsTable.tsx
import React from "react";

type Result = {
  sno: number;
  year: string;
  registered: number;
  passed: number;
  percentage: string;
  remarks?: string;
};

const ResultsTable: React.FC = () => {
  const classXResults: Result[] = [
    { sno: 1, year: "2021-22", registered: 118, passed: 118, percentage: "100%", remarks: "" },
    { sno: 2, year: "2022-23", registered: 166, passed: 166, percentage: "100%", remarks: "" },
    { sno: 3, year: "2023-24", registered: 178, passed: 177, percentage: "99.43%", remarks: "" },
  ];

  const classXIIResults: Result[] = [
    { sno: 1, year: "2021-22", registered: 93, passed: 93, percentage: "100%", remarks: "" },
    { sno: 2, year: "2022-23", registered: 107, passed: 100, percentage: "93.45%", remarks: "" },
    { sno: 3, year: "2023-24", registered: 45, passed: 39, percentage: "99.43%", remarks: "" },
  ];

  const renderTable = (title: string, data: Result[]) => (
    <div className="my-10">
      <h2 className="text-lg font-semibold italic mb-4 text-[#f82f53] text-center">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <div className="max-w-5xl mx-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-sm">S. NO.</th>
                <th className="border px-4 py-2 text-sm">YEAR</th>
                <th className="border px-4 py-2 text-sm">
                  NO. OF REGISTERED STUDENTS
                </th>
                <th className="border px-4 py-2 text-sm">
                  NO. OF STUDENTS PASSED
                </th>
                <th className="border px-4 py-2 text-sm">PASS PERCENTAGE</th>
                <th className="border px-4 py-2 text-sm">REMARKS</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={row.sno}
                  className={i % 2 === 1 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border px-4 py-2 text-center">{row.sno}</td>
                  <td className="border px-4 py-2 text-center">{row.year}</td>
                  <td className="border px-4 py-2 text-center">{row.registered}</td>
                  <td className="border px-4 py-2 text-center">{row.passed}</td>
                  <td className="border px-4 py-2 text-center">{row.percentage}</td>
                  <td className="border px-4 py-2 text-center">{row.remarks || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderTable("RESULT CLASS : X", classXResults)}
      {renderTable("RESULT CLASS : XII", classXIIResults)}
    </>
  );
};

export default ResultsTable;
