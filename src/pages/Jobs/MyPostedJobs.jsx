import { Suspense, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import MyJobList from "./MyJobList";
import { myPostedJobsPromise } from "../../api/jobsApi";
import Loading from "../../components/Loading";
import { motion, useInView } from "framer-motion"
import { Link } from "react-router";
import { FaBriefcase, FaFilter, FaPlus, FaSearch, } from "react-icons/fa";


const MyPostedJobs = () => {

    const { user } = useAuth();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

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

                {/* Filters */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-6 sm:flex-row">
                    <div className="flex-1 relative">
                        <div className="absolute left-0 pl-3 inset-y-0 flex items-center pointer-events-none">
                            <FaSearch className="text-base-content/40"></FaSearch>
                        </div>
                        <input type="text" placeholder="Search by job title, company..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
                    </div>

                    <div className="flex gap-3">
                        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-lg focus:border-primary/20 focus:ring-2 focus:ring-primary/20 transition-all outline-none min-w-35 hover:bg-base-100/80 hover:border-primary/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                            <option value="all">All Status</option>
                            <option value="active">✅ Active</option>
                            <option value="inactive">⏸️ Inactive</option>
                            <option value="closed">🔒 Closed</option>
                        </select>

                        <button className="btn btn-ghost rounded-xl gap-2">
                            <FaFilter></FaFilter>
                            Filter
                        </button>
                    </div>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default MyPostedJobs;