import { useNavigate } from "react-router-dom";
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";
import React from "react";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-black text-white vh-100">
      <h1 style={{ fontSize: "220px", fontWeight: "700" }}>404</h1>
      <h2 className="font-family mt-3">We couldn't find this page.</h2>
      <div className="text-center mt-4 text-white">
        <button
          className="btn border mx-2 font-size-btn"
          onClick={handleHome}
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <FaHome /> Home
        </button>
        <button
          className="btn border mx-3 font-size-btn"
          onClick={handleContact}
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          <FaPhoneSquareAlt /> Contact
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
