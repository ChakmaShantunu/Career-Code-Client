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
                <div className="min-h-162.5 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 py-16 lg:py-20">

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
                        {/* ===== STATS SECTION ===== */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-6 md:gap-10 mt-10"
                        >
                            {[
                                { number: "10K+", label: "Job Seekers", icon: "👥", color: "text-primary" },
                                { number: "2K+", label: "Companies", icon: "🏢", color: "text-secondary" },
                                { number: "5K+", label: "Jobs", icon: "💼", color: "text-accent" },
                                { number: "98%", label: "Satisfaction", icon: "⭐", color: "text-warning" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{
                                        scale: 1.08,
                                        y: -4,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="group relative flex items-center gap-4 px-5 py-3 rounded-2xl bg-base-100/50 backdrop-blur-sm hover:bg-base-100/80 transition-all duration-300 border border-transparent hover:border-primary/10"
                                >
                                    {/* Icon */}
                                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {stat.icon}
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <motion.h3
                                            className={`text-2xl md:text-3xl font-extrabold ${stat.color} group-hover:scale-105 transition-transform origin-left`}
                                        >
                                            {stat.number}
                                        </motion.h3>
                                        <p className="text-sm text-base-content/50 group-hover:text-base-content/70 transition-colors">
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    {index < 3 && (
                                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-px h-10 bg-base-300/30 hidden md:block" />
                                    )}

                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGES */}
                    <div className="relative min-h-130">

                        {/* Soft background */}
                        <div className="absolute w-105 h-105 rounded-full bg-primary/5 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

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
                            className="absolute top-5 right-5 w-64 h-80 object-cover rounded-4xl shadow-2xl"
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
                            className="absolute bottom-5 left-5 w-60 h-72 object-cover rounded-4xl shadow-2xl"
                        />

                        {/* Floating card */}
                        {/* ===== FLOATING CARDS ===== */}

                        {/* Card 1: New Jobs */}
                        <motion.div
                            animate={{
                                y: [0, -12, 0],
                                scale: [1, 1.02, 1],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -15,
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                            }}
                            className="absolute bottom-16 right-0 bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-2xl px-5 py-4 border border-primary/10 group cursor-pointer z-30"
                        >
                            <div className="flex items-center gap-4">
                                {/* Icon */}
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">📈</span>
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                                            New opportunities
                                        </p>
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                                        </span>
                                    </div>
                                    <p className="text-xl font-extrabold text-primary group-hover:text-primary-focus transition-colors">
                                        +120 jobs today
                                    </p>
                                </div>
                            </div>

                            {/* Animated Progress Bar */}
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                                className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-secondary rounded-full"
                            />
                        </motion.div>

                        {/* Card 2: Rating */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                                rotate: [0, 1, -1, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                            }}
                            className="absolute top-16 left-0 bg-base-100/95 backdrop-blur-xl shadow-2xl rounded-2xl px-5 py-4 border border-warning/10 group cursor-pointer z-30 hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                {/* Stars */}
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                <div>
                                    <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                                        Rating
                                    </p>
                                    <p className="text-lg font-extrabold">
                                        4.9 <span className="text-base-content/40 font-normal">/ 5.0</span>
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -top-1 -right-1 flex gap-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-warning/40" />
                                <div className="w-1.5 h-1.5 rounded-full bg-warning/20" />
                                <div className="w-1.5 h-1.5 rounded-full bg-warning/10" />
                            </div>
                        </motion.div>

                        {/* Card 3: Quick Apply */}
                        <motion.div
                            animate={{
                                y: [0, -6, 0],
                                scale: [1, 1.03, 1],
                            }}
                            transition={{
                                duration: 2.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1,
                            }}
                            whileHover={{
                                scale: 1.08,
                                y: -8,
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                            }}
                            className="absolute top-1/2 -right-6 -translate-y-1/2 bg-success/10 backdrop-blur-xl shadow-2xl rounded-2xl px-4 py-3 border border-success/20 group cursor-pointer z-30 hidden lg:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl">⚡</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                                        Quick Apply
                                    </p>
                                    <p className="text-sm font-bold text-success group-hover:text-success-focus transition-colors">
                                        1-Click Apply
                                    </p>
                                </div>
                            </div>

                            {/* Pulsing Ring */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.1, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute inset-0 rounded-2xl border-2 border-success/20"
                            />
                        </motion.div>

                        {/* Card 4: Live Positions (Extra) */}
                        <motion.div
                            animate={{
                                x: [0, -5, 0],
                                y: [0, -5, 0],
                            }}
                            transition={{
                                duration: 3.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5,
                            }}
                            whileHover={{
                                scale: 1.05,
                                x: -8,
                                y: -8,
                                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                            }}
                            className="absolute top-1/3 -left-4 bg-blue-500/10 backdrop-blur-xl shadow-2xl rounded-2xl px-4 py-3 border border-blue-500/20 group cursor-pointer z-30 hidden xl:block"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl">💼</span>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-base-content/50 uppercase tracking-wider">
                                        Live Positions
                                    </p>
                                    <p className="text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                                        50+ Open Roles
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;