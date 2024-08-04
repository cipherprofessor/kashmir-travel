/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './TourPackageCard.scss';

function TourPackageCard({
  images,
  title,
  description,
  price,
  duration,
  groupSize,
}) {
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
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
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
        <div className="tour-package-details">
          <div className="detail-item">
            <img
              src="/src/assets/logos/calendar.png"
              alt="Duration"
              className="detail-icon"
            />
            <span className="detail-text">{duration}</span>
          </div>
          <div className="detail-item">
            <img
              src="/src/assets/logos/group.png"
              alt="Group Size"
              className="detail-icon"
            />
            <span className="detail-text">{groupSize}</span>
          </div>
        </div>
        <div className="tour-package-info-row">
          <div className="tour-package-price">
            ₹
            {price}
          </div>
          <button className="tour-package-buy-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TourPackageCard;
