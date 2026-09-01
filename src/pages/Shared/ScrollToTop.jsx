import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? scrollTop / docHeight : 0;
            setScrollProgress(progress);
            setIsVisible(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const size = 56;
    const radius = 22;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference * (1 - scrollProgress);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 group"
                    aria-label="Scroll to top"
                >
                    <div className="relative w-14 h-14">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-violet-500 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
                        
                        {/* Square Button */}
                        <div className="relative w-full h-full bg-linear-to-br from-indigo-500 to-violet-500 rounded-2xl shadow-2xl shadow-emerald-400/30 hover:shadow-emerald-400/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:rounded-3xl">
                            <div className="absolute inset-1 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20" />
                            
                            <ChevronUp 
                                size={24} 
                                className="text-white relative z-10" 
                                strokeWidth={2.5}
                            />

                            {/* Progress Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r={radius}
                                    fill="none"
                                    stroke="rgba(255,255,255,0.15)"
                                    strokeWidth="2.5"
                                />
                                <circle
                                    cx="50%"
                                    cy="50%"
                                    r={radius}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    className="transition-all duration-200 ease-out"
                                />
                            </svg>
                        </div>
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;