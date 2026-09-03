import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ type = 'full' }) => {
    // Full page skeleton
    if (type === 'full') {
        return (
            <div className="min-h-screen bg-base-200/30 p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Skeleton */}
                    <div className="mb-8">
                        <div className="skeleton h-10 w-48 rounded-xl bg-base-300/50"></div>
                        <div className="skeleton h-4 w-72 mt-2 rounded-lg bg-base-300/50"></div>
                    </div>

                    {/* Content Grid Skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: item * 0.1 }}
                                className="bg-base-100 rounded-2xl shadow-lg border border-base-200 p-6"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="skeleton w-12 h-12 rounded-full bg-base-300/50"></div>
                                    <div className="flex-1">
                                        <div className="skeleton h-4 w-32 rounded-lg bg-base-300/50"></div>
                                        <div className="skeleton h-3 w-24 mt-2 rounded-lg bg-base-300/50"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="skeleton h-3 w-full rounded-lg bg-base-300/50"></div>
                                    <div className="skeleton h-3 w-5/6 rounded-lg bg-base-300/50"></div>
                                    <div className="skeleton h-3 w-4/6 rounded-lg bg-base-300/50"></div>
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <div className="skeleton h-6 w-16 rounded-full bg-base-300/50"></div>
                                    <div className="skeleton h-6 w-16 rounded-full bg-base-300/50"></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Card skeleton
    if (type === 'card') {
        return (
            <div className="bg-base-100 rounded-2xl shadow-lg border border-base-200 p-6">
                <div className="flex items-center gap-4 mb-4">
                    <div className="skeleton w-12 h-12 rounded-full bg-base-300/50"></div>
                    <div className="flex-1">
                        <div className="skeleton h-4 w-32 rounded-lg bg-base-300/50"></div>
                        <div className="skeleton h-3 w-24 mt-2 rounded-lg bg-base-300/50"></div>
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="skeleton h-3 w-full rounded-lg bg-base-300/50"></div>
                    <div className="skeleton h-3 w-5/6 rounded-lg bg-base-300/50"></div>
                    <div className="skeleton h-3 w-4/6 rounded-lg bg-base-300/50"></div>
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="skeleton h-6 w-16 rounded-full bg-base-300/50"></div>
                    <div className="skeleton h-6 w-16 rounded-full bg-base-300/50"></div>
                </div>
            </div>
        );
    }

    // List skeleton
    if (type === 'list') {
        return (
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: item * 0.05 }}
                        className="bg-base-100 rounded-xl shadow-sm border border-base-200 p-4 flex items-center gap-4"
                    >
                        <div className="skeleton w-10 h-10 rounded-full bg-base-300/50"></div>
                        <div className="flex-1">
                            <div className="skeleton h-4 w-48 rounded-lg bg-base-300/50"></div>
                            <div className="skeleton h-3 w-32 mt-2 rounded-lg bg-base-300/50"></div>
                        </div>
                        <div className="skeleton h-8 w-20 rounded-lg bg-base-300/50"></div>
                    </motion.div>
                ))}
            </div>
        );
    }

    // Profile skeleton
    if (type === 'profile') {
        return (
            <div className="bg-base-100 rounded-2xl shadow-lg border border-base-200 p-6">
                <div className="flex flex-col items-center">
                    <div className="skeleton w-24 h-24 rounded-full bg-base-300/50"></div>
                    <div className="skeleton h-5 w-32 mt-4 rounded-lg bg-base-300/50"></div>
                    <div className="skeleton h-3 w-48 mt-2 rounded-lg bg-base-300/50"></div>
                    <div className="flex gap-4 mt-4 w-full">
                        <div className="flex-1 skeleton h-16 rounded-xl bg-base-300/50"></div>
                        <div className="flex-1 skeleton h-16 rounded-xl bg-base-300/50"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Default skeleton
    return (
        <div className="space-y-4 p-4">
            <div className="skeleton h-8 w-48 rounded-lg bg-base-300/50"></div>
            <div className="skeleton h-4 w-full rounded-lg bg-base-300/50"></div>
            <div className="skeleton h-4 w-5/6 rounded-lg bg-base-300/50"></div>
            <div className="skeleton h-4 w-4/6 rounded-lg bg-base-300/50"></div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="skeleton h-20 rounded-xl bg-base-300/50"></div>
                <div className="skeleton h-20 rounded-xl bg-base-300/50"></div>
                <div className="skeleton h-20 rounded-xl bg-base-300/50"></div>
            </div>
        </div>
    );
};

export default SkeletonLoader;