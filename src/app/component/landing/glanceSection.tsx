'use client';

import { Library, Users, Medal, GraduationCap } from 'lucide-react';

const stats = [
  {
    icon: <Library size={40} className="text-[#f82f53]" />,
    value: '35+',
    label: 'Years of Legacy',
  },
  {
    icon: <Users size={40} className="text-[#f82f53]" />,
    value: '2500+',
    label: 'Students Enrolled',
  },
  {
    icon: <Medal size={40} className="text-[#f82f53]" />,
    value: '150+',
    label: 'Qualified Faculty',
  },
  {
    icon: <GraduationCap size={40} className="text-[#f82f53]" />,
    value: '20+',
    label: 'Diverse Programs',
  },
];

export default function GlanceSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Our School at a Glance</h2>
        <p className="text-gray-500 mb-12">Key figures that define our journey of excellence</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-red-50 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900">{item.value}</h3>
              <p className="text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
