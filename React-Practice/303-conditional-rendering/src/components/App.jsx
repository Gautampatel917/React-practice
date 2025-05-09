import React from "react";
import Login from "./Login";

var isLoggedIN = true;
function renderConditionally() {
  if (isLoggedIN) {
    return <h1>Hello, User</h1>
  }
  return (
    <Login isLoggedIN={isLoggedIN} />
  )
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
