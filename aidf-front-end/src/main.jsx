import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import HomePage from "./pages/home/homepage.jsx"
import JobPage from "./pages/job/jobpage.jsx"
import SignInPage from "./pages/signInPage"
import SignUpPage from "./pages/signUpPage"
import RootLayout from "./layouts/root.layout.jsx"
import MainLayout from "./layouts/main.layout.jsx"

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        element: <MainLayout/>,
        children: [
          {
            path: "/",
            element: <HomePage/>
          },
          {
            path: "/job/:id",
            element: <JobPage/>
          },
        ]
      },
      {
        path: "/signIn",
        element: <SignInPage/>
      },
      {
        path: "/signUp",
        element: <SignUpPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

