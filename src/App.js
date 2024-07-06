import React, { useState, useEffect, useMemo } from "react";
import TransactionList from "./Components/TransactionList";
import CustomerSpending from "./Components/CustomerSpending";
import TopCustomer from "./Components/TopCustomer";
import Filter from "./Components/Filter";

const transactions = [
  { id: "t_01", customer: "Rose Roberts", amount: 84 },
  { id: "t_02", customer: "Chris Cook", amount: 30 },
  { id: "t_03", customer: "Mary Martin", amount: 42 },
  { id: "t_04", customer: "Susan Smith", amount: 26 },
  { id: "t_05", customer: "Rose Roberts", amount: -84 },
  { id: "t_06", customer: "Rose Roberts", amount: 48 },
  { id: "t_07", customer: "Susan Smith", amount: 104 },
  { id: "t_08", customer: "Larry Lewis", amount: 140 },
  { id: "t_09", customer: "Mary Martin", amount: 10 },
  { id: "t_10", customer: "Chris Cook", amount: 60 },
  { id: "t_11", customer: "Susan Smith", amount: -26 },
  { id: "t_12", customer: "Larry Lewis", amount: -140 },
  { id: "t_13", customer: "Rose Roberts", amount: 26 },
  { id: "t_14", customer: "Ryan Roberts", amount: 44 },
];

const App = () => {
  const [filter, setFilter] = useState(localStorage.getItem("filter") || "");

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.customer.toLowerCase().includes(filter.toLowerCase())
  );

  const totalSpendingPerCustomer = transactions.reduce(
    (acc, { customer, amount }) => {
      acc[customer] = (acc[customer] || 0) + amount;
      return acc;
    },
    {}
  );

  
  const topCustomer = Object.entries(totalSpendingPerCustomer).reduce(
    (max, [customer, total]) => (total > max.total ? { customer, total } : max),
    { customer: "", total: 0 }
  );

  return (
    <div className="App">
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <TransactionList transactions={filteredTransactions} />
      <CustomerSpending totalSpendingPerCustomer={totalSpendingPerCustomer} />
      <TopCustomer topCustomer={topCustomer} />
    </div>
  );
};

export default App;
