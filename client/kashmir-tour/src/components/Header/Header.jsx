import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    return () => {
      menuToggle.removeEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    };
  }, []);

  return (
    <header className="header">
      <nav className="container">
        <NavLink to="/" className="logo">
          <img src="/src/assets/travel.jpg" alt="Logo" className="logo-image" />
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
        </div>
        <div className="menu-toggle" id="menu-toggle">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
      </nav>
      <div className="mobile-menu hidden" id="mobile-menu">
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
      </div>
    </header>
  );
};

export default Header;
