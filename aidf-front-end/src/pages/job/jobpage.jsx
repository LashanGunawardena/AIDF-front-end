import React from 'react'
import { useParams } from 'react-router-dom'

const jobpage = () => {
  const params = useParams;

  // if(params.id === "abc") {
  //   return (
  //     <main className="p-4">
  //         <h1 className="text-2xl">Job Page With ABC</h1>
  //         <p>{params.id}</p>
  //     </main>
  //   )
  // }

  return (
    <main className="p-4">
        <h1 className="text-2xl">Job Page</h1>
        <p>{params.id}</p>
    </main>
  )
}

export default jobpage