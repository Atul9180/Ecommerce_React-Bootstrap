import "./PageNotFound.css";
import { FaHome, FaPhoneSquareAlt } from "react-icons/fa";

const PageNotFound = () => {
  return (
    <div className="container-fluid row ">
      <div className="col-12">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center ">
          <h1 className="main-heading mt-5 pt-5">404</h1>
          <h2>we couldn't find this page.</h2>
          <div className="text-center mt-4 mb-5">
            <button className="btn btn-success px-3 mr-2">
              <FaHome /> Home
            </button>
            <button className="btn btn-success px-3 mr-2">
              <FaPhoneSquareAlt /> Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
