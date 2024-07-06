import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map(({ id, customer, amount }) => (
          <li key={id}>
            {customer}: ${amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
