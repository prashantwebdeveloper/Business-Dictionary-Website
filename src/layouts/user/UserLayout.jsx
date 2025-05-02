import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/auth/AuthContext';

const UserLayout = () => {

    const { currentUser } = useAuth();
                
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("business-user-token");

        if (!currentUser && !token) {
            navigate("/");
        }
        else if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    return (
        <>
            {
                currentUser && <Outlet />
            }
        </>
    );
}

export default UserLayout;
