import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return <div>
        <input type="text" placeholder="Enter text here" ref={ref}/>  { /* ref is used to refer to parent input element */}
    </div>
})

export default FRInput