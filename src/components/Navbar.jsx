import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">Social Network</a>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#discover" className="nav-link">Discover</a>
            </li>
            <li className="nav-item">
              <a href="#friends" className="nav-link">New Friends</a>
            </li>
            <li className="nav-item">
              <a href="#joinus" className="nav-link">Join Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;