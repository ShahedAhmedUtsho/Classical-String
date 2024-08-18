import { useTheme } from '@/components/ThemeProvider';
import useAuth from '@/Hooks/useAuth';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { DotLoader, PuffLoader, PulseLoader } from 'react-spinners';

const VerifyUser = ({ children }) => {
    const theme = useTheme()
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
              
              <PuffLoader  size={70} color={theme === "dark" ? "white" : "black" }  />

            </div>
        );
    }

    return <>{user && children}</>;
};

export default VerifyUser;