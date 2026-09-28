import React from "react";

const Contact = () => {
  return (
    <div className="  h-[90vh] flex justify-center items-center ">
      {" "}
      <form className="flex flex-col gap-6 w-96 border p-8">
        <div className=" flex justify-between gap-5 px-4">
          <label htmlFor="">Name</label>
          <input className="border" type="text" />
        </div>
        <div className="    flex justify-between gap-5 px-4">
          <label htmlFor="">Email</label>
          <input className="border" type="text" />
        </div>
        <div className="    flex justify-between gap-5 px-4">
          <label htmlFor="">Phone </label>
          <input className="border" type="text" />
        </div>
        <div className="    flex justify-between gap-5 px-4">
          <label htmlFor="">Message</label>
          <textarea className="border " name="" id=""></textarea>
        </div>{" "}
        <div className="">
          <button className="bg-blue-800 px-4 py-2 ml-5 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
