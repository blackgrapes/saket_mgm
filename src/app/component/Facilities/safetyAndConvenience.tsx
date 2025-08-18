"use client";

import Image from "next/image";

export default function SafetyAndConvenience() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Safety & Convenience</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your child&apos;s safety and well-being are our top priorities. We
          ensure a secure and convenient environment for all students. 
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Transport */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">Secure Transport Services</h3>
          <p className="text-gray-700">
            We offer a reliable and safe transport system with a fleet of
            well-maintained buses, ensuring timely pick-up and drop-off. All
            routes are carefully planned, and buses are equipped with GPS
            tracking for added security and parental peace of mind.
          </p>
          <div className="mt-4 w-full h-64 relative rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1628471047004-f4fe9a1d9e18?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="School Bus"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* CCTV */}
        <div className="flex flex-col gap-4 text-left">
          <h3 className="text-xl font-semibold">
            Campus-wide CCTV Surveillance
          </h3>
          <p className="text-gray-700">
            The entire school campus, including classrooms, corridors, and
            common areas, is under 24/7 CCTV surveillance. This measure ensures
            a safe and secure learning environment, allowing staff to monitor
            and respond to any situation promptly.
          </p>
          <div className="mt-4 w-full h-64 relative rounded-xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1530151928300-3864d0e5d178?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with correct image path if needed
              alt="CCTV Surveillance"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
