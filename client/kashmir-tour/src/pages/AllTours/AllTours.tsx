// import React, { useMemo, useState } from 'react';
// import FilterComponent from '../../components/Filters/FilterComponent';

// // Mock tours data
// const tours = [
//   { id: 1, name: 'Tour 1', price: 10000, length: '1-3 days', groupSize: '1-5', type: 'adventure', place: 'Kashmir' },
//   { id: 2, name: 'Tour 2', price: 20000, length: '4-7 days', groupSize: '6-10', type: 'cultural', place: 'Ladakh' },
//   // Add more tour objects
// ];

// const AllTours = () => {
//   const [filters, setFilters] = useState({});

//   const handleFilterChange = (newFilters) => {
//     setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
//   };

//   const filteredTours = useMemo(() => {
//     return tours.filter(tour => {
//       // Apply filtering logic based on filters
//       if (filters.priceRange) {
//         if (tour.price < filters.priceRange[0] || tour.price > filters.priceRange[1]) return false;
//       }
//       if (filters.selectedTourLength && tour.length !== filters.selectedTourLength) return false;
//       if (filters.selectedGroupSize && tour.groupSize !== filters.selectedGroupSize) return false;
//       if (filters.selectedTourType && tour.type !== filters.selectedTourType) return false;
//       if (filters.searchPlace && !tour.place.toLowerCase().includes(filters.searchPlace.toLowerCase())) return false;
//       return true;
//     });
//   }, [filters]);

//   return (
//     <div className="all-tours-page">
//       <FilterComponent onFilterChange={handleFilterChange} />
//       <TourList tours={filteredTours} />
//     </div>
//   );
// };

// export default AllTours;
