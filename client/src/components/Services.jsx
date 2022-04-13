import React from "react";

const Services = () => {
    const strorageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = React.useState('')
    const [jobs, setJobs] = React.useState(strorageJobs??[])
   const handleSubmit = () => {
       setJobs(prev => {
           const  newJobs = [...prev, job];
           const jsonJobs = JSON.stringify(newJobs)
           localStorage.setItem('jobs', jsonJobs)
           return newJobs
       })
       setJob('')
   }
    return (
        <div className="p-4">
            <input type="text" value={job} className="border-2" onChange={e => setJob(e.target.value)}/>
            <button className="border-2" onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Services;