/* eslint-disable react/button-has-type */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLocation, NavLink } from 'react-router-dom';
// import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from '../../data/animationConfig';

const activeClassName = 'selected navlink';
const activeStyleCallback = ({ isActive }: { isActive: boolean }) => (isActive ? activeClassName : 'navlink');

function NavLinks() {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>

      <NavLink to="/blog" className={activeStyleCallback}>
        Blog
      </NavLink>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center justify-end overflow-hidden">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        <div className="w-[75px]" />
        <div className="flex w-[75px] justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {/* <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/blog" className={activeStyleCallback}>
                Blog
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </>
  );
}

export default Nav;
