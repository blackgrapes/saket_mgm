"use client";

import { useState } from "react";
import { PlusCircle, Upload } from "lucide-react";

export default function AdminGallery() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please select an image before submitting.");
      return;
    }

    setUploading(true);

    try {
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("category", formData.category);
      form.append("image", imageFile);

      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        body: form, // ✅ Don't set Content-Type manually
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      console.log("Image Added:", data);

      // Reset form
      setFormData({ title: "", description: "", category: "" });
      setImageFile(null);
      alert("Image added successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-white p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 w-full max-w-lg space-y-5 border border-pink-100"
      >
        <h2 className="text-2xl font-bold text-center text-[#f82f53]">
          Add New Gallery Image
        </h2>

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter image title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            placeholder="Write a short description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
            rows={3}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Category
          </label>
          <input
            type="text"
            placeholder="e.g. Sports, Events"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
          />
        </div>

        {/* File Upload */}
        <div>
          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="imageUpload"
          >
            Image
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#f82f53] outline-none transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={uploading}
          className="flex items-center justify-center gap-2 w-full bg-[#f82f53] hover:bg-[#d72747] text-white font-medium px-4 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
        >
          {uploading ? (
            <>
              <Upload size={20} className="animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <PlusCircle size={20} />
              Add Image
            </>
          )}
        </button>
      </form>
    </div>
  );
}
