import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Gautam"
        }
        console.log('LifeCycle Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycle getDerivedStateFromProps')
    }

    componentDidMount() {
        console.log('LifeCycle componentDidMount');
    }

    render() {
        console.log('LifeCycle render');
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>)
    }
}

export default LifeCycle