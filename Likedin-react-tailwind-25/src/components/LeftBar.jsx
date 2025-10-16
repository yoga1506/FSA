import React, { useState } from "react";

const LeftBar = ({ jobData, onSelectJob }) => {
  return (
    <div className="w-1/2 p-4 bg-gray-50 overflow-y-auto h-[80vh]">
      <h1 className="text-lg font-semibold mb-4">
        {jobData.length} Jobs listed
      </h1>

      <div className="flex flex-col gap-4">
        {jobData.map((job) => (
          <div
            key={job.id}
            className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 cursor-pointer"
            onClick={() => onSelectJob(job)}
          >
            <h2 className="text-lg font-bold">{job.role}</h2>
            <p className="text-sm text-gray-600">{job.place}</p>
            <p className="text-sm text-green-600">{job.hiring}</p>
            <p className="text-sm text-gray-500">{job.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftBar;
