import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.scss';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const images = [
    '/src/assets/landscape/image (1).jpg',
    '/src/assets/landscape/image (2).jpg',
    '/src/assets/landscape/image (3).jpg',
    '/src/assets/landscape/image (4).jpg',
    '/src/assets/landscape/image (5).jpg',
    '/src/assets/landscape/image (6).jpg',
    '/src/assets/landscape/image (7).jpg',
    '/src/assets/landscape/image (8).jpg',
    '/src/assets/landscape/image (9).jpg',
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
              className="preview-image"
            />
            <img
              src="/src/assets/previous1.png"
              alt="Previous"
              className="control-button previous-button"
            />
          </div>
          <div
            className="preview-image-wrapper"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img
              src={images[(currentSlide + 1) % images.length]}
              alt="Next slide"
              className="preview-image"
            />
            <img
              src="/src/assets/next2.png"
              alt="Next"
              className="control-button next-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
