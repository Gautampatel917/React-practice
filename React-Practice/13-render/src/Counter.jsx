import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    render() {
        // FIX: Pass the current count state, not this.count which is undefined
        return this.props.render(this.state.count, this.incrementCount);
    }
}

export default Counter
