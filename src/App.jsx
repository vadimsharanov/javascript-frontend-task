import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./main/routes";

const App = () => {
  return (
    <Router>
      <AllRoutes></AllRoutes>
    </Router>
  );
};
export default App;
