import React from 'react';
import './TourList.scss';

const TourList = ({ tours }) => {
  return (
    <div className="tour-list">
      {tours.length > 0 ? (
        tours.map(tour => (
          <div key={tour.id} className="tour-card">
            <h3>{tour.name}</h3>
            <p>Price: {tour.price}</p>
            <p>Length: {tour.length}</p>
            <p>Group Size: {tour.groupSize}</p>
            <p>Type: {tour.type}</p>
            <p>Place: {tour.place}</p>
          </div>
        ))
      ) : (
        <p>No tours found</p>
      )}
    </div>
  );
};

export default TourList;
