import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackEndErrorMessages from "../backEndErrorMessages.jsx/backEndErrorMessages";
import { Navigate } from "react-router";
const SignUpPage = () => {
  const apiUrl = "/users";
  const [isSuccessfullSubmit, setIsSuccessfullSumbit] = useState(false);
  const [email, setEmail] = useState("");
  const [, setToken] = useLocalStorage("token");
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl);
  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email };
    doFetch({
      method: "post",
      data: { user },
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(email);
    setIsSuccessfullSumbit(true);
  }, [response, setToken, email]);

  if (isSuccessfullSubmit) {
    return <Navigate to='/home' />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='signUp-page-container'>
      {/* {error && <BackEndErrorMessages backEndErrors={error} />} */}
      <div className='left-column'></div>
      <div className='right-column'>
        <form className='form'>
          <div className='form-row'>
            <label for='email'>Email</label>
            <input
              onChange={handleInput}
              placeholder='Email...'
              type='email'
              required
            />
          </div>
          <div className='form-row flex-row'>
            <button onClick={handleSubmit} type='submit'>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
