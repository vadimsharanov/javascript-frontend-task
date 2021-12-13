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
  const [error, setError] = useState(true);
  const handleInput = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email };
    if (email === "") {
      setError("Email adress should not be empty!");
      if (!email.split("").includes("@")) {
        setError("Email adress should contain @ symbol!");
      }
    } else {
      doFetch({
        method: "post",
        data: { user },
      });
    }
  };
  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(email);
    setIsSuccessfullSumbit(true);
  }, [response, setToken, email, error]);

  if (isSuccessfullSubmit) {
    return <Navigate to='/home' />;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='signUp-page container'>
      <div className='top-column'>
        <div className='top-image'></div>
      </div>
      <div className='right-column'>
        {error && <BackEndErrorMessages backEndErrors={error} />}
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
              Create my account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
