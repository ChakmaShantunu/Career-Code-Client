// components/Newsletter.jsx
import { motion, useInView } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaBell, FaCheck, FaTimes, FaUser, FaMailBulk } from "react-icons/fa";
import { Link } from "react-router";
import { useRef, useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [error, setError] = useState("");
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.2,
        margin: "0px 0px -100px 0px",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email");
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            setError("Please enter a valid email address");
            return;
        }
        setError("");
        setSubscribed(true);
        setTimeout(() => {
            setSubscribed(false);
            setEmail("");
        }, 4000);
    };

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

    const contentVariants = {
        hidden: { opacity: 0, x: -30 },
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

    const formVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
            },
        },
    };

    const benefitsVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const benefitItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            ref={sectionRef}
            className="max-w-7xl mx-auto px-5 py-16"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <motion.div
                className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 border border-primary/10 p-8 md:p-12"
                whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
            >
                {/* ===== DECORATIVE BACKGROUND ===== */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

                {/* ===== ANIMATED DOTS ===== */}
                <div className="absolute top-4 right-4 flex gap-1 opacity-20">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -5, 0],
                                opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                            className={`w-1.5 h-1.5 rounded-full bg-primary`}
                        />
                    ))}
                </div>

                <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* ===== LEFT CONTENT ===== */}
                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <motion.div
                                animate={{
                                    rotate: [0, 10, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center"
                            >
                                <FaEnvelope className="text-2xl text-primary" />
                            </motion.div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold">
                                    Subscribe to <span className="text-primary">Newsletter</span>
                                </h3>
                                <p className="text-sm text-base-content/60">
                                    Get latest job updates and career tips
                                </p>
                            </div>
                        </div>

                        {/* Benefits */}
                        <motion.div
                            variants={benefitsVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4"
                        >
                            {[
                                { icon: <FaBell className="text-primary" />, text: "Weekly updates" },
                                { icon: <FaUser className="text-secondary" />, text: "Exclusive offers" },
                                { icon: <FaMailBulk className="text-accent" />, text: "Curated content" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={benefitItemVariants}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-base-100/50 backdrop-blur-sm border border-base-200/30 hover:border-primary/20 transition-colors"
                                >
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-xs font-medium text-base-content/70">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ===== RIGHT FORM ===== */}
                    <motion.div
                        variants={formVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex-1 w-full"
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity" />
                                <div className="relative flex items-center gap-3 bg-base-100/80 backdrop-blur-sm border border-base-200/50 rounded-xl px-4 h-14 focus-within:border-primary focus-within:shadow-lg focus-within:shadow-primary/10 transition-all duration-300">
                                    <FaEnvelope className="text-base-content/40 text-lg" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setError("");
                                        }}
                                        placeholder="Enter your email address"
                                        className={`outline-none bg-transparent w-full text-base ${error ? "text-error" : ""
                                            }`}
                                    />
                                    {email && !error && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="text-green-500"
                                        >
                                            <FaCheck />
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs text-error flex items-center gap-1"
                                >
                                    <FaTimes className="text-xs" />
                                    {error}
                                </motion.p>
                            )}

                            <div className="flex flex-col sm:flex-row gap-3">
                                <motion.button
                                    whileHover={{
                                        scale: 1.03,
                                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    type="submit"
                                    className="flex-1 btn btn-primary rounded-xl px-8 gap-2 h-14 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                                >
                                    {subscribed ? (
                                        <>
                                            <FaCheck />
                                            Subscribed!
                                        </>
                                    ) : (
                                        <>
                                            Subscribe Now
                                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-[10px] text-base-content/40 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                                    <FaCheck className="text-primary text-[8px]" />
                                    No spam, unsubscribe anytime
                                </p>
                            </div>

                            {/* Success Message */}
                            {subscribed && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute -bottom-12 left-0 right-0 bg-success/10 border border-success/20 rounded-xl p-3 text-center"
                                >
                                    <p className="text-sm text-success font-medium flex items-center justify-center gap-2">
                                        <FaCheck className="text-success" />
                                        Thank you for subscribing! Check your email for confirmation.
                                    </p>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* ===== STATS BADGE ===== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-3 -right-3 bg-base-100 shadow-2xl rounded-2xl px-5 py-3 border border-base-200/50 backdrop-blur-sm hidden lg:flex items-center gap-4"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-base-100 flex items-center justify-center text-white text-[10px] font-bold"
                            >
                                {String.fromCharCode(64 + i)}
                            </div>
                        ))}
                    </div>
                    <div>
                        <p className="text-sm font-bold">10,000+</p>
                        <p className="text-[10px] text-base-content/50">Subscribers</p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Newsletter;