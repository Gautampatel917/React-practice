import React from 'react'
import WithCounter from './WithCounter'

const ClickCounter = (props) => {
    const { count, incrementCount } = props
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}

export default WithCounter(ClickCounter);