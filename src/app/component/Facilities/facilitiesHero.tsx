"use client"

import Image from "next/image"

export default function FacilitiesHero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Background Image from Unsplash */}
      <Image
        src="https://images.unsplash.com/photo-1594182878770-c05ece34b1f2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Facilities Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
        className="brightness-75"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
          Explore Our State-of-the-Art Facilities
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-xl">
          Saket MGM Senior Secondary School is committed to providing a
          conducive learning environment, equipped with modern infrastructure
          and amenities to foster holistic development.
        </p>
      </div>
    </section>
  )
}
