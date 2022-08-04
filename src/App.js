import React, { useState } from 'react';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Video: https://www.youtube.com/watch?v=aeYxBd1it7I
// Code: https://github.com/chrisblakely01/react-budget-app

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppProvider>
      <div className={`container ${darkMode && 'dark-mode'}`}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <h1 className='mt-3'>Budget Tracker</h1>
          </div>
          <div>
            {' '}
            <button
              onClick={() => handleToggleDarkMode()}
              // class='btn btn-primary'
              className='toggle'
            >
              Toggle Mode
            </button>
          </div>
        </div>
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
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
          <div className='col-sm'>
            <AddExpenseForm />
          </div>
        </div>
        <h3 className='mt-3'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
