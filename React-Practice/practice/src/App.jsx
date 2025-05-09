import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FRParent from './FRParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FRParent />
    </>
  )
}

export default App
