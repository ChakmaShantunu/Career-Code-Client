// components/ApplicationStats.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    FaBriefcase,
    FaUsers,
    FaBuilding,
    FaCheckCircle,
    FaClock,
    FaArrowUp,
    FaArrowDown,
    FaFileAlt,
    FaChartLine,
    FaChartBar
} from "react-icons/fa";

const ApplicationStats = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px",
    });

    // ===== STATS DATA =====
    const stats = [
        {
            id: 1,
            label: "Total Applications",
            value: 1247,
            icon: <FaFileAlt />,
            color: "text-primary",
            bgColor: "bg-primary/10",
            borderColor: "border-primary/20",
            change: 12.5,
            changeType: "increase",
        },
        {
            id: 2,
            label: "Active Jobs",
            value: 342,
            icon: <FaBriefcase />,
            color: "text-secondary",
            bgColor: "bg-secondary/10",
            borderColor: "border-secondary/20",
            change: 8.3,
            changeType: "increase",
        },
        {
            id: 3,
            label: "Total Companies",
            value: 189,
            icon: <FaBuilding />,
            color: "text-accent",
            bgColor: "bg-accent/10",
            borderColor: "border-accent/20",
            change: 5.7,
            changeType: "increase",
        },
        {
            id: 4,
            label: "Active Users",
            value: 856,
            icon: <FaUsers />,
            color: "text-info",
            bgColor: "bg-info/10",
            borderColor: "border-info/20",
            change: 15.2,
            changeType: "increase",
        },
        {
            id: 5,
            label: "Success Rate",
            value: 76,
            icon: <FaCheckCircle />,
            color: "text-success",
            bgColor: "bg-success/10",
            borderColor: "border-success/20",
            change: 3.1,
            changeType: "increase",
        },
        {
            id: 6,
            label: "Pending Review",
            value: 43,
            icon: <FaClock />,
            color: "text-warning",
            bgColor: "bg-warning/10",
            borderColor: "border-warning/20",
            change: 2.4,
            changeType: "decrease",
        },
    ];

    // ===== RECENT ACTIVITIES =====
    const activities = [
        {
            id: 1,
            user: "John Doe",
            action: "Applied for Senior Developer",
            company: "Google",
            time: "2 hours ago",
            status: "pending",
        },
        {
            id: 2,
            user: "Sarah Smith",
            action: "Applied for UI/UX Designer",
            company: "Microsoft",
            time: "4 hours ago",
            status: "approved",
        },
        {
            id: 3,
            user: "Mike Johnson",
            action: "Applied for Product Manager",
            company: "Apple",
            time: "6 hours ago",
            status: "rejected",
        },
        {
            id: 4,
            user: "Emily Davis",
            action: "Applied for Data Scientist",
            company: "Amazon",
            time: "8 hours ago",
            status: "pending",
        },
        {
            id: 5,
            user: "David Wilson",
            action: "Applied for DevOps Engineer",
            company: "Netflix",
            time: "10 hours ago",
            status: "approved",
        },
    ];

    // ===== COUNTER ANIMATION =====
    const Counter = ({ target, duration = 2000 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isInView) return;

            let startTime;
            const startValue = 0;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                const currentValue = Math.floor(progress * target);
                setCount(currentValue);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    setCount(target);
                }
            };

            requestAnimationFrame(animate);
        }, [isInView, target, duration]);

        return <span>{count}</span>;
    };

    // Animation Variants
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={sectionRef}
            className="max-w-7xl mx-auto px-5 py-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== HEADER ===== */}
            <motion.div variants={itemVariants} className="mb-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="text-2xl">📊</span>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Application <span className="text-primary">Statistics</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-base-content/60">
                            Real-time overview of all applications and activities
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <select className="select select-bordered select-sm rounded-xl bg-base-100/50">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                            <option>Last 90 Days</option>
                            <option>This Year</option>
                        </select>
                        <button className="btn btn-primary btn-sm rounded-xl gap-2">
                            <FaChartLine /> {/* ✅ এখন কাজ করবে */}
                            Export Report
                        </button>
                    </div>
                </div>
                <div className="divider" />
            </motion.div>

            {/* ===== STATS GRID ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.id}
                        variants={itemVariants}
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                        className={`group relative bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${stat.borderColor} hover:border-primary/30`}
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>
                            </div>

                            <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${stat.changeType === 'increase'
                                    ? 'bg-success/10 text-success'
                                    : 'bg-error/10 text-error'
                                }`}>
                                {stat.changeType === 'increase' ? (
                                    <FaArrowUp className="text-xs" />
                                ) : (
                                    <FaArrowDown className="text-xs" />
                                )}
                                {stat.change}%
                            </div>
                        </div>

                        <div className="mt-4">
                            <h3 className="text-3xl font-extrabold">
                                {stat.id === 5 ? (
                                    <span>{stat.value}%</span>
                                ) : (
                                    <Counter target={stat.value} />
                                )}
                            </h3>
                            <p className="text-sm text-base-content/50 mt-1">
                                {stat.label}
                            </p>
                        </div>

                        {stat.id === 5 && (
                            <div className="mt-3 h-1.5 w-full bg-base-200 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={isInView ? { width: `${stat.value}%` } : { width: 0 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                                />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* ===== RECENT ACTIVITIES & CHART ===== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activities */}
                <motion.div
                    variants={itemVariants}
                    className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-200/50"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <span className="text-primary">🕐</span>
                            Recent Activities
                        </h3>
                        <button className="text-xs text-primary font-semibold hover:underline">
                            View All
                        </button>
                    </div>

                    <div className="space-y-4">
                        {activities.map((activity, index) => (
                            <motion.div
                                key={activity.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: 0.3 + index * 0.08 }}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-base-200/50 transition-colors cursor-pointer group"
                            >
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                                    {activity.user.charAt(0)}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-sm font-medium truncate">
                                            {activity.user}
                                        </p>
                                        <span className={`text-xs px-2 py-0.5 rounded-full ${activity.status === 'approved'
                                                ? 'bg-success/10 text-success'
                                                : activity.status === 'rejected'
                                                    ? 'bg-error/10 text-error'
                                                    : 'bg-warning/10 text-warning'
                                            }`}>
                                            {activity.status}
                                        </span>
                                    </div>
                                    <p className="text-xs text-base-content/60 truncate">
                                        {activity.action} at {activity.company}
                                    </p>
                                    <p className="text-[10px] text-base-content/40 mt-0.5">
                                        {activity.time}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    variants={itemVariants}
                    className="space-y-6"
                >
                    <div className="bg-base-100 rounded-2xl p-6 shadow-sm border border-base-200/50">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <span className="text-secondary">📈</span>
                            Application Status
                        </h3>

                        <div className="space-y-3">
                            {[
                                { label: "Approved", value: 45, color: "bg-success" },
                                { label: "Pending", value: 30, color: "bg-warning" },
                                { label: "Rejected", value: 15, color: "bg-error" },
                                { label: "In Review", value: 10, color: "bg-info" },
                            ].map((item, index) => (
                                <div key={index}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-medium">{item.label}</span>
                                        <span className="text-base-content/50">{item.value}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-base-200 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${item.value}%` } : { width: 0 }}
                                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                            className={`h-full ${item.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 rounded-2xl p-6 border border-primary/10">
                        <h3 className="text-lg font-bold flex items-center gap-2 mb-3">
                            <span className="text-accent">⚡</span>
                            Quick Actions
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <button className="p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-colors text-sm font-medium">
                                <div className="text-primary text-lg mb-1">📋</div>
                                View All
                            </button>
                            <button className="p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-colors text-sm font-medium">
                                <div className="text-secondary text-lg mb-1">📊</div>
                                Reports
                            </button>
                            <button className="p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-colors text-sm font-medium">
                                <div className="text-accent text-lg mb-1">👥</div>
                                Users
                            </button>
                            <button className="p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-colors text-sm font-medium">
                                <div className="text-info text-lg mb-1">🏢</div>
                                Companies
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ApplicationStats;