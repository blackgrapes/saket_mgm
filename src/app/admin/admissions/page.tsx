'use client';

import React, { useEffect, useState } from 'react';

interface Admission {
  _id: string;
  fullName: string;
  dob: string;
  gender: string;
  className: string;
  caste: string;
  fatherName: string;
  mobile: string;
  email?: string;
  occupation?: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

const PAGE_SIZE = 10; // records per page

export default function AdminAdmissionsPage() {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchAdmissions() {
      try {
        setLoading(true);
        setError(null);

        // For demo, fetching all data and paginating client side.
        // Ideally API should support pagination params.
        const res = await fetch('/api/admin/admission');
        if (!res.ok) throw new Error('Failed to fetch admissions');

        const data: Admission[] = await res.json();
        setAdmissions(data);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    }

    fetchAdmissions();
  }, []);

  const totalPages = Math.ceil(admissions.length / PAGE_SIZE);
  const startIndex = (page - 1) * PAGE_SIZE;
  const currentPageData = admissions.slice(startIndex, startIndex + PAGE_SIZE);

  const goNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  if (loading) return <p className="p-6 text-center">Loading admissions...</p>;

  if (error) return <p className="p-6 text-center text-red-600">Error: {error}</p>;

  if (admissions.length === 0)
    return <p className="p-6 text-center">No admission records found.</p>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#f82f53]">Admissions List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Full Name</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">DOB</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Gender</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Class</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Caste</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Father Name</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Mobile</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Email</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Occupation</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Address</th>
              <th className="border border-gray-300 p-2 text-left whitespace-nowrap">Submitted On</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((adm) => (
              <tr key={adm._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{adm.fullName}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(adm.dob).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 p-2">{adm.gender}</td>
                <td className="border border-gray-300 p-2">{adm.className}</td>
                <td className="border border-gray-300 p-2">{adm.caste}</td>
                <td className="border border-gray-300 p-2">{adm.fatherName}</td>
                <td className="border border-gray-300 p-2">{adm.mobile}</td>
                <td className="border border-gray-300 p-2">{adm.email || '-'}</td>
                <td className="border border-gray-300 p-2">{adm.occupation || '-'}</td>
                <td className="border border-gray-300 p-2">{adm.address}</td>
                <td className="border border-gray-300 p-2">
                  {new Date(adm.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 max-w-xs mx-auto">
        <button
          onClick={goPrev}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-[#f82f53] text-white disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={goNext}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-[#f82f53] text-white disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
