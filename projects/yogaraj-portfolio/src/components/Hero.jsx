import React, { useState, useEffect } from "react";

const Hero = () => {
  const fullText = "Frontend Developer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-screen min-h-[680px] flex flex-col sm:flex-row bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      {/* Left Content */}
      <div className="sm:w-1/2 flex flex-col justify-center px-10 sm:px-20 py-12 sm:py-24 border-r border-purple-400">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight drop-shadow-lg animate-fadeIn">
          Yogaraj Vedagiri
        </h1>
        <h4 className="mb-6 text-2xl font-semibold h-8 tracking-wide">
          {displayedText}
          <span className="animate-blink">|</span>
        </h4>
        <p className="max-w-xl leading-relaxed text-indigo-100 mb-8 drop-shadow-md">
          Creative React Developer specializing in building dynamic, responsive,
          and high-performance web applications. Proficient in JavaScript,
          TypeScript, React, Redux, and RESTful APIs, focused on clean
          architecture, reusable components, and seamless user experiences.
        </p>
        <div>
          <button className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-indigo-50 transition duration-300 uppercase tracking-wider">
            Contact
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="sm:w-1/2 flex justify-center items-center p-10 sm:p-0">
        <img
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-full shadow-2xl border-8 border-white object-cover"
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg"
          alt="Portrait of Yogaraj Vedagiri"
        />
      </div>
    </section>
  );
};

export default Hero;
