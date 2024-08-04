/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoRotationVariant } from '../../data/animationConfig';

export function Logo() {
  return (
    <div className="logo h-16 2-16">
      <img src="\assets\travel.jpg" alt="logo" />
    </div>
    // <NavLink to="/" className="inline-block">
    //   <motion.img
    //     alt="Logo"
    //     src="/assets/travel.jpg" // Use the imported image here
    //     className="block w-[75px]"
    //     width="75"
    //     height="75"
    //     variants={logoRotationVariant}
    //   />
    // </NavLink>
  );
}

export default Logo;
