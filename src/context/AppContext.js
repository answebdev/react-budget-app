import { createContext, useReducer } from 'react';

// The reducer is in charge of actually creating the new state object based on the actions that it receives.
const AppReducer = (state, action) => {
  // Use a switch statement to determine exactly how to change and update the state:
  switch (action.type) {
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
