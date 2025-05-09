import PropTypes from 'prop-types'
import React, { Component } from 'react'

class FRInput extends Component {
    constructor(props) {
        const { ref } = this.props
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.ref} />
            </div>
        )
    }
}

export default FRInput