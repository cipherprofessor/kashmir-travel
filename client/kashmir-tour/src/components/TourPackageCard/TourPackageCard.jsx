import React, { useState, useEffect } from 'react';
import './TourPackageCard.scss';

const TourPackageCard = ({ images, title, description, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="tour-package-card">
      <div className="image-carousel">
        <div className="carousel-wrapper" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={title}
              className="tour-package-image"
            />
          ))}
        </div>
        <button className="carousel-btn prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="carousel-btn next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
      <div className="tour-package-info">
        <h3 className="tour-package-title">{title}</h3>
        <p className="tour-package-description">{description}</p>
        <div className="tour-package-price">₹{price}</div>
        <button className="tour-package-buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default TourPackageCard;
