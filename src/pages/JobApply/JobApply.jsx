import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";

const JobApply = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleApplyFormSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const resume = form.resume.value;
        const coverLetter = form.coverLetter.value;

        // Validation
        if (!name || !email || !resume || !coverLetter) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all required fields",
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        const application = {
            jobId,
            applicant: name,
            email: user?.email || email,
            resume,
            coverLetter
        };

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3000/applications', application);
            console.log('Response:', response.data);

            // ✅ Check if the request was successful
            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: "Application Submitted! 🎉",
                    text: "Your application has been sent successfully. Good luck!",
                    icon: "success",
                    confirmButtonColor: "#2563eb",
                    confirmButtonText: "My Applications",
                    timer: 3000,
                    timerProgressBar: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/myApplications');
                    }
                });
                form.reset();
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#2563eb",
                });
            }
        } catch (error) {
            console.error('Application Error:', error);

            // Better error handling
            let errorMessage = "Failed to submit application. Please try again.";

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Response data:', error.response.data);
                console.log('Response status:', error.response.status);
                errorMessage = error.response.data?.message || errorMessage;
            } else if (error.request) {
                // The request was made but no response was received
                errorMessage = "Network error. Please check your internet connection.";
            }

            Swal.fire({
                title: "Submission Failed!",
                text: errorMessage,
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Animation variants
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
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="min-h-screen bg-linear-to-br from-base-200/50 via-base-100 to-base-200/30 py-8 md:py-16 px-4"
        >
            <div className="max-w-4xl mx-auto">
                {/* ===== HEADER SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    {/* Decorative Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <span className="badge badge-primary badge-lg gap-2 px-5 py-3 shadow-lg shadow-primary/20">
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            New Application
                        </span>
                    </motion.div>

                    {/* Company Logo with Glow */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            type: "spring",
                            stiffness: 200,
                        }}
                        className="relative inline-block"
                    >
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl" />
                        <img
                            src=""
                            alt=""
                            className="relative w-28 h-28 object-contain rounded-2xl bg-base-100 p-3 shadow-2xl border-2 border-base-200/50"
                        />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-3xl md:text-5xl font-extrabold mt-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                    >
                        Apply for{" "}
                        <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
                            title
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl font-semibold mt-3 text-base-content/70 flex items-center justify-center gap-2"
                    >
                        <span className="text-primary">🏢</span> <Link to={`/jobs/${jobId}`}>Details</Link>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-3 mt-4 px-6 py-3 rounded-2xl bg-error/10 border border-error/20 backdrop-blur-sm"
                    >
                        <svg
                            className="w-5 h-5 text-error animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span className="text-sm font-medium text-base-content/80">
                            Application Deadline:{" "}
                            <span className="font-bold text-error">
                                applicationDeadline
                            </span>
                        </span>
                    </motion.div>
                </motion.div>

                {/* ===== FORM CARD ===== */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="card bg-base-100 shadow-2xl border border-base-200/50 backdrop-blur-sm hover:shadow-3xl transition-shadow duration-500"
                >
                    <div className="card-body p-6 md:p-10">
                        {/* Form Header */}
                        <motion.div variants={itemVariants} className="mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold">
                                        Application Form
                                    </h2>
                                    <p className="text-base-content/60 text-sm mt-1">
                                        Please fill out all required fields carefully
                                    </p>
                                </div>
                            </div>
                            <div className="divider mt-4" />
                        </motion.div>

                        <form onSubmit={handleApplyFormSubmit} className="space-y-6">
                            {/* ===== FULL NAME ===== */}
                            <motion.div variants={itemVariants} className="group">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4 text-primary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                        Full Name
                                        <span className="text-error text-sm">*</span>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    className="input input-bordered w-full focus:input-primary transition-all duration-300 hover:border-primary/50"
                                    required
                                />
                                <div className="text-xs text-base-content/40 mt-1">
                                    Must be at least 3 characters
                                </div>
                            </motion.div>

                            {/* ===== EMAIL ===== */}
                            <motion.div variants={itemVariants} className="group">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4 text-secondary"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        Email Address
                                        <span className="text-error text-sm">*</span>
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email || ""}
                                    placeholder="you@example.com"
                                    className="input input-bordered w-full focus:input-secondary transition-all duration-300 hover:border-secondary/50"
                                    required
                                />
                                <div className="text-xs text-base-content/40 mt-1">
                                    We'll send confirmation to this email
                                </div>
                            </motion.div>

                            {/* ===== RESUME LINK ===== */}
                            <motion.div variants={itemVariants} className="group">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4 text-accent"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        Resume / CV Link
                                        <span className="text-error text-sm">*</span>
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="url"
                                        name="resume"
                                        placeholder="https://drive.google.com/..."
                                        className="input input-bordered w-full focus:input-accent transition-all duration-300 hover:border-accent/50 pl-12"
                                        required
                                    />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-base-content/40"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-xs text-base-content/40 mt-1 flex items-center gap-1">
                                    <span>🔗</span> Provide a publicly accessible Google Drive,
                                    Dropbox, or portfolio link
                                </div>
                            </motion.div>

                            {/* ===== COVER LETTER ===== */}
                            <motion.div variants={itemVariants} className="group">
                                <label className="label">
                                    <span className="label-text font-semibold flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4 text-info"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                        Cover Letter
                                        <span className="text-error text-sm">*</span>
                                    </span>
                                </label>
                                <textarea
                                    name="coverLetter"
                                    rows="6"
                                    placeholder="Write a compelling cover letter explaining why you're the perfect fit..."
                                    className="textarea textarea-bordered w-full focus:textarea-info transition-all duration-300 hover:border-info/50 resize-none"
                                    required
                                ></textarea>
                                <div className="flex justify-between text-xs text-base-content/40 mt-1">
                                    <span>Minimum 50 characters recommended</span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-info">💡</span> Be specific and
                                        concise
                                    </span>
                                </div>
                            </motion.div>

                            {/* ===== APPLICATION SUMMARY ===== */}
                            <motion.div variants={itemVariants}>
                                <div className="bg-linear-to-br from-base-200/70 via-base-200/30 to-base-100 rounded-2xl p-6 border-2 border-base-200/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-1.5 rounded-lg bg-warning/10 text-warning">
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="font-bold text-base">Application Summary</h3>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-start gap-3 p-3 rounded-xl bg-base-100/50">
                                            <span className="text-primary">📌</span>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                                    Position
                                                </p>
                                                <p className="font-medium mt-0.5">title</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-3 rounded-xl bg-base-100/50">
                                            <span className="text-secondary">🏢</span>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                                    Company
                                                </p>
                                                <p className="font-medium mt-0.5">company</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-3 p-3 rounded-xl bg-base-100/50 sm:col-span-2">
                                            <span className="text-accent">📧</span>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                                    HR Contact
                                                </p>
                                                <p className="font-medium mt-0.5 text-primary">
                                                    hr_email
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ===== TERMS CHECKBOX ===== */}
                            <motion.div variants={itemVariants}>
                                <div className="flex items-start gap-3 p-4 rounded-xl bg-base-200/30 border border-base-200/30">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary mt-0.5"
                                        required
                                    />
                                    <div>
                                        <p className="text-sm font-medium">
                                            I confirm that all information provided is accurate
                                        </p>
                                        <p className="text-xs text-base-content/40">
                                            By submitting, you agree to our terms and privacy policy
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* ===== SUBMIT BUTTON ===== */}
                            <motion.div variants={itemVariants}>
                                <motion.button
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
                                    }}
                                    whileTap={{ scale: 0.97 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="relative w-full overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                    <div className={`relative btn btn-primary w-full text-lg font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 border-0 bg-linear-to-r from-primary to-secondary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}>
                                        <span className="flex items-center gap-3">
                                            {isLoading ? (
                                                <>
                                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </>
                                            ) : (
                                                <>
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        />
                                                    </svg>
                                                    Submit Application
                                                    <svg
                                                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                                                        />
                                                    </svg>
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </motion.button>

                                {/* Progress indicator */}
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center gap-2 text-xs text-base-content/40">
                                        <svg
                                            className="w-4 h-4 text-success"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                            />
                                        </svg>
                                        Your data is secure
                                    </div>
                                    <p className="text-xs text-base-content/40">
                                        * Required fields
                                    </p>
                                </div>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>

                {/* ===== BACK BUTTON ===== */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-center"
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-ghost btn-sm gap-2 hover:bg-base-200/50"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to Job Details
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default JobApply;