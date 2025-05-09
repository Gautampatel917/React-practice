import React, { Component } from 'react'
import RegularComp from './RegularComp';
import MyComponent from './pureComponent';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Gautam'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ name: 'Gautam' });
        }, 2000)
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <MemoComp name={this.state.name} />
                {/*   <RegularComp name={this.state.name} />
                <MyComponent name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComp;
