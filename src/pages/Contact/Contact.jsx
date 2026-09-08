
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const Contact = () => {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px"
    });

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

            </div>

        </motion.div>
    );
};

export default Contact;