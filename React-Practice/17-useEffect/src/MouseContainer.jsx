import React, { useState, useEffect } from 'react'
import HooksMouse from './HooksMouse';

function MouseContainer() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay((previous) => previous ? false : true)}>Change the state</button>
            {display && <HooksMouse />}
        </div>
    )
}

export default MouseContainer