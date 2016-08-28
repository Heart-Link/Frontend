import React from 'react';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <h3>Heart Link</h3>
      </div>

      <div className="Navbar-navigation">
        <ul>
          <li><a>Create Account</a></li>
          <li><a>Profile</a></li>
          <li><a>Log Out</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
