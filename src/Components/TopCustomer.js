import React from 'react';

const TopCustomer = ({ topCustomer }) => {
  return (
    <div>
      <h2>Top Customer</h2>
      <p>
        {topCustomer.customer}: ${topCustomer.total}
      </p>
    </div>
  );
};

export default TopCustomer;
