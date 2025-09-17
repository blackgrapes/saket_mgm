"use client";

import { useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function AdminTCUpload() {
  const [formData, setFormData] = useState({
    studentName: "",
    studentClass: "",
    rollNumber: "",
    admissionNumber: "",
  });

  const [tcFile, setTcFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // class list array
  const classOptions = [
    "Nursery",
    "LKG",
    "UKG",
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
  ];

  // handle text/select input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTcFile(e.target.files[0]);
    }
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setSuccessMessage("");

    if (!tcFile) {
      alert("Please upload the TC image.");
      setUploading(false);
      return;
    }

    try {
      // upload TC to Cloudinary
      const cloudinaryForm = new FormData();
      cloudinaryForm.append("file", tcFile);
      cloudinaryForm.append("upload_preset", "ml_default"); // replace with your preset

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dbgdrmqy6/image/upload",
        {
          method: "POST",
          body: cloudinaryForm,
        }
      );

      const data = await res.json();

      if (!res.ok || !data.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      // payload for backend
      const payload = {
        studentName: formData.studentName.trim(),
        studentClass: formData.studentClass.trim(),
        rollNumber: formData.rollNumber.trim(),
        admissionNumber: formData.admissionNumber.trim(),
        tcUrl: data.secure_url,
        public_id: data.public_id,
        date: new Date().toISOString(),
      };

      // send metadata to backend
      const backendRes = await fetch("/api/admin/tc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const backendData = await backendRes.json();

      if (!backendRes.ok) {
        console.error("Backend error:", backendData);
        alert("Failed to save TC metadata.");
        setUploading(false);
        return;
      }

      setSuccessMessage("✅ TC uploaded successfully!");
      setFormData({
        studentName: "",
        studentClass: "",
        rollNumber: "",
        admissionNumber: "",
      });
      setTcFile(null);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Something went wrong while uploading.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-md rounded-2xl p-8 w-full max-w-lg space-y-5 border border-pink-100"
      >
        <h2 className="text-2xl font-bold text-center text-[#f82f53]">
          Upload Transfer Certificate
        </h2>

        {/* Student Name */}
        <div>
          <label
            htmlFor="studentName"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Student Name
          </label>
          <input
            id="studentName"
            name="studentName"
            type="text"
            placeholder="Enter student name"
            value={formData.studentName}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
            required
          />
        </div>

        {/* Admission Number */}
        <div>
          <label
            htmlFor="admissionNumber"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Admission Number
          </label>
          <input
            id="admissionNumber"
            name="admissionNumber"
            type="text"
            placeholder="Enter admission number"
            value={formData.admissionNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
            required
          />
        </div>

        {/* Select Class */}
        <div>
          <label
            htmlFor="studentClass"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Select Class
          </label>
          <select
            id="studentClass"
            name="studentClass"
            value={formData.studentClass}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition max-h-48 overflow-y-auto"
            required
          >
            <option value="">-- Select Class --</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        {/* Roll Number */}
        <div>
          <label
            htmlFor="rollNumber"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Roll Number
          </label>
          <input
            id="rollNumber"
            name="rollNumber"
            type="text"
            placeholder="Enter roll number"
            value={formData.rollNumber}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
            required
          />
        </div>

        {/* TC File Upload */}
        <div>
          <label
            htmlFor="tcFile"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            TC Image
          </label>
          <input
            id="tcFile"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
            required
          />
          {tcFile && (
            <p className="text-sm text-gray-500 mt-1">
              Selected: {tcFile.name}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="flex items-center justify-center gap-2 w-full bg-[#f82f53] hover:bg-[#e02849] text-white font-medium px-4 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Upload size={20} className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <FileText size={20} />
              Upload TC
            </>
          )}
        </button>

        {/* Success Message */}
        {successMessage && (
          <p className="text-green-600 text-sm text-center mt-4">
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
}
