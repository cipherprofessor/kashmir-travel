import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.scss';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const images = [
    '/src/assets/kashmir1.jpg',
    '/src/assets/kashmir2.jpg',
    '/src/assets/kashmir3.jpg',
    '/src/assets/kashmir4.jpg',
    '/src/assets/kashmir5.jpg',
    '/src/assets/kashmir6.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    arrows: false,
  };

  return (
    <div className="slider-frame">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-container">
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="slider-controls">
        <button className="control-button" onClick={() => sliderRef.current.slickPrev()}>Previous</button>
        <div className="preview-images">
          <img src={images[(currentSlide - 1 + images.length) % images.length]} alt="Previous slide" className="preview-image" />
          <img src={images[(currentSlide + 1) % images.length]} alt="Next slide" className="preview-image" />
        </div>
        <button className="control-button" onClick={() => sliderRef.current.slickNext()}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
