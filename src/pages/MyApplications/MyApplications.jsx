import { Suspense } from "react";
import ApplicationList from "./ApplicationList";
import ApplicationStats from "./ApplicationStats";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";


const MyApplications = () => {

    const { user, loading } = useAuth();

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }
    return (
        <div>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={<p className="text-center">Loading applications...</p>}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;