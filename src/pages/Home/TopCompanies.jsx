// components/TopCompanies.jsx
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt, FaBriefcase, FaStar, FaUsers, FaGlobe, FaBuilding, FaSearch } from "react-icons/fa";
import { Link } from "react-router";
import { useState, useRef } from "react";

const TopCompanies = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [filter, setFilter] = useState("all");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.15,
        margin: "0px 0px -100px 0px"
    });

    const companies = [
        {
            id: 1,
            name: "Google",
            logo: "https://logo.clearbit.com/google.com",
            industry: "Technology",
            location: "Mountain View, CA",
            jobs: 245,
            employees: "150K+",
            rating: 4.8,
            featured: true,
            description: "Leading tech company known for innovation and great work culture.",
            type: "Multinational",
            founded: "1998",
            website: "https://google.com",
        },
        {
            id: 2,
            name: "Microsoft",
            logo: "https://logo.clearbit.com/microsoft.com",
            industry: "Technology",
            location: "Redmond, WA",
            jobs: 189,
            employees: "180K+",
            rating: 4.7,
            featured: true,
            description: "Empowering every person and organization on the planet to achieve more.",
            type: "Multinational",
            founded: "1975",
            website: "https://microsoft.com",
        },
        {
            id: 3,
            name: "Amazon",
            logo: "https://logo.clearbit.com/amazon.com",
            industry: "E-Commerce",
            location: "Seattle, WA",
            jobs: 320,
            employees: "1.3M+",
            rating: 4.5,
            featured: false,
            description: "World's largest online retailer and cloud computing provider.",
            type: "Multinational",
            founded: "1994",
            website: "https://amazon.com",
        },
        {
            id: 4,
            name: "Apple",
            logo: "https://logo.clearbit.com/apple.com",
            industry: "Technology",
            location: "Cupertino, CA",
            jobs: 156,
            employees: "160K+",
            rating: 4.9,
            featured: true,
            description: "Innovative technology company known for iPhone, Mac, and more.",
            type: "Multinational",
            founded: "1976",
            website: "https://apple.com",
        },
        {
            id: 5,
            name: "Meta",
            logo: "https://logo.clearbit.com/meta.com",
            industry: "Social Media",
            location: "Menlo Park, CA",
            jobs: 198,
            employees: "70K+",
            rating: 4.3,
            featured: false,
            description: "Building the future of social connection and virtual reality.",
            type: "Multinational",
            founded: "2004",
            website: "https://meta.com",
        },
        {
            id: 6,
            name: "Netflix",
            logo: "https://logo.clearbit.com/netflix.com",
            industry: "Entertainment",
            location: "Los Gatos, CA",
            jobs: 87,
            employees: "12K+",
            rating: 4.6,
            featured: false,
            description: "World's leading streaming entertainment service.",
            type: "Multinational",
            founded: "1997",
            website: "https://netflix.com",
        },
        {
            id: 7,
            name: "Tesla",
            logo: "https://logo.clearbit.com/tesla.com",
            industry: "Automotive",
            location: "Austin, TX",
            jobs: 134,
            employees: "120K+",
            rating: 4.4,
            featured: false,
            description: "Accelerating the world's transition to sustainable energy.",
            type: "Multinational",
            founded: "2003",
            website: "https://tesla.com",
        },
        {
            id: 8,
            name: "Adobe",
            logo: "https://logo.clearbit.com/adobe.com",
            industry: "Software",
            location: "San Jose, CA",
            jobs: 112,
            employees: "30K+",
            rating: 4.2,
            featured: false,
            description: "Creative software solutions for digital experiences.",
            type: "Multinational",
            founded: "1982",
            website: "https://adobe.com",
        },
    ];

    const filterOptions = [
        { value: "all", label: "All Companies" },
        { value: "featured", label: "🌟 Featured" },
        { value: "technology", label: "💻 Technology" },
        { value: "e-commerce", label: "🛒 E-Commerce" },
        { value: "entertainment", label: "🎬 Entertainment" },
        { value: "automotive", label: "🚗 Automotive" },
    ];

    const filteredCompanies = filter === "all"
        ? companies
        : filter === "featured"
            ? companies.filter(c => c.featured)
            : companies.filter(c => c.industry.toLowerCase() === filter);

    const featuredCompanies = companies.filter(c => c.featured).slice(0, 4);

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
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const featuredItemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const filterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.3,
            },
        },
    };

    const gridContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.4,
            },
        },
    };

    const gridItemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const loadMoreVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
                delay: 0.6,
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-5 py-16 bg-gradient-to-b from-base-100 via-base-200/20 to-base-100"
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
                            <span className="text-2xl">🏢</span>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Top <span className="text-primary">Companies</span>
                            </h2>
                        </div>
                    </div>
                    <p className="text-base-content/60">
                        Join the world's leading organizations
                    </p>
                </motion.div>

                <motion.div
                    variants={headerRightVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <Link
                        to="/companies"
                        className="btn btn-ghost gap-2 group hover:bg-primary/10 transition-all"
                    >
                        View All Companies
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* ===== FEATURED COMPANIES ===== */}
            <motion.div
                variants={featuredContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            >
                {featuredCompanies.map((company, index) => (
                    <motion.div
                        key={company.id}
                        variants={featuredItemVariants}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                            transition: { duration: 0.25 },
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-base-200/50 hover:border-primary/20"
                    >
                        {/* Gradient Top Bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

                        <div className="p-6 text-center">
                            {/* Logo */}
                            <div className="w-20 h-20 mx-auto rounded-2xl bg-base-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-14 h-14 object-contain"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=random&color=fff&size=56`;
                                    }}
                                />
                            </div>

                            {/* Company Name */}
                            <h3 className="font-bold text-lg mt-3 group-hover:text-primary transition-colors">
                                {company.name}
                            </h3>

                            {/* Industry & Location */}
                            <p className="text-sm text-base-content/50">
                                {company.industry}
                            </p>

                            <div className="flex items-center justify-center gap-1 text-xs text-base-content/40 mt-1">
                                <FaMapMarkerAlt className="text-primary" />
                                {company.location}
                            </div>

                            {/* Stats */}
                            <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-base-200/50">
                                <div>
                                    <p className="text-lg font-bold text-primary">{company.jobs}+</p>
                                    <p className="text-[10px] text-base-content/40">Jobs</p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">{company.rating}</p>
                                    <p className="text-[10px] text-base-content/40 flex items-center justify-center gap-0.5">
                                        <FaStar className="text-yellow-400 text-[8px]" />
                                        Rating
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg font-bold">{company.employees}</p>
                                    <p className="text-[10px] text-base-content/40">Employees</p>
                                </div>
                            </div>

                            {/* Featured Badge */}
                            {company.featured && (
                                <div className="absolute top-3 right-3">
                                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider border border-primary/20">
                                        Featured
                                    </span>
                                </div>
                            )}

                            {/* View Button */}
                            <Link to={`/companies/${company.id}`}>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-primary btn-sm rounded-xl mt-4 w-full gap-2"
                                >
                                    View Jobs
                                    <FaArrowRight className="text-xs" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Hover Glow */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                ))}
            </motion.div>

            {/* ===== FILTER BAR ===== */}
            <motion.div
                variants={filterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap items-center justify-between gap-4 mb-8"
            >
                <div className="flex flex-wrap gap-2">
                    {filterOptions.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => setFilter(option.value)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${filter === option.value
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-base-200 hover:bg-base-300 text-base-content/70"
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-sm text-base-content/50">
                        {filteredCompanies.length} companies
                    </span>
                </div>
            </motion.div>

            {/* ===== COMPANIES GRID ===== */}
            <motion.div
                variants={gridContainerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
            >
                {filteredCompanies.map((company, index) => (
                    <motion.div
                        key={company.id}
                        variants={gridItemVariants}
                        whileHover={{
                            y: -6,
                            scale: 1.02,
                            transition: { duration: 0.2 },
                        }}
                        className="group bg-base-100 rounded-xl p-5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-base-200/30 hover:border-primary/20 cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            {/* Logo */}
                            <div className="w-14 h-14 rounded-xl bg-base-200 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 overflow-hidden">
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className="w-10 h-10 object-contain"
                                    onError={(e) => {
                                        e.target.src = `https://ui-avatars.com/api/?name=${company.name}&background=random&color=fff&size=40`;
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                    <div>
                                        <h4 className="font-bold text-sm group-hover:text-primary transition-colors truncate">
                                            {company.name}
                                        </h4>
                                        <p className="text-xs text-base-content/50">{company.industry}</p>
                                    </div>
                                    <div className="flex items-center gap-0.5 text-xs text-yellow-400 flex-shrink-0">
                                        <FaStar className="fill-current" />
                                        <span className="font-medium text-base-content/70">
                                            {company.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-base-content/40">
                                    <span className="flex items-center gap-1">
                                        <FaMapMarkerAlt className="text-[10px]" />
                                        {company.location.split(",")[0]}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaBriefcase className="text-[10px]" />
                                        {company.jobs}+ jobs
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <FaUsers className="text-[10px]" />
                                        {company.employees}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Hover Effect Line */}
                        <div className="h-0.5 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300 mt-3 rounded-full" />
                    </motion.div>
                ))}
            </motion.div>

            {/* ===== EMPTY STATE ===== */}
            {filteredCompanies.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="text-center py-12"
                >
                    <span className="text-6xl block mb-4">🔍</span>
                    <h3 className="text-xl font-bold">No Companies Found</h3>
                    <p className="text-base-content/50 mt-2">
                        Try adjusting your filter criteria
                    </p>
                    <button
                        onClick={() => setFilter("all")}
                        className="btn btn-primary rounded-xl mt-4"
                    >
                        View All Companies
                    </button>
                </motion.div>
            )}

            {/* ===== LOAD MORE ===== */}
            {filteredCompanies.length > 4 && (
                <motion.div
                    variants={loadMoreVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="text-center mt-10"
                >
                    <Link to="/companies">
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="btn btn-outline btn-primary rounded-xl px-8 gap-2"
                        >
                            View All Companies
                            <FaArrowRight />
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.section>
    );
};

export default TopCompanies;