/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default (url) => {
  const baseUrl = "http://jsonplaceholder.typicode.com";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = useCallback((opt = {}) => {
    setOptions(opt);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : "",
        },
      },
    };
    if (!isLoading) {
      return;
    }
    axios(baseUrl + url, requestOptions)
      .then((res) => {
        setIsLoading(false);
        setResponse(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [isLoading, options, url, token]);

  return [{ isLoading, response }, doFetch];
};
