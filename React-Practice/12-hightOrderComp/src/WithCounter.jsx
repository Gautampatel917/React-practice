import React from 'react'

const WithCounter = (WrappedComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => (
                { count: prevState.count + 1 }
            ));
        }

        render() {
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount} {...this.props} />
                // ... Spread operator is used to pass all props from the parent component to the wrapped component.
                // This allows the wrapped component to receive any additional props that were passed to the HOC.
            )
        }
    }

    return WithCounter;
}

export default WithCounter