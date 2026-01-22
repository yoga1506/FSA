/*

// fetch data with help of useefeect

import { useEffect, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
      async (res) => {
        const json = await res.json();
        setTabData(json);
        setLoading(false);
      }
    );
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={function () {
          setCurrentTab(1);
        }}
        style={{ color: currentTab == 1 ? "red" : "black" }}
      >
        Todo #1
      </button>
      <button
        onClick={function () {
          setCurrentTab(2);
        }}
        style={{ color: currentTab == 2 ? "red" : "black" }}
      >
        Todo #2
      </button>
      <button
        onClick={function () {
          setCurrentTab(3);
        }}
        style={{ color: currentTab == 3 ? "red" : "black" }}
      >
        Todo #3
      </button>
      <button
        onClick={function () {
          setCurrentTab(4);
        }}
        style={{ color: currentTab == 4 ? "red" : "black" }}
      >
        Todo #4
      </button>
      <br />
      {loading ? "Loading..." : tabData.title}
    </div>
  );
}

export default App;

*/
//---------------------------------------------------------------------
/*
//  children in react
import React from "react";

// import React from 'react'

const App = () => {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      <Card>
        <div>Hello </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex alias ad
          harum quam, sit recusandae natus rerum, perspiciatis velit voluptates
          tempora sint.
        </p>
      </Card>
      <Card>
        <p>welcome to developer world</p>
      </Card>
    </div>
  );
};

const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        borderRadius: 10,
        padding: 10,
        width: 600,
        minWidth: 200,
      }}
    >
      {children}
    </div>
  );
};
export default App;
*/
//-----------------------------------------

// list and keys

import React from "react";

const App = () => {
  const todos = [
    { title: "go to gym", done: false },
    { title: "go to school", done: true },
  ];

  return (
    <div>
      {todos.map((m) => (
        <div key={m.title}>
          <p>{m.title}</p>
          <p>{m.done}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
