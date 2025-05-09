import React, { Component } from 'react'

export default class RefsComp extends Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    //by using this we no need to current property to focus
    if (this.cbRef) {
      this.cbRef.focus();
    }
    console.log('Component mounted and callback ref is set.')
    // this.inputRef.current.focus()
    // console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

/* 
📌 Summary

    This component demonstrates two types of refs in React: createRef() and callback ref.

    On mount, the second input (callback ref) gets focused.

    On button click, the value of the first input (created using createRef) is shown in an alert.

    Useful for direct DOM manipulations, like focusing input fields or reading input values.
 */