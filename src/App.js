import React from 'react';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import 'bootstrap/dist/css/bootstrap.min.css';

// Video: https://www.youtube.com/watch?v=aeYxBd1it7I
// Code: https://github.com/chrisblakely01/react-budget-app

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>Budget Tracker</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
