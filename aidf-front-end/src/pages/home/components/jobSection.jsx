import React from 'react'
import JobCard from '@/components/shared/JobCard'

const jobSection = () => {
  return (
    <section className='py-8'>
        <div className='mt-4 flex flex-col gap-y-8'>
            <JobCard/>
        </div>
    </section>
  )
}

export default jobSection