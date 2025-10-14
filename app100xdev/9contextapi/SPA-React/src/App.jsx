import React from "react";
import Home from "./pages/Home";
import About from "./About";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function Layout() {
  return (
    <>
      <nav style={{ width: "100%", height: "5vh", backgroundColor: "red" }}>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </nav>
      <div style={{ height: "90vh", backgroundColor: "green" }}>
        <Outlet />;
      </div>
      <Footer style={{ height: "5vh" }} />
    </>
  );
}

export default App;
