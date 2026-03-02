import React from "react";

export default function About() {
  return (
    <section className="py-16 px-4 bg-white" id="about">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
        <p>B.E ECE from Anna University</p>
        <p>
          <strong>Yamato Audio Pvt Ltd</strong>, Web Developer (2019–2021)
        </p>
        <p>
          <strong>Voyager Electronics India Pvt Ltd</strong>, React Developer
          (2021–2025)
        </p>
      </div>
    </section>
  );
}
