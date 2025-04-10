import { Outlet } from "react-router-dom"
import Navigation from "./../components/shared/Navigation.jsx"
import React from 'react'

const mainLayout = () => {
  return (
    <main>
        <Navigation/>
        <Outlet/>
    </main>
  )
}

export default mainLayout