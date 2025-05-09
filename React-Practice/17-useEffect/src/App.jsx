import './App.css'
import ClassMouse from './ClassMouse'
import DataFetching from './DataFetching'
import HooksCount from './HooksCount'
import HooksMouse from './HooksMouse'
import IntervalHooksCount from './IntervalHooksCount'
import MouseContainer from './MouseContainer'

function App() {
  return (
    <>
      {/* conditionally rendering */}
      {/* <HooksCount/> */}

      {/* effects only once */}
      {/* <ClassMouse /> */}
      {/* <HooksMouse/> */}

      {/* cleanUp */}
      {/* <MouseContainer /> */}

      {/* incorrect dependency */}
      {/* <IntervalHooksCount /> */}

      {/* Data Fetching */}
      <DataFetching />
    </>
  )
}

export default App
// useEffect is a hook that allows you to perform side effects in function components. It is called after the component renders and can be used for tasks such as data fetching, subscriptions, or manually changing the DOM. 
// The useEffect hook takes two arguments: a function that contains the side effect code and an optional array of dependencies that determines when the effect should run. If the dependencies change, the effect will run again. 
// If the array is empty, the effect will only run once when the component mounts.
// useEffect is a powerful tool for managing side effects in React applications, and it can help you write cleaner and more maintainable code by keeping your side effects separate from your component logic. 
// It is important to note that useEffect runs after the render phase, so it does not block the browser from painting the screen. This makes it a good choice for tasks that do not need to be done immediately, such as data fetching or updating the DOM.