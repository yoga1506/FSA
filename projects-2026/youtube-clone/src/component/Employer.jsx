import React from "react";

const data = [
  {
    title: "Post a job",
    description:
      "Get started with a job post. Indeed has 1.54 crore unique monthly users",
  },
  {
    title: "Find quality applicants",
    description:
      "Customise your post with screening tools to help narrow down to potential candidates.",
  },
  {
    title: "Make connections",
    description:
      "Track, message, invite and interview directly on Indeed with no extra apps to download.",
  },
  {
    title: "Hire confidently",
    description:
      "You’re not alone on your hiring journey. We have helpful resources for every step of the hiring process.",
  },
];

const Employer = () => {
  return (
    <>
      {" "}
      <div className="flex bg-blue-800 justify-between items-center h-screen ">
        <div className=" text-stone-200 flex flex-col max-w-[500px] px-10">
          <h1 className="text-xl mb-2 uppercase text-stone-400 font-bold tracking-widest">
            Indeed for employers
          </h1>
          <h2 className="text-6xl  mb-6">
            Let’s hire your next great candidate. Fast.
          </h2>
          <p className="text-sm mb-4">
            Indeed for employers Let’s hire your next great candidate. Fast. No
            matter the skills, experience or qualifications you’re looking for,
            you’ll find the right people here.
          </p>
          <button className="bg-yellow-700 text-white w-36 py-2 rounded-2xl">
            Post a Job
          </button>
        </div>
        <div>
          <img
            className="w-full"
            src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/xds-hero-iso-IN-466af0.webp"
            alt=""
          />
        </div>
      </div>
      <div className="py-12 px-24  text-stone-700">
        <h1 className="text-center py-4 text-5xl mb-5 ">
          Manage your hiring from start to finish
        </h1>
        <div className="flex  justify-between gap-8 mt-8 ">
          {" "}
          {data.map((item) => (
            <div key={item.title}>
              <h1 className="text-xl font-semibold mb-4">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Employer;
