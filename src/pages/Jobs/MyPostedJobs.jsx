import { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { myPostedJobsPromise } from "../../api/jobsApi";
import Loading from "../../components/Loading";
import { motion } from "framer-motion"


const MyPostedJobs = () => {

    const { user } = useAuth();

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };


    return (
        <div>
            <h2>My posted jobs</h2>
            <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Suspense fallback={
                    <Loading text="Loading Posted Jobs List"></Loading>
                }>
                    <MyJobList myPostedJobsPromise={myPostedJobsPromise(user?.email)}></MyJobList>
                </Suspense>
            </motion.div>
        </div>
    );
};

export default MyPostedJobs;