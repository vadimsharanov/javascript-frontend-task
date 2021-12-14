import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useLocalStorage from "../../hooks/useLocalStorage";
import BackEndErrorMessages from "../backEndErrorMessages/backEndErrorMessages";
import { Navigate } from "react-router";
import { useForm } from "react-hook-form";
const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });

  const apiUrl = "/users";
  const [isSuccessfullSubmit, setIsSuccessfullSumbit] = useState(false);
  const [email, setEmail] = useState("");
  const [, setToken] = useLocalStorage("token");
  const [{ response, isLoading }, doFetch] = useFetch(apiUrl);
  const [error, setError] = useState(true);

  useEffect(() => {
    if (!response) {
      return;
    }
    setIsSuccessfullSumbit(true);
  }, [response, setToken, email, error]);

  if (isSuccessfullSubmit) {
    return <Navigate to='/home' />;
  }

  if (isLoading) {
    return <h1 className='container'>Loading...</h1>;
  }
  const onSubmit = (data) => {
    doFetch({ method: "post", data: { data } });
    setToken(data.email);
    reset();
  };

  return (
    <div className='signUp-page container'>
      <div className='top-column'>
        <div className='top-image'></div>
      </div>
      <div className='bottom-column'>
        {error && (
          <BackEndErrorMessages doFetch={doFetch} backEndErrors={error} />
        )}
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <div className='form-row'>
            <label for='email'>Email</label>
            <input
              placeholder='Email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              type='email'
            />
            <div>
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
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
