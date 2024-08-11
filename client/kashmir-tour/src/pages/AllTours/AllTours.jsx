import React, { useMemo, useState } from 'react';
import './AllTours.scss';
import FilterComponent from '../../components/Filters/ReactSelect/FilterComponent';

// Example tour data
const toursData = [
  {
    id: '1',
    name: 'Adventure',
    price: 30000,
    length: '4-7 days',
    groupSize: '6',
    type: 'Adventure',
    place: 'Ladakh',
  },
  {
    id: '2',
    name: 'Cultural Tour',
    price: 2000,
    length: '11 days',
    groupSize: '6-10',
    type: 'Luxury',
    place: 'Bangus',
  },
  {
    id: '3',
    name: 'Cultural',
    price: 200000,
    length: '11 days',
    groupSize: '21+',
    type: 'Cultural',
    place: 'Pahalgam',
  },
  {
    id: '4',
    name: 'Luxury',
    price: 300000,
    length: '11 days',
    groupSize: '2',
    type: 'Romantic',
    place: 'Gulmarg',
  },
  {
    id: '5',
    name: 'Adventure',
    price: 300000,
    length: '11 days',
    groupSize: '1-5',
    type: 'Romantic',
    place: 'Kokernag',
  },
  {
    id: '6',
    name: 'Adventure',
    price: 300000,
    length: '11 days',
    groupSize: '1-5',
    type: 'Romantic',
    place: 'Sonmarg',
  },
  {
    id: '7',
    name: 'Adventure',
    price: 300000,
    length: '11 days',
    groupSize: '1-5',
    type: 'Romantic',
    place: 'Srinagar',
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

      if (priceFilter === 'slider' && priceRange) {
        if (tour.price < priceRange[0] || tour.price > priceRange[1]) {
          return false;
        }
      }
      if (tourLength && !isTourLengthMatching(tour.length, tourLength)) {
        return false;
      }
      if (groupSize && !isGroupSizeMatching(tour.groupSize, groupSize)) {
        return false;
      }
      if (searchPlace && !tour.place.toLowerCase().includes(searchPlace.toLowerCase())) {
        return false;
      }
      if (tourType && tour.type.toLowerCase() !== tourType.toLowerCase()) {
        return false;
      }
      return true;
    });
  }, [filters]);

  // Function to check if tour length matches selected length
  function isTourLengthMatching(tourLength, selectedTourLength) {
    return tourLength === selectedTourLength;
  }

  // Function to check if group size matches selected size range
  function isGroupSizeMatching(tourGroupSize, selectedGroupSize) {
    const tourSizeRange = parseGroupSize(tourGroupSize);
    const selectedSizeRange = parseGroupSize(selectedGroupSize);

    return selectedSizeRange.some(size => tourSizeRange.includes(size));
  }

  // Function to parse group size string into an array of numbers
  function parseGroupSize(sizeRange) {
    const ranges = sizeRange.split('-').map(Number);
    if (ranges.length === 1) {
      return [ranges[0]];
    } else if (ranges.length === 2) {
      return Array.from({ length: ranges[1] - ranges[0] + 1 }, (_, i) => i + ranges[0]);
    } else {
      return [Number(sizeRange.replace('+', ''))];
    }
  }

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
      {tours.length === 0 ? (
        <p>No tours available</p>
      ) : (
        tours.map((tour) => (
          <div key={tour.id} className="tour-card">
            <h3>{tour.name}</h3>
            <p>Price: ₹{tour.price.toLocaleString('en-IN')}</p>
            <p>Length: {tour.length}</p>
            <p>Group Size: {tour.groupSize}</p>
            <p>Type: {tour.type}</p>
            <p>Place: {tour.place}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllTours;