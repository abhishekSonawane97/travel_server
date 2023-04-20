import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [registerForm, setRegisterForm] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [registerVal, setRegisterVal] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  // const [auth, setAuth] = useState({
  //   name: "",
  //   email: "",
  //   id: "",
  //   role: "",
  // });

  const fetchRegister = async () => {
    let result = await fetch("https://travel-server-twat.onrender.com/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(registerVal),
    });
    result = await result.json();
    return result;
  };

  const fetchLogin = async () => {
    let result = await fetch("https://travel-server-twat.onrender.com/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginValue),
    });
    result = await result.json();
    return result;
  };

  const handleChange = (e) => {
    if (registerForm) {
      setRegisterVal({ ...registerVal, [e.target.name]: e.target.value });
    } else {
      setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginValue.email) {
      return alert("Please enter correct email");
    }
    if (!loginValue.password) {
      return alert("Please enter correct password");
    }
    let result = await fetchLogin();
    if (result) {
      localStorage.setItem("token", result.accessToken);
      return navigate("/");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (
      !registerVal.email ||
      !registerVal.password ||
      !registerVal.name ||
      !registerVal.role
    ) {
      return alert("All fields are mandatory");
    }
    let result = await fetchRegister();
    if (result) {
      localStorage.setItem("token", result.accessToken);
      return navigate("/");
    }
  };

  return (
    <div className="bg-login">
      <div className="container py-4" style={{ height: "92vh" }}>
        {!registerForm ? (
          <div className='container border border-primary" col-5 text-center shadow p-4'>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={loginValue.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={loginValue.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-outline-dark" onClick={handleLogin}>
                Login
              </button>
              <button
                className="btn btn-dark mx-4"
                onClick={(e) => {
                  setRegisterForm(true);
                  e.preventDefault();
                }}
              >
                New User
              </button>
            </form>
          </div>
        ) : (
          <div className="container border col-6 text-center mt-4 shadow p-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="name"
                  value={registerVal.name}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="email"
                  value={registerVal.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={registerVal.password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  name="role"
                  value={registerVal.role}
                >
                  <option value="user">User</option>
                </select>
              </div>
              <button className="btn btn-outline-dark" onClick={handleRegister}>
                Register
              </button>
              <button
                className="btn btn-dark mx-4"
                onClick={(e) => {
                  setRegisterForm(false);
                  e.preventDefault();
                }}
              >
                Back to login
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
