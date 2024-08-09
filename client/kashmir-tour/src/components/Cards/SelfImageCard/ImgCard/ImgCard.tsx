import React from 'react';
import './ImgCard.scss';

interface CardComponentProps {
  image: string;
  heading: string;
  subheading: string;
  linkedInUrl: string;
  instagramUrl: string;
}

const ImgCard: React.FC<CardComponentProps> = ({ image, heading, subheading, linkedInUrl, instagramUrl }) => {
  return (
    <div className="card">
      <img src={image} alt={heading} className="card-image" />
      <h2 className="card-heading">{heading}</h2>
      <h3 className="card-subheading">{subheading}</h3>
      <div className="card-buttons">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <button className="card-button">LinkedIn</button>
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <button className="card-button">Instagram</button>
        </a>
      </div>
    </div>
  );
};

export default ImgCard;
