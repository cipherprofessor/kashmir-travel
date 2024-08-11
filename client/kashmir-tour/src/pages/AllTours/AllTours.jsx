import React, { useMemo, useState } from 'react';
import './AllTours.scss';
import FilterComponent from '../../components/Filters/ReactSelect/FilterComponent';

// Example tour data
const toursData = [
  {
    id: '1',
    name: 'Adventure Tour',
    price: 30000,
    length: '4-7 days',
    groupSize: '6-10',
    type: 'Adventure',
    place: 'Kashmir',
  },
  {
    id: '2',
    name: 'Cultural Tour',
    price: 2000,
    length: '11 days',
    groupSize: '6-10',
    type: 'Adventure',
    place: 'Jammu',
  },
  {
    id: '3',
    name: 'Cultural Tour',
    price: 2000,
    length: '11 days',
    groupSize: '6-10',
    type: 'Adventure',
    place: 'Jammu',
  },
  {
    id: '4',
    name: 'Cultural Tour',
    price: 2000,
    length: '11 days',
    groupSize: '6-10',
    type: 'Adventure',
    place: 'Jammu',
  },
  // Add more tour data here
];

const AllTours = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  };

  const filteredTours = useMemo(() => {
    return toursData.filter((tour) => {
      const { priceFilter, priceRange, tourLength, groupSize, searchPlace, tourType } = filters;

      // Apply filtering logic based on filters
      if (priceFilter === 'slider' && priceRange) {
        if (tour.price < priceRange[0] || tour.price > priceRange[1]) {
          return false;
        }
      }
      if (tourLength && tour.length !== tourLength) {
        return false;
      }
      if (groupSize && tour.groupSize !== groupSize) {
        return false;
      }
      if (searchPlace && !tour.place.toLowerCase().includes(searchPlace.toLowerCase())) {
        return false;
      }
      if (tourType && tour.type !== tourType) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="all-tours-page">
      <FilterComponent onFilterChange={handleFilterChange} />
      <TourList tours={filteredTours} />
    </div>
  );
};

// TourList Component
const TourList = ({ tours }) => {
  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <div key={tour.id} className="tour-card">
          <h3>{tour.name}</h3>
          <p>Price: {tour.price}</p>
          <p>Length: {tour.length}</p>
          <p>Group Size: {tour.groupSize}</p>
          <p>Type: {tour.type}</p>
          <p>Place: {tour.place}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTours;
