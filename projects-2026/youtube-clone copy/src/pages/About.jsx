import React from "react";

const About = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center ">
      <div className="left w-[50%] px-16">
        <div className="max-w-xl flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-justify ">
            Lorem ipsum d elit. A dolorem voluptates voluptas adipisci obcaecati
            iste?
          </h2>
          <h4 className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur, voluptate praesentium nesciunt dolore
            perferendis dicta incidunt quam. Est vel aspernatur aliquid
            assumenda ad optio nam, quam veritatis itaque, quaerat incidunt
            repellendus odit harum explicabo tempora numquam quae perferendis!
            Harum consequuntur perspiciatis provident autem?
          </h4>
          <button className="bg-red-500 text-white mr-auto px-3 py-1 rounded-xl">
            Contact Us
          </button>
        </div>
      </div>
      <div className="right  w-[50%] flex justify-center items-center ">
        <img
          className="bg-center bg-cover max-w-[600px] w-full h-auto rounded-4xl"
          src="https://images.pexels.com/photos/14020705/pexels-photo-14020705.jpeg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
