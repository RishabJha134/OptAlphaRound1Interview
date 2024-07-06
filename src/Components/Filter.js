import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={onFilterChange}
        placeholder="Filter by customer name"
      />
    </div>
  );
};

export default Filter;
