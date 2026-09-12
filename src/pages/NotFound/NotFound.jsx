
import { easeInOut, motion } from "framer-motion";

const NotFound = () => {

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
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

    const floatVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };


    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="min-h-screen overflow-hidden py-12 relative flex items-center justify-center bg-linear-to-br from-base-200 via-base-100 to-primary/5 px-4">

            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div animate={{ scale: [1, 1.3, 1], x: [0, 100, 0], y: [0, -50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: easeInOut }} className="w-125 h-125 bg-primary/10 rounded-full absolute -top-40 -right-40 blur-3xl"></motion.div>

                <motion.div animate={{ scale: [1, 1.4, 1], x: [0, -100, 0], y: [0, 50, 0] }} transition={{ duration: 10, repeat: Infinity, ease: easeInOut, delay: 1 }} className="w-125 h-125 bg-secondary/10 rounded-full absolute -bottom-40 -left-40 blur-3xl"></motion.div>

                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="w-175 h-175 border border-primary/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></motion.div>

                <motion.div animate={{ rotate: [360, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="w-125 h-125 border border-secondary/5 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></motion.div>
            </div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative max-w-3xl mx-auto text-center">

                {/* Floating Ghost Icon */}
                <motion.div variants={floatVariants} animate="animate" className="inline-block mb-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
                        <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-5xl">👻</div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default NotFound;