import React, { useEffect, useState } from 'react'

function HooksCount() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updating document title')
        document.title = `you clicked ${count}`;
    }, [count]); // conditionally rendering if perticulare state is change.

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>count {count}</button>
        </div>
    )
}

export default HooksCount