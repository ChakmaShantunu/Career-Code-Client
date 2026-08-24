// components/ApplicationList.jsx
import { motion, useInView } from "framer-motion";
import { use, useRef, useState } from "react";
import {
    FaSearch,
    FaFilter,
    FaEye,
    FaEdit,
    FaTrash,
    FaCheckCircle,
    FaClock,
    FaTimesCircle,
    FaFileAlt,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaArrowUp,
    FaArrowDown,
    FaDownload,
    FaPrint,
    FaEllipsisV,
    FaChevronLeft,
    FaChevronRight,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ApplicationList = ({ myApplicationsPromise }) => {
    const applications = use(myApplicationsPromise);
    console.log("📊 Total applications from API:", applications?.length);
    console.log("📝 Applications data:", applications);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.1,
        margin: "0px 0px -100px 0px",
    });

    // ===== STATES =====
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const itemsPerPage = 5;

    // ===== DUMMY DATA =====
    // const applications = [
    //     {
    //         id: 1,
    //         applicant: "John Doe",
    //         email: "john@example.com",
    //         phone: "+1 (555) 123-4567",
    //         position: "Senior Developer",
    //         company: "Google",
    //         appliedDate: "2024-01-15",
    //         status: "approved",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Lorem ipsum dolor sit amet...",
    //         location: "Mountain View, CA",
    //         experience: "5 years",
    //     },
    //     {
    //         id: 2,
    //         applicant: "Sarah Smith",
    //         email: "sarah@example.com",
    //         phone: "+1 (555) 234-5678",
    //         position: "UI/UX Designer",
    //         company: "Microsoft",
    //         appliedDate: "2024-01-14",
    //         status: "pending",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Consectetur adipiscing elit...",
    //         location: "Redmond, WA",
    //         experience: "3 years",
    //     },
    //     {
    //         id: 3,
    //         applicant: "Mike Johnson",
    //         email: "mike@example.com",
    //         phone: "+1 (555) 345-6789",
    //         position: "Product Manager",
    //         company: "Apple",
    //         appliedDate: "2024-01-13",
    //         status: "rejected",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Sed do eiusmod tempor...",
    //         location: "Cupertino, CA",
    //         experience: "7 years",
    //     },
    //     {
    //         id: 4,
    //         applicant: "Emily Davis",
    //         email: "emily@example.com",
    //         phone: "+1 (555) 456-7890",
    //         position: "Data Scientist",
    //         company: "Amazon",
    //         appliedDate: "2024-01-12",
    //         status: "reviewing",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Ut labore et dolore magna...",
    //         location: "Seattle, WA",
    //         experience: "4 years",
    //     },
    //     {
    //         id: 5,
    //         applicant: "David Wilson",
    //         email: "david@example.com",
    //         phone: "+1 (555) 567-8901",
    //         position: "DevOps Engineer",
    //         company: "Netflix",
    //         appliedDate: "2024-01-11",
    //         status: "approved",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Quis nostrud exercitation...",
    //         location: "Los Gatos, CA",
    //         experience: "6 years",
    //     },
    //     {
    //         id: 6,
    //         applicant: "Lisa Martinez",
    //         email: "lisa@example.com",
    //         phone: "+1 (555) 678-9012",
    //         position: "Frontend Developer",
    //         company: "Meta",
    //         appliedDate: "2024-01-10",
    //         status: "pending",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Duis aute irure dolor...",
    //         location: "Menlo Park, CA",
    //         experience: "2 years",
    //     },
    //     {
    //         id: 7,
    //         applicant: "Tom Harris",
    //         email: "tom@example.com",
    //         phone: "+1 (555) 789-0123",
    //         position: "Backend Developer",
    //         company: "Spotify",
    //         appliedDate: "2024-01-09",
    //         status: "approved",
    //         resume: "https://drive.google.com/...",
    //         coverLetter: "Excepteur sint occaecat...",
    //         location: "Stockholm, Sweden",
    //         experience: "4 years",
    //     },
    // ];

    // ===== FILTER LOGIC =====
    const getStatusColor = (status) => {
        switch (status) {
            case "approved":
                return "bg-success/10 text-success border-success/20";
            case "pending":
                return "bg-warning/10 text-warning border-warning/20";
            case "rejected":
                return "bg-error/10 text-error border-error/20";
            case "reviewing":
                return "bg-info/10 text-info border-info/20";
            default:
                return "bg-base-200/50 text-base-content/50 border-base-200/20";
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case "approved":
                return <FaCheckCircle className="text-success" />;
            case "pending":
                return <FaClock className="text-warning" />;
            case "rejected":
                return <FaTimesCircle className="text-error" />;
            case "reviewing":
                return <FaEye className="text-info" />;
            default:
                return null;
        }
    };

    const filteredApplications = applications.filter(app => {
        const matchesSearch =
            app.applicant?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.linkedIn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.github?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            app.resume?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus = filterStatus === "all" || app.status === filterStatus;

        return matchesSearch && matchesStatus;
    });

    // ===== PAGINATION =====
    const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredApplications.slice(startIndex, endIndex);

    // ===== HANDLERS =====
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(currentItems.map(item => item.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handleDelete = (id, name) => {
        Swal.fire({
            title: "Delete Application?",
            text: `Are you sure you want to delete ${name}'s application?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Application has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const handleStatusChange = (id, newStatus) => {
        Swal.fire({
            title: "Update Status",
            text: `Change status to ${newStatus}?`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#2563eb",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, update!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Updated!",
                    text: `Status changed to ${newStatus}`,
                    icon: "success",
                });
            }
        });
    };

    // ===== ANIMATION VARIANTS =====
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
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
                duration: 0.3,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.div
            ref={sectionRef}
            className="max-w-7xl mx-auto px-5 py-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* ===== HEADER ===== */}
            <motion.div variants={itemVariants} className="mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <span className="text-2xl">📋</span>
                            </div>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold">
                                    Applications <span className="text-primary">List</span>
                                </h2>
                            </div>
                        </div>
                        <p className="text-base-content/60">
                            Manage all job applications in one place
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="btn btn-primary rounded-xl gap-2">
                            <FaFileAlt />
                            Export CSV
                        </button>
                        <button className="btn btn-ghost rounded-xl gap-2">
                            <FaPrint />
                            Print
                        </button>
                    </div>
                </div>
                <div className="divider" />
            </motion.div>

            {/* ===== FILTERS ===== */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaSearch className="text-base-content/40" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by name, position, company..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    />
                </div>

                <div className="flex gap-3">
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-base-300 bg-base-100/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none min-w-[150px]"
                    >
                        <option value="all">All Status</option>
                        <option value="approved">✅ Approved</option>
                        <option value="pending">⏳ Pending</option>
                        <option value="reviewing">👀 Reviewing</option>
                        <option value="rejected">❌ Rejected</option>
                    </select>

                    <button className="btn btn-ghost rounded-xl gap-2">
                        <FaFilter />
                        Filter
                    </button>
                </div>
            </motion.div>

            {/* ===== TABLE ===== */}
            <motion.div variants={itemVariants} className="bg-base-100 rounded-2xl shadow-sm border border-base-200/50 overflow-hidden">
                {/* Table Header */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-base-200/50">
                            <tr>
                                <th className="px-4 py-3 text-left">
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-primary checkbox-sm rounded-md"
                                        onChange={handleSelectAll}
                                        checked={selectedRows.length === currentItems.length && currentItems.length > 0}
                                    />
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                    Applicant
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-base-content/50 hidden md:table-cell">
                                    Linkedin
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-base-content/50 hidden lg:table-cell">
                                    Github
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-base-content/50 hidden sm:table-cell">
                                    Resume Link
                                </th>
                                {/* <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                    Status
                                </th> */}
                                <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-base-content/50">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-base-200/50">
                            {currentItems.length > 0 ? (
                                currentItems.map((app, index) => (
                                    <motion.tr
                                        key={app._id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`hover:bg-base-200/30 transition-colors ${selectedRows.includes(app._id) ? "bg-primary/5" : ""
                                            }`}
                                    >
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                className="checkbox checkbox-primary checkbox-sm rounded-md"
                                                checked={selectedRows.includes(app._id)}
                                                onChange={() => handleSelectRow(app._id)}
                                            />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                                                    {app.applicant.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm">{app.applicant}</p>
                                                    <p className="text-xs text-base-content/50">{app.email}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 hidden md:table-cell">
                                            {/* <p className="text-sm">{app.linkedIn}</p> */}
                                            <a
                                                href={app.linkedIn}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                                            >
                                                <FaLinkedin />
                                                Linkedin
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 hidden lg:table-cell">
                                            {/* <p className="text-sm text-base-content/70">{app.github}</p> */}
                                            <a
                                                href={app.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                                            >
                                                <FaGithub />
                                                Github
                                            </a>
                                        </td>
                                        <td className="px-4 py-3 hidden sm:table-cell">
                                            <a
                                                href={app.resume}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                                            >
                                                <FaFileAlt />
                                                Resume
                                            </a>
                                        </td>
                                        {/* <td className="px-4 py-3 hidden sm:table-cell">
                                            <p className="text-sm text-base-content/50">
                                                {new Date(app.appliedDate).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                                                {getStatusIcon(app.status)}
                                                {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                                            </span>
                                        </td> */}
                                        <td className="px-4 py-3">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    className="w-8 h-8 rounded-lg hover:bg-primary/10 text-primary transition-colors flex items-center justify-center"
                                                    title="View"
                                                    onClick={() => console.log("View", app._id)}
                                                >
                                                    <FaEye className="text-sm" />
                                                </button>
                                                <button
                                                    className="w-8 h-8 rounded-lg hover:bg-warning/10 text-warning transition-colors flex items-center justify-center"
                                                    title="Edit Status"
                                                    onClick={() => handleStatusChange(app._id, "reviewing")}
                                                >
                                                    <FaEdit className="text-sm" />
                                                </button>
                                                <button
                                                    className="w-8 h-8 rounded-lg hover:bg-error/10 text-error transition-colors flex items-center justify-center"
                                                    title="Delete"
                                                    onClick={() => handleDelete(app._id, app.applicant)}
                                                >
                                                    <FaTrash className="text-sm" />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-4 py-12 text-center">
                                        <div className="flex flex-col items-center gap-3">
                                            <span className="text-6xl">🔍</span>
                                            <p className="text-lg font-medium text-base-content/70">No applications found</p>
                                            <p className="text-sm text-base-content/40">Try adjusting your search or filter</p>
                                            <button
                                                onClick={() => {
                                                    setSearchTerm("");
                                                    setFilterStatus("all");
                                                }}
                                                className="btn btn-primary btn-sm rounded-xl mt-2"
                                            >
                                                Clear Filters
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* ===== TABLE FOOTER ===== */}
                <div className="px-4 py-3 border-t border-base-200/50 bg-base-200/30">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
                        <div className="text-sm text-base-content/50">
                            Showing {startIndex + 1} to {Math.min(endIndex, filteredApplications.length)} of {filteredApplications.length} entries
                            {selectedRows.length > 0 && (
                                <span className="ml-2 text-primary font-medium">
                                    ({selectedRows.length} selected)
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                disabled={currentPage === 1}
                                className="w-8 h-8 rounded-lg hover:bg-base-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                <FaChevronLeft className="text-sm" />
                            </button>

                            {[...Array(totalPages)].map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`w-8 h-8 rounded-lg transition-colors ${currentPage === i + 1
                                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                                        : "hover:bg-base-200"
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="w-8 h-8 rounded-lg hover:bg-base-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                <FaChevronRight className="text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ===== BULK ACTIONS ===== */}
            {selectedRows.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="mt-4 p-4 bg-primary/5 rounded-2xl border border-primary/20 flex flex-wrap items-center justify-between gap-3"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium">
                            {selectedRows.length} items selected
                        </span>
                        <button
                            onClick={() => setSelectedRows([])}
                            className="text-xs text-primary hover:underline"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className="btn btn-success btn-sm rounded-xl gap-2">
                            <FaCheckCircle />
                            Approve
                        </button>
                        <button className="btn btn-warning btn-sm rounded-xl gap-2">
                            <FaClock />
                            Pending
                        </button>
                        <button className="btn btn-error btn-sm rounded-xl gap-2">
                            <FaTimesCircle />
                            Reject
                        </button>
                        <button className="btn btn-ghost btn-sm rounded-xl gap-2">
                            <FaTrash />
                            Delete
                        </button>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default ApplicationList;