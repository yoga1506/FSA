import React, { useState } from "react";
import LeftBar from "./LeftBar";

// import { jobData } from "./jobData"; // move your job list here
import Rightbar from "./Rightbar";

const jobData = [
  {
    id: 1,
    role: "Frontend Developer",
    place: "Gurgan,Haryana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 2,
    role: "Frontend Developer",
    place: "Chennai,TamilNadu , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 3,
    role: "Backend Developer",
    place: "Chennai,Haryana , India",
    hiring: "Actively Hiring",
    date: "2 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 4,
    role: "DevOps Engineer",
    place: "Banglore,Karnataka , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 5,
    role: "aws Engineer",
    place: "Hyderabad,Telangana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 1,
    role: "Frontend Developer",
    place: "Gurgan,Haryana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 2,
    role: "Frontend Developer",
    place: "Chennai,TamilNadu , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 3,
    role: "Backend Developer",
    place: "Chennai,Haryana , India",
    hiring: "Actively Hiring",
    date: "2 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 4,
    role: "DevOps Engineer",
    place: "Banglore,Karnataka , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 5,
    role: "aws Engineer",
    place: "Hyderabad,Telangana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 1,
    role: "Frontend Developer",
    place: "Gurgan,Haryana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 2,
    role: "Frontend Developer",
    place: "Chennai,TamilNadu , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 3,
    role: "Backend Developer",
    place: "Chennai,Haryana , India",
    hiring: "Actively Hiring",
    date: "2 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 4,
    role: "DevOps Engineer",
    place: "Banglore,Karnataka , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 5,
    role: "aws Engineer",
    place: "Hyderabad,Telangana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 1,
    role: "Frontend Developer",
    place: "Gurgan,Haryana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 2,
    role: "Frontend Developer",
    place: "Chennai,TamilNadu , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 3,
    role: "Backend Developer",
    place: "Chennai,Haryana , India",
    hiring: "Actively Hiring",
    date: "2 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 4,
    role: "DevOps Engineer",
    place: "Banglore,Karnataka , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
  {
    id: 5,
    role: "aws Engineer",
    place: "Hyderabad,Telangana , India",
    hiring: "Actively Hiring",
    date: "1 Month Ago",
    des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. L",
  },
];

const JobPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="flex w-full mb-8">
      <LeftBar jobData={jobData} onSelectJob={setSelectedJob} />
      <Rightbar job={selectedJob} />
    </div>
  );
};

export default JobPage;
