import React from 'react';
import './DropDownHeader.scss';

const SideBar = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/tour">Tour</a></li>
          <li><a href="/signup">Sign Up</a></li>
          <li><a href="/signin">Sign In</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
