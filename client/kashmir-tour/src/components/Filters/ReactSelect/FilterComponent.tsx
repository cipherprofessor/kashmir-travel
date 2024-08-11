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

const tourTypeOptions = [
  { value: 'adventure', label: 'Adventure' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'luxury', label: 'Luxury' },
  { value: 'romantic', label: 'Romantic' }
];

interface FilterComponentProps {
  onFilterChange: (filters: any) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  const [priceFilter, setPriceFilter] = useState<string | null>('slider');
  const [priceRange, setPriceRange] = useState<[number, number]>([2000, 500000]);
  const [selectedTourLength, setSelectedTourLength] = useState<string | null>(null);
  const [selectedGroupSize, setSelectedGroupSize] = useState<string | null>(null);
  const [selectedTourType, setSelectedTourType] = useState<string | null>(null);
  const [searchPlace, setSearchPlace] = useState<string>('');

  const handlePriceFilterChange = (selectedOption: any) => {
    setPriceFilter(selectedOption?.value);
    onFilterChange({ priceFilter: selectedOption?.value });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    setPriceRange([min, max]);
    onFilterChange({ priceRange: [min, max] });
  };

  return (
    <div className="filter-component">
      <div className="filter-section">
        <label>Price Filter</label>
        <Select
          options={priceOptions}
          onChange={handlePriceFilterChange}
          defaultValue={priceOptions[0]}
          className="react-select-container"
          classNamePrefix="react-select"
        />
        {priceFilter === 'slider' ? (
          <input
            type="range"
            min={2000}
            max={500000}
            value={priceRange[0]}
            onChange={(e) => handlePriceRangeChange(Number(e.target.value), priceRange[1])}
          />
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
          onChange={(selectedOption: any) => {
            setSelectedTourLength(selectedOption?.value);
            onFilterChange({ tourLength: selectedOption?.value });
          }}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div className="filter-section">
        <label>Group Size</label>
        <Select
          options={groupSizeOptions}
          onChange={(selectedOption: any) => {
            setSelectedGroupSize(selectedOption?.value);
            onFilterChange({ groupSize: selectedOption?.value });
          }}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>

      <div className="filter-section">
        <label>Search By Place</label>
        <input
          type="text"
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
          onChange={(selectedOption: any) => {
            setSelectedTourType(selectedOption?.value);
            onFilterChange({ tourType: selectedOption?.value });
          }}
          className="react-select-container"
          classNamePrefix="react-select"
        />
      </div>
    </div>
  );
};

export default FilterComponent;
