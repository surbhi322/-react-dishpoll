import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <p className="text-align-center fs-1"> Page Not Found 404</p>
      <button
        className="btn btn-outline-dark"
        onClick={() => {
          handler();
        }}
      >
        Back to Login
      </button>
    </div>
  );
}

export default PageNotFound;
