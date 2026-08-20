// pages/About.jsx
import { motion, useInView } from "framer-motion";
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
    FaStar
} from "react-icons/fa";
import { Link } from "react-router";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

// ✅ Swiper CSS Import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px",
    });

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
        { number: "10K+", label: "Active Users", icon: <FaUsers />, color: "text-primary" },
        { number: "5K+", label: "Companies", icon: <FaBuilding />, color: "text-secondary" },
        { number: "25K+", label: "Jobs Posted", icon: <FaBriefcase />, color: "text-accent" },
        { number: "150+", label: "Countries", icon: <FaGlobe />, color: "text-warning" },
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

    // ===== TESTIMONIALS DATA =====
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

    return (
        <motion.div
            ref={sectionRef}
            className="min-h-screen bg-linear-to-b from-base-100 via-base-200/20 to-base-100"
            variants={sectionVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== HERO SECTION ===== */}
            <motion.section
                variants={heroVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative overflow-hidden py-20 px-5 bg-linear-to-br"
            >
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

                <div className="relative max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
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
                        <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
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
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn btn-primary rounded-xl px-8 shadow-lg shadow-primary/20 gap-2"
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
                            >
                                Contact Us
                            </motion.button>
                        </Link>
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
                            }}
                            className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 group cursor-pointer"
                        >
                            <div className={`text-3xl ${stat.color} group-hover:scale-110 transition-transform inline-block`}>
                                {stat.icon}
                            </div>
                            <motion.h3
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                                className="text-3xl font-extrabold mt-2"
                            >
                                {stat.number}
                            </motion.h3>
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
                        className="p-8 rounded-3xl bg-linear-to-br from-primary/10 to-secondary/10 border border-primary/10"
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
                        className="p-8 rounded-3xl bg-linear-to-br from-secondary/10 to-accent/10 border border-secondary/10"
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
                className="max-w-7xl mx-auto px-5 py-16 bg-base-200/30 rounded-3xl"
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
                            }}
                            className="group p-6 rounded-2xl bg-base-100 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 hover:border-transparent relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${value.color} group-hover:h-1.5 transition-all duration-300`} />
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
                    <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-base-300/50 hidden md:block" />

                    <div className="space-y-8">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col md:flex-row items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                                    <div className="bg-base-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50">
                                        <span className="text-sm font-bold text-primary">{milestone.year}</span>
                                        <h4 className="font-bold text-lg mt-1">{milestone.title}</h4>
                                        <p className="text-sm text-base-content/60 mt-1">{milestone.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                                        {index + 1}
                                    </div>
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* ===== TESTIMONIALS WITH SWIPER CAROUSEL ===== */}
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
                                <div className="bg-base-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 h-full group">
                                    {/* Rating Stars */}
                                    <div className="flex gap-0.5 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar
                                                key={i}
                                                className={`${i < testimonial.rating
                                                    ? "text-yellow-400 fill-current"
                                                    : "text-base-300"
                                                    } text-sm`}
                                            />
                                        ))}
                                    </div>

                                    {/* Quote Icon */}
                                    <FaQuoteLeft className="text-primary/10 text-2xl mb-2" />

                                    {/* Text */}
                                    <p className="text-sm text-base-content/70 leading-relaxed line-clamp-4">
                                        "{testimonial.text}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-base-200/50">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
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
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    <button
                        className="swiper-button-prev-custom absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-base-100 shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center z-20 border border-base-200/50 hover:border-primary"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className="swiper-button-next-custom absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-base-100 shadow-xl hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center z-20 border border-base-200/50 hover:border-primary"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Custom Pagination Dots */}
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
                            whileHover={{ y: -8 }}
                            className="bg-base-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-base-200/50 group"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
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
                                <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                                    <FaLinkedinIn className="text-xs" />
                                </a>
                                <a href={member.social.twitter} className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
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
                    className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary via-secondary to-accent p-10 text-center text-white"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

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
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-white text-primary rounded-xl px-8 gap-2"
                                >
                                    Find a Job
                                    <FaArrowRight />
                                </motion.button>
                            </Link>
                            <Link to="/post-job">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn btn-ghost border-2 border-white/30 text-white rounded-xl px-8 hover:bg-white/10"
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