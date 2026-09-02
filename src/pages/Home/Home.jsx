import { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";
import CareerTips from "./CareerTips";
import TopCompanies from "./TopCompanies";
import RecentBlogs from "./RecentBlogs";
import Newsletter from "./Newsletter";
import ScrollToTop from "../Shared/ScrollToTop";

const Home = () => {
    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json());

    return (
        <div>
            <Banner />
            <Suspense fallback={<p className="text-center">Loading jobs...</p>}>
                <HotJobs jobsPromise={jobsPromise} />
            </Suspense>
            <CareerTips />

            {/* Add scroll-mt-20 for navbar offset */}
            <section id="top-companies" className="scroll-mt-20">
                <TopCompanies />
            </section>

            <RecentBlogs />
            <Newsletter />
            <ScrollToTop />
        </div>
    );
};

export default Home;