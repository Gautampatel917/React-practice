import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassCount from './ClassCount'
import HooksCount from './HooksCount'
import HooksCounterTwo from './HooksCounterTwo'
import ClassCountTwo from './ClassCountTwo'
import HooksThree from './HooksThree'
import HooksFour from './HooksFour'

function App() {

  return (
    <>
      {/* simple useState */}
      {/* <ClassCount />*/}
      {/* <HooksCount/> */}

      {/* useState with loops */}
      {/* <HooksCounterTwo /> */}
      {/* <ClassCountTwo /> */}

      {/* useState with Object */}
      {/* <HooksThree /> */}

      {/* useState with Array */}
      <HooksFour />
    </>
  )
}

export default App

/* 
Summary - useState
- The useState hook lets you add state to functional components In classes, the state is always an object.
With the useState hook, the state doesn't have to be an object.
- The useState hook returns an array with 2 elements.
- The first element is the current value of the state, and the second element is a state setter
function.
- New state value depends on the previous state value? You can pass a function to the setter
function.
- When dealing with objects or arrays, always make sure to spread your state variable and then
call the setter function
 */