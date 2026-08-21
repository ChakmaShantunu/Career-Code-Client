// pages/SignIn.jsx
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaLock,
    FaArrowRight,
    FaEye,
    FaEyeSlash,
    FaCheckCircle,
    FaSpinner,
    FaUserCircle
} from "react-icons/fa";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setSuccess(false);

        const { email, password } = formData;

        // Validation
        if (!email || !password) {
            setError("Please fill in all required fields");
            setIsLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setIsLoading(false);
            return;
        }

        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess(true);
                setIsLoading(false);
                setTimeout(() => {
                    navigate(from);
                }, 1000);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    };

    // Forgot Password handler
    const handleForgotPassword = () => {
        // Implement forgot password logic
        console.log("Forgot password clicked");
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-secondary/5 px-4 py-12"
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative w-full max-w-md"
            >
                {/* Decorative Background Elements */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

                {/* Main Card */}
                <div className="relative bg-base-100/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-base-200/50 overflow-hidden">
                    {/* Top Gradient Bar */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

                    <div className="p-6 md:p-8">
                        {/* Header */}
                        <motion.div variants={itemVariants} className="text-center mb-6">
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl shadow-lg shadow-primary/20"
                                >
                                    <FaUserCircle />
                                </motion.div>
                            </div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                </span>
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                    Welcome Back
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-extrabold">
                                Sign In
                            </h1>
                            <p className="text-base-content/60 text-sm mt-2">
                                Sign in to your account to continue
                            </p>
                        </motion.div>

                        {/* Success Message */}
                        {success && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-4 p-4 rounded-xl bg-success/10 border border-success/20 text-success flex items-center gap-3"
                            >
                                <FaCheckCircle className="text-lg" />
                                <span className="text-sm font-medium">Login successful! Redirecting...</span>
                            </motion.div>
                        )}

                        {/* Error Message */}
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mb-4 p-4 rounded-xl bg-error/10 border border-error/20 text-error flex items-center gap-3"
                            >
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-sm font-medium">{error}</span>
                            </motion.div>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSignIn} className="space-y-4">
                            {/* Email Field */}
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <label className="flex items-center gap-2 text-sm font-semibold text-base-content/80">
                                    <FaEnvelope className="text-primary" />
                                    Email Address
                                    <span className="text-error text-xs">*</span>
                                </label>

                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-base-300 bg-base-100/50 
                                            focus:border-primary focus:ring-2 focus:ring-primary/20 
                                            transition-all duration-300 outline-none
                                            hover:border-primary/50
                                            placeholder:text-base-content/30
                                            pl-12"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/30">
                                        <FaEnvelope />
                                    </div>
                                </div>
                            </motion.div>

                            {/* Password Field */}
                            <motion.div variants={itemVariants} className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2 text-sm font-semibold text-base-content/80">
                                        <FaLock className="text-primary" />
                                        Password
                                        <span className="text-error text-xs">*</span>
                                    </label>
                                    <button
                                        type="button"
                                        onClick={handleForgotPassword}
                                        className="text-xs text-primary hover:text-primary-focus hover:underline transition-colors"
                                    >
                                        Forgot Password?
                                    </button>
                                </div>

                                <div className="relative group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        className="w-full px-4 py-3.5 rounded-xl border border-base-300 bg-base-100/50 
                                            focus:border-primary focus:ring-2 focus:ring-primary/20 
                                            transition-all duration-300 outline-none
                                            hover:border-primary/50
                                            placeholder:text-base-content/30
                                            pl-12 pr-12"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/30">
                                        <FaLock />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/40 hover:text-primary transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </motion.div>

                            {/* Remember Me */}
                            <motion.div variants={itemVariants} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    className="checkbox checkbox-primary checkbox-sm rounded-md"
                                />
                                <label htmlFor="rememberMe" className="text-sm text-base-content/60">
                                    Remember me
                                </label>
                            </motion.div>

                            {/* Sign In Button */}
                            <motion.button
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isLoading}
                                className="relative w-full btn btn-primary h-14 rounded-2xl text-base font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 overflow-hidden group"
                            >
                                {isLoading ? (
                                    <span className="flex items-center gap-3">
                                        <FaSpinner className="animate-spin text-lg" />
                                        Signing In...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-3">
                                        Sign In
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                )}
                            </motion.button>
                        </form>

                        {/* Divider */}
                        <motion.div variants={itemVariants} className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-base-300/50" />
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="px-4 bg-base-100 text-base-content/40">or continue with</span>
                            </div>
                        </motion.div>

                        {/* Social Login */}
                        <motion.div variants={itemVariants}>
                            <SocialLogin from={from} />
                        </motion.div>

                        {/* Register Link */}
                        <motion.div variants={itemVariants} className="text-center mt-6">
                            <p className="text-sm text-base-content/60">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-primary font-semibold hover:text-primary-focus transition-colors hover:underline inline-flex items-center gap-1"
                                >
                                    Create Account
                                    <FaArrowRight className="text-xs" />
                                </Link>
                            </p>
                        </motion.div>

                        {/* Demo Credentials (Optional) */}
                        <motion.div variants={itemVariants} className="mt-4 p-3 rounded-xl bg-base-200/30 border border-base-200/50">
                            <p className="text-center text-xs text-base-content/40">
                                <span className="font-semibold">Demo Credentials:</span>{" "}
                                demo@example.com / password123
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SignIn;