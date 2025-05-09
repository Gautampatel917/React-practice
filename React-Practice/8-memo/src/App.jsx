import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComp from './ParentComp'

function App() {

  return (
    <>
      <ParentComp />
    </>
  )
}

export default App

/* Summary
- memo is a higher-order component that optimizes performance by memoizing the result of a component's render based on its props
It prevents unnecessary re-renders, ensuring that the component only updates when its props change.
- This can lead to improved performance, especially in cases where the component is expensive to render or when it receives frequent updates that do not affect its output.
In React, you can use memo by wrapping your component with `React.memo(ComponentName)`. This allows React to skip rendering the component if the props have not changed, thus enhancing efficiency.
Additionally, memo can be used in conjunction with other hooks like useCallback and useMemo to further optimize performance by ensuring that functions and values are only recreated when necessary.
*/