import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycle from './LifeCycle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LifeCycle />
    </>
  )
}

export default App
