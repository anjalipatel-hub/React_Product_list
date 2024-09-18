import React from 'react';

const FilterBar = () => {
  // Implement filter logic here
  return (
    <div className="filter-bar">
      <select>
        <option value="">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
      </select>
    </div>
  );
};

export default FilterBar;
