import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state: number, action: string) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  /* usereducer returns current state and dipatch method. 
  it takes reducer method and initial state
   and 3rd optional state which can be dynamic.
  Plain and simple, it allows functional components
  in React access to reducer functions from your state management. */
  return (
    <div>
      <label>{state}</label>
      <button className="btn btn-primary" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button className="btn btn-danger" onClick={() => dispatch("reset")}>
        Reset
      </button>
    </div>
  );
};

export default UseReducerComponent;
