import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './parentComp'

function App() {

  return (
    <>
      <ParentComp />
    </>
  )
}

export default App

/* Summary
We can create a component by extending the PureComponent class.
A PureComponent implements the shouldComponentUpdate lifecycle method by performing a
shallow comparison on the props and state of the component.
If there is no difference, the component is not re - rendered — performance boost.
It is a good idea to ensure that all the children components are also pure to avoid unexpected behavior.
Never mutate the state.Always return a new object that reflects the new state. */