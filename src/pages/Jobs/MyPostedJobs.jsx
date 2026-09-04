import { Suspense, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { myPostedJobsPromise } from "../../api/jobsApi";
import Loading from "../../components/Loading";
import { motion, useInView } from "framer-motion"
import { Link } from "react-router";
import { FaBriefcase, FaPlus, } from "react-icons/fa";


const MyPostedJobs = () => {

    const { user } = useAuth();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

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
        <motion.div ref={sectionRef} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}
            className="min-h-screen bg-linear-to-br from-base-200/50 via-base-100 to-base-200/30 py-8 md:py-12 px-4"
        >

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-2xl bg-liner-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/20">
                                    <FaBriefcase />
                                </div>
                                <div className="space-y-1">
                                    <h1 className="text-3xl md:text-4xl font-extrabold">
                                        My <span className="text-primary">Posted Jobs</span>
                                    </h1>
                                    <p className="text-base-content/60 text-sm">Manage all your job postings in one place</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/addJob">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary rounded-xl shadow-lg shadow-primary/20 gap-2 px-6"
                            >
                                <FaPlus />
                                Post New Job
                            </motion.button>
                        </Link>
                    </div>
                    <div className="divider"></div>
                </motion.div>

                {/* Stats */}


                {/* Job list */}
                <motion.div variants={itemVariants} initial="hidden" animate="visible">
                    <Suspense fallback={
                        <Loading text="Loading Posted Jobs List"></Loading>
                    }>
                        <MyJobList myPostedJobsPromise={myPostedJobsPromise(user?.email)}></MyJobList>
                    </Suspense>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default MyPostedJobs;