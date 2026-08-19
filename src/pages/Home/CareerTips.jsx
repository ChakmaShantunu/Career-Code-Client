// components/CareerTips.jsx
import { motion } from "framer-motion";
import { FaArrowRight, FaClock, FaUser, FaTag, FaBookmark, FaShare } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";

const CareerTips = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const tips = [
        {
            id: 1,
            title: "How to Write a Perfect CV That Gets You Hired",
            excerpt: "Learn the proven strategies to create a compelling CV that stands out to recruiters and lands you more interviews.",
            readTime: "5 min read",
            date: "2 days ago",
            icon: "📝",
            author: "Sarah Johnson",
            authorRole: "HR Manager",
            category: "Career Advice",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50",
            textColor: "text-blue-600",
            tags: ["CV Tips", "Interview", "Career"],
        },
        {
            id: 2,
            title: "10 Tips to Ace Your Next Job Interview",
            excerpt: "Master the art of interviews with these proven techniques that will help you impress hiring managers and get the job.",
            readTime: "7 min read",
            date: "1 week ago",
            icon: "🎯",
            author: "Michael Chen",
            authorRole: "Career Coach",
            category: "Interview Tips",
            color: "from-amber-500 to-orange-500",
            bgColor: "bg-amber-50",
            textColor: "text-amber-600",
            tags: ["Interview", "Preparation", "Success"],
        },
        {
            id: 3,
            title: "Remote Work: Best Practices for Success",
            excerpt: "Discover how to stay productive, maintain work-life balance, and thrive in a remote work environment.",
            readTime: "4 min read",
            date: "3 days ago",
            icon: "🏠",
            author: "Emily Davis",
            authorRole: "Remote Work Expert",
            category: "Remote Work",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            tags: ["Remote", "Productivity", "Work-Life"],
        },
        {
            id: 4,
            title: "How to Negotiate Your Salary Like a Pro",
            excerpt: "Expert tips and strategies to negotiate your salary effectively and get the compensation you deserve.",
            readTime: "6 min read",
            date: "5 days ago",
            icon: "💰",
            author: "David Wilson",
            authorRole: "Salary Negotiation Expert",
            category: "Salary Tips",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            tags: ["Salary", "Negotiation", "Career Growth"],
        },
        {
            id: 5,
            title: "Building a Personal Brand Online",
            excerpt: "Learn how to create a strong personal brand that attracts employers and opens up new career opportunities.",
            readTime: "8 min read",
            date: "1 day ago",
            icon: "🌟",
            author: "Lisa Martinez",
            authorRole: "Digital Brand Strategist",
            category: "Personal Branding",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-50",
            textColor: "text-pink-600",
            tags: ["Branding", "Social Media", "Career"],
        },
        {
            id: 6,
            title: "Upskilling: Learn New Skills Faster",
            excerpt: "Effective strategies to learn new skills quickly and stay ahead in your career in the rapidly changing job market.",
            readTime: "5 min read",
            date: "4 days ago",
            icon: "🚀",
            author: "Alex Turner",
            authorRole: "Learning Expert",
            category: "Skill Development",
            color: "from-indigo-500 to-blue-500",
            bgColor: "bg-indigo-50",
            textColor: "text-indigo-600",
            tags: ["Learning", "Skills", "Growth"],
        },
    ];

    // Featured Tip (first one will be featured)
    const featuredTip = tips[0];
    const regularTips = tips.slice(1);

    return (
        <section className="max-w-7xl mx-auto px-5 py-16 bg-linear-to-b from-base-200/30 via-base-100 to-base-200/20">
            {/* ===== HEADER ===== */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 mb-3"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl">💡</span>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Career <span className="text-primary">Tips</span>
                            </h2>
                        </div>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-base-content/60"
                    >
                        Expert advice to accelerate your career growth
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <Link
                        to="/blog"
                        className="btn btn-ghost gap-2 group hover:bg-primary/10 transition-all"
                    >
                        View All Articles
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* ===== FEATURED TIP ===== */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary/10 via-secondary/5 to-accent/10 border border-primary/10 p-6 md:p-8 mb-8 group cursor-pointer"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

                <div className="relative flex flex-col md:flex-row gap-6">
                    {/* Left */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                                Featured
                            </span>
                            <span className="text-xs text-base-content/50 flex items-center gap-1">
                                <FaClock className="text-primary" />
                                {featuredTip.readTime}
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                            {featuredTip.title}
                        </h3>

                        <p className="text-base-content/60 mt-3 leading-relaxed max-w-2xl">
                            {featuredTip.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                                    {featuredTip.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold">{featuredTip.author}</p>
                                    <p className="text-xs text-base-content/50">{featuredTip.authorRole}</p>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                {featuredTip.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-base-200 text-xs text-base-content/70 border border-base-300 hover:border-primary/30 hover:text-primary transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link to={`/blog/${featuredTip.id}`}>
                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="btn btn-primary rounded-xl mt-4 gap-2"
                            >
                                Read More
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Right - Icon */}
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="text-7xl md:text-8xl opacity-80 group-hover:scale-110 transition-transform duration-300">
                            {featuredTip.icon}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ===== GRID TIPS ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularTips.map((tip, index) => (
                    <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.5,
                        }}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.25 },
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-base-200/50 hover:border-primary/20"
                    >
                        {/* Colored Header */}
                        <div className={`h-1 w-full bg-linear-to-r ${tip.color}`} />

                        <div className="p-6">
                            {/* Category Badge & Icon */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1.5 rounded-lg bg-base-200 text-xs font-semibold text-base-content/70">
                                    {tip.category}
                                </span>
                                <span className="text-3xl group-hover:scale-110 transition-transform">
                                    {tip.icon}
                                </span>
                            </div>

                            {/* Title */}
                            <Link to={`/blog/${tip.id}`}>
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors leading-snug">
                                    {tip.title}
                                </h3>
                            </Link>

                            {/* Excerpt */}
                            <p className="text-sm text-base-content/60 mt-2 line-clamp-2">
                                {tip.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {tip.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 rounded-md bg-base-200/50 text-[10px] font-medium text-base-content/50 border border-base-200/50 hover:border-primary/20 hover:text-primary transition-colors"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-base-200/50 my-4" />

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full bg-linear-to-br ${tip.color} flex items-center justify-center text-white text-xs font-bold`}>
                                        {tip.author.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold">{tip.author}</p>
                                        <p className="text-[10px] text-base-content/50">{tip.readTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 rounded-full hover:bg-base-200 transition-colors flex items-center justify-center text-base-content/40 hover:text-primary">
                                        <FaBookmark />
                                    </button>
                                    <Link to={`/blog/${tip.id}`}>
                                        <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary">
                                            <FaArrowRight className="text-xs" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-1.5 mt-3 text-[10px] text-base-content/40">
                                <FaClock />
                                <span>{tip.date}</span>
                            </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div
                            className={`absolute inset-0 pointer-events-none bg-linear-to-br ${tip.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                        />
                    </motion.div>
                ))}
            </div>

            {/* ===== LOAD MORE ===== */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="text-center mt-10"
            >
                <Link to="/blog">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn btn-outline btn-primary rounded-xl px-8 gap-2"
                    >
                        Load More Articles
                        <FaArrowRight />
                    </motion.button>
                </Link>
            </motion.div>
        </section>
    );
};

export default CareerTips;