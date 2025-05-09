import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure this is the right import for React 18+
import App from './App';
import { AuthProvider } from './context/AuthContext';

// This is what you're missing:
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
