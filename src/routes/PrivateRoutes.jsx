
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { use } from 'react';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;