import React, { useState } from 'react'

function HooksThree() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })} //...name means copy all property from name and overWrite with new value
                />
                <h1>Your First name: {name.firstName}</h1>
                <h1>Your Last name: {name.lastName}</h1>
                <h1>{JSON.stringify(name)}</h1>
            </form>
        </div>
    )
}

export default HooksThree