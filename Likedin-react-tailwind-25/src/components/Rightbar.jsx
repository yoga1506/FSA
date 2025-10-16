import React from "react";

const RightBar = ({ job }) => {
  if (!job) {
    return (
      <div className="w-1/2 p-4 bg-white flex items-center justify-center text-gray-400 h-[80vh]">
        Select a job to see details
      </div>
    );
  }

  return (
    <div className="w-1/2 p-6 bg-white h-[80vh] overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2">{job.role}</h1>
      <p className="text-sm text-gray-600 mb-1">{job.place}</p>
      <p className="text-sm text-green-600 mb-1">{job.hiring}</p>
      <p className="text-sm text-gray-500 mb-4">{job.date}</p>
      <hr className="my-4" />
      <p className="text-gray-700 leading-relaxed">{job.des}</p>
      <button
        onClick={() => alert("sucessfully applied for this job")}
        className="mt-4 bg-blue-500 text-white px-3 py-1 "
      >
        Apply{" "}
      </button>
    </div>
  );
};

export default RightBar;
