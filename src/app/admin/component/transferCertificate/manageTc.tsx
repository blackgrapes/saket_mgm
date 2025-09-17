"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

interface TC {
  _id: string;
  studentName: string;
  studentClass: string;
  rollNumber: string;
  admissionNumber: string;
  tcUrl: string;
  date: string;
}

export default function ManageTC() {
  const [tcList, setTcList] = useState<TC[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTCs = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/tc");
      const data = await res.json();
      setTcList(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTCs();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this TC?")) return;

    try {
      const res = await fetch("/api/admin/tc", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        setTcList(tcList.filter((tc) => tc._id !== id));
      } else {
        alert(data.error || "Failed to delete TC");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  if (tcList.length === 0)
    return <p className="text-center py-10">No TCs found.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow divide-y divide-gray-200">
        <thead className="bg-[#f82f53] text-white">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Student Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">Class</th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Roll Number
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              Admission No
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">
              TC Image
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium">Date</th>
            <th className="px-4 py-2 text-center text-sm font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tcList.map((tc) => (
            <tr key={tc._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">{tc.studentName}</td>
              <td className="px-4 py-2 text-sm">{tc.studentClass}</td>
              <td className="px-4 py-2 text-sm">{tc.rollNumber}</td>
              <td className="px-4 py-2 text-sm">{tc.admissionNumber}</td>
              <td className="px-4 py-2 text-sm">
                <a
                  href={tc.tcUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f82f53] underline"
                >
                  View
                </a>
              </td>
              <td className="px-4 py-2 text-sm">
                {new Date(tc.date).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(tc._id)}
                  className="text-red-600 hover:text-red-800 transition"
                  aria-label="Delete Transfer Certificate"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
