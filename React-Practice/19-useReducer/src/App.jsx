import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  if (action.type === 'increment') {
    return state += 1
  }
  if (action.type === 'decrement') {
    return state += 1
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, 0); // initial state is 0

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

export default App;
