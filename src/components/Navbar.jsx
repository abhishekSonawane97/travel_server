import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    return navigate("/login");
  };

  const handleProfile = () => {
    return navigate("/profile");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="left">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.GE6xcHUshdpqkR6DIx7EawHaDS&pid=Api&P=0"
              className="navbar-brand logo"
              alt=""
              onClick={() => navigate("/")}
            />

            <span
              className="navbar-brand"
              style={{
                fontWeight: "bold",
                margin: "0 40px",
                cursor: "pointer",
              }}
              onClick={handleProfile}
            >
              Profile
            </span>
          </div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleLogout()}
          >
            Logout{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
