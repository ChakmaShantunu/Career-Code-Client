import { use, useState } from "react";
import JobCard from "../Shared/JobCard";


const HotJobs = ({ jobsPromise }) => {

    const jobs = use(jobsPromise);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(jobs.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-24'>Hot Jobs of the day</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-6">
                {
                    jobs.map((job) => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
            <div className="flex justify-center items-center gap-4 mt-10">
                <button
                    onClick={handlePrev}
                    disabled={currentPage === 1}
                    className="btn btn-outline"
                >
                    Previous
                </button>

                <span className="font-semibold text-lg">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="btn btn-primary"
                >
                    Next
                </button>
            </div>
            {/* <div className="join">
                {
                    Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`join-item btn ${currentPage === index + 1 ? "btn-active" : ""
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div> */}
        </div>
    );
};

export default HotJobs;