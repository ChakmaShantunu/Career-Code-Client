import { motion } from "motion/react";
import { Link } from "react-router";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-base-100">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="min-h-[650px] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-16 lg:py-20">

                    {/* LEFT CONTENT */}
                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Find Your Dream Career
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]"
                        >
                            Find a job you
                            <br />

                            <span className="text-primary">
                                actually love.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-7 max-w-xl text-lg text-base-content/60 leading-relaxed"
                        >
                            Discover thousands of opportunities from top companies.
                            Find remote, full-time and flexible jobs that match your
                            skills and career goals.
                        </motion.p>

                        {/* Search */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl"
                        >
                            <div className="flex items-center gap-3 flex-1 border border-base-300 rounded-xl px-4 h-14 bg-base-100">
                                <svg
                                    className="w-5 h-5 text-base-content/40"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                    />
                                </svg>

                                <input
                                    type="text"
                                    placeholder="Job title, keyword..."
                                    className="outline-none bg-transparent w-full"
                                />
                            </div>

                            <button className="btn btn-primary h-14 px-7 rounded-xl">
                                Search Jobs
                            </button>
                        </motion.div>

                        {/* Stats */}
                        <div className="flex gap-10 mt-10">
                            <div>
                                <h3 className="text-2xl font-bold">10K+</h3>
                                <p className="text-sm text-base-content/50">
                                    Job Seekers
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-primary">
                                    2K+
                                </h3>
                                <p className="text-sm text-base-content/50">
                                    Companies
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold">5K+</h3>
                                <p className="text-sm text-base-content/50">
                                    Jobs
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative min-h-[520px]">

                        {/* Soft background */}
                        <div className="absolute w-[420px] h-[420px] rounded-full bg-primary/5 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                        {/* Image 1 */}
                        <motion.img
                            initial={{ opacity: 0, x: 70, rotate: 6 }}
                            animate={{
                                opacity: 1,
                                x: [0, 10, 0],
                                rotate: [6, 8, 6],
                            }}
                            transition={{
                                opacity: { duration: 0.8 },
                                x: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            src={team1}
                            alt="Team"
                            className="absolute top-5 right-5 w-64 h-80 object-cover rounded-[2rem] shadow-2xl"
                        />

                        {/* Image 2 */}
                        <motion.img
                            initial={{ opacity: 0, x: -70, rotate: -6 }}
                            animate={{
                                opacity: 1,
                                x: [0, -10, 0],
                                rotate: [-6, -8, -6],
                            }}
                            transition={{
                                opacity: { duration: 0.8, delay: 0.2 },
                                x: {
                                    duration: 4,
                                    delay: 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                                rotate: {
                                    duration: 4,
                                    delay: 0.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                },
                            }}
                            src={team2}
                            alt="Team"
                            className="absolute bottom-5 left-5 w-60 h-72 object-cover rounded-[2rem] shadow-2xl"
                        />

                        {/* Floating card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-16 right-0 bg-base-100 shadow-xl rounded-xl px-5 py-4"
                        >
                            <p className="text-xs text-base-content/50">
                                New opportunities
                            </p>

                            <p className="text-lg font-bold text-primary">
                                +120 jobs today
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;