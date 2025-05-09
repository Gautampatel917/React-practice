import React, { useState, useCallback, useMemo } from 'react';
import './App.css';

// ChildButton is a memoized component that only re-renders when its props change
const ChildButton = React.memo(({ onClick }) => {
  console.log('🔄 ChildButton rendered');
  return (
    <button onClick={onClick}>
      Increment from Child
    </button>
  );
});

function App() {
  // State for the main count
  const [count, setCount] = useState(0);
  // State for a multiplier input
  const [multiplier, setMultiplier] = useState(2);

  // useCallback returns a memoized version of the callback
  // It changes only if its dependencies array changes
  const increment = useCallback(() => {
    console.log('🔔 increment callback called');
    setCount(c => c + 1);
  }, []); // [] means this function is created once and never changes

  // useMemo caches the result of an expensive calculation
  // It re-computes only when `count` or `multiplier` change
  const multipliedValue = useMemo(() => {
    console.log('⏳ Running expensive calculation...');
    // Simulate heavy work
    let result = 0;
    for (let i = 0; i < 1e8; i++) {
      // no-op
    }
    return count * multiplier;
  }, [count, multiplier]);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      {/* Passing memoized callback to child prevents unnecessary re-renders */}
      <ChildButton onClick={increment} />

      <div style={{ marginTop: '1rem' }}>
        <label>
          Multiplier:
          <input
            type="number"
            value={multiplier}
            onChange={e => setMultiplier(+e.target.value)}
          />
        </label>
      </div>

      <h2>Multiplied Value (memoized): {multipliedValue}</h2>
    </div>
  );
}

export default App;