import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  // Create a ref to store a reference to the first button's DOM node
  const firstButtonRef = useRef(null);

  let val = useRef(0);

  function handleClick() {
    val.current = val.current + 1;
    console.log('value of val is : ' + val.current);
    setCount(count + 1);
  }

  function handleSecondButtonClick() {
    // Using the ref to directly change the first button's background color
    if (firstButtonRef.current) {
      firstButtonRef.current.style.backgroundColor = 'lightblue';
    }
  }

  useEffect(() => {
    console.log('rendering is complete now!');
  });
  
  return (
    <>
      <h1>{count}</h1>
      {/* Attach the ref to the first button */}
      <button ref={firstButtonRef} onClick={handleClick}>
        First Button
      </button> <br/>
      {/* Clicking this button changes the first button's style using the ref */}
      <button onClick={handleSecondButtonClick}>
        Change First Button Color
      </button>
    </>
  );
}

export default App;
