import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    componentDidMount() {
        window.addEventListener('mouseover', this.logMousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <div>
                <h1>
                    X- {this.state.x} <br />
                    Y- {this.state.x}
                </h1>
            </div>
        )
    }
}

export default ClassMouse