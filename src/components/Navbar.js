import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initially set to false
  const navigate = useNavigate();

  // Simulated login function for demonstration
  const handleLogin = () => {
    setIsLoggedIn(true); // Simulate user login
    navigate('/'); // Redirect to home after login
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false); // Update state
    // Clear tokens or any authentication info here
    navigate('/'); // Redirect to home after logout
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">CRM Application</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link active" href="#">
                  Home<span className="visually-hidden">(current)</span>
                </a>
              </Link>
            </li>
            {!isLoggedIn ? ( // Show login and register if not logged in
              <>
                <li className="nav-item">
                  <Link to="/login">
                    <a className="nav-link" href="#" onClick={handleLogin}>Login</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register"> 
                    <a className="nav-link" href="#">Register</a>
                  </Link>
                </li>
              </>
            ) : ( // Show logout if logged in
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
