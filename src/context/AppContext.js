import { createContext, useReducer } from 'react';

// The reducer is in charge of actually creating the new state object based on the actions that it receives.
const AppReducer = (state, action) => {
  // Use a switch statement to determine exactly how to change and update the state:
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        // Copy the current state:
        ...state,
        // Override the expenses with a new array -
        // this new 'expenses' object takes a copy of the current expenses ('...state.expenses')
        // and adds the expense that is taken from the payload ('action.payload', i.e., the expense added and submitted from the form by the user).
        // When this returns, it updates our state in our AppProvider (down below)
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        // Override existing set of expenses with a new set of expenses -
        // use the id received as part of the payload from the action and filter out that id from the existing list of expenses
        // and return that new list;
        // this will return a new array that does not have the expense that was just deleted:
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

// Initial state our context will use when the app loads
const initialState = {
  budget: 3000,
  expenses: [
    { id: 12, name: 'shopping', cost: 40 },
    { id: 13, name: 'vacation', cost: 400 },
    { id: 14, name: 'car repairs', cost: 195 },
  ],
};

export const AppContext = createContext();

// A provider wraps the component that we want to pass certain state values to.
// The app provider is what holds the state and passes it to our components.
export const AppProvider = (props) => {
  // 'useReducer' is similar to 'useState' - it gives us the current state,
  // and also a function to update the state. In this case, it gives us a 'dispatch' function that we'll use to dispatch actions.
  // Whenever we call the 'useReducer' hook, we have to pass it 2 things: a reducer and the initial state: here, 'AppReducer' and 'initialState',
  // so whenever the app first runs, 'state' is going to be equal to whatever the 'initialState' is:
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
