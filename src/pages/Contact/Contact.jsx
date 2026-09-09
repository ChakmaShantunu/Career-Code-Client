
import { color, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone, FaUser } from "react-icons/fa";


const Contact = () => {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

    const [errors, setErrors] = useState({});

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
                    <motion.div variants={itemVariants}>
                        <h2><span>📝</span> Send a Message</h2>
                        <form>
                            <div>
                                <div>
                                    <label>
                                        <FaUser className="text-primary" />
                                        Full Name <span className="text-error">*</span>
                                    </label>
                                    <input type="text" />
                                    {errors.name && (
                                        <p>{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label>
                                        <FaUser className="text-primary" />
                                        Full Name <span className="text-error">*</span>
                                    </label>
                                    <input type="email" />
                                    {errors.email && (
                                        <p>{errors.email}</p>
                                    )}
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    );
};

export default Contact;