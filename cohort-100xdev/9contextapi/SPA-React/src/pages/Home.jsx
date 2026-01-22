import React from "react";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        overflowY: "scroll",
        height: 800,
      }}
    >
      <Hero />
      <Hero2 />
      <Hero2 />
    </div>
  );
};

function Hero() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: 10,
      }}
    >
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p style={{ textAlign: "center", width: 800 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
        repellendus pariatur et recusandae nulla perferendis, obcaecati
        eligendi! Voluptatum ad voluptatibus facilis impedit, quae quasi dolore.
      </p>
      <button>Generate</button>
    </div>
  );
}
function Hero2() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        gap: 10,
      }}
    >
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
      <p style={{ textAlign: "center", width: 800 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quo
        repellendus pariatur et recusandae nulla perferendis, obcaecati
        eligendi! Voluptatum ad voluptatibus facilis impedit, quae quasi dolore.
      </p>
      <button>Generate</button>
    </div>
  );
}

export default Home;
