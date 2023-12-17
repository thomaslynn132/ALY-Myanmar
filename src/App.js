// App.jsx
import React from "react";
import NavLinkComponent from "./components/NavLinkComponent";
import Footer from "./components/Footer";
import { Router } from "./router";

const App = () => {
  return (
    <div>
      <NavLinkComponent />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
