
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { use } from 'react';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen bg-base-200/30 py-8 md:py-16 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Simple loading spinner - এটা কাজ করবে */}
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center">
                            <span className="loading loading-spinner loading-lg text-primary"></span>
                            <p className="mt-4 text-base-content/60">Loading...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;