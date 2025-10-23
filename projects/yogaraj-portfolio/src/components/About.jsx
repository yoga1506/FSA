import React from "react";

const data = [
  {
    id: 1,
    company: "VOYAGER ELECTRONICS INDIA PRIVATE LIMITED",
    exp: "2021 - 2025",
    description:
      "Creative React Developer specializing in building dynamic, responsive, and high-performance web applications. Proficient in JavaScript, TypeScript, React, Redux, and RESTful APIs, with a strong focus on clean architecture, reusable components, and delivering seamless, engaging user experiences across all devices.",
  },
  {
    id: 2,
    company: "YAMATO AUDIO PRIVATE LIMITED",
    exp: "2019 - 2021",
    description:
      "Skilled Web Developer specializing in creating responsive, user-friendly websites and web applications. Proficient in HTML, CSS, JavaScript, and React, with a strong focus on clean code, performance optimization, and delivering seamless digital experiences across various devices and platforms.",
  },
];

const about = () => {
  return (
    <section className=" h-screen sm:flex  flex-col px-10  justify-center items-center">
      <h1 className="pt-16 text-center  font-semibold uppercase text-xl">
        About Me
      </h1>
      <div className="exp  sm:max-w-[900px]  mx-auto">
        {data.map((job) => (
          <div className="py-5 sm:py-10">
            <div className="sm:flex justify-between sm:py-1">
              <h1 className=" text-sm sm:text-xl font-bold mb-2">
                {job.company}
              </h1>
              <h5>{job.exp}</h5>
            </div>
            <p className="text-sm  sm:text-xl text-justify">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default about;
