import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className='navbar'>
      <div className="logo">
        <h1>Todo App</h1>
      </div>
      <ul className='flex space-x-4'>
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                : 'text-gray-600 hover:text-blue-500 hover:cursor-pointer'
            }>Home</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink
                to="/todos"
                end
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-blue-500'
                }
              >
                Todos
              </NavLink>
            </li>
            <li>
              <button
                onClick={logout}
                className='text-gray-600 hover:text-red-500'
              >
                Logout
              </button>
            </li>
          </>) : (
          <>
            <li>
              <NavLink
                to="/login"
                end
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-blue-600'
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                end
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-blue-600'
                }
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar