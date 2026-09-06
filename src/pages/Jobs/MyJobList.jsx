import React, { use } from 'react';
import { delay, motion } from "framer-motion"
import { FaBriefcase, FaCheckCircle, FaClock, FaEye, FaPlus, FaTimesCircle, FaUsers } from 'react-icons/fa';
import { div } from 'motion/react-client';
import { Link } from 'react-router';

const MyJobList = ({ myPostedJobsPromise, searchTerm, filterStatus }) => {
    const jobs = use(myPostedJobsPromise);

    const filterdJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm?.toLowerCase() || "") || job.company.toLowerCase().includes(searchTerm?.toLowerCase() || "") || job.location.toLowerCase().includes(searchTerm?.toLowerCase() || "");

        const matchesStatus = filterStatus === "all" || jobs.status === filterStatus;

        return matchesSearch && matchesStatus
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case "active":
                return <span className='badge badge-success gap-1'>
                    <FaCheckCircle></FaCheckCircle> Active
                </span>;

            case "inactive":
                return <span className='badge badge-warning gap-1'>
                    <FaClock></FaClock> Inactive
                </span>;
            case "closed":
                return <span className='badge badge-error gap-1'>
                    <FaTimesCircle></FaTimesCircle> Active
                </span>;
            default:
                return <span className='badge badge-ghost gap-1'>
                    {status}
                </span>;

        }
    }


    const stats = [
        {
            label: "Total Jobs",
            value: `${jobs.length}`,
            icon: <FaBriefcase />,
            color: "text-primary",
            bgColor: "bg-primary/10",
            progressColor: "bg-primary",
            change: `${jobs.length}`,
            progress: 75,
        },
        {
            label: "Active Jobs",
            value: `${jobs.length}`,
            icon: <FaCheckCircle />,
            color: "text-success",
            bgColor: "bg-success/10",
            progressColor: "bg-success",
            change: `${jobs.length}`,
            progress: 65,
        },
        {
            label: "Total Applicants",
            value: `${jobs.length}`,
            icon: <FaUsers />,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
            progressColor: "bg-secondary",
            change: `${jobs.length}`,
            progress: 82,
        },
        {
            label: "Views",
            value: `${jobs.length}`,
            icon: <FaEye />,
            color: "text-accent",
            bgColor: "bg-accent/10",
            progressColor: "bg-accent",
            change: `${jobs.length}`,
            progress: 90,
        },
    ];


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

    if (filterdJobs.length === 0) {
        return (
            <div className='text-center py-20'>
                <span className='text-6xl block mb-4'>🔍</span>
                <h3 className='text-xl font-bold'>No Jobs Found</h3>
                <p className='text-base-content/50 mt-2'>{searchTerm || filterStatus !== "all" ? "Try adjusting your search or filter" : "You haven't posted any jobs yet"}</p>
                <Link to="/addJob">
                    <button className='btn btn-primary rounded-xl mt-4'><FaPlus></FaPlus> Post Your First Job</button>
                </Link>
            </div>
        );
    }

    return (
        <div>
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

                        {/* progress */}
                        <div className="mt-4">

                            <div className="flex items-center justify-between mb-1">
                                <span className="text-xs text-base-content/50">Progress</span>
                                <span className={`text-xs font-semibold ${stat.color}`}>{stat.progress}%</span>
                            </div>

                            <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} animate={{ width: `${stat.progress}%` }} transition={{ duration: 1, delay: index * 0.15 }} className={`h-full rounded-full ${stat.progressColor}`}>

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <div className='space-y-4'>
                {
                    filterdJobs.map((job, index) => (
                        <motion.div key={job._id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.5 }} variants={itemVariants} className='bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 hover:border-primary/20'>

                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                {/* Left section */}
                                <div className='flex-1'>
                                    <div className='flex items-start gap-4'>
                                        {/* Logo */}
                                        <div className='w-14 h-14 rounded-xl bg-base-200 flex items-center justify-center overflow-hidden shrink-0'>
                                            {
                                                job.company_logo ? (
                                                    <img src={job.company_logo} alt={job.company} className='w-full h-full object-cover' />
                                                ) : (
                                                    <span className='text-2xl font-bold text-primary'>{job.company?.charAt(0)}</span>
                                                )
                                            }
                                        </div>

                                        <div className='flex-1 min-w-0'>
                                            <div className='flex flex-wrap items-center gap-2'>
                                                <h3 className='text-lg font-bold group-hover: text-primary transition-colors'>{job.title}</h3>
                                                {getStatusBadge(job.stats)}
                                            </div>
                                            <p className='text-sm text-base-content/60'>{job.company}</p>
                                            <p className='text-sm text-base-content/50'>{job.location}</p>
                                            <div className='flex flex-wrap gap-4 mt-2 text-sm text-base-content/50'>
                                                <span>📅 Deadline: {new Date(job.applicationDeadline).toLocaleDateString()}</span>
                                                <span>💰 {job.salaryRange?.min} -{job.salaryRange?.max} {job.salaryRange?.currency?.toUpperCase()}</span>
                                                <span>📋 {job.jobType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right Section */}
                                <div className='flex items-center gap-2 md:gap-3'>

                                </div>
                            </div>

                        </motion.div>
                    ))
                }
            </div>

            <p className='text-sm text-base-content/50 text-center mt-4'>Showing {filterdJobs.length} of {filterdJobs.length} jobs</p>
        </div >
    );
};

export default MyJobList;