import './App.css'
import Portal from './Portal'

function App() {

  return (
    <>
      <Portal />
    </>
  )
}

export default App
/* 
summary:
- The Portals is a popular method for rendering React components outside of the main DOM hierarchy.
It allows for better control over component positioning and can be useful for modals, tooltips, and overlays.
- This technique helps in avoiding CSS conflicts and improving performance by reducing the number of elements in the main DOM tree.
- To use React Portals, you need to import the 'createPortal' function from 'react-dom' and then use it to render your component into a different part of the DOM tree.
 */