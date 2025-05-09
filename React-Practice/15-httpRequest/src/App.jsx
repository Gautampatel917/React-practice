import { useState } from 'react'
import './App.css'
import PostForm from './PostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PostList /> */}
      <PostForm />
    </>
  )
}

export default App