import React, { useState } from "react";

const jobData = [
  { id: 1, title: "React Developer", posted: "5 days ago", place: "Chennai" },
  { id: 2, title: "Backend Developer", posted: "10 days ago", place: "Mumbai" },
  { id: 3, title: "AWS Engineer", posted: "1 day ago", place: "Delhi" },
  {
    id: 4,
    title: "Full Stack Developer",
    posted: "7 days ago",
    place: "Bangalore",
  },
  { id: 5, title: "Data Analyst", posted: "3 days ago", place: "Hyderabad" },
  { id: 6, title: "DevOps Engineer", posted: "12 days ago", place: "Pune" },
  {
    id: 7,
    title: "Frontend Developer",
    posted: "9 days ago",
    place: "Chennai",
  },
  { id: 8, title: "ML Engineer", posted: "2 days ago", place: "Mumbai" },
  { id: 9, title: "Python Developer", posted: "14 days ago", place: "Delhi" },
  {
    id: 10,
    title: "Golang Developer",
    posted: "4 days ago",
    place: "Bangalore",
  },
  {
    id: 11,
    title: "UI/UX Designer",
    posted: "11 days ago",
    place: "Hyderabad",
  },
  { id: 12, title: "iOS Developer", posted: "6 days ago", place: "Pune" },
  {
    id: 13,
    title: "Android Developer",
    posted: "13 days ago",
    place: "Chennai",
  },
  { id: 14, title: "Cloud Architect", posted: "8 days ago", place: "Mumbai" },
  { id: 15, title: "Technical Writer", posted: "5 days ago", place: "Delhi" },
  { id: 16, title: "QA Engineer", posted: "1 day ago", place: "Bangalore" },
  {
    id: 17,
    title: "Security Analyst",
    posted: "7 days ago",
    place: "Hyderabad",
  },
  { id: 18, title: "Project Manager", posted: "15 days ago", place: "Pune" },
  { id: 19, title: "System Admin", posted: "3 days ago", place: "Chennai" },
  { id: 20, title: "IT Support", posted: "2 days ago", place: "Mumbai" },
  { id: 21, title: "Software Engineer", posted: "9 days ago", place: "Delhi" },
  {
    id: 22,
    title: "Solutions Architect",
    posted: "10 days ago",
    place: "Bangalore",
  },
  {
    id: 23,
    title: "Business Analyst",
    posted: "6 days ago",
    place: "Hyderabad",
  },
  { id: 24, title: "Network Engineer", posted: "4 days ago", place: "Pune" },
  { id: 25, title: "Product Owner", posted: "11 days ago", place: "Chennai" },
  { id: 26, title: "Database Admin", posted: "5 days ago", place: "Mumbai" },
  { id: 27, title: "Ruby Developer", posted: "7 days ago", place: "Delhi" },
  {
    id: 28,
    title: "Angular Developer",
    posted: "1 day ago",
    place: "Bangalore",
  },
  {
    id: 29,
    title: "Technical Lead",
    posted: "13 days ago",
    place: "Hyderabad",
  },
  { id: 30, title: "Scrum Master", posted: "3 days ago", place: "Pune" },
  { id: 31, title: "Game Developer", posted: "12 days ago", place: "Chennai" },
  { id: 32, title: "SEO Specialist", posted: "10 days ago", place: "Mumbai" },
  { id: 33, title: "Digital Marketer", posted: "4 days ago", place: "Delhi" },
  { id: 34, title: "Tech Support", posted: "2 days ago", place: "Bangalore" },
  {
    id: 35,
    title: "Research Analyst",
    posted: "8 days ago",
    place: "Hyderabad",
  },
  { id: 36, title: "NOC Engineer", posted: "14 days ago", place: "Pune" },
  { id: 37, title: "BI Developer", posted: "6 days ago", place: "Chennai" },
  { id: 38, title: "Power BI Analyst", posted: "5 days ago", place: "Mumbai" },
  {
    id: 39,
    title: "Salesforce Developer",
    posted: "3 days ago",
    place: "Delhi",
  },
  { id: 40, title: "ETL Developer", posted: "1 day ago", place: "Bangalore" },
  {
    id: 41,
    title: "Software Tester",
    posted: "13 days ago",
    place: "Hyderabad",
  },
  { id: 42, title: "Technical Recruiter", posted: "2 days ago", place: "Pune" },
  {
    id: 43,
    title: "ServiceNow Developer",
    posted: "7 days ago",
    place: "Chennai",
  },
  { id: 44, title: "IT Consultant", posted: "9 days ago", place: "Mumbai" },
  { id: 45, title: "Java Developer", posted: "11 days ago", place: "Delhi" },
  { id: 46, title: "PHP Developer", posted: "6 days ago", place: "Bangalore" },
  {
    id: 47,
    title: "Laravel Developer",
    posted: "8 days ago",
    place: "Hyderabad",
  },
  { id: 48, title: "Node.js Developer", posted: "3 days ago", place: "Pune" },
  { id: 49, title: "AI Engineer", posted: "2 days ago", place: "Chennai" },
  {
    id: 50,
    title: "Blockchain Developer",
    posted: "5 days ago",
    place: "Mumbai",
  },
];

function App() {
  const [jobs, setJobs] = useState(jobData);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [searchJob, setSearchJob] = useState("");
  // const [jobs, setJobs] = useState(sortedJobs); // ✅ use sortedJobs instead of jobData

  function handleSelectJob(id) {
    setSelectedJobId(id);
  }
  const sortedJobs = [...jobData].sort((a, b) => {
    const getDays = (str) => parseInt(str.split(" ")[0]);
    return getDays(a.posted) - getDays(b.posted); // Recent first
  });

  function jobSearch() {
    if (searchJob.trim() === "") {
      setJobs(sortedJobs); // ✅ Reset to sorted list
      return;
    }

    const filteredJobs = sortedJobs.filter((job) =>
      job.place.toLowerCase().includes(searchJob.toLowerCase())
    );
    setJobs(filteredJobs);
    setSelectedJobId(null); // Reset selection when filtering
  }

  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  return (
    <div className="text-black">
      <h1 className="text-center">Job Portal</h1>
      <div className="flex items-center justify-center py-10">
        <input
          type="text"
          className="border"
          placeholder="Search by location"
          value={searchJob}
          onChange={(e) => setSearchJob(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") jobSearch();
          }}
        />

        <button onClick={jobSearch} className="bg-red-500 text-white px-4 ml-2">
          Search
        </button>
      </div>
      <div className="w-screen  h-screen px-10 py-8 flex text-black">
        <JobList
          jobData={jobs} // ✅ Use filtered jobs
          selectedJobId={selectedJobId}
          handleSelectJob={handleSelectJob}
        />
        <JobDetail selectedJob={selectedJob} />
      </div>
    </div>
  );
}

function JobList({ jobData, selectedJobId, handleSelectJob }) {
  return (
    <div className="w-1/2 h-[500px] overflow-y-scroll flex items-center justify-center flex-col py-5 mt-6   ">
      <div className="flex justify-center flex-col mt-10">
        <h1>
          {jobData.length} Job{jobData.length !== 1 ? "s" : ""} listed
        </h1>
        <ul className="mt-10 capitalize flex flex-col gap-4 w-[300px] p-5">
          {jobData.map((job) => (
            <li
              onClick={() => handleSelectJob(job.id)}
              key={job.id}
              className={`bg-gray-100 px-3 py-2 cursor-pointer ${
                selectedJobId === job.id ? "bg-blue-200" : ""
              }`}
            >
              <h1 className="font-bold ">{job.title}</h1>
              <p>{job.posted}</p>
              <p>{job.place}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function JobDetail({ selectedJob }) {
  if (!selectedJob) {
    return (
      <div className="w-1/2  flex items-center justify-center text-white">
        <p>Select a job to see details</p>
      </div>
    );
  }

  return (
    <div className="w-1/2  p-10  capitalize">
      <h2 className="text-2xl mb-4 font-bold">{selectedJob.title}</h2>
      <p>Posted: {selectedJob.posted}</p>
      <p>Location: {selectedJob.place}</p>
      <button
        className="mt-4 px-4 py-1 bg-blue-500 text-white"
        onClick={() => alert("Application submitted!")}
      >
        Apply
      </button>
    </div>
  );
}

export default App;
