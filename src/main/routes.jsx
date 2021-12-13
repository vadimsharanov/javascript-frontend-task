import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import LandingPage from "./components/landingPage/landingPage";
import SignUpPage from "./components/signUpPage/signUpPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage></LandingPage>}></Route>
      <Route path='/home' element={<HomePage></HomePage>}></Route>
      <Route path='/register' element={<SignUpPage></SignUpPage>}></Route>
    </Routes>
  );
};
export default AllRoutes;
