import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);



    if (json.success) {
      navigate("/"); // Redirect to home page
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div
          className="card shadow-lg p-4"
          style={{ maxWidth: "400px", width: "100%" }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={HandleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={credentials.email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
            <Link to="/signup" className="btn btn-link text-center w-100 mt-3">
              New a user
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
