import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { myPostedJobsPromise } from "../../api/jobsApi";


const MyPostedJobs = () => {

    const { user } = useAuth();
    return (
        <div>
            <h2>My posted jobs</h2>
            <Suspense fallback={<p className="text-center">Loading Jobs List...</p>}>
                <MyJobList myPostedJobsPromise={myPostedJobsPromise(user.email)}></MyJobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;