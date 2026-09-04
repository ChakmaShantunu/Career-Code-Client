import { Suspense, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { myPostedJobsPromise } from "../../api/jobsApi";
import Loading from "../../components/Loading";
import { motion, useInView } from "framer-motion"
import { Link } from "react-router";
import { FaBriefcase, FaCheckCircle, FaEye, FaPlus, FaUsers } from "react-icons/fa";


const MyPostedJobs = () => {

    const { user } = useAuth();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

    const stats = [
        {
            label: "Total Jobs",
            value: "12",
            icon: <FaBriefcase />,
            color: "text-primary",
            bgColor: "bg-primary/10",
            change: "+2 this week",
        },
        {
            label: "Active Jobs",
            value: "8",
            icon: <FaCheckCircle />,
            color: "text-success",
            bgColor: "bg-success/10",
            change: "4 active",
        },
        {
            label: "Total Applicants",
            value: "47",
            icon: <FaUsers />,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
            change: "+12 new",
        },
        {
            label: "Views",
            value: "1.2K",
            icon: <FaEye />,
            color: "text-accent",
            bgColor: "bg-accent/10",
            change: "This month",
        },
    ];

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
                <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -4, scale: 1.02 }} className="bg-base-100 rounded-2xl p-5 shadow-sm hover:shadow-2xl transition-all duration-300 border border-base-200/50">
                            <div className="flex items-start justify-between">
                                <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center text-xl`}>
                                    <span className={stat.color}>{stat.icon}</span>
                                </div>
                                <span className="text-xs text-success font-medium bg-success/10 px-2 py-1 rounded-full">{stat.change}</span>
                            </div>
                            <h3 className="text-2xl font-extrabold mt-3">{stat.value}</h3>
                            <p className="text-sm text-base-content/50">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

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