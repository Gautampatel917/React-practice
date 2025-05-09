import React, { Component } from 'react'

class BuggyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            triggerError: false
        }
    }

    clickHandler = () => {
        this.setState({ triggerError: true });
    }

    render() {
        if (this.state.triggerError) {
            throw new Error("BuggyComponent triggered error");
        }

        return (
            <div>
                <h1>No error yet.</h1>
                <button onClick={this.clickHandler}>
                    Trigger Error
                </button>
            </div>
        )
    }
}

export default BuggyComponent