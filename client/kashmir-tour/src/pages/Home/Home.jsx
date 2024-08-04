import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const Home = () => {
  return (
    <div className="home">
      <ImageSlider/>
      <section className="hero">
        <div className="hero-content">
          <h1>Explore the World with Us</h1>
          <p>Your adventure begins here. Discover amazing places at exclusive deals.</p>
          <NavLink to="/famous-tours" className="hero-btn">Get Started</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
