// components/Footer.jsx
import { motion, useInView } from "framer-motion";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaArrowRight,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaGlobe,
    FaGithub,
    FaHeart
} from "react-icons/fa";
import { Link } from "react-router";
import { useRef } from "react";

const Footer = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px",
    });

    const currentYear = new Date().getFullYear();

    // Animation Variants
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

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

    const socialVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: 0.5,
            },
        },
    };

    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
                { name: "Blog", path: "/blog" },
            ],
        },
        {
            title: "Resources",
            links: [
                { name: "Help Center", path: "/help" },
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" },
            ],
        },
        {
            title: "For Job Seekers",
            links: [
                { name: "Browse Jobs", path: "/jobs" },
                { name: "Companies", path: "/companies" },
                { name: "Career Tips", path: "/blog" },
                { name: "Salary Guide", path: "/salary-guide" },
            ],
        },
        {
            title: "For Employers",
            links: [
                { name: "Post a Job", path: "/post-job" },
                { name: "Employer Dashboard", path: "/employer" },
                { name: "Pricing", path: "/pricing" },
                { name: "Hire Talent", path: "/hire" },
            ],
        },
    ];

    const socialLinks = [
        { icon: <FaFacebookF />, url: "https://facebook.com", color: "hover:bg-[#1877F2]" },
        { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:bg-[#1DA1F2]" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com", color: "hover:bg-[#0A66C2]" },
        { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:bg-[#E4405F]" },
        { icon: <FaYoutube />, url: "https://youtube.com", color: "hover:bg-[#FF0000]" },
        { icon: <FaGithub />, url: "https://github.com", color: "hover:bg-[#333]" },
    ];

    return (
        <motion.footer
            ref={sectionRef}
            className="relative overflow-hidden bg-gradient-to-b from-base-100 via-base-200/50 to-base-300/30 border-t border-base-200/50"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== DECORATIVE BACKGROUND ===== */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-5 py-16">
                {/* ===== MAIN FOOTER ===== */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10"
                >
                    {/* ===== BRAND SECTION ===== */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-1 space-y-4"
                    >
                        <Link to="/" className="flex items-center gap-2 group">
                            <motion.div
                                whileHover={{ rotate: 180 }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl"
                            >
                                💻
                            </motion.div>
                            <div>
                                <span className="text-xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Career
                                </span>
                                <span className="text-xl font-extrabold text-base-content">
                                    Code
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm text-base-content/60 leading-relaxed max-w-xs">
                            Find your dream job with CareerCode. Connecting talented professionals with amazing companies worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors">
                                <FaMapMarkerAlt className="text-primary text-sm" />
                                <span>123 Career Street, Tech City</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors">
                                <FaPhone className="text-primary text-sm" />
                                <a href="tel:+1234567890">+1 (234) 567-890</a>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors">
                                <FaEnvelope className="text-primary text-sm" />
                                <a href="mailto:info@careercode.com">info@careercode.com</a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <motion.div
                            variants={socialVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex gap-2 pt-2"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{
                                        scale: 1.1,
                                        y: -3,
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-10 h-10 rounded-xl bg-base-200/50 backdrop-blur-sm flex items-center justify-center text-base-content/60 hover:text-white transition-all duration-300 ${social.color}`}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ===== LINK SECTIONS ===== */}
                    {footerLinks.map((section, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="space-y-4"
                        >
                            <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/80">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <motion.li
                                        key={linkIndex}
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className="text-sm text-base-content/50 hover:text-primary transition-colors flex items-center gap-1"
                                        >
                                            <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors" />
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                {/* ===== DIVIDER ===== */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="h-px bg-gradient-to-r from-transparent via-base-300/50 to-transparent my-10"
                />

                {/* ===== BOTTOM SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.7, duration: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
                >
                    <div className="flex items-center gap-2 text-base-content/50">
                        <span>© {currentYear} CareerCode.</span>
                        <span>All rights reserved.</span>
                        <span className="flex items-center gap-1">
                            Made with
                            <FaHeart className="text-red-500 animate-pulse text-xs" />
                            by CareerCode Team
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy"
                            className="text-base-content/40 hover:text-primary transition-colors text-xs uppercase tracking-wider"
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-base-content/40 hover:text-primary transition-colors text-xs uppercase tracking-wider"
                        >
                            Terms
                        </Link>
                        <Link
                            to="/cookies"
                            className="text-base-content/40 hover:text-primary transition-colors text-xs uppercase tracking-wider"
                        >
                            Cookies
                        </Link>
                        <Link
                            to="/sitemap"
                            className="text-base-content/40 hover:text-primary transition-colors text-xs uppercase tracking-wider"
                        >
                            Sitemap
                        </Link>
                    </div>

                    {/* Scroll to Top */}
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{
                            scale: 1.05,
                            y: -3,
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary btn-sm rounded-xl gap-2 shadow-lg shadow-primary/20"
                    >
                        Back to Top
                        <FaArrowRight className="text-xs" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;