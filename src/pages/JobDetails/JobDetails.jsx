
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router";


const JobDetails = () => {
    const singleJob = useLoaderData();
    const {
        _id,
        title,
        location,
        jobType,
        category,
        applicationDeadline,
        salaryRange,
        description,
        company,
        requirements,
        responsibilities,
        status,
        hr_email,
        hr_name,
        company_logo,
    } = singleJob;
    return (
        // <motion.div
        //     initial={{ opacity: 0, y: 40 }}
        //     animate={{ opacity: 1, y: 0 }}
        //     transition={{ duration: 0.6 }}
        //     className="max-w-6xl mx-auto px-4 py-10"
        // >
        //     {/* Header Card */}
        //     <motion.div
        //         initial={{ opacity: 0, y: -20 }}
        //         animate={{ opacity: 1, y: 0 }}
        //         transition={{ duration: 0.5 }}
        //         className="card bg-base-100 shadow-xl border border-base-200/50"
        //     >
        //         <div className="card-body p-6 md:p-8">
        //             <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        //                 {/* Company Logo */}
        //                 <motion.img
        //                     initial={{ scale: 0.6, opacity: 0 }}
        //                     animate={{ scale: 1, opacity: 1 }}
        //                     transition={{ duration: 0.5, delay: 0.1 }}
        //                     src={company_logo}
        //                     alt={company}
        //                     className="w-28 h-28 object-contain rounded-2xl bg-base-200/50 p-3 shadow-sm"
        //                 />

        //                 {/* Job Info */}
        //                 <div className="flex-1 text-center md:text-left">
        //                     <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        //                         {title}
        //                     </h1>
        //                     <h2 className="text-xl font-semibold mt-1 text-primary/80">
        //                         {company}
        //                     </h2>

        //                     <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
        //                         <span className="badge badge-primary badge-lg font-medium">
        //                             {category}
        //                         </span>
        //                         <span className="badge badge-secondary badge-lg font-medium">
        //                             {jobType}
        //                         </span>
        //                         <span className="badge badge-accent badge-lg font-medium">
        //                             {location}
        //                         </span>
        //                         <span className="badge badge-success badge-lg font-medium">
        //                             {status}
        //                         </span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </motion.div>

        //     {/* Main Content Grid */}
        //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        //         {/* Left Column */}
        //         <div className="lg:col-span-2 space-y-6">
        //             {/* Description */}
        //             <motion.div
        //                 initial={{ opacity: 0, x: -30 }}
        //                 animate={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.5, delay: 0.2 }}
        //                 className="card bg-base-100 shadow-lg border border-base-200/30"
        //             >
        //                 <div className="card-body">
        //                     <h2 className="text-2xl font-bold flex items-center gap-2">
        //                         <span className="text-primary">📋</span> Job Description
        //                     </h2>
        //                     <p className="text-base-content/80 leading-relaxed mt-2">
        //                         {description}
        //                     </p>
        //                 </div>
        //             </motion.div>

        //             {/* Requirements */}
        //             <motion.div
        //                 initial={{ opacity: 0, x: -30 }}
        //                 animate={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.5, delay: 0.3 }}
        //                 className="card bg-base-100 shadow-lg border border-base-200/30"
        //             >
        //                 <div className="card-body">
        //                     <h2 className="text-2xl font-bold flex items-center gap-2">
        //                         <span className="text-accent">✅</span> Requirements
        //                     </h2>
        //                     <ul className="list-disc list-inside space-y-2 mt-2 text-base-content/80">
        //                         {requirements.map((requirement, index) => (
        //                             <li key={index} className="pl-2">
        //                                 {requirement}
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </motion.div>

        //             {/* Responsibilities */}
        //             <motion.div
        //                 initial={{ opacity: 0, x: -30 }}
        //                 animate={{ opacity: 1, x: 0 }}
        //                 transition={{ duration: 0.5, delay: 0.4 }}
        //                 className="card bg-base-100 shadow-lg border border-base-200/30"
        //             >
        //                 <div className="card-body">
        //                     <h2 className="text-2xl font-bold flex items-center gap-2">
        //                         <span className="text-secondary">🎯</span> Responsibilities
        //                     </h2>
        //                     <ul className="list-disc list-inside space-y-2 mt-2 text-base-content/80">
        //                         {responsibilities.map((responsibility, index) => (
        //                             <li key={index} className="pl-2">
        //                                 {responsibility}
        //                             </li>
        //                         ))}
        //                     </ul>
        //                 </div>
        //             </motion.div>
        //         </div>

        //         {/* Right Column */}
        //         <motion.div
        //             initial={{ opacity: 0, x: 30 }}
        //             animate={{ opacity: 1, x: 0 }}
        //             transition={{ duration: 0.5, delay: 0.3 }}
        //             className="space-y-6"
        //         >
        //             {/* Job Information */}
        //             <div className="card bg-base-100 shadow-lg border border-base-200/30">
        //                 <div className="card-body">
        //                     <h2 className="text-2xl font-bold flex items-center gap-2">
        //                         <span className="text-info">ℹ️</span> Job Information
        //                     </h2>
        //                     <div className="divider my-2"></div>
        //                     <div className="space-y-4">
        //                         <div>
        //                             <p className="font-semibold text-sm uppercase tracking-wider text-base-content/60">
        //                                 Salary
        //                             </p>
        //                             <p className="text-lg font-medium text-success">
        //                                 ৳{salaryRange.min} – ৳{salaryRange.max}
        //                             </p>
        //                         </div>
        //                         <div>
        //                             <p className="font-semibold text-sm uppercase tracking-wider text-base-content/60">
        //                                 Location
        //                             </p>
        //                             <p className="text-base-content/80">{location}</p>
        //                         </div>
        //                         <div>
        //                             <p className="font-semibold text-sm uppercase tracking-wider text-base-content/60">
        //                                 Job Type
        //                             </p>
        //                             <p className="text-base-content/80">{jobType}</p>
        //                         </div>
        //                         <div>
        //                             <p className="font-semibold text-sm uppercase tracking-wider text-base-content/60">
        //                                 Application Deadline
        //                             </p>
        //                             <p className="text-base-content/80 font-medium text-error">
        //                                 {applicationDeadline}
        //                             </p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* HR Information */}
        //             <div className="card bg-base-100 shadow-lg border border-base-200/30">
        //                 <div className="card-body">
        //                     <h2 className="text-2xl font-bold flex items-center gap-2">
        //                         <span className="text-warning">👤</span> HR Information
        //                     </h2>
        //                     <div className="divider my-2"></div>
        //                     <div className="space-y-3 text-base-content/80">
        //                         <p>
        //                             <span className="font-semibold">Name:</span> {hr_name}
        //                         </p>
        //                         <p>
        //                             <span className="font-semibold">Email:</span>{" "}
        //                             <a
        //                                 href={`mailto:${hr_email}`}
        //                                 className="text-primary hover:underline transition"
        //                             >
        //                                 {hr_email}
        //                             </a>
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>

        //             {/* Apply Button */}
        //             <motion.button
        //                 whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
        //                 whileTap={{ scale: 0.97 }}
        //                 className="btn btn-primary w-full text-lg font-bold shadow-lg shadow-primary/20"
        //             >
        //                 ✨ Apply Now
        //             </motion.button>
        //         </motion.div>
        //     </div>
        // </motion.div>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12"
        >
            {/* ===== HERO HEADER ===== */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-base-100 to-secondary/5 shadow-2xl border border-base-200/50"
            >
                {/* Decorative Blobs */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

                <div className="relative p-6 md:p-10">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        {/* Company Logo with Glow */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
                            <img
                                src={company_logo}
                                alt={company}
                                className="relative w-32 h-32 object-contain rounded-2xl bg-base-100/80 backdrop-blur-sm p-3 shadow-xl border border-base-200/50"
                            />
                        </motion.div>

                        {/* Job Info */}
                        <div className="flex-1 text-center md:text-left space-y-3">
                            <div className="space-y-1">
                                <motion.h1
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                                >
                                    {title}
                                </motion.h1>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl md:text-2xl font-semibold text-base-content/70"
                                >
                                    {company}
                                </motion.h2>
                            </div>

                            {/* Badges with Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap justify-center md:justify-start gap-2 pt-2"
                            >
                                <span className="badge badge-primary badge-lg gap-2 px-4 py-3 text-sm font-medium shadow-lg shadow-primary/20">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    {category}
                                </span>
                                <span className="badge badge-secondary badge-lg gap-2 px-4 py-3 text-sm font-medium shadow-lg shadow-secondary/20">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {jobType}
                                </span>
                                <span className="badge badge-accent badge-lg gap-2 px-4 py-3 text-sm font-medium shadow-lg shadow-accent/20">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {location}
                                </span>
                                <span className="badge badge-success badge-lg gap-2 px-4 py-3 text-sm font-medium shadow-lg shadow-success/20">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {status}
                                </span>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ===== MAIN CONTENT ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200/30 hover:border-primary/20"
                    >
                        <div className="card-body p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">Job Description</h2>
                            </div>
                            <div className="divider my-1" />
                            <p className="text-base-content/80 leading-relaxed text-lg mt-2">
                                {description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Requirements */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200/30 hover:border-accent/20"
                    >
                        <div className="card-body p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">Requirements</h2>
                            </div>
                            <div className="divider my-1" />
                            <ul className="space-y-3 mt-2">
                                {requirements.map((requirement, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="flex items-start gap-3 text-base-content/80"
                                    >
                                        <span className="text-accent font-bold text-lg mt-0.5">•</span>
                                        <span className="leading-relaxed">{requirement}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Responsibilities */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200/30 hover:border-secondary/20"
                    >
                        <div className="card-body p-6 md:p-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-secondary/10 text-secondary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">Responsibilities</h2>
                            </div>
                            <div className="divider my-1" />
                            <ul className="space-y-3 mt-2">
                                {responsibilities.map((responsibility, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="flex items-start gap-3 text-base-content/80"
                                    >
                                        <span className="text-secondary font-bold text-lg mt-0.5">✦</span>
                                        <span className="leading-relaxed">{responsibility}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column - Sticky */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6 lg:sticky lg:top-24 self-start"
                >
                    {/* Job Information */}
                    <div className="card bg-linear-to-br from-base-100 to-base-200/50 shadow-xl border border-base-200/30">
                        <div className="card-body p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-info/10 text-info">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">Job Information</h2>
                            </div>
                            <div className="divider my-1" />

                            <div className="space-y-4 mt-2">
                                {/* Salary */}
                                <div className="bg-success/5 rounded-xl p-4 border border-success/20">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Salary Range
                                    </p>
                                    <p className="text-2xl font-bold text-success mt-1">
                                        ৳{salaryRange.min} – ৳{salaryRange.max}
                                    </p>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50">
                                    <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">Location</p>
                                        <p className="font-medium">{location}</p>
                                    </div>
                                </div>

                                {/* Job Type */}
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-base-200/50">
                                    <svg className="w-5 h-5 text-secondary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">Job Type</p>
                                        <p className="font-medium">{jobType}</p>
                                    </div>
                                </div>

                                {/* Deadline */}
                                <div className="flex items-start gap-3 p-3 rounded-xl bg-error/5 border border-error/20">
                                    <svg className="w-5 h-5 text-error mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-error/70">Deadline</p>
                                        <p className="font-bold text-error">{applicationDeadline}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* HR Information */}
                    <div className="card bg-base-100 shadow-xl border border-base-200/30">
                        <div className="card-body p-6">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="p-2 rounded-xl bg-warning/10 text-warning">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h2 className="text-2xl font-bold">HR Contact</h2>
                            </div>
                            <div className="divider my-1" />

                            <div className="space-y-3 mt-2">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-base-200/30">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {hr_name?.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">Name</p>
                                        <p className="font-medium">{hr_name}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-3 rounded-xl bg-base-200/30">
                                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">Email</p>
                                        <a
                                            href={`mailto:${hr_email}`}
                                            className="font-medium text-primary hover:text-primary-focus hover:underline transition truncate block"
                                        >
                                            {hr_email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Apply Button with Gradient */}
                    <motion.button
                        whileHover={{
                            scale: 1.03,
                            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)"
                        }}
                        whileTap={{ scale: 0.97 }}
                        className="relative w-full overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                        <div className="relative btn btn-primary w-full text-lg font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 border-0 bg-linear-to-r from-primary to-secondary">

                            <Link to={`/jobapply/${_id}`}>
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Apply Now
                                </span>
                            </Link>

                        </div>
                    </motion.button>

                    {/* Share Section */}
                    <div className="flex justify-center gap-3 pt-2">
                        <button className="btn btn-ghost btn-sm btn-square rounded-full hover:bg-primary/10 hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </button>
                        <button className="btn btn-ghost btn-sm btn-square rounded-full hover:bg-primary/10 hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                            </svg>
                        </button>
                        <button className="btn btn-ghost btn-sm btn-square rounded-full hover:bg-primary/10 hover:text-primary">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </button>
                    </div>
                </motion.div >
            </div >
        </motion.div >
    );
};

export default JobDetails;