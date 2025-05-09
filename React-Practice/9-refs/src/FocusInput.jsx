import React, { Component } from 'react'
import Input from './input'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler} style={{backgroundColor: 'blue'}}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput

/* 
This component allows you to focus on the input field when the button is clicked.
* @component
* This component utilizes a ref to directly access the input field's focus method.
* @example
* <FocusInput /> renders an input field and a button that focuses the input when clicked.
* @returns {void} - This method does not return a value.
* @param {Object} props - The props passed to the component.
* @param {React.Ref} componentRef - A ref to access the input component directly.
 */