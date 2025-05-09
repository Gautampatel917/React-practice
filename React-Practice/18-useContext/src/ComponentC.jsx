import React, { Component } from 'react'
import ComponentE from './ComponentE'

class ComponentC extends Component {
    static propTypes = {}

    render() {
        return <ComponentE />
    }
}

export default ComponentC