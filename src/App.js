// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import NavLinkComponent from "./components/NavLinkComponent";
import Footer from "./components/Footer";
import History from "./components/History";

const App = () => {
  return (
    <div>
      <NavLinkComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/History" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
