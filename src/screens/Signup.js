import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });







    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

//   // return (
//   //   <>
//   //   <div className="container">
//   //     <form onSubmit={HandleSubmit}>
//   //       <div className="mb-3">
//   //         <label htmlFor="name" className="form-label">
//   //           Username
//   //         </label>
//   //         <input
//   //           type="text"
//   //           className="form-control"
//   //           name="name"
//   //           value={credentials.name}
//   //           onChange={onChange}
//   //         />
//   //         <div id="name" className="form-text">
//   //           Type your name
//   //         </div>
//   //       </div>
//   //       <div className="mb-3">
//   //         <label htmlFor="email" className="form-label">
//   //           Email address
//   //         </label>
//   //         <input
//   //           type="email"
//   //           className="form-control"
//   //           id="email"
//   //           aria-describedby="emailHelp"
//   //           name="email"
//   //           value={credentials.email}
//   //           onChange={onChange}
//   //         />
//   //         <div id="email" className="form-text">
//   //           We'll never share your email with anyone else.
//   //         </div>
//   //       </div>
//   //       <div className="mb-3">
//   //         <label htmlFor="password" className="form-label">
//   //           Password
//   //         </label>
//   //         <input
//   //           type="password"
//   //           className="form-control"
//   //           id="password"
//   //           name="password"
//   //           value={credentials.password}
//   //           onChange={onChange}
//   //         />
//   //       </div>

//   //       <button type="submit" className="btn btn-primary">
//   //         Submit
//   //       </button>
//   //       <Link to="/login" className="m-3 btn btn-danger">
//   //         Login?
//   //       </Link>
//   //     </form>
//   //   </div>
//   //   </>




return (
  <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
              <h2 className="text-center mb-4">Register</h2>
              <form onSubmit={HandleSubmit}>
                  <div className="form-group mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                          type="text"
                          className="form-control"
                          placeholder='Your name'
                          name='name'
                          value={credentials.name}
                          onChange={onChange}
                          required
                      />
                  </div>
                  
                  <div className="form-group mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          name='email'
                          value={credentials.email}
                          onChange={onChange}
                          required
                      />
                  </div>
                  <div className="form-group mb-4">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Enter password"
                          name='password'
                          value={credentials.password}
                          onChange={onChange}
                          required
                      />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit</button>
                  <Link to="/login" className="btn btn-link text-center w-100 mt-3">Already a user</Link>
              </form>
          </div>
      </div>
  </>

  );
}
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Signup() {
//   const [credentials, setCredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState(""); // To capture and display error messages
//   const [loading, setLoading] = useState(false); // Loading state for submit button

//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading state when submitting

//     const response = await fetch("http://localhost:5000/api/createuser", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//       }),
//     });

//     const json = await response.json();
//     console.log(json);

//     if (json.success) {
//       // Clear the form on successful submission
//       setCredentials({ name: "", email: "", password: "" });
//       alert("User created successfully!");
//     } else {
//       setError(json.errors ? json.errors.map(e => e.msg).join(', ') : "Something went wrong!");
//     }

//     setLoading(false); // Reset loading state
//   };

//   const onChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow-lg p-4" style={{ maxWidth: '400px', width: '100%' }}>
//         <h2 className="text-center mb-4">Register</h2>
//         <form onSubmit={HandleSubmit}>
//           {/* Name Field */}
//           <div className="form-group mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Your name"
//               name="name"
//               value={credentials.name}
//               onChange={onChange}
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div className="form-group mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter email"
//               name="email"
//               value={credentials.email}
//               onChange={onChange}
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div className="form-group mb-4">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               placeholder="Enter password"
//               name="password"
//               value={credentials.password}
//               onChange={onChange}
//               required
//             />
//           </div>

//           {/* Error Message */}
//           {error && <div className="alert alert-danger">{error}</div>}

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-primary w-100" disabled={loading}>
//             {loading ? "Submitting..." : "Submit"}
//           </button>

//           {/* Link to Login Page */}
//           <Link to="/login" className="btn btn-link text-center w-100 mt-3">Already a user?</Link>
//         </form>
//       </div>
//     </div>
//   );
// }
