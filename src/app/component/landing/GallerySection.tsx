// /components/GallerySection.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryImage {
  _id: string;  
  imageUrl: string;
  title: string;
  category: string;
}

const GallerySection = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();
      console.log(data)
      setImages(data.slice(0, 8)); // Show only 8 on homepage
    };
    fetchImages();
  }, []);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Campus Life Through Our Lens</h2>
        <p className="text-gray-600 mb-10 text-lg">
          A glimpse into the vibrant moments at Saket MGM
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img._id} className="relative h-48 rounded-xl overflow-hidden shadow">
              <Image
                src={img.imageUrl}
                alt={img.title}
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg shadow hover:shadow-md transition">
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
