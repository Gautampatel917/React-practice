import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home'; // Assuming Home shows Todos
import Navbar from './component/Navbar';
import { AuthProvider } from './context/AuthContext'; // Wrap app in Auth context
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />          {/* shows todo list */}
          </Route>

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
