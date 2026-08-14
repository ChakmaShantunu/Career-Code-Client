import { use } from "react";
import JobCard from "../Shared/JobCard";


const HotJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);
    console.log(jobs);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-24'>Hot Jobs of the day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                {
                    jobs.map((job) => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;