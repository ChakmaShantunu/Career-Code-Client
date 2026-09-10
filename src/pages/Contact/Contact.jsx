
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaArrowRight, FaCheckCircle, FaClock, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane, FaPhone, FaSpinner, FaTwitter, FaUser, FaYoutube } from "react-icons/fa";
import { FaSeedling } from "react-icons/fa6";


const Contact = () => {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    }

    // ===== ANIMATION VARIANTS =====
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
        },
    };

    // ===== DATA =====
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email Us",
            details: "info@careercode.com",
            subDetails: "support@careercode.com",
            color: "text-primary",
            bgColor: "bg-primary/10",
            hoverColor: "hover:bg-primary/20",
        },
        {
            icon: <FaPhone />,
            title: "Call Us",
            details: "+1 (555) 123-4567",
            subDetails: "+1 (555) 987-6543",
            color: "text-secondary",
            bgColor: "bg-secondary/10",
            hoverColor: "hover:bg-secondary/20",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            details: "123 Career Street",
            subDetails: "Tech City, TC 12345",
            color: "text-accent",
            bgColor: "bg-accent/10",
            hoverColor: "hover:bg-accent/20",
        },
        {
            icon: <FaClock />,
            title: "Working Hours",
            details: "Mon - Fri: 9:00 AM - 6:00 PM",
            subDetails: "Sat - Sun: Closed",
            color: "text-warning",
            bgColor: "bg-warning/10",
            hoverColor: "hover:bg-warning/20",
        },
    ];

    const socialLinks = [
        { icon: <FaLinkedinIn />, url: "https://linkedin.com", color: "hover:bg-[#0A66C2]" },
        { icon: <FaTwitter />, url: "https://twitter.com", color: "hover:bg-[#1DA1F2]" },
        { icon: <FaFacebookF />, url: "https://facebook.com", color: "hover:bg-[#1877F2]" },
        { icon: <FaInstagram />, url: "https://instagram.com", color: "hover:bg-[#E4405F]" },
        { icon: <FaYoutube />, url: "https://youtube.com", color: "hover:bg-[#FF0000]" },
    ];




    return (
        <motion.div ref={sectionRef} variants={containerVariants} initial='hidden' animate={isInView ? "visible" : "hidden"} className="min-h-screen bg-linear-to-b from-base-100 via-base-200/20 to-base-100 py-8 md:py-16 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div variants={itemVariants} className="text-center mb-12">
                    <div className="mb-4 inline-block">
                        <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold border border-primary/20">Contact Us</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold">Get In <span className="text-primary">Touch</span></h1>
                    <p className="text-base-content/60 mt-3 max-w-2xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </motion.div>

                {/* Contact Info Cards */}
                <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.div key={index} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.25 } }} className={`group p-6 rounded-2xl ${info.bgColor} ${info.hoverColor} transition-all duration-300 border border-transparent hover:border-primary/20 cursor-pointer`}>
                            <div className={`text-3xl ${info.color} group-hover:scale-110 transition-transform`}>{info.icon}</div>
                            <h3 className="font-bold text-lg mt-3 group-hover:text-primary transition-colors">{info.title}</h3>
                            <p className="text-sm text-base-content/70">{info.details}</p>
                            <p className="text-sm text-base-content/50">{info.subDetails}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Contact Form & Map */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Form */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 bg-base-100 rounded-3xl shadow-2xl border border-base-200/50 p-6 md:p-8">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><span className="text-primary">📝</span> Send a Message</h2>
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaUser className="text-primary" />
                                        Full Name <span className="text-error">*</span>
                                    </label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-error' : 'border-base-300'} bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none`} />
                                    {errors.name && (
                                        <p className="text-xs text-error mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaUser className="text-primary" />
                                        Email Address <span className="text-error">*</span>
                                    </label>
                                    <input type="email" name="email" value={formData.name} onChange={handleChange} placeholder="you@example.com" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-error' : 'border-base-300'} bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none`} />
                                    {errors.email && (
                                        <p className="text-xs text-error mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* subject */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaPaperPlane className="text-secondary" />
                                    Subject <span className="text-error">*</span>
                                </label>
                                <input type="email" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this about?" className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-error' : 'border-base-300'} bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none`} />
                                {errors.subject && (
                                    <p className="text-xs text-error mt-1">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaSeedling className="text-info" />
                                    Message <span className="text-error">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className={`w-full px-4 py-3 rounded-xl border ${errors.message ? 'border-error' : 'border-base-300'} bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none`}
                                />
                                {errors.message && (
                                    <p className="text-xs text-error mt-1">{errors.message}</p>
                                )}
                                <p className="text-xs text-base-content/40 mt-1 text-right">{formData.message.length}/500 characters</p>
                            </div>

                            {/* Submit */}
                            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" disabled={isLoading} className="relative w-full btn btn-primary h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 overflow-hidden group">
                                {isLoading ? (
                                    <span className="flex items-center gap-3">
                                        <FaSpinner className="animate-spin text-lg" />
                                        Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-3">
                                        <FaSeedling />
                                        Send Message
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </motion.button>

                            {/* Trust Badge */}
                            <div className="flex items-center justify-center gap-6 text-xs text-base-content/40 pt-2">
                                <span className="flex items-center gap-1">
                                    <FaCheckCircle className="text-success" />
                                    We'll respond within 24h
                                </span>
                                <span className="flex items-center gap-1">
                                    <FaCheckCircle className="text-success" />
                                    Your data is secure
                                </span>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right Sidebar */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Social Links */}
                        <div className="bg-base-200 rounded-3xl shadow-2xl border border-base-200/50 p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><span className="text-primary">🌐</span>Contact With Us</h3>

                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <motion.a key={index} href={social.url} target="_blank" rel="noopner noreferrer" whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.9 }} className={`w-12 h-12 rounded-2xl bg-base-200/50 flex items-center justify-center text-base-content/60 hover:text-white transition-all duration-300 ${social.color}`} aria-level={`Follow us on social media`}>
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Faq */}
                        <div></div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;