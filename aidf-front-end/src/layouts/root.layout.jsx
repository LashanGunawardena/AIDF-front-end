import { Outlet } from 'react-router-dom'
import Navigation from '../components/shared/Navigation.jsx'
import React from 'react'

const rootLayout = () => {
  return (
    <main className='container mx-auto px-12'>
      <Outlet/>
    </main>
  )
}

export default rootLayout