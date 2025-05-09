import React, { Component } from 'react';

// Example of attaching ref directly to a class component
class MyClassComponent extends Component {
  focusInput() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  render() {
    return (
      <input
        type="text"
        ref={(el) => (this.inputRef = el)}
        placeholder="Input inside class component"
      />
    );
  }
}

// Wrapper function component to forward ref to class component instance
const ForwardedClassComponent = React.forwardRef((props, ref) => {
  return <MyClassComponent {...props} refInstance={ref} />;
});

// Usage example of forwarding ref through wrapper
class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.classCompRef = React.createRef();
  }

  componentDidMount() {
    // Access class component instance methods or properties
    if (this.classCompRef.current) {
      this.classCompRef.current.focusInput();
    }
  }

  render() {
    return (
      <div>
        {/* Direct ref to class component instance */}
        <MyClassComponent ref={this.classCompRef} />

        {/* Forwarded ref through wrapper */}
        <ForwardedClassComponent ref={this.classCompRef} />
      </div>
    );
  }
}

export default ParentComponent;
