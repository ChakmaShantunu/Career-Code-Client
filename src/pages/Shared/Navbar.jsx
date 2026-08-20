import { use } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("sign out done");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/readList", label: "Read List" },
        { path: "/wishList", label: "Wish List" },
    ];

    const links = (
        <>
            {navItems.map((item) => (
                <li key={item.path}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            `font-medium transition-all duration-300 ${isActive
                                ? "text-primary bg-primary/10"
                                : "hover:text-primary hover:bg-primary/5"
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <div className="sticky top-0 z-50 px-3 md:px-6 pt-3">
            <div className="navbar max-w-7xl mx-auto bg-base-100/90 backdrop-blur-xl shadow-lg border border-base-200 rounded-2xl px-4 md:px-6">

                {/* Navbar Start */}
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden hover:bg-primary/10"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-base-200"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    {/* Premium Logo with Animation */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Logo Icon */}
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
                            className="relative w-11 h-11 rounded-2xl bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white text-xl shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-shadow"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </motion.div>

                        {/* Text */}
                        <div className="relative">
                            <div className="flex items-center">
                                <motion.span
                                    whileHover={{
                                        background: "linear-linear(to right, #2563eb, #7c3aed, #db2777)",
                                    }}
                                    className="text-xl md:text-2xl font-extrabold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent transition-all duration-500"
                                >
                                    Career
                                </motion.span>
                                <span className="text-xl md:text-2xl font-extrabold text-base-content group-hover:text-primary transition-colors duration-300">
                                    Code
                                </span>
                            </div>

                            {/* Animated Underline */}
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
                                className="absolute -bottom-0.5 left-0 h-0.5 bg-linear-to-r from-primary via-secondary to-accent rounded-full"
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

                            {/* User Info */}
                            <div className="hidden sm:flex items-center gap-2">
                                <div className="avatar">
                                    <div className="w-9 rounded-full ring-2 ring-primary/20">
                                        <img
                                            src={
                                                user.photoURL ||
                                                "https://i.ibb.co/5GzXkwq/user.png"
                                            }
                                            alt={user.displayName || "User"}
                                        />
                                    </div>
                                </div>

                                <div className="hidden md:block">
                                    <p className="text-sm font-semibold leading-none">
                                        {user.displayName || "User"}
                                    </p>
                                    <p className="text-xs text-base-content/50 mt-1">
                                        {user.email}
                                    </p>
                                </div>
                            </div>

                            {/* Sign Out */}
                            <button
                                onClick={handleSignOut}
                                className="btn btn-sm md:btn-md rounded-xl border-0 bg-error/10 text-error hover:bg-error hover:text-white transition-all duration-300"
                            >
                                Sign Out
                            </button>
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