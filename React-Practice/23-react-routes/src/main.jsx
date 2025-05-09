import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import User from './component/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
// errorElement: <ErrorPage/>  errorElement: redirect all unknown router to the this component
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       }]
//   }
// ])
const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="user/:userId" element={<User />} />
    </Route>
  )
))

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)