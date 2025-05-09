import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
        //* This lifecycle method is called when an error is thrown in a child component.
        //* It allows you to update the state of the ErrorBoundary component to indicate that an error has occurred.
        //* The method receives the error as an argument and can return an object to update the state.
        //* In this case, it sets the hasError state to true, which can be used to conditionally render a fallback UI.
    }

    componentDidCatch(error, info) {
        // ERROR: Logging error and info together may cause component stack info to not display properly
        // Suggested fix: Log error and component stack separately
        console.error("Error caught in ErrorBoundary:", error);
        console.error("Component stack:", info.componentStack);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children
    }
}

export default ErrorBoundary