import React, { Component } from 'react'

class ClassCountTwo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((previous) => {
            return {
                count: previous.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>{this.state.count}</button>
            </div>
        )
    }
}

export default ClassCountTwo