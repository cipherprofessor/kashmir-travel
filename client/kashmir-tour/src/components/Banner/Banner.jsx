/* eslint-disable react/button-has-type */
// src/components/Banner.js
import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Explore the World</h1>
        <p>Discover amazing places at exclusive deals</p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
}

export default Banner;
