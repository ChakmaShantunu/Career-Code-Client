// pages/UpdateJob.jsx
import React, { useEffect } from 'react';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaBuilding,
    FaUser,
    FaEnvelope,
    FaCalendar,
    FaMoneyBillWave,
    FaFileAlt,
    FaList,
    FaTasks,
    FaPlus,
    FaTimes,
    FaArrowLeft,
    FaSpinner,
    FaCheckCircle
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const UpdateJob = () => {
    const { id: jobId } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const sectionRef = useRef(null);
    // const isInView = useInView(sectionRef, {
    //     once: false,
    //     amount: 0.1,
    //     margin: "0px 0px -100px 0px",
    // });

    // ===== STATES =====
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [formData, setFormData] = useState({
        title: "",
        location: "",
        jobType: "",
        category: "",
        applicationDeadline: "",
        salaryRange: {
            min: "",
            max: "",
            currency: "bdt"
        },
        description: "",
        company: "",
        requirements: [],
        responsibilities: [],
        status: "active",
        hr_email: "",
        hr_name: "",
        company_logo: ""
    });

    const [requirement, setRequirement] = useState("");
    const [responsibility, setResponsibility] = useState("");

    // ===== FETCH JOB DATA =====
    useEffect(() => {
        const fetchJob = async () => {
            try {
                setIsFetching(true);

                const response = await axios.get(`http://localhost:3000/jobs/${jobId}`);
                const job = response.data;

                setFormData({
                    title: job.title || "",
                    location: job.location || "",
                    jobType: job.jobType || "",
                    category: job.category || "",
                    applicationDeadline: job.applicationDeadline ? job.applicationDeadline.split('T')[0] : "",
                    salaryRange: {
                        min: job.salaryRange?.min || "",
                        max: job.salaryRange?.max || "",
                        currency: job.salaryRange?.currency || "bdt"
                    },
                    description: job.description || "",
                    company: job.company || "",
                    requirements: job.requirements || [],
                    responsibilities: job.responsibilities || [],
                    status: job.status || "active",
                    hr_email: job.hr_email || "",
                    hr_name: job.hr_name || "",
                    company_logo: job.company_logo || ""
                });
            } catch (error) {
                console.error('Error fetching job:', error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to load job data. Please try again.",
                    icon: "error",
                    confirmButtonColor: "#2563eb",
                });
            } finally {
                setIsFetching(false);
            }
        };

        if (jobId) {
            fetchJob();
        }
    }, [jobId]);

    // ===== HANDLERS =====
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "salaryMin" || name === "salaryMax") {
            setFormData(prev => ({
                ...prev,
                salaryRange: {
                    ...prev.salaryRange,
                    [name === "salaryMin" ? "min" : "max"]: parseInt(value) || ""
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddRequirement = () => {
        if (requirement.trim()) {
            setFormData(prev => ({
                ...prev,
                requirements: [...prev.requirements, requirement.trim()]
            }));
            setRequirement("");
        }
    };

    const handleRemoveRequirement = (index) => {
        setFormData(prev => ({
            ...prev,
            requirements: prev.requirements.filter((_, i) => i !== index)
        }));
    };

    const handleAddResponsibility = () => {
        if (responsibility.trim()) {
            setFormData(prev => ({
                ...prev,
                responsibilities: [...prev.responsibilities, responsibility.trim()]
            }));
            setResponsibility("");
        }
    };

    const handleRemoveResponsibility = (index) => {
        setFormData(prev => ({
            ...prev,
            responsibilities: prev.responsibilities.filter((_, i) => i !== index)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.title || !formData.company || !formData.location || !formData.jobType) {
            Swal.fire({
                title: "Error!",
                text: "Please fill in all required fields",
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        if (formData.requirements.length === 0) {
            Swal.fire({
                title: "Error!",
                text: "Please add at least one requirement",
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        if (formData.responsibilities.length === 0) {
            Swal.fire({
                title: "Error!",
                text: "Please add at least one responsibility",
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
            return;
        }

        setIsLoading(true);

        try {
            const response = await axios.put(`http://localhost:3000/jobs/${jobId}`, formData);

            if (response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: "✅ Job Updated Successfully!",
                    text: "Your job has been updated successfully.",
                    icon: "success",
                    confirmButtonColor: "#2563eb",
                    confirmButtonText: "My Jobs",
                    timer: 3000,
                    timerProgressBar: true,
                }).then((result) => {
                    navigate('/myPostedJobs');
                });
            }
        } catch (error) {
            console.error('Update Error:', error);
            let errorMessage = "Failed to update job. Please try again.";

            if (error.response) {
                errorMessage = error.response.data?.message || errorMessage;
            } else if (error.request) {
                errorMessage = "Network error. Please check your internet connection.";
            }

            Swal.fire({
                title: "❌ Update Failed!",
                text: errorMessage,
                icon: "error",
                confirmButtonColor: "#2563eb",
            });
        } finally {
            setIsLoading(false);
        }
    };

    // ===== ANIMATION VARIANTS =====
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
    };

    const jobTypes = ["Full-time", "Part-time", "Remote", "Hybrid", "Contract", "Internship"];
    const categories = ["Engineering", "Design", "Marketing", "Finance", "Healthcare", "Education", "Technology", "Sales"];
    const currencies = ["bdt", "usd", "eur", "gbp"];

    // ===== LOADING STATE =====
    if (isFetching) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-base-200/50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                    <p className="text-base-content/60">Loading job data...</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            ref={sectionRef}
            className="min-h-screen bg-linear-to-br from-base-200/50 via-base-100 to-base-200/30 py-8 md:py-16 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-4xl mx-auto">
                {/* ===== HEADER ===== */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="flex items-center gap-4 mb-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-ghost btn-sm gap-2"
                        >
                            <FaArrowLeft />
                            Back
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <span className="text-2xl">✏️</span>
                                </div>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold">
                                        Update <span className="text-primary">Job</span>
                                    </h2>
                                </div>
                            </div>
                            <p className="text-base-content/60">
                                Update the details of your job posting
                            </p>
                        </div>
                    </div>
                    <div className="divider" />
                </motion.div>

                {/* ===== FORM ===== */}
                <motion.div
                    variants={itemVariants}
                    className="card bg-base-100 shadow-2xl border border-base-200/50 backdrop-blur-sm"
                >
                    <div className="card-body p-6 md:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* ===== BASIC INFORMATION ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaBriefcase className="text-primary" />
                                        Job Title <span className="text-error">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Senior Software Engineer"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaBuilding className="text-secondary" />
                                        Company <span className="text-error">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="e.g. Google"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaMapMarkerAlt className="text-accent" />
                                        Location <span className="text-error">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="e.g. Dhaka, Bangladesh"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* ===== JOB TYPE & CATEGORY ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        Job Type <span className="text-error">*</span>
                                    </label>
                                    <select
                                        name="jobType"
                                        value={formData.jobType}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    >
                                        <option value="">Select Job Type</option>
                                        {jobTypes.map(type => (
                                            <option key={type} value={type}>{type}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        Category <span className="text-error">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* ===== SALARY & DEADLINE ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaMoneyBillWave className="text-success" />
                                        Min Salary
                                    </label>
                                    <input
                                        type="number"
                                        name="salaryMin"
                                        value={formData.salaryRange.min}
                                        onChange={handleChange}
                                        placeholder="e.g. 40000"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaMoneyBillWave className="text-success" />
                                        Max Salary
                                    </label>
                                    <input
                                        type="number"
                                        name="salaryMax"
                                        value={formData.salaryRange.max}
                                        onChange={handleChange}
                                        placeholder="e.g. 60000"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        Currency
                                    </label>
                                    <select
                                        value={formData.salaryRange.currency}
                                        onChange={(e) => {
                                            setFormData(prev => ({
                                                ...prev,
                                                salaryRange: {
                                                    ...prev.salaryRange,
                                                    currency: e.target.value
                                                }
                                            }));
                                        }}
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    >
                                        {currencies.map(curr => (
                                            <option key={curr} value={curr}>{curr.toUpperCase()}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* ===== DEADLINE ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaCalendar className="text-warning" />
                                    Application Deadline <span className="text-error">*</span>
                                </label>
                                <input
                                    type="date"
                                    name="applicationDeadline"
                                    value={formData.applicationDeadline}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                    required
                                />
                            </div>

                            {/* ===== DESCRIPTION ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaFileAlt className="text-info" />
                                    Description <span className="text-error">*</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Write a detailed job description..."
                                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                                    required
                                />
                            </div>

                            {/* ===== REQUIREMENTS ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaList className="text-error" />
                                    Requirements <span className="text-error">*</span>
                                </label>
                                <div className="flex gap-3 mb-3">
                                    <input
                                        type="text"
                                        value={requirement}
                                        onChange={(e) => setRequirement(e.target.value)}
                                        placeholder="Add a requirement..."
                                        className="flex-1 px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddRequirement()}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddRequirement}
                                        className="btn btn-primary rounded-xl px-6 gap-2"
                                    >
                                        <FaPlus />
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.requirements.map((req, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 text-primary border border-primary/20 text-sm"
                                        >
                                            {req}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveRequirement(index)}
                                                className="hover:text-error transition-colors"
                                            >
                                                <FaTimes />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* ===== RESPONSIBILITIES ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    <FaTasks className="text-secondary" />
                                    Responsibilities <span className="text-error">*</span>
                                </label>
                                <div className="flex gap-3 mb-3">
                                    <input
                                        type="text"
                                        value={responsibility}
                                        onChange={(e) => setResponsibility(e.target.value)}
                                        placeholder="Add a responsibility..."
                                        className="flex-1 px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddResponsibility()}
                                    />
                                    <button
                                        type="button"
                                        onClick={handleAddResponsibility}
                                        className="btn btn-secondary rounded-xl px-6 gap-2"
                                    >
                                        <FaPlus />
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {formData.responsibilities.map((resp, index) => (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/10 text-secondary border border-secondary/20 text-sm"
                                        >
                                            {resp}
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveResponsibility(index)}
                                                className="hover:text-error transition-colors"
                                            >
                                                <FaTimes />
                                            </button>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* ===== HR INFORMATION ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaUser className="text-accent" />
                                        HR Name <span className="text-error">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="hr_name"
                                        value={formData.hr_name}
                                        onChange={handleChange}
                                        placeholder="e.g. John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                        <FaEnvelope className="text-info" />
                                        HR Email <span className="text-error">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="hr_email"
                                        value={formData.hr_email}
                                        onChange={handleChange}
                                        placeholder="hr@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* ===== COMPANY LOGO ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    Company Logo URL
                                </label>
                                <input
                                    type="url"
                                    name="company_logo"
                                    value={formData.company_logo}
                                    onChange={handleChange}
                                    placeholder="https://i.ibb.co/example/logo.png"
                                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                />
                            </div>

                            {/* ===== STATUS ===== */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold mb-1.5">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                                >
                                    <option value="active">✅ Active</option>
                                    <option value="inactive">⏸️ Inactive</option>
                                    <option value="closed">🔒 Closed</option>
                                </select>
                            </div>

                            {/* ===== SUBMIT BUTTON ===== */}
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
                                        Updating Job...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-3">
                                        <FaCheckCircle />
                                        Update Job
                                    </span>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default UpdateJob;