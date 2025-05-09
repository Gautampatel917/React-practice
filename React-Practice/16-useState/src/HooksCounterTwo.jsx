import React, { useState } from 'react'

function HooksCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(0);

    const incrementFive = () => {
        for (let index = 0; index < 5; index++) {
            setCount((previous) => previous + 5)
        }
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment by 5</button>
        </div>
    )
}

export default HooksCounterTwo