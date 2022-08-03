import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  return (
    <li class='list-group-item d-flex justify-content-between align-items-center'>
      {props.name}
      <div>
        <span class='badge rounded-pill text-bg-primary mr-3'>
          ${props.cost}
        </span>
        <TiDelete onClick={handleDeleteExpense} size='1.5em' />
      </div>
    </li>
  );
};

export default ExpenseItem;
