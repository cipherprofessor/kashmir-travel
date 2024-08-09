import React from "react";
import "./ImgCard.scss";

interface CardComponentProps {
  image: string;
  heading: string;
  subheading: string;
  linkedInUrl: string;
  instagramUrl: string;
}

const ImgCard: React.FC<CardComponentProps> = ({
  image,
  heading,
  subheading,
  linkedInUrl,
  instagramUrl,
}) => {
  return (
    <div className="card">
      <img src={image} alt={heading} className="card-image" />
      <h2 className="card-heading">{heading}</h2>
      <div className="card-subheading">{subheading}</div>
      <div className="card-buttons">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/socialmediaicons/glasslinkedin.png"
            alt="Instagram"
            className="card-icon"
          />
        </a>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="/src/assets/socialmediaicons/glassinsta.png"
            alt="Instagram"
            className="card-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default ImgCard;
