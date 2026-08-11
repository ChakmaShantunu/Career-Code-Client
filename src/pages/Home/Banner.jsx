import { motion } from "motion/react"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }} className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        animate={{
                            y: [100, 150, 100],
                            transition: { duration: 5, repeat: Infinity }
                        }}
                        src={team1}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                    <motion.img
                        animate={{
                            x: [100, 150, 100],
                            transition: { duration: 5, delay: 5, repeat: Infinity }
                        }}
                        src={team2}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl shadow-2xl"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className='flex-1'>
                    {/* <motion.h1
                        animate={{
                            y: [0, 50],
                            transition: { duration: 1, repeat: Infinity }
                        }}
                        className="text-5xl font-bold">Latest Jobs for you!</motion.h1> */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className='text-5xl font-bold'>Remote <motion.span animate={
                            {
                                color: ['#ff5733', '#e6ff33', '#4f70f7'],
                                transition: { duration: 4, repeat: Infinity },
                            }}>Jobs</motion.span> for you!</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="py-6">
                        Discover thousands of job openings, connect with top hiring companies, and take the next big step in your career journey with ease.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <button className="btn btn-primary">Get Started</button>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div >
    );
};

export default Banner;