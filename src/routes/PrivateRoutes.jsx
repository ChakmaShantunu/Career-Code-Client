
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import { use } from 'react';
import Loading from '../components/Loading';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading text='Checking Authentication...'></Loading>
    }

    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;