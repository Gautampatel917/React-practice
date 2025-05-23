import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onclick={increase}>+</button>
      <button onclick={decrease}>-</button>
    </div>
  );
}

export default App;
