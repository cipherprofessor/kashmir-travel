import React, { useState, useCallback, useMemo } from 'react';
import Select from 'react-select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import './FilterComponent.scss';

const FilterComponent = React.memo(({ onFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState('slider');
  const [priceRange, setPriceRange] = useState([2000, 500000]);
  const [selectedTourLength, setSelectedTourLength] = useState(null);
  const [selectedGroupSize, setSelectedGroupSize] = useState(null);
  const [selectedTourType, setSelectedTourType] = useState(null);
  const [searchPlace, setSearchPlace] = useState('');

  const handlePriceFilterChange = useCallback((selectedOption) => {
    setPriceFilter(selectedOption.value);
    onFilterChange({ priceFilter: selectedOption.value });
  }, [onFilterChange]);

  const handlePriceRangeChange = useCallback((event, newValue) => {
    setPriceRange(newValue);
    onFilterChange({ priceRange: newValue });
  }, [onFilterChange]);

  const handleTourLengthChange = useCallback((selectedOption) => {
    setSelectedTourLength(selectedOption.value);
    onFilterChange({ selectedTourLength: selectedOption.value });
  }, [onFilterChange]);

  const handleGroupSizeChange = useCallback((selectedOption) => {
    setSelectedGroupSize(selectedOption.value);
    onFilterChange({ selectedGroupSize: selectedOption.value });
  }, [onFilterChange]);

  const handleTourTypeChange = useCallback((selectedOption) => {
    setSelectedTourType(selectedOption.value);
    onFilterChange({ selectedTourType: selectedOption.value });
  }, [onFilterChange]);

  const handleSearchPlaceChange = debounce((e) => {
    setSearchPlace(e.target.value);
    onFilterChange({ searchPlace: e.target.value });
  }, 300);

  return (
    <div className="filter-component">
      {/* Price Filter */}
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
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            />
            <TextField
              label="Max Price"
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            />
          </div>
        )}
      </div>

      {/* Tour Length */}
      <div className="filter-section">
        <label>Tour Length</label>
        <Select
          options={tourLengthOptions}
          onChange={handleTourLengthChange}
          value={tourLengthOptions.find(opt => opt.value === selectedTourLength)}
        />
      </div>

      {/* Group Size */}
      <div className="filter-section">
        <label>Group Size</label>
        <Select
          options={groupSizeOptions}
          onChange={handleGroupSizeChange}
          value={groupSizeOptions.find(opt => opt.value === selectedGroupSize)}
        />
      </div>

      {/* Search By Place */}
      <div className="filter-section">
        <label>Search By Place</label>
        <TextField
          label="Place"
          value={searchPlace}
          onChange={handleSearchPlaceChange}
        />
      </div>

      {/* Tour Type */}
      <div className="filter-section">
        <label>Tour Type</label>
        <Select
          options={tourTypeOptions}
          onChange={handleTourTypeChange}
          value={tourTypeOptions.find(opt => opt.value === selectedTourType)}
        />
      </div>
    </div>
  );
});

export default FilterComponent;
