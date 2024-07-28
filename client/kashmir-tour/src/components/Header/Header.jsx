import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
      mobileMenu.classList.toggle('show');
    };

    menuToggle.addEventListener('click', toggleMenu);

    return () => {
      menuToggle.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">
          <img src="/src/assets/travel.png" alt="Logo" className="logo-img" />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about-us" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
          <NavLink to="/tour" className="nav-link">
            Tour
          </NavLink>
          <NavLink to="/login" className="nav-link login">
            Login
          </NavLink>
          <NavLink to="/signup" className="nav-link signup">
            Signup
          </NavLink>
        </div>
        <div className="menu-toggle">
          <button id="menu-toggle">
            <svg className="menu-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div className="mobile-menu" id="mobile-menu">
        <NavLink to="/" className="mobile-nav-link">
          Home
        </NavLink>
        <NavLink to="/about-us" className="mobile-nav-link">
          About Us
        </NavLink>
        <NavLink to="/contact" className="mobile-nav-link">
          Contact
        </NavLink>
        <NavLink to="/tour" className="mobile-nav-link">
          Tour
        </NavLink>
        <NavLink to="/login" className="mobile-nav-link login">
          Login
        </NavLink>
        <NavLink to="/signup" className="mobile-nav-link signup">
          Signup
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
