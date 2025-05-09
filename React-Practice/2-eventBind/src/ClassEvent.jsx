import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Hello, World!'
        }
    }

    clickHandler = () => {
        this.setState({ message: 'Button Clicked!' });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
                <button onClick={() =>  this.clickHandler()}>Click Me</button>
            </div>
        )
    }
}

export default EventBind;