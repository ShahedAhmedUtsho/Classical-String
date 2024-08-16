import { Toaster } from '@/components/ui/toaster';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            
            <Outlet/>
            <Toaster/>
            
        </div>
    );
};

export default Routes;