"use client";

import { useEffect, useState } from "react";

interface TC {
  _id: string;
  studentName: string;
  studentClass: string;
  rollNumber: string;
  admissionNumber: string;
  tcUrl: string;
  date: string;
}

export default function StudentTCSearch() {
  const [tcList, setTcList] = useState<TC[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [foundTC, setFoundTC] = useState<TC | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Fetch all TCs from backend
  const fetchTCs = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/tc");
      const data = await res.json();
      if (res.ok) setTcList(data);
      else console.error("Failed to fetch TC data:", data);
    } catch (err) {
      console.error("Error fetching TC data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTCs();
  }, []);

  // Search TC by Roll Number or Admission Number
  const handleSearch = () => {
    if (!searchTerm.trim()) {
      alert("Please enter your roll number or admission number.");
      return;
    }

    const tc = tcList.find(
      (t) =>
        t.rollNumber.toLowerCase() === searchTerm.toLowerCase() ||
        t.admissionNumber.toLowerCase() === searchTerm.toLowerCase()
    );

    setFoundTC(tc || null);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-[#f82f53]">
          Search Your Transfer Certificate
        </h2>

        {/* Input field */}
        <input
          type="text"
          placeholder="Enter Roll Number or Admission Number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f82f53] outline-none transition"
        />

        {/* Search button */}
        <button
          onClick={handleSearch}
          className="w-full bg-[#f82f53] hover:bg-[#e02849] text-white font-medium py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Search
        </button>

        {/* Loading state */}
        {loading && <p className="text-gray-500 text-center">Loading data...</p>}

        {/* Found TC */}
        {!loading && hasSearched && foundTC && (
          <div className="border border-gray-200 rounded-lg p-4 mt-4 space-y-2 bg-gray-50">
            <h3 className="font-semibold text-[#f82f53] text-lg">{foundTC.studentName}</h3>
            <p><span className="font-medium">Class:</span> {foundTC.studentClass}</p>
            <p><span className="font-medium">Roll No:</span> {foundTC.rollNumber}</p>
            <p><span className="font-medium">Admission No:</span> {foundTC.admissionNumber}</p>
            <p><span className="font-medium">Date:</span> {new Date(foundTC.date).toLocaleDateString()}</p>
            <a
              href={foundTC.tcUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f82f53] underline block mt-2"
            >
              View TC
            </a>
          </div>
        )}

        {/* No TC found message (only after search) */}
        {!loading && hasSearched && !foundTC && (
          <p className="text-red-600 text-center mt-4">
            No TC found for &quot;{searchTerm}&quot;
          </p>
        )}
      </div>
    </div>
  );
}
