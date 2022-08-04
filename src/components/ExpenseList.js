import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <div style={{ marginBottom: '80px' }}>
      <ul class='list-group'>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
