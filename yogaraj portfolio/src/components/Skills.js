import React from "react";

export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
    "Redux",
    "React Router",
    "Git",
    "GitHub",
    "Responsive Design",
  ];
  return (
    <section className="py-16 px-4 bg-gray-50" id="skills">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white rounded-lg shadow p-4 text-center hover:scale-105 transform transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
