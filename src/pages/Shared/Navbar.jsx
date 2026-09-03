import { use, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { 
    User, Settings, LayoutDashboard, LogOut, 
    CreditCard, Bell, Shield, HelpCircle, 
    ChevronDown, Sparkles, Crown, Zap,
    Briefcase, FileText, Calendar, Users,
    Gift, Star, Award, Menu, X
} from "lucide-react";

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("sign out done");
                setIsDropdownOpen(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash routing when page loads or hash changes
    useEffect(() => {
        if (location.hash === '#top-companies') {
            setTimeout(() => {
                const element = document.getElementById('top-companies');
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }, 200);
        }
    }, [location]);

    const handleTopCompaniesClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        // If already on home page
        if (location.pathname === '/') {
            const element = document.getElementById('top-companies');
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                // Update URL without reload
                window.history.pushState(null, '', '/#top-companies');
            }
        } else {
            // Navigate to home with hash
            navigate('/#top-companies');
        }
    };

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        ...(user ? [{ path: "/myApplications", label: "Application List" }] : []),
        ...(user && user?.role === 'recruiter' ? [{ path: "/addJob", label: "Add Job" }] : []),
        {
            path: "/#top-companies",
            label: "Top Companies",
            isHash: true
        }
    ];

    const links = (
        <>
            {navItems.map((item) => {
                // For Top Companies - use a tag with onClick
                if (item.isHash) {
                    return (
                        <li key={item.path}>
                            <a
                                href={item.path}
                                onClick={handleTopCompaniesClick}
                                className="font-medium transition-all duration-300 hover:text-primary hover:bg-primary/5 block px-4 py-2 rounded-lg"
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                }

                // For regular links - use NavLink
                return (
                    <li key={item.path}>
                        <NavLink
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                                `font-medium transition-all duration-300 block px-4 py-2 rounded-lg ${
                                    isActive
                                        ? "text-primary bg-primary/10"
                                        : "hover:text-primary hover:bg-primary/5"
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );

    return (
        <div className={`sticky top-0 z-50 px-3 md:px-6 pt-3 transition-all duration-300 ${
            scrolled ? 'backdrop-blur-xl bg-base-100/80' : ''
        }`}>
            <div className="navbar max-w-7xl mx-auto bg-base-100/90 backdrop-blur-xl shadow-lg border border-base-200 rounded-2xl px-4 md:px-6">
                {/* Navbar Start */}
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="btn btn-ghost btn-sm hover:bg-primary/10"
                        >
                            {isMobileMenuOpen ? (
                                <X size={20} className="text-base-content" />
                            ) : (
                                <Menu size={20} className="text-base-content" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 right-0 mt-3 mx-4 bg-base-100/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-base-200 p-4 lg:hidden z-50"
                            >
                                <ul className="menu menu-sm gap-1">
                                    {links}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group relative ml-2 lg:ml-0"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <motion.div
                            whileHover={{
                                scale: 1.1,
                                rotate: 360,
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.div>
                        <div className="relative">
                            <div className="flex items-center">
                                <motion.span
                                    whileHover={{
                                        background: "linear-linear(to right, #2563eb, #7c3aed, #db2777)",
                                    }}
                                    className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-500"
                                >
                                    Career
                                </motion.span>
                                <span className="text-xl md:text-2xl font-extrabold text-base-content group-hover:text-primary transition-colors duration-300">
                                    Code
                                </span>
                            </div>
                            <motion.div
                                animate={{
                                    width: ["0%", "100%", "0%"],
                                    x: ["0%", "0%", "100%"],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                                style={{ width: "0%" }}
                            />
                            <p className="text-[10px] text-base-content/40 tracking-[0.15em] uppercase hidden md:block group-hover:text-primary/70 transition-colors">
                                Your Career, Our Priority
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1">
                        {links}
                    </ul>
                </div>

                {/* Navbar End */}
                <div className="navbar-end">
                    {user ? (
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Premium User Dropdown */}
                            <div className="relative">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-2 bg-base-200/50 p-1.5 pr-3 rounded-full border border-base-300/20 hover:bg-base-200/70 transition-all duration-300"
                                >
                                    <div className="avatar">
                                        <div className="w-9 rounded-full ring-2 ring-primary/30">
                                            <img
                                                src={
                                                    user.photoURL ||
                                                    "https://i.ibb.co/5GzXkwq/user.png"
                                                }
                                                alt={user.displayName || "User"}
                                            />
                                        </div>
                                    </div>
                                    <span className="hidden md:block text-sm font-medium">
                                        {user.displayName?.split(' ')[0] || "User"}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={16} className="text-base-content/40" />
                                    </motion.div>
                                </motion.button>

                                {/* Premium Dropdown Menu */}
                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute right-0 mt-3 w-72 bg-base-100/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-base-300/20 overflow-hidden z-50"
                                        >
                                            {/* User Info Header */}
                                            <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border-b border-base-300/20">
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="w-12 rounded-full ring-2 ring-primary/30">
                                                            <img
                                                                src={
                                                                    user.photoURL ||
                                                                    "https://i.ibb.co/5GzXkwq/user.png"
                                                                }
                                                                alt={user.displayName || "User"}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-sm">
                                                            {user.displayName || "User"}
                                                        </p>
                                                        <p className="text-xs text-base-content/50 truncate">
                                                            {user.email}
                                                        </p>
                                                        {/* Premium Badge */}
                                                        <div className="flex items-center gap-1 mt-1">
                                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-full flex items-center gap-1">
                                                                <Crown size={10} />
                                                                Pro Member
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            <div className="py-2">
                                                {/* Dashboard */}
                                                <Link
                                                    to="/dashboard"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/10 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                        <LayoutDashboard size={16} className="text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Dashboard</p>
                                                        <p className="text-[10px] text-base-content/40">Overview & Analytics</p>
                                                    </div>
                                                </Link>

                                                {/* My Applications */}
                                                <Link
                                                    to="/myApplications"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/10 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                                        <Briefcase size={16} className="text-blue-500" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">My Applications</p>
                                                        <p className="text-[10px] text-base-content/40">Track your applications</p>
                                                    </div>
                                                    <span className="ml-auto text-[10px] font-bold bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full">3</span>
                                                </Link>

                                                {/* Add Job (Recruiter) */}
                                                {user?.role === 'recruiter' && (
                                                    <Link
                                                        to="/addJob"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary/10 transition-colors group"
                                                    >
                                                        <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                                            <FileText size={16} className="text-green-500" />
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-medium">Post a Job</p>
                                                            <p className="text-[10px] text-base-content/40">Hire top talent</p>
                                                        </div>
                                                    </Link>
                                                )}

                                                {/* Divider */}
                                                <div className="border-t border-base-300/20 my-2"></div>

                                                {/* Settings */}
                                                <Link
                                                    to="/settings"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200/50 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-base-300/50 transition-colors">
                                                        <Settings size={16} className="text-base-content/60" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Settings</p>
                                                        <p className="text-[10px] text-base-content/40">Account & Preferences</p>
                                                    </div>
                                                </Link>

                                                {/* Billing/Subscription */}
                                                <Link
                                                    to="/billing"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200/50 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-base-300/50 transition-colors">
                                                        <CreditCard size={16} className="text-base-content/60" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Billing</p>
                                                        <p className="text-[10px] text-base-content/40">Manage subscription</p>
                                                    </div>
                                                    <span className="ml-auto text-[10px] font-bold bg-amber-400/10 text-amber-500 px-2 py-0.5 rounded-full">Premium</span>
                                                </Link>

                                                {/* Help/Support */}
                                                <Link
                                                    to="/support"
                                                    onClick={() => setIsDropdownOpen(false)}
                                                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-base-200/50 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-base-200 flex items-center justify-center group-hover:bg-base-300/50 transition-colors">
                                                        <HelpCircle size={16} className="text-base-content/60" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">Help & Support</p>
                                                        <p className="text-[10px] text-base-content/40">FAQs & Contact</p>
                                                    </div>
                                                </Link>

                                                {/* Divider */}
                                                <div className="border-t border-base-300/20 my-2"></div>

                                                {/* Sign Out */}
                                                <button
                                                    onClick={handleSignOut}
                                                    className="flex items-center gap-3 w-full text-left px-4 py-2.5 hover:bg-error/10 transition-colors group"
                                                >
                                                    <div className="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center group-hover:bg-error/20 transition-colors">
                                                        <LogOut size={16} className="text-error" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-error">Sign Out</p>
                                                        <p className="text-[10px] text-base-content/40">Logout from account</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Notifications Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative p-2 rounded-full hover:bg-base-200/50 transition-colors"
                            >
                                <Bell size={20} className="text-base-content/60" />
                                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full animate-pulse"></span>
                            </motion.button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2">
                            <NavLink
                                to="/register"
                                className="btn btn-sm md:btn-md btn-ghost rounded-xl hover:bg-primary/10 hover:text-primary"
                            >
                                Register
                            </NavLink>
                            <NavLink
                                to="/signIn"
                                className="btn btn-sm md:btn-md btn-primary rounded-xl shadow-md shadow-primary/20 hover:scale-105 transition-transform"
                            >
                                Sign In
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;