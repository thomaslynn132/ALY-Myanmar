import React from "react";
import { Router } from "./router";
import Error404 from "./pages/ErrorPage/Error";

const App = () => {
  return (
    <div>
      <Router />
      <Error404 />
    </div>
  );
};

export default App;
