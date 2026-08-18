import { use, useState } from "react";
import { motion } from "motion/react";
import JobCard from "../Shared/JobCard";

const HotJobs = ({ jobsPromise }) => {
    const jobs = use(jobsPromise);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <section className="py-10">

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-14"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Latest Opportunities
                </div>

                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                    Hot Jobs of the Day
                </h2>

                <p className="mt-4 text-base-content/60 max-w-2xl mx-auto">
                    Explore the latest job opportunities from top companies
                    and find the perfect role for your career.
                </p>
            </motion.div>

            {/* Jobs Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {currentJobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </motion.div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-14">

                {/* Previous */}
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="group btn btn-outline rounded-xl px-6 disabled:opacity-40"
                >
                    <svg
                        className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>

                    Previous
                </button>

                {/* Page Indicator */}
                <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-base-200 border border-base-300">
                    <span className="text-sm text-base-content/50">
                        Page
                    </span>

                    <span className="font-bold text-primary">
                        {currentPage}
                    </span>

                    <span className="text-base-content/40">
                        /
                    </span>

                    <span className="font-semibold">
                        {totalPages}
                    </span>
                </div>

                {/* Next */}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="group btn btn-primary rounded-xl px-6 shadow-lg shadow-primary/20 disabled:opacity-40"
                >
                    Next

                    <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

            </div>

            {/* Result Counter */}
            <p className="text-center text-sm text-base-content/40 mt-5">
                Showing{" "}
                <span className="font-semibold text-base-content/70">
                    {startIndex + 1}
                </span>
                {" "}–{" "}
                <span className="font-semibold text-base-content/70">
                    {Math.min(startIndex + itemsPerPage, jobs.length)}
                </span>
                {" "}of{" "}
                <span className="font-semibold text-base-content/70">
                    {jobs.length}
                </span>
                {" "}jobs
            </p>

        </section>
    );
};

export default HotJobs;