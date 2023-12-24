import React from "react";
import { Router } from "./router";
import { Footer, Navbar } from "./components";

const App = () => {
  return (
    <div>
      <Router />
      <Footer />
    </div>
  );
};

export default App;
