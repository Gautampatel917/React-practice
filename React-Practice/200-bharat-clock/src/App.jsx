import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClockHeading from './component/ClockHeading'
import ClockSlogan from './component/ClockSlogan'
import CurrentTime from './component/CurrentTime'

function App() {

  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  )
}

export default App
