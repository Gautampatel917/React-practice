import React from 'react'
import './App.css'
import ComponentC from './ComponentC'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <>
      <UserContext.Provider value={'Gautam'}>
        <ChannelContext.Provider value={'ChannelContextValue'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App

/* 
Summary
- context provide a way to share state and behavior between components without having to pass props down manually at every level.
- React Context API allows for easier state management and reduces prop drilling.
- It enables components to subscribe to context changes, making them responsive to state updates.
- The Context API is particularly useful for global state management, such as user authentication, theme settings, or language preferences.
<
Usage of the Context API in React involves creating a context, providing it at a higher level in your component tree, and consuming it in child components using the `useContext` hook or the `Context.Consumer` component.
To create a context, use `
<
const MyContext = React.createContext();
 */