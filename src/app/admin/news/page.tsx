"use client";

import React from "react";

export default function AdminNews() {
  const handleAddNews = () => {
    alert("Add News clicked!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-[#f82f53]">Admin News</h1>
      <p>Manage news articles here.</p>

      <button
        onClick={handleAddNews}
        className="mt-6 bg-[#f82f53] text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Add News
      </button>
    </div>
  );
}
