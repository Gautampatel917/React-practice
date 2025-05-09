import './App.css'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

function App() {

  return (
    <>
      <ClickCounter />
      <HoverCounter />
    </>
  )
}

export default App

/* 
Summary
- Render HOC is a higher-order component that enhances the functionality of the wrapped component 
  by providing additional props or state management capabilities.
- It can modify the behavior, style, or data of the component it wraps.
- This allows for greater reusability and separation of concerns in React applications.
- Higher-order components can be used for cross-cutting concerns like logging, analytics, or theming.
- They are typically created by composing a function that takes a component as an argument 
  and returns a new component that wraps the original component, passing in the desired props or state.
  const withEnhancedFunctionality = (WrappedComponent) => {
    return function EnhancedComponent(props) {
      // Add additional props or state management here
      return <WrappedComponent {...props} />;
    };
};
 */