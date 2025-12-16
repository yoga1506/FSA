import React from "react";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

function Hero() {
  return (
    <section className="flex   h-[90vh] ">
      <div className="bg-red-100 w-[50%] flex flex-col item-center justify-center px-10 gap-4">
        <h1 className="text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nisi!
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aliquid
          iste dolores velit beatae ullam? Ipsa, nesciunt voluptas beatae
          delectus harum a veniam? Error, vel aperiam itaque quae odit
          recusandae alias esse sapiente, facilis quas soluta consectetur
          officia nisi hic, cum rerum atque quia?
        </p>
        <div>
          {" "}
          <button className="bg-red-500 text-white px-4 py-2  rounded cursor-pointer">
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center item-center">
        <img
          className="w-[800px] h-[800px] bg-center"
          src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg"
          alt=""
        />
      </div>
    </section>
  );
}

function Navbar() {
  return (
    <nav className="bg-black text-white flex justify-between px-10 py-4">
      <ul className="flex  gap-10">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Languages</a>
        </li>
        <li>
          <a href="#">Webseries</a>
        </li>
        <li>
          <a href="#">Dramas</a>
        </li>
      </ul>
      <div>
        <button>Login</button>
      </div>
    </nav>
  );
}

export default App;
