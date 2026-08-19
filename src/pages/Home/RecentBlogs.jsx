// components/RecentBlogs.jsx
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaClock, FaUser, FaTag, FaBookmark, FaShare, FaHeart, FaComment } from "react-icons/fa";
import { Link } from "react-router";
import { useRef, useState } from "react";

const RecentBlogs = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.15,
        margin: "0px 0px -100px 0px",
    });

    const blogs = [
        {
            id: 1,
            title: "10 Essential Skills Every Developer Should Learn in 2024",
            excerpt: "Stay ahead in your career by mastering these in-demand skills that employers are looking for right now.",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            author: "John Doe",
            authorAvatar: "https://ui-avatars.com/api/?name=John+Doe&background=random&color=fff&size=40",
            date: "2 days ago",
            readTime: "6 min read",
            category: "Technology",
            tags: ["JavaScript", "React", "Career"],
            likes: 245,
            comments: 34,
            featured: true,
            color: "from-blue-500 to-cyan-500",
        },
        {
            id: 2,
            title: "How to Build a Personal Brand That Attracts Recruiters",
            excerpt: "Learn proven strategies to build a powerful personal brand that helps you stand out and get noticed.",
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
            author: "Jane Smith",
            authorAvatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random&color=fff&size=40",
            date: "3 days ago",
            readTime: "5 min read",
            category: "Career Growth",
            tags: ["Branding", "Career", "Social Media"],
            likes: 189,
            comments: 28,
            featured: false,
            color: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            title: "Remote Work 101: Stay Productive and Connected",
            excerpt: "Essential tips for thriving in a remote work environment and maintaining work-life balance.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
            author: "Mike Johnson",
            authorAvatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=random&color=fff&size=40",
            date: "5 days ago",
            readTime: "4 min read",
            category: "Remote Work",
            tags: ["Remote", "Productivity", "WFH"],
            likes: 156,
            comments: 19,
            featured: false,
            color: "from-emerald-500 to-teal-500",
        },
        {
            id: 4,
            title: "Salary Negotiation: How to Get What You Deserve",
            excerpt: "Expert tips and strategies to confidently negotiate your salary and maximize your earning potential.",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            author: "Sarah Wilson",
            authorAvatar: "https://ui-avatars.com/api/?name=Sarah+Wilson&background=random&color=fff&size=40",
            date: "1 week ago",
            readTime: "7 min read",
            category: "Career Advice",
            tags: ["Salary", "Negotiation", "Growth"],
            likes: 210,
            comments: 42,
            featured: false,
            color: "from-amber-500 to-orange-500",
        },
        {
            id: 5,
            title: "The Future of Work: AI and Automation Trends",
            excerpt: "Discover how AI and automation are shaping the job market and what you can do to stay relevant.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop",
            author: "Alex Turner",
            authorAvatar: "https://ui-avatars.com/api/?name=Alex+Turner&background=random&color=fff&size=40",
            date: "1 week ago",
            readTime: "8 min read",
            category: "Technology",
            tags: ["AI", "Future", "Automation"],
            likes: 178,
            comments: 31,
            featured: false,
            color: "from-indigo-500 to-blue-500",
        },
        {
            id: 6,
            title: "Top 5 Interview Questions and How to Answer Them",
            excerpt: "Prepare for your next interview with these common questions and expert tips for answering them confidently.",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
            author: "Emily Davis",
            authorAvatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=random&color=fff&size=40",
            date: "2 weeks ago",
            readTime: "5 min read",
            category: "Interview Tips",
            tags: ["Interview", "Preparation", "Success"],
            likes: 134,
            comments: 23,
            featured: false,
            color: "from-rose-500 to-red-500",
        },
    ];

    const featuredBlog = blogs[0];
    const recentBlogs = blogs.slice(1, 5);

    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const headerVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const headerRightVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
            },
        },
    };

    const featuredContainerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.3,
            },
        },
    };

    const gridItemVariants = {
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
        <motion.section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-5 py-16 bg-gradient-to-b from-base-100 via-primary/5 to-base-100"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== HEADER ===== */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl">📝</span>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Recent <span className="text-primary">Blogs</span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-base-content/60">
                        Stay updated with the latest career insights
                    </p>
                </motion.div>

                <motion.div
                    variants={headerRightVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Link
                        to="/blog"
                        className="btn btn-ghost gap-2 group hover:bg-primary/10 transition-all"
                    >
                        View All Blogs
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* ===== FEATURED BLOG ===== */}
            <motion.div
                variants={featuredContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10 border border-primary/10 mb-8 group cursor-pointer"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

                <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Image */}
                        <div className="md:w-2/5">
                            <div className="w-full h-48 md:h-52 rounded-2xl overflow-hidden">
                                <img
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="md:w-3/5 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                                        Featured
                                    </span>
                                    <span className="text-xs text-base-content/50 flex items-center gap-1">
                                        <FaClock className="text-primary" />
                                        {featuredBlog.readTime}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {featuredBlog.title}
                                </h3>

                                <p className="text-base-content/60 mt-2 leading-relaxed">
                                    {featuredBlog.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {featuredBlog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 rounded-full bg-base-200 text-xs text-base-content/70 border border-base-300 hover:border-primary/30 hover:text-primary transition-colors"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={featuredBlog.authorAvatar}
                                        alt={featuredBlog.author}
                                        className="w-10 h-10 rounded-full border-2 border-primary/20"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">{featuredBlog.author}</p>
                                        <p className="text-xs text-base-content/50">{featuredBlog.date}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1 text-sm text-base-content/50">
                                        <FaHeart className="text-red-400" />
                                        {featuredBlog.likes}
                                    </span>
                                    <span className="flex items-center gap-1 text-sm text-base-content/50">
                                        <FaComment className="text-blue-400" />
                                        {featuredBlog.comments}
                                    </span>
                                    <Link to={`/blog/${featuredBlog.id}`}>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="btn btn-primary btn-sm rounded-xl gap-2"
                                        >
                                            Read More
                                            <FaArrowRight className="text-xs" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ===== BLOG GRID ===== */}
            <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
                {recentBlogs.map((blog, index) => (
                    <motion.div
                        key={blog.id}
                        variants={gridItemVariants}
                        whileHover={{
                            y: -8,
                            transition: { duration: 0.25 },
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-base-200/50 hover:border-primary/20"
                    >
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3">
                                <span className={`px-2.5 py-1 rounded-full bg-gradient-to-r ${blog.color} text-white text-[10px] font-bold uppercase tracking-wider`}>
                                    {blog.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-5">
                            {/* Title */}
                            <Link to={`/blog/${blog.id}`}>
                                <h3 className="font-bold text-base group-hover:text-primary transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                            </Link>

                            {/* Excerpt */}
                            <p className="text-sm text-base-content/60 mt-2 line-clamp-2">
                                {blog.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mt-3">
                                {blog.tags.slice(0, 2).map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 rounded-md bg-base-200/50 text-[10px] font-medium text-base-content/50 border border-base-200/50"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-base-200/50 my-3" />

                            {/* Bottom Section */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={blog.authorAvatar}
                                        alt={blog.author}
                                        className="w-7 h-7 rounded-full"
                                    />
                                    <div>
                                        <p className="text-xs font-semibold line-clamp-1">{blog.author}</p>
                                        <p className="text-[10px] text-base-content/50">{blog.readTime}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button className="w-7 h-7 rounded-full hover:bg-base-200 transition-colors flex items-center justify-center text-base-content/40 hover:text-primary">
                                        <FaHeart className="text-xs" />
                                    </button>
                                    <Link to={`/blog/${blog.id}`}>
                                        <button className="w-7 h-7 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors flex items-center justify-center text-primary">
                                            <FaArrowRight className="text-xs" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow */}
                        <div
                            className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${blog.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default RecentBlogs;