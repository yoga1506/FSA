import React from "react";
import { useSelector } from "react-redux";
import { selectTestimonials } from "../store/testimonialsSlice";

export default function Testimonials() {
  const testimonials = useSelector(selectTestimonials);
  return (
    <section className="py-16 px-4 bg-gray-50" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-lg p-6 shadow hover:scale-105 transform transition"
          >
            <p className="text-gray-700 mb-4">"{t.feedback}"</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
