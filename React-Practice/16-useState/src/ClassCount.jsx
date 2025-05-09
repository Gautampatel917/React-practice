import React, { Component } from 'react'

class ClassCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementValue = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementValue}>{this.state.count}</button>
            </div>
        )
    }
}

export default ClassCount