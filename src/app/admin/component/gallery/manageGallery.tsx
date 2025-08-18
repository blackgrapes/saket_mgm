"use client";

import { useEffect, useState } from "react";

type ImageType = {
  _id: string;
  title: string;
  description?: string;
  category: string;
  imageUrl: string;
  public_id: string;
  date: string;
};

export default function ManageGallery() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [filteredImages, setFilteredImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const limit = 8; // items per page

  const [categoryFilter, setCategoryFilter] = useState("all");
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/gallery");
      if (!res.ok) throw new Error("Failed to fetch images");
      const data: ImageType[] = await res.json();
      setImages(data);
      setFilteredImages(data.slice(0, limit)); // first batch
      setAllCategories([
        "all",
        ...Array.from(new Set(data.map((img) => img.category))),
      ]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  function handleLoadMore() {
    const nextPage = page + 1;
    const newImages = images
      .filter((img) =>
        categoryFilter === "all" ? true : img.category === categoryFilter
      )
      .slice(0, nextPage * limit);

    setFilteredImages(newImages);
    setPage(nextPage);
  }

  function handleFilterChange(category: string) {
    setCategoryFilter(category);
    setPage(1);
    const filtered = images.filter((img) =>
      category === "all" ? true : img.category === category
    );
    setFilteredImages(filtered.slice(0, limit));
  }

  async function handleDelete(public_id: string) {
    if (!confirm("Are you sure you want to delete this image?")) return;

    setDeletingId(public_id);
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id }),
      });

      if (!res.ok) throw new Error("Failed to delete image");

      // Update state after delete
      const updatedImages = images.filter(
        (img) => img.public_id !== public_id
      );
      setImages(updatedImages);
      handleFilterChange(categoryFilter);
      alert("Image deleted successfully");
    } catch (err) {
      alert((err as Error).message);
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-[#f82f53] mb-10">
        Manage Gallery
      </h1>

      {/* Filter */}
      {allCategories.length > 0 && (
        <div className="flex w-100 mb-6">
          <select
             aria-label="Filter images by category"
            value={categoryFilter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-auto text-gray-700"
          >
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      )}

      {loading && <p className="text-center text-gray-500">Loading images...</p>}
      {error && <p className="text-center text-red-600">Error: {error}</p>}
      {!loading && images.length === 0 && (
        <p className="text-center text-gray-600">
          No images found in the gallery.
        </p>
      )}

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-[1600px] mx-auto">
        {filteredImages.map(
          ({
            _id,
            title,
            description,
            category,
            imageUrl,
            public_id,
            date,
          }) => (
            <div
              key={_id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col"
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="font-semibold text-lg text-[#f82f53] line-clamp-1">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-2">
                    {description || "No description provided."}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    <strong>Category:</strong> {category}
                  </p>
                  <p className="text-xs text-gray-400">
                    <strong>Date:</strong>{" "}
                    {new Date(date).toLocaleDateString()}
                  </p>
                </div>

                <button
                  disabled={deletingId === public_id}
                  onClick={() => handleDelete(public_id)}
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition-all disabled:opacity-50"
                >
                  {deletingId === public_id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          )
        )}
      </div>

      {/* Load More Button */}
      {filteredImages.length <
        images.filter((img) =>
          categoryFilter === "all" ? true : img.category === categoryFilter
        ).length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-[#f82f53] hover:bg-[#d82646] text-white px-6 py-3 rounded-lg font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
