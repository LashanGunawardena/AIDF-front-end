import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navigation = () => {
  return (
    <nav className='flex py-12 justify-between items-center'>
      <div>
        <Link to={"/"} className='text-4xl font-medium text-underlay-1'>
          HirelyAI
        </Link>
      </div>
      <div className='flex justify-center gap-x-8 items-center'>
        <Link to={"/"}>Home</Link>
        {/* <Link to={"/job"}>Jobs</Link> */}
        <div className='flex gap-x-4 items-center'>
          <Link to={"/signIn"}>Sign In</Link>
          <Button asChild>
            <Link to={"/signUp"}>Sign Up</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation