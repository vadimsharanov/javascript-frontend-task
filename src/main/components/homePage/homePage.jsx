import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";

const HomePage = () => {
  const [token, setToken] = useLocalStorage("token");
  const [isSuccessfullLogout, setIsSuccessfullLogout] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    setToken("");
    setIsSuccessfullLogout(true);
  };

  useEffect(() => {}, [isSuccessfullLogout]);

  if (isSuccessfullLogout || token === "") {
    return <Navigate to='/'></Navigate>;
  }

  return (
    <div className='landing-page container'>
      <div className='top-column'>
        <div className='top-image'></div>
      </div>
      <div className='bottom-column'>
        <div className='form-row flex-row'>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
