import React, { useState } from 'react';
import './TourPackageCard.scss';

const TourPackageCard = ({ images, title, description, price }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="tour-package-card">
      <div className="image-carousel">
        <img
          src={images[currentImageIndex]}
          alt={title}
          className="tour-package-image"
        />
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
