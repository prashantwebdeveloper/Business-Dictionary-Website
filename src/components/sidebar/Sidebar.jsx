import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import Logout from '../modal/logout/Logout';
import Loader from '../loader/Loader';

import { useAuth } from '../../context/auth/AuthContext';
import { SignOutUser } from '../../firebase/services/auth/logout/LogoutServices';
import { toast } from 'react-toastify';

import { GetUsersDetailsFirebase } from '../../firebase/services/users/UsersServices';

const Sidebar = () => {

    const { currentUser } = useAuth();
    // console.warn(currentUser);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const [logoutModalShow, setLogoutModalShow] = useState(false);

    const handleClose = () => {
        setLogoutModalShow(false);
    }

    const handleLogOut = async () => {
        setIsLoading(true);

        try {
            const res = await SignOutUser();
            console.log("Res-Logout++", res);

            if (res?.success) {
                toast.success("Logged out successfully");
                handleClose();

                localStorage.removeItem("business-user-token");
                navigate("/");
            }
        } catch (err) {
            console.error("Error-Res-Logout", err);
        } finally {
            setIsLoading(false);
        }
    }


    const GetUserProfile = async (UID) => {
        setIsLoading(true);

        try {
            const res = await GetUsersDetailsFirebase(UID);
            console.log("Res-Users-Details++", res);

            setFormData(res);

        } catch (err) {
            console.error("Error-Users-Details", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetUserProfile(currentUser?.uid);
    }, [currentUser?.uid]);


    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            <div className="left-sidebar-wrapper box-style">
                <div className="sidebar-header">
                    <div className="image">
                        <img src={currentUser?.photoURL || profileimg} alt="" />
                    </div>
                    <div className="info">
                        <h3>{currentUser?.displayName}</h3>
                        <p className="mb-30">Director at {formData?.organizationName}</p>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/dashboard"><i className="lni lni-dashboard" />Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile"><i className="lni lni-cog" />Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/post-ad"><i className="lni lni-cog" />Post Ad</NavLink>
                            </li>
                            <li>
                                <NavLink to="/my-ads"><i className="lni lni-layers" />My Ads</NavLink>
                            </li>
                            <li>
                                <NavLink to="/offers"><i className="lni lni-envelope" />Offers / Message</NavLink>
                            </li>
                            {/*<li>
                                <NavLink to="/payments"><i className="lni lni-paypal" />Payments</NavLink>
                            </li>*/}
                            <li>
                                <NavLink to="/favorites"><i className="lni lni-heart" />My Favorites</NavLink>
                            </li>
                            {/*<li>
                                <NavLink to="/privacy"><i className="lni lni-star" />Privacy Settings</NavLink>
                            </li>*/}
                            <li>
                                <Link onClick={() => setLogoutModalShow(true)} ><i className="lni lni-exit" />Sign Out</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>




            { /* ----- LogOut Model ----- */}
            <Logout show={logoutModalShow} handleClose={handleClose} handleLogOut={handleLogOut} />
        </>
    );
}

export default Sidebar;
