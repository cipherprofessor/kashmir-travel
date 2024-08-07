import React from 'react';
import './ImageCard.scss';

const ImageCard = () => {
  return (
    <div className="product-card">
      <a href="#">
        <img
          className="product-image"
          src="/src/assets/watch.png"
          alt="product image"
        />
      </a>
      <div className="product-details">
        <a href="#">
          <h5 className="product-title">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="product-rating">
          <div className="stars">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                className="star filled"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
            <svg
              className="star empty"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </div>
          <span className="rating-score">5.0</span>
        </div>
        <div className="product-price-and-cart">
          <span className="price">$599</span>
          <a
            href="#"
            className="add-to-cart-btn"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
