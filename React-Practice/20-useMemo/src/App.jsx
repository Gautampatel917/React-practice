import { useState, useMemo } from 'react';
import './App.css';

// Simulate a heavy calculation
function expensiveTask(num) {
  console.log('🏃‍♂️ expensiveTask is running with', num);
  const start = performance.now();
  // pretend this loop does a ton of work
  for (let i = 0; i < 1e9; i++) { }
  const result = num * 2;
  const duration = (performance.now() - start).toFixed(2);
  console.log(`⏱expensiveTask(${num}) took ${duration} ms`);
  return result;
}

function App() {
  // Store the input value as a number
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  // Memoize based on inputValue
  // — expensiveTask only re-runs when inputValue changes
  const doubled = useMemo(
    () => expensiveTask(inputValue),
    [inputValue]
  );

  return (
    <div className="App">
      <h1> count: {count}</h1>
      <button onClick={e => setCount(count + 1)}>click me</button> <br /><br />
      <label>
        Enter a number:
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(+e.target.value)}
        />
      </label>

      <h1>Double (memoized): {doubled}</h1>
    </div>
  );
}

export default App;