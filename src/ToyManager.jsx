

import { createStore } from 'redux';

// Define actions
const ADD_BALL = 'ADD_BALL';

// Define reducer
function toyReducer(state = { red: 0, blue: 0, green: 0 }, action) {
  switch (action.type) {
    case ADD_BALL:
      return { ...state, [action.colour]: state[action.colour] + 1 };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(toyReducer);

export default store;
