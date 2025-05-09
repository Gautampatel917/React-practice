import React, { PureComponent } from 'react'

class MyComponent extends PureComponent {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default MyComponent;