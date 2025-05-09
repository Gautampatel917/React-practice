import React from 'react'
import Counter from './Counter'

function ClickCounter() {
    return (
        <Counter
            render={(count, incrementCount) => (
                <>
                    <h1>Counter: {count}</h1>
                    <button onClick={incrementCount}>Click me</button>
                </>
            )}
        />
    )
}

export default ClickCounter;
