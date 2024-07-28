// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
// import AboutUs from './pages/AboutUs';
// import Contact from './pages/Contact';
// import Tour from './pages/Tour';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tour" element={<Tour />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
