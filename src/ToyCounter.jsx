

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_BALL } from './ToyManager'; // Import the action type

function ToyCounter() {
  const redBalls = useSelector(state => state.red);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Red balls: {redBalls}</p>
      <button onClick={() => dispatch({ type: ADD_BALL, colour: 'red' })}>
        Add Red Ball
      </button>
    </div>
  );
}

export default ToyCounter;
