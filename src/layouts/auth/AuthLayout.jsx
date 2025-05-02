import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/auth/AuthContext';

const AuthLayout = () => {

    const { currentUser } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
             navigate("/dashboard");
        }
    }, [currentUser, navigate]);

    return (
        <>
            { 
                !currentUser && <Outlet />
            }
        </>
    );
}

export default AuthLayout;
