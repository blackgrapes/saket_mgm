// components/AcademicExcellence.tsx
import Image from "next/image";

export default function AcademicExcellence() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="Academic Excellence"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 px-4">
        <h2 className="text-4xl font-bold text-white mb-4">
          Our Academic Excellence
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-white">
          At Saket MGM, we foster intellectual curiosity and critical thinking,
          preparing students for a future of innovation and global citizenship.
        </p>
      </div>
    </section>
  );
}
