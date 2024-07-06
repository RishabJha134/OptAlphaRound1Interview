import React from 'react';

const CustomerSpending = ({ totalSpendingPerCustomer }) => {
  return (
    <div>
      <h2>Total Spending per Customer</h2>
      <ul>
        {Object.entries(totalSpendingPerCustomer).map(([customer, total]) => (
          <li key={customer}>
            {customer}: ${total}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerSpending;
