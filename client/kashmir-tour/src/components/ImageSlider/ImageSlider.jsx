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
    '/src/assets/kashmir4.jpg',
    '/src/assets/kashmir5.jpg',
    '/src/assets/kashmir6.jpg',
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
        <div className="control-wrapper">
          <div
            className="preview-image-wrapper"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img
              src={images[(currentSlide - 1 + images.length) % images.length]}
              alt="Previous slide"
              className="preview-image-previous"
            />
            <button className="control-button previous-button">
              <span className="button-text">Previous</span>
            </button>
          </div>
          <div
            className="next-image-wrapper"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img
              src={images[(currentSlide + 1) % images.length]}
              alt="Next slide"
              className="preview-image-next"
            />
            <button className="control-button next-button">
              <span className="button-text">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
