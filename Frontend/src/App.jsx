import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
