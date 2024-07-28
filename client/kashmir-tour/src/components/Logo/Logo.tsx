import { motion } from 'framer-motion';
import { logoRotationVariant } from '../../data/animationConfig';
import React from 'react';
import { NavLink } from 'react-router-dom';



export const Logo = () => {
  return (
    <div className='logo h-16 2-16'>
      <img src="\assets\travel.jpg" alt="logo"></img>
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
};

export default Logo;
