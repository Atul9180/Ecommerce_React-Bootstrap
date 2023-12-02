import React from "react";

const Message = ({ type, message }) => {
  return (
    <div className={`mt-2 mx-auto fw-bold `}>
      <span style={{ color: `${type}` }}>{message}</span>
    </div>
  );
};

export default Message;
