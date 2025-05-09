import React, { useState } from 'react'

function HooksCount() {
    const [count, setCount] = useState(0);
    /* 
    Rules of Hooks
        "Only Call Hooks at the Top Level"
       - Don't call Hooks inside loops, conditions, or nested functions
        "Only Call Hooks from React Functions"
       - Call them from within React functional components and not just any regular
        JavaScript function
     */

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default HooksCount