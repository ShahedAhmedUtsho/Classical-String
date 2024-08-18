import useAuth from '@/Hooks/useAuth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DotLoader, PulseLoader } from 'react-spinners';

const VerifyUser = ({ children }) => {
    const { user, loading, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && !user) {
            logOut();
            navigate('/auth');
        }
    }, [user, loading, logOut, navigate]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
              
               <PulseLoader color="#36d7b7" size={30} />
            </div>
        );
    }

    return <>{user && children}</>;
};

export default VerifyUser;