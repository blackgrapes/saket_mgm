  "use client";

  import Image from "next/image";
  import { useEffect, useState } from "react";
  import { Testimonial } from "../../../../types/testimonial";

  const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetch("/api/testimonials")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch testimonials");
          return res.json();
        })
        .then((data) => {
          setTestimonials(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          console.error("Failed to fetch testimonials", err);
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-center py-10">Loading testimonials...</p>;

    if (error)
      return (
        <p className="text-center py-10 text-red-600">
          Error loading testimonials: {error}
        </p>
      );

    if (testimonials.length === 0)
      return <p className="text-center py-10">No testimonials available.</p>;

    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            What Our Community Says
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Voices of students, parents, and alumni
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial._id || index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 italic mb-4">&quot;{testimonial.message}&quot;</p>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default TestimonialsSection;
