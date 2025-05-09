import React, { useState, useEffect } from 'react'

function IntervalHooksCount() {
    const [count, setCount] = useState(0);

    const tick = () => {
        // setCount(count + 1); // you need dependency [count] in useEffect
        setCount(previous => previous + 1); // no need dependency to use
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHooksCount