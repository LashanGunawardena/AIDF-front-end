import React from 'react'
import JobCard from '@/components/shared/JobCard'

const jobSection = () => {
    const jobs = [
        {
            _id: '1',
            title: 'Software Engineer',
            type: 'Full-time',
            location: 'New York, NY',
        },
        {
            _id: '2',
            title: 'Data Scientist',
            type: 'Part-time',
            location: 'San Francisco, CA',
        },
        {
            _id: '3',
            title: 'Product Manager',
            type: 'Contract',
            location: 'Remote',
        },
    ];

    return (
        <section className='py-8'>
            <div className='mt-4 flex flex-col gap-y-8'>
                {
                    jobs.map((job) => (
                       <JobCard 
                            title={job.title} 
                            _id={job._id} 
                            type={job.type} 
                            location={job.location}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default jobSection