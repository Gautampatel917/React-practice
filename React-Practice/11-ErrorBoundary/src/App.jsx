import './App.css'
import ErrorBoundary from './ErrorBoundary'
import BuggyComponent from './BuggyComponent'
import MyComponent from './MyComponent'


function App() {

  return (
    <>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </>
  )
}

export default App

/* 
Summary
- Error boundaries are React components that catch JavaScript error in their child component tree, log those errors, and display a fall-back I-Jl.
- A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
- The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back IJI or just the component causing the problem.
Provide a way to gracefully handle error in application code.
 */