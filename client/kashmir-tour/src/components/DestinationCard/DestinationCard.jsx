// DestinationCard.js
import React from 'react';
import './DestinationCard.css'; // Include specific CSS for card styling

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p>{destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
