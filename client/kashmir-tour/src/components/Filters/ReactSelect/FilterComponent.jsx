import React, { useState } from 'react';
import Select from 'react-select';
import './FilterComponent.scss';

const priceOptions = [
  { value: 'slider', label: 'Slider' },
  { value: 'range', label: 'Range' }
];

const tourLengthOptions = [
  { value: '1-3 days', label: '1-3 days' },
  { value: '4-7 days', label: '4-7 days' },
  { value: '8-14 days', label: '8-14 days' },
  { value: '15+ days', label: '15+ days' }
];

const groupSizeOptions = [
  { value: '1-5', label: '1-5' },
  { value: '6-10', label: '6-10' },
  { value: '11-20', label: '11-20' },
  { value: '21+', label: '21+' }
];

const placeOptions = [
  { value: 'Gulmarg', label: 'Gulmarg' },
  { value: 'Srinagar', label: 'Srinagar' },
  { value: 'Pahalgam', label: 'Pahalgam' },
  { value: 'Sonmarg', label: 'Sonmarg' },
  { value: 'Ladakh', label: 'Ladakh' },
  { value: 'Bangus', label: 'Bangus' },
  { value: 'Kokernag', label: 'Kokernag' }
];

const tourTypeOptions = [
  { value: 'adventure', label: 'Adventure' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'romantic', label: 'Romantic' }
];

const FilterComponent = ({ onFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState('slider');
  const [priceRange, setPriceRange] = useState([2000, 500000]);
  const [selectedTourLength, setSelectedTourLength] = useState(null);
  const [selectedGroupSize, setSelectedGroupSize] = useState(null);
  const [selectedTourType, setSelectedTourType] = useState(null);
  const [searchPlace, setSearchPlace] = useState(null);

  const handlePriceFilterChange = (selectedOption) => {
    setPriceFilter(selectedOption?.value);
    onFilterChange({
      priceFilter: selectedOption?.value,
      priceRange
    });
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([min, max]);
    onFilterChange({
      priceFilter,
      priceRange: [min, max]
    });
  };

  const clearFilters = () => {
    setPriceFilter('slider');
    setPriceRange([2000, 500000]);
    setSelectedTourLength(null);
    setSelectedGroupSize(null);
    setSelectedTourType(null);
    setSearchPlace(null);
    onFilterChange({
      priceFilter: 'slider',
      priceRange: [2000, 500000],
      tourLength: null,
      groupSize: null,
      searchPlace: null,
      tourType: null,
    });
  };

  return (
    <div className="filter-component">
      <div className='filters-heading'>Filters</div>
      <div className="filter-section">
        <label>Price Filter</label>
        <Select
          options={priceOptions}
          onChange={handlePriceFilterChange}
          value={priceOptions.find((option) => option.value === priceFilter)}
          className="react-select-container"
          classNamePrefix="react-select"
        />
        {priceFilter === 'slider' ? (
          <>
            <input
              type="range"
              min={2000}
              max={500000}
              value={priceRange[0]}
              onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
            />
            <div className="slider-price">₹{priceRange[0].toLocaleString('en-IN')}</div>
          </>
        ) : (
          <div className="price-range">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceRangeChange(priceRange[0], Number(e.target.value))}
            />
          </div>
        )}
      </div>

      <div className="filter-section">
        <label>Tour Length</label>
        <Select
          options={tourLengthOptions}
          onChange={(selectedOption) => {
            setSelectedTourLength(selectedOption);
            onFilterChange({ tourLength: selectedOption?.value });
          }}
          value={selectedTourLength}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div className="filter-section">
        <label>Group Size</label>
        <Select
          options={groupSizeOptions}
          onChange={(selectedOption) => {
            setSelectedGroupSize(selectedOption);
            onFilterChange({ groupSize: selectedOption?.value });
          }}
          value={selectedGroupSize}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div className="filter-section">
        <label>Search By Place</label>
        <Select
          options={placeOptions}
          onChange={(selectedOption) => {
            setSearchPlace(selectedOption);
            onFilterChange({ searchPlace: selectedOption?.value });
          }}
          value={searchPlace}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Search by Place"
        />
      </div>

      <div className="filter-section">
        <label>Tour Type</label>
        <Select
          options={tourTypeOptions}
          onChange={(selectedOption) => {
            setSelectedTourType(selectedOption);
            onFilterChange({ tourType: selectedOption?.value });
          }}
          value={selectedTourType}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <button className="clear-filters-button" onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FilterComponent;
