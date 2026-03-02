import React from "react";

export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Creating responsive and accessible user interfaces using React and Tailwind CSS.",
    },
    {
      title: "UI/UX Design Implementation",
      description:
        "Turning Figma or Sketch designs into pixel-perfect web applications.",
    },
    {
      title: "Performance Optimization",
      description:
        "Improving load times and responsiveness through code-splitting and best practices.",
    },
    {
      title: "Responsive Web Design",
      description: "Ensuring applications look great across all device sizes.",
    },
  ];
  return (
    <section className="py-16 px-4 bg-white" id="services">
      <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
