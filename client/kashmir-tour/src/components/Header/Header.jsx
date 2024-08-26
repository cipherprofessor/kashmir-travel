

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import './Header.scss';

function Header() {
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
          <img
            src="/src/assets/logos/travel.png"
            alt="Logo"
            className="logo-img"
          />
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about-us" className="nav-link">
            About Us
          </NavLink>
          <NavLink to="/MeteorShower" className="nav-link">
            MeteorShower
          </NavLink>
          <NavLink to="/alltours" className="nav-link">
            All Tours
          </NavLink>
          <div
            className="nav-link dropdown"
            onMouseEnter={handleDropdownToggle}
            onMouseLeave={handleDropdownToggle}
          >
            <span>Famous Tours</span>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <NavLink to="/famous-tours/gulmarg" className="dropdown-link">
                  Gulmarg
                </NavLink>
                <NavLink to="/famous-tours/pahalgam" className="dropdown-link">
                  Pahalgam
                </NavLink>
                <NavLink to="/famous-tours/sonmarg" className="dropdown-link">
                  Sonmarg
                </NavLink>
                <NavLink to="/famous-tours/dallake" className="dropdown-link">
                  Dal Lake
                </NavLink>
                <NavLink to="/famous-tours/bangas" className="dropdown-link">
                  Bangas
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/login" className="nav-link login">
            Login
            {' '}
            <LogIn className="icon" size={16} />
          </NavLink>
          <NavLink to="/signup" className="nav-link signup">
            Signup
            {' '}
            <UserPlus className="icon" size={16} />
          </NavLink>
        </div>
        <div className="menu-toggle">
          <button id="menu-toggle">
            <svg
              className="menu-toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
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
}

export default Header;
