import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greet}>GreetButton</button>
        </div>
    )
}

export default ChildComponent