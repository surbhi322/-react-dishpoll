import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import Data from "../database/users.json";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const data = Data;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (e) => {
    setUserName(e.currentTarget.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let searchUser = data.filter(
      (item) => item.username === userName && item.password === password
    );
    if (searchUser.length > 0) {
      sessionStorage.setItem("user", userName);
      navigate("/home");
    } else {
      window.alert("Enter correct Username/Password");
    }
  }

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="mb-3 ">
              {/* <label>Email address</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={userName}
                onChange={(e) => usernameHandler(e)}
              />
            </div>
            <div className="mb-3">
              {/* <label>Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => passwordHandler(e)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
