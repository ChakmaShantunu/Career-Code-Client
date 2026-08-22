import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaArrowRight, FaBriefcase, FaPlus, FaTimes } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";

const JobCard = ({ job }) => {
    const {
        title,
        location,
        description,
        company,
        company_logo,
        requirements,
        salaryRange,
        _id,
    } = job;

    const [showAllSkills, setShowAllSkills] = useState(false);

    // প্রথম 4 টা স্কিল দেখাবে
    const visibleSkills = showAllSkills ? requirements : requirements?.slice(0, 4);
    const hasMoreSkills = requirements?.length > 4;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -8,
                transition: { duration: 0.25 },
            }}
            className="group relative h-full overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
        >
            {/* Top Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent" />

            <div className="p-6 flex flex-col h-full">
                {/* Company Info */}
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                            <img
                                src={company_logo}
                                alt={company}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h3 className="font-bold text-lg leading-tight">{company}</h3>
                            <p className="flex items-center gap-1.5 text-sm text-base-content/50 mt-1">
                                <FaMapMarkerAlt className="text-primary" />
                                {location}
                            </p>
                        </div>
                    </div>

                    <span className="badge badge-primary badge-outline text-xs font-semibold">
                        NEW
                    </span>
                </div>

                {/* Job Title */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold leading-snug group-hover:text-primary transition-colors duration-300">
                        {title}
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-sm text-base-content/50">
                        <FaBriefcase className="text-primary" />
                        <span>Full Time</span>
                    </div>
                </div>

                {/* Salary */}
                <div className="mt-5 rounded-2xl bg-primary/5 border border-primary/10 px-4 py-3">
                    <p className="text-xs uppercase tracking-wider text-base-content/40 font-semibold">
                        Salary Range
                    </p>
                    <p className="text-lg font-bold text-primary mt-1">
                        {salaryRange?.min} - {salaryRange?.max}{" "}
                        <span className="text-sm font-medium text-base-content/50">
                            {salaryRange?.currency}
                        </span>
                    </p>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm text-base-content/60 leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* ===== SKILLS SECTION ===== */}
                <div className="mt-5">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={showAllSkills ? "all" : "some"}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-wrap gap-2"
                        >
                            {visibleSkills?.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-3 py-1.5 rounded-lg bg-base-200 text-xs font-medium text-base-content/70 border border-base-300 hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-200 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* ===== SHOW MORE/LESS BUTTON ===== */}
                    {hasMoreSkills && (
                        <motion.button
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            onClick={() => setShowAllSkills(!showAllSkills)}
                            className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold transition-all duration-300 hover:scale-105"
                        >
                            {showAllSkills ? (
                                <>
                                    <FaTimes className="text-xs" />
                                    Show Less ({requirements.length} skills)
                                </>
                            ) : (
                                <>
                                    <FaPlus className="text-xs" />
                                    Show All ({requirements.length} skills)
                                </>
                            )}
                        </motion.button>
                    )}
                </div>

                {/* Divider */}
                <div className="border-t border-base-300 my-6" />

                {/* Bottom Action */}
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <p className="text-xs text-base-content/40">Posted recently</p>
                        <p className="text-sm font-semibold mt-1">Apply now</p>
                    </div>

                    <Link to={`/jobs/${_id}`}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary rounded-xl px-5 group/btn"
                        >
                            Details
                            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
    );
};

export default JobCard;