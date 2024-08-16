import { AuthContext } from '@/Provider/AuthProvider';
import React, { useContext } from 'react';

const useAuth = () => {
    const a = useContext(AuthContext)
    return a
};

export default useAuth;