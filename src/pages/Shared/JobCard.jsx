import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {

    const { title, location, description, company, company_logo, requirements, salaryRange, _id } = job

    return (
        <motion.div
            className="card bg-base-100 w-96 shadow-sm p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.15)"
            }}
        >
            <div className="flex justify-center gap-2">
                <figure>
                    <img
                        src={company_logo}
                        alt={company}
                    />
                </figure>

                <div>
                    <h3 className="text-4xl">{company}</h3>

                    <p className="flex gap-1 items-center">
                        <FaMapMarkerAlt /> {location}
                    </p>
                </div>
            </div>

            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>

                <p>
                    Salary : ({salaryRange?.min} - {salaryRange?.max}){" "}
                    {salaryRange?.currency}
                </p>

                <p>{description}</p>

                <div className="card-actions">
                    {requirements?.map((skill, index) => (
                        <div
                            key={index}
                            className="badge badge-outline"
                        >
                            {skill}
                        </div>
                    ))}
                </div>

                <div className="card-actions justify-end">
                    <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-primary">
                            Show Details
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default JobCard;