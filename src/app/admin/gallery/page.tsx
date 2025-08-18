"use client";

import { useState } from "react";
import AdminGallery from "../component/gallery/addGallery";
import ManageGallery from "../component/gallery/manageGallery";

export default function GalleryManager() {
  const [activeTab, setActiveTab] = useState<"manage" | "add">("manage"); // default = manage

  return (
    <div className=" mx-auto p-1">
      {/* Buttons to switch */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "manage"
              ? "bg-pink-600 text-white"
              : "bg-pink-100 text-pink-700"
          }`}
          onClick={() => setActiveTab("manage")}
        >
          Manage Gallery
        </button>

        <button
          className={`px-4 py-2 rounded ${
            activeTab === "add"
              ? "bg-pink-600 text-white"
              : "bg-pink-100 text-pink-700"
          }`}
          onClick={() => setActiveTab("add")}
        >
          Add Images
        </button>
      </div>

      {/* Conditional render based on activeTab */}
      {activeTab === "manage" && <ManageGallery />}
      {activeTab === "add" &&<AdminGallery/>}
    </div>
  );
}
