import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NameList from './NameList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NameList />
    </>
  )
}

export default App
