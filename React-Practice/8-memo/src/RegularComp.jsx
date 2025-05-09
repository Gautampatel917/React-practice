import React, { Component } from 'react'

export default class RegularComp extends Component {
    render() {
        return (
            <div>
                <h1>
                    Regular Component, {this.props.name}
                </h1>
            </div>
        )
    }
}
