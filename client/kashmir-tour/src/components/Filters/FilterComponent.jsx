import React, { useState } from 'react';
import Select from 'react-select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
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
  const [searchPlace, setSearchPlace] = useState('');

  const handlePriceFilterChange = (selectedOption) => {
    setPriceFilter(selectedOption.value);
    onFilterChange({ priceFilter: selectedOption.value });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
    onFilterChange({ priceRange: newValue });
  };

  const handleInputChange = () => {
    onFilterChange({
      priceRange: [priceRange[0], priceRange[1]],
      selectedTourLength,
      selectedGroupSize,
      selectedTourType,
      searchPlace
    });
  };

  return (
    <div className="filter-component">
      <div className="filter-section">
        <label>Price Filter</label>
        <Select
          options={priceOptions}
          onChange={handlePriceFilterChange}
          defaultValue={priceOptions[0]}
        />
        {priceFilter === 'slider' ? (
          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={2000}
            max={500000}
            marks
          />
        ) : (
          <div className="price-range">
            <TextField
              label="Min Price"
              type="number"
              value={priceRange[0]}
              onChange={(e) => {
                setPriceRange([Number(e.target.value), priceRange[1]]);
                handleInputChange();
              }}
            />
            <TextField
              label="Max Price"
              type="number"
              value={priceRange[1]}
              onChange={(e) => {
                setPriceRange([priceRange[0], Number(e.target.value)]);
                handleInputChange();
              }}
            />
          </div>
        )}
      </div>

      <div className="filter-section">
        <label>Tour Length</label>
        <Select
          options={tourLengthOptions}
          onChange={(selectedOption) => {
            setSelectedTourLength(selectedOption.value);
            onFilterChange({ selectedTourLength: selectedOption.value });
          }}
          value={tourLengthOptions.find(option => option.value === selectedTourLength)}
        />
      </div>

      <div className="filter-section">
        <label>Group Size</label>
        <Select
          options={groupSizeOptions}
          onChange={(selectedOption) => {
            setSelectedGroupSize(selectedOption.value);
            onFilterChange({ selectedGroupSize: selectedOption.value });
          }}
          value={groupSizeOptions.find(option => option.value === selectedGroupSize)}
        />
      </div>

      <div className="filter-section">
        <label>Search By Place</label>
        <TextField
          label="Place"
          value={searchPlace}
          onChange={(e) => {
            setSearchPlace(e.target.value);
            onFilterChange({ searchPlace: e.target.value });
          }}
        />
      </div>

      <div className="filter-section">
        <label>Tour Type</label>
        <Select
          options={tourTypeOptions}
          onChange={(selectedOption) => {
            setSelectedTourType(selectedOption.value);
            onFilterChange({ selectedTourType: selectedOption.value });
          }}
          value={tourTypeOptions.find(option => option.value === selectedTourType)}
        />
      </div>
    </div>
  );
};

export default FilterComponent;