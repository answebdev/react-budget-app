import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const expenses = [
    { id: 123456, name: 'Shopping', cost: 50 },
    { id: 212123, name: 'Vacation', cost: 300 },
    { id: 434341, name: 'Transportation', cost: 70 },
    { id: 343653, name: 'Gas', cost: 40 },
    { id: 353557, name: 'Child Care', cost: 500 },
  ];

  return (
    <ul class='list-group mt-3 mb-3'>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
