import React, { useState, useEffect } from 'react'

function HooksMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('mousemove');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect calls');
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log('component unmount code');
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [logMousePosition]) // calls the useEffect only once when component is initialize 

    return (
        <div>
            <h1>
                X- {x} <br />
                Y- {y}
            </h1>
        </div>
    )
}

export default HooksMouse