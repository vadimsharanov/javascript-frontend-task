import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.scss";
const LandingPage = () => {
  return (
    <div className='landing-page-container'>
      <div class='left-column'></div>
      <div class='right-column'>
        <Link className='form-row flex-row' to='/register'>
          <button type='submit'>Register with my email</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
