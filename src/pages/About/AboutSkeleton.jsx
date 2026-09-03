import React from 'react';

const AboutSkeleton = () => {
    return (
        <div className="min-h-screen w-full bg-base-100">
            {/* Hero Skeleton */}
            <div className="py-20 px-5">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="skeleton h-8 w-28 rounded-full mx-auto"></div>
                    <div className="skeleton h-16 w-[600px] mx-auto mt-6 rounded-lg"></div>
                    <div className="skeleton h-16 w-[400px] mx-auto mt-2 rounded-lg"></div>
                    <div className="skeleton h-6 w-[500px] mx-auto mt-6 rounded-lg"></div>
                    <div className="flex justify-center gap-4 mt-8">
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                    </div>
                </div>
            </div>

            {/* Stats Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-base-100 rounded-2xl p-6 text-center border border-base-200/50">
                            <div className="skeleton h-8 w-8 rounded-full mx-auto"></div>
                            <div className="skeleton h-10 w-20 mx-auto mt-2 rounded-lg"></div>
                            <div className="skeleton h-4 w-24 mx-auto mt-1 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission & Vision Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="p-8 rounded-3xl border border-base-200/50">
                            <div className="skeleton h-14 w-14 rounded-2xl"></div>
                            <div className="skeleton h-8 w-40 mt-4 rounded-lg"></div>
                            <div className="skeleton h-4 w-full mt-3 rounded-lg"></div>
                            <div className="skeleton h-4 w-5/6 mt-2 rounded-lg"></div>
                            <div className="skeleton h-4 w-4/6 mt-2 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16 bg-base-200/30 rounded-3xl">
                <div className="text-center mb-12">
                    <div className="skeleton h-10 w-48 mx-auto rounded-lg"></div>
                    <div className="skeleton h-5 w-40 mx-auto mt-2 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="p-6 rounded-2xl bg-base-100 border border-base-200/50">
                            <div className="skeleton h-12 w-12 rounded-xl"></div>
                            <div className="skeleton h-6 w-32 mt-3 rounded-lg"></div>
                            <div className="skeleton h-4 w-full mt-2 rounded-lg"></div>
                            <div className="skeleton h-4 w-5/6 mt-1 rounded-lg"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Journey Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="text-center mb-12">
                    <div className="skeleton h-10 w-48 mx-auto rounded-lg"></div>
                    <div className="skeleton h-5 w-40 mx-auto mt-2 rounded-lg"></div>
                </div>
                <div className="space-y-8">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="flex flex-col md:flex-row items-center gap-6">
                            <div className="flex-1">
                                <div className="bg-base-100 p-6 rounded-2xl border border-base-200/50">
                                    <div className="skeleton h-4 w-20 rounded-lg"></div>
                                    <div className="skeleton h-6 w-40 mt-1 rounded-lg"></div>
                                    <div className="skeleton h-4 w-full mt-2 rounded-lg"></div>
                                </div>
                            </div>
                            <div className="skeleton h-12 w-12 rounded-full"></div>
                            <div className="flex-1 hidden md:block"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="text-center mb-10">
                    <div className="skeleton h-10 w-56 mx-auto rounded-lg"></div>
                    <div className="skeleton h-5 w-48 mx-auto mt-2 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-base-100 rounded-2xl p-6 border border-base-200/50">
                            <div className="flex gap-1 mb-3">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <div key={star} className="skeleton h-4 w-4 rounded"></div>
                                ))}
                            </div>
                            <div className="skeleton h-4 w-8 rounded"></div>
                            <div className="skeleton h-4 w-full mt-2 rounded-lg"></div>
                            <div className="skeleton h-4 w-5/6 mt-1 rounded-lg"></div>
                            <div className="skeleton h-4 w-4/6 mt-1 rounded-lg"></div>
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-base-200/50">
                                <div className="skeleton h-12 w-12 rounded-full"></div>
                                <div>
                                    <div className="skeleton h-4 w-32 rounded-lg"></div>
                                    <div className="skeleton h-3 w-24 mt-1 rounded-lg"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="text-center mb-12">
                    <div className="skeleton h-10 w-56 mx-auto rounded-lg"></div>
                    <div className="skeleton h-5 w-48 mx-auto mt-2 rounded-lg"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-base-100 rounded-2xl p-6 text-center border border-base-200/50">
                            <div className="skeleton h-24 w-24 rounded-full mx-auto"></div>
                            <div className="skeleton h-5 w-32 mx-auto mt-4 rounded-lg"></div>
                            <div className="skeleton h-4 w-24 mx-auto mt-1 rounded-lg"></div>
                            <div className="skeleton h-3 w-40 mx-auto mt-2 rounded-lg"></div>
                            <div className="flex justify-center gap-2 mt-3">
                                <div className="skeleton h-8 w-8 rounded-lg"></div>
                                <div className="skeleton h-8 w-8 rounded-lg"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Skeleton */}
            <div className="max-w-7xl mx-auto px-5 py-16">
                <div className="rounded-3xl p-10 text-center bg-base-200/50">
                    <div className="skeleton h-10 w-72 mx-auto rounded-lg"></div>
                    <div className="skeleton h-5 w-96 mx-auto mt-3 rounded-lg"></div>
                    <div className="flex justify-center gap-4 mt-6">
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                        <div className="skeleton h-12 w-36 rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSkeleton;