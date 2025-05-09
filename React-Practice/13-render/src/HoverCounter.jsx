import React from 'react'
import Counter from './Counter'

function HoverCounter() {
    return (<Counter
        render={(count, incrementCount) => (
            <>
                <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
            </>
        )}
    />)
}

export default HoverCounter