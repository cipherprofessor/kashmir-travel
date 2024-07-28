import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
          <div className="dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            <NavLink to="/famous-tours" className="nav-link">
              Famous Tours
            </NavLink>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/famous-tours/tour1" className="dropdown-link">
                  Tour 1
                </NavLink>
                <NavLink to="/famous-tours/tour2" className="dropdown-link">
                  Tour 2
                </NavLink>
                <NavLink to="/famous-tours/tour3" className="dropdown-link">
                  Tour 3
                </NavLink>
                <NavLink to="/famous-tours/tour4" className="dropdown-link">
                  Tour 4
                </NavLink>
                <NavLink to="/famous-tours/tour5" className="dropdown-link">
                  Tour 5
                </NavLink>
              </div>
            )}
          </div>
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
        <NavLink to="/famous-tours" className="mobile-nav-link">
          Famous Tours
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
