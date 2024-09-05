import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top'>
        <div className="container">
          <a href="#" className='navbar-brand'>Social Network</a>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id='navbarCollapse'> 
            <ul className="navbar-nav ml-auto">
              <li className='nav-item'>
                <a href="#home" className='nav-link'>Home</a>
              </li>
              <li className='nav-item'>
                <a href="#discover" className='nav-link'>Discover</a>
              </li>
              <li className='nav-item'>
                <a href="#friends" className='nav-link'>New Friends</a>
              </li>
              <li className='nav-item'>
                <a href="#joinus" className='nav-link'>Join Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;