import React, { use } from 'react';

const MyJobList = ({ myPostedJobsPromise }) => {
    const jobs = use(myPostedJobsPromise);
    console.log(jobs);
    return (
        <div>
            <h2>jobs created by you: {jobs.length}</h2>
        </div>
    );
};

export default MyJobList;