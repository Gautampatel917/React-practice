import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ParentName: 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);
    }
    // Method to greet the parent component
    // This method is passed as a prop to the child component
    // and is called when the child component is clicked
    // The method uses the state of the parent component to display a message

    // for passing the method as a prop to the child component

    greetParent() {
        alert(`Hello from ${this.state.ParentName}`)
    }

    render() {
        return (
            <div>
                {/* Render child components here */}
                <ChildComponent greet={this.greetParent} />
            </div>
        );
    }
}

export default ParentComponent