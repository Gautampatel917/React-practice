import React, { useState } from 'react'

function HooksFour() {
    const [items, setItem] = useState([]);

    const setItemFunction = () => {
        setItem([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) * 1
        }])
        console.log(items);
    }

    return (
        <>
            <button onClick={setItemFunction}>
                AddNumber
            </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </>
    )
}

export default HooksFour