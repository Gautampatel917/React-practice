import React, { Component } from 'react'

class Practice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            triggerError: false
        }
    }

    clickHandler = () => {
        this.setState(() => {
            this.triggerError = true;
        })
    };

    render() {
        if (this.state.triggerError) {
            throw new Error("Error triggered");
        }

        return (
            <div>
                <button onClick={this.clickHandler}>ClickHere</button>
            </div>
        )
    }
}

export default Practice