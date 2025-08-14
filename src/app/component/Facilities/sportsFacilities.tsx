"use client"

import Image from "next/image"

const sportsFacilities = [
  {
    title: "Football Field",
    description:
      "A full-sized, lush green football field for training, inter-school matches, and physical education classes.",
    image:
      "https://images.unsplash.com/photo-1715545226118-dc42faf8d6f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Basketball Courts",
    description:
      "Multiple well-maintained outdoor and indoor basketball courts for practice and competitive games.",
    image:
      "https://plus.unsplash.com/premium_photo-1674128995341-28c1e42dda94?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Athletics Track",
    description:
      "A dedicated running track and facilities for various track and field events, encouraging athletic development.",
    image:
      "https://images.unsplash.com/photo-1674468191015-27d5765712ab?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Student Council",
    description:
      "The Student Council at Saket MGM Senior Secondary School is a democratically elected body that represents the voice of the student community. It plays a vital role in fostering leadership, responsibility.",
    image:
      "https://images.unsplash.com/photo-1669092982937-294045bcc0f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Badminton Courts",
    description:
      "Well-lit indoor badminton courts with professional-grade flooring and equipment.",
    image:
      "https://images.unsplash.com/photo-1588278508976-a232eec798be?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Gymnasium",
    description:
      "A spacious gymnasium equipped with modern fitness machines and training facilities.",
    image:
      "https://images.unsplash.com/photo-1599121118834-14b8ab00020c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function SportsFacilities() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">Extensive Sports Facilities</h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-12">
        Promoting physical fitness and teamwork, our school offers a wide range
        of indoor and outdoor sports facilities for various athletic pursuits.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {sportsFacilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden text-left transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 w-full group overflow-hidden">
              <Image
                src={facility.image}
                alt={facility.title}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{facility.title}</h3>
              <p className="text-gray-700 text-sm">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
