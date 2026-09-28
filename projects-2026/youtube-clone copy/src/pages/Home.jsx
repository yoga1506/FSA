import React from "react";

const Home = () => {
  return (
    <div className="grid sm:grid-cols-2 h-[90vh]">
      {/* Left Column: Added 'relative' to control absolute children if needed, 
          but shifted to standard spacing for the button */}
      <div className="left flex flex-col justify-center items-center px-12 text-center sm:text-left">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          consequatur. Corrupti omnis sequi voluptatum. Nesciunt blanditiis nam
          repudiandae nisi aliquid praesentium facere nihil? Consequuntur magnam
          amet hic vero iusto natus exercitationem reprehenderit asperiores!
        </p>
        <div className="w-full">
          <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition-colors">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="right hidden sm:flex justify-center items-center px-8">
        <img
          src="https://images.pexels.com/photos/31154802/pexels-photo-31154802.jpeg"
          alt="Hero representation"
          className="max-h-[70vh] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Home;
