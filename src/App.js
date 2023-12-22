import React from "react";
import { Router } from "./router";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
