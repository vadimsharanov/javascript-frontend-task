import React from "react";
import "./backEndErrorMessages.scss";
const BackEndErrorMessages = ({ backEndErrors, doFetch }) => {
  const messages = backEndErrors;
  if (messages === undefined) {
    return <div></div>;
  }
  const keys = Object.keys(messages);
  return <div className='back-end-errors'>{backEndErrors}</div>;
};
export default BackEndErrorMessages;
