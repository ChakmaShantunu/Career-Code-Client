// pages/About.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import {
    FaUsers,
    FaBuilding,
    FaBriefcase,
    FaGlobe,
    FaRocket,
    FaHeart,
    FaHandshake,
    FaLightbulb,
    FaShieldAlt,
    FaAward,
    FaQuoteLeft,
    FaArrowRight,
    FaLinkedinIn,
    FaTwitter,
    FaStar,
    FaShareAlt,
    FaFacebook,
    FaWhatsapp
} from "react-icons/fa";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// ===== কাস্টম হুক: কাউন্টার অ্যানিমেশন =====
const useCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        const startValue = 0;
        const endValue = parseInt(target.replace(/[^0-9]/g, ''));

        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const currentValue = Math.floor(progress * endValue);
            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(endValue);
            }
        };

        requestAnimationFrame(animateCount);
    }, [isVisible, target, duration]);

    return { count, ref, isVisible };
};

// ===== স্কেলেটন লোডার =====
const SkeletonLoader = () => (
    <div className="animate-pulse">
        <div className="h-4 bg-base-300 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-base-300 rounded w-1/2"></div>
    </div>
);

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px",
    });

    // ===== কাউন্টার হুক ব্যবহার =====
    const userCounter = useCounter("10K+");
    const companyCounter = useCounter("5K+");
    const jobCounter = useCounter("25K+");
    const countryCounter = useCounter("150+");

    // ===== ANIMATION VARIANTS =====
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

    const heroVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
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
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    // ===== DATA =====
    const stats = [
        {
            number: "10K+",
            label: "Active Users",
            icon: <FaUsers />,
            color: "text-primary",
            counter: userCounter
        },
        {
            number: "5K+",
            label: "Companies",
            icon: <FaBuilding />,
            color: "text-secondary",
            counter: companyCounter
        },
        {
            number: "25K+",
            label: "Jobs Posted",
            icon: <FaBriefcase />,
            color: "text-accent",
            counter: jobCounter
        },
        {
            number: "150+",
            label: "Countries",
            icon: <FaGlobe />,
            color: "text-warning",
            counter: countryCounter
        },
    ];

    const values = [
        {
            icon: <FaRocket />,
            title: "Innovation",
            description: "We constantly innovate to provide the best job matching experience.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: <FaHeart />,
            title: "Integrity",
            description: "We believe in transparency and honesty in all our interactions.",
            color: "from-rose-500 to-pink-500",
        },
        {
            icon: <FaHandshake />,
            title: "Collaboration",
            description: "We work together with employers and job seekers to achieve success.",
            color: "from-emerald-500 to-teal-500",
        },
        {
            icon: <FaLightbulb />,
            title: "Excellence",
            description: "We strive for excellence in everything we do, every single day.",
            color: "from-amber-500 to-orange-500",
        },
        {
            icon: <FaShieldAlt />,
            title: "Trust",
            description: "We build trust through reliability and consistent performance.",
            color: "from-purple-500 to-indigo-500",
        },
        {
            icon: <FaAward />,
            title: "Quality",
            description: "We maintain the highest quality standards in our services.",
            color: "from-cyan-500 to-blue-500",
        },
    ];

    const team = [
        {
            name: "John Anderson",
            role: "CEO & Founder",
            bio: "Passionate about connecting talent with opportunity. 15+ years in recruitment.",
            avatar: "https://ui-avatars.com/api/?name=John+Anderson&background=random&color=fff&size=100",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Sarah Johnson",
            role: "Head of Operations",
            bio: "Expert in scaling businesses and optimizing processes for growth.",
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random&color=fff&size=100",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Mike Chen",
            role: "Tech Lead",
            bio: "Full-stack developer with a passion for building amazing products.",
            avatar: "https://ui-avatars.com/api/?name=Mike+Chen&background=random&color=fff&size=100",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
        {
            name: "Emily Davis",
            role: "Marketing Director",
            bio: "Creative strategist helping companies find the right talent and brand voice.",
            avatar: "https://ui-avatars.com/api/?name=Emily+Davis&background=random&color=fff&size=100",
            social: {
                linkedin: "#",
                twitter: "#",
            },
        },
    ];

    const milestones = [
        { year: "2018", title: "Founded", description: "CareerCode was born with a vision to transform job hunting." },
        { year: "2019", title: "10K Users", description: "Reached 10,000 active users within the first year." },
        { year: "2020", title: "Global Expansion", description: "Expanded operations to 50+ countries worldwide." },
        { year: "2021", title: "5K Companies", description: "Onboarded 5,000+ companies to the platform." },
        { year: "2022", title: "AI Matching", description: "Launched AI-powered job matching algorithm." },
        { year: "2023", title: "25K Jobs", description: "Reached 25,000+ jobs posted on our platform." },
    ];

    const testimonials = [
        {
            id: 1,
            name: "David Wilson",
            role: "Software Engineer",
            company: "Google",
            text: "CareerCode helped me find my dream job at Google! The platform made it so easy to connect with recruiters and find the perfect role. I couldn't be happier!",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=David+Wilson&background=random&color=fff&size=80",
        },
        {
            id: 2,
            name: "Lisa Martinez",
            role: "Product Manager",
            company: "Microsoft",
            text: "I found my current position at Microsoft through CareerCode. The AI matching feature is incredible and saved me so much time. Highly recommend to all job seekers!",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Lisa+Martinez&background=random&color=fff&size=80",
        },
        {
            id: 3,
            name: "Tom Harris",
            role: "UX Designer",
            company: "Apple",
            text: "The best job platform I've ever used. Simple, efficient, and great opportunities. I was able to find my dream job in less than 2 weeks. Absolutely amazing!",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Tom+Harris&background=random&color=fff&size=80",
        },
        {
            id: 4,
            name: "Sarah Johnson",
            role: "Data Scientist",
            company: "Amazon",
            text: "CareerCode changed my career trajectory completely. The platform's intelligent matching and personalized recommendations helped me land a role I truly love.",
            rating: 5,
            avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random&color=fff&size=80",
        },
        {
            id: 5,
            name: "Michael Chen",
            role: "DevOps Engineer",
            company: "Netflix",
            text: "Incredible platform! The networking opportunities and job recommendations are top-notch. I've already recommended CareerCode to all my colleagues.",
            rating: 4,
            avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random&color=fff&size=80",
        },
    ];

    // ===== ইমেজ লোড এরর হ্যান্ডলিং =====
    const handleImageError = (e) => {
        e.target.src = 'https://ui-avatars.com/api/?name=User&background=random&color=fff&size=100';
    };

    // ===== সোশ্যাল শেয়ার ফাংশন =====
    const shareOnSocial = (platform) => {
        const url = window.location.href;
        const text = "Check out CareerCode - The best platform for finding your dream job!";
        let shareUrl = '';

        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <motion.div
            ref={sectionRef}
            className="min-h-screen bg-base-100 dark:bg-base-900 transition-colors duration-300"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== HERO SECTION ===== */}
            <motion.section
                variants={heroVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative overflow-hidden py-20 px-5 bg-base-200/30 dark:bg-base-800/30 backdrop-blur-sm"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 dark:bg-primary/20">
                            About Us
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
                    >
                        Connecting Talent with
                        <br />
                        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            Opportunity
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-lg text-base-content/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        We're on a mission to transform the way people find jobs and companies hire talent.
                        Making career growth accessible to everyone, everywhere.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap justify-center gap-4 mt-8"
                    >
                        <Link to="/jobs">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20 gap-2"
                                aria-label="Browse available jobs"
                            >
                                Browse Jobs
                                <FaArrowRight />
                            </motion.button>
                        </Link>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-outline btn-primary rounded-xl px-8"
                                aria-label="Contact us for support"
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* ===== সোশ্যাল শেয়ার বাটন ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap justify-center gap-2 mt-6"
                    >
                        <span className="text-sm text-base-content/50 flex items-center mr-2">Share:</span>
                        <button
                            onClick={() => shareOnSocial('facebook')}
                            className="p-2 rounded-full bg-base-200/50 hover:bg-primary/10 hover:text-primary transition-colors"
                            aria-label="Share on Facebook"
                        >
                            <FaFacebook className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => shareOnSocial('twitter')}
                            className="p-2 rounded-full bg-base-200/50 hover:bg-primary/10 hover:text-primary transition-colors"
                            aria-label="Share on Twitter"
                        >
                            <FaTwitter className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => shareOnSocial('linkedin')}
                            className="p-2 rounded-full bg-base-200/50 hover:bg-primary/10 hover:text-primary transition-colors"
                            aria-label="Share on LinkedIn"
                        >
                            <FaLinkedinIn className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => shareOnSocial('whatsapp')}
                            className="p-2 rounded-full bg-base-200/50 hover:bg-primary/10 hover:text-primary transition-colors"
                            aria-label="Share on WhatsApp"
                        >
                            <FaWhatsapp className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            {/* ===== STATS ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.25 },
                            }}
                            className="bg-base-100 dark:bg-base-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 dark:border-base-700/50 group cursor-pointer"
                        >
                            <div className={`text-3xl ${stat.color} group-hover:scale-110 transition-transform inline-block`}>
                                {stat.icon}
                            </div>
                            <Suspense fallback={<SkeletonLoader />}>
                                <motion.h3
                                    ref={stat.counter.ref}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                    className="text-3xl font-extrabold mt-2"
                                >
                                    {stat.counter.isVisible ? stat.counter.count : 0}
                                    {stat.number.includes('K') && 'K+'}
                                    {stat.number.includes('+') && !stat.number.includes('K') && '+'}
                                </motion.h3>
                            </Suspense>
                            <p className="text-sm text-base-content/50 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ===== MISSION & VISION ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 dark:from-primary/5 dark:to-secondary/5"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
                            <FaRocket className="text-2xl text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                        <p className="text-base-content/70 leading-relaxed">
                            To democratize access to career opportunities and empower professionals
                            to build fulfilling careers while helping companies find the talent they need
                            to succeed and grow.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        className="p-8 rounded-3xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/10 dark:from-secondary/5 dark:to-accent/5"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                            <FaGlobe className="text-2xl text-secondary" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                        <p className="text-base-content/70 leading-relaxed">
                            To become the world's leading career platform, creating a global ecosystem
                            where talent meets opportunity seamlessly and everyone has access to
                            meaningful work.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* ===== VALUES ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16 bg-base-200/30 dark:bg-base-800/30 rounded-3xl"
            >
                <div className="text-center mb-12">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                        Our <span className="text-primary">Values</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base-content/60 mt-2">
                        What guides everything we do
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.25 },
                                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                            }}
                            className="group p-6 rounded-2xl bg-base-100 dark:bg-base-800 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 dark:border-base-700/50 hover:border-transparent relative overflow-hidden"
                            role="article"
                            aria-label={`Value: ${value.title}`}
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.color} group-hover:h-1.5 transition-all duration-300`} />
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {value.icon}
                            </div>
                            <h3 className="font-bold text-lg mt-3 group-hover:text-primary transition-colors">
                                {value.title}
                            </h3>
                            <p className="text-sm text-base-content/60 mt-2 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ===== MILESTONES / TIMELINE ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <div className="text-center mb-12">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                        Our <span className="text-primary">Journey</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base-content/60 mt-2">
                        Milestones that shaped our story
                    </motion.p>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-base-300/50 dark:bg-base-700/50 hidden md:block" />

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                                        className="bg-base-100 dark:bg-base-800 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 dark:border-base-700/50"
                                    >
                                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                                        <h4 className="font-bold text-lg mt-1">{milestone.title}</h4>
                                        <p className="text-sm text-base-content/60 mt-1">{milestone.description}</p>
                                    </motion.div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                        className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20"
                                    >
                                        {index + 1}
                                    </motion.div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ===== TESTIMONIALS ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <div className="text-center mb-10">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                        What Our <span className="text-primary">Users Say</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base-content/60 mt-2">
                        Real stories from people who found their dream jobs
                    </motion.p>
                </div>

                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination-custom',
                            bulletClass: 'swiper-pagination-bullet-custom',
                            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="testimonial-swiper"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <motion.div
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="bg-base-100 dark:bg-base-800 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 dark:border-base-700/50 h-full group"
                                >
                                    <div className="flex gap-0.5 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`${i < testimonial.rating
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-base-300 dark:text-base-600"
                                                    } text-sm`}
                                            />
                                        ))}
                                    </div>
                                    <FaQuoteLeft className="text-primary/10 text-2xl mb-2" />
                                    <p className="text-sm text-base-content/70 leading-relaxed line-clamp-4">
                                        "{testimonial.text}"
                                    </p>
                                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-base-200/50 dark:border-base-700/50">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={`${testimonial.name}'s avatar`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                onError={handleImageError}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-bold text-sm group-hover:text-primary transition-colors truncate">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs text-base-content/50 truncate">
                                                {testimonial.role} at {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button
                        className="swiper-button-prev-custom absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-base-100 dark:bg-base-800 shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center z-20 border border-base-200/50 dark:border-base-700/50 hover:border-primary"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="swiper-button-next-custom absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-base-100 dark:bg-base-800 shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center z-20 border border-base-200/50 dark:border-base-700/50 hover:border-primary"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    <div className="swiper-pagination-custom flex justify-center gap-2 mt-6" />
                </div>
            </motion.section>

            {/* ===== TEAM SECTION ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <div className="text-center mb-12">
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                        Meet Our <span className="text-primary">Team</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-base-content/60 mt-2">
                        The people behind CareerCode
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.25 },
                                boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                            }}
                            className="bg-base-100 dark:bg-base-800 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 dark:border-base-700/50 group"
                            role="article"
                            aria-label={`Team member: ${member.name}`}
                        >
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                                <img
                                    src={member.avatar}
                                    alt={`${member.name}'s profile photo`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={handleImageError}
                                />
                            </div>
                            <h3 className="font-bold mt-4 group-hover:text-primary transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-primary font-medium">{member.role}</p>
                            <p className="text-xs text-base-content/50 mt-2 line-clamp-2">
                                {member.bio}
                            </p>
                            <div className="flex justify-center gap-2 mt-3">
                                <a
                                    href={member.social.linkedin}
                                    className="w-8 h-8 rounded-lg bg-base-200 dark:bg-base-700 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                                    aria-label={`${member.name}'s LinkedIn`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedinIn className="text-xs" />
                                </a>
                                <a
                                    href={member.social.twitter}
                                    className="w-8 h-8 rounded-lg bg-base-200 dark:bg-base-700 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                                    aria-label={`${member.name}'s Twitter`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaTwitter className="text-xs" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* ===== CTA SECTION ===== */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-5 py-16"
            >
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
                    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent p-10 text-center text-white"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />

                    <div className="relative">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-white/80 mt-3 max-w-md mx-auto">
                            Join thousands of professionals who found their dream jobs through CareerCode.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-6">
                            <Link to="/jobs">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn bg-white text-primary hover:bg-white/90 rounded-xl px-8 gap-2 border-0"
                                    aria-label="Browse available jobs"
                                >
                                    Find a Job
                                    <FaArrowRight />
                                </motion.button>
                            </Link>
                            <Link to="/addJob">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-ghost border-2 border-white/30 text-white rounded-xl px-8 hover:bg-white/10"
                                    aria-label="Post a new job"
                                >
                                    Post a Job
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </motion.section>
        </motion.div>
    );
};

export default About;