import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo/logo.svg';
import logo2 from '../../assets/images/logo/logo-2.svg';
import Logout from '../modal/logout/Logout';
import Loader from '../loader/Loader';

import { useAuth } from '../../context/auth/AuthContext';
import { SignOutUser } from '../../firebase/services/auth/logout/LogoutServices';
import { toast } from 'react-toastify';
import { MdOutlineLogin } from 'react-icons/md';


const Header = () => {

    // const { pathname } = useLocation();
    const { currentUser } = useAuth();

    const navigate = useNavigate();

    const [isSticky, setIsSticky] = useState(false);
    const [logoSrc, setLogoSrc] = useState(logo);

    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const headerNavbar = document.getElementById('header_navbar');
            const sticky = headerNavbar?.offsetTop;

            // Sticky navbar logic
            if (window.pageYOffset > sticky) {
                setIsSticky(true);
                setLogoSrc(logo2);
            } else {
                setIsSticky(false);
                setLogoSrc(logo);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    const handlePostAd = () => {
        if (currentUser) {
            navigate('/post-ad');
        } else {
            toast.error("Please login to post an ad.");
            navigate('/login');
        }
    };


    const [isLoading, setIsLoading] = useState(false);
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

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== HEADER PART START ====== */}

            <header className="header_area">
                <div id="header_navbar" className={`header_navbar ${isSticky ? 'sticky' : ''}`}>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-xl-12">
                                <nav className="navbar navbar-expand-lg">
                                    <Link to="/" className="navbar-brand">
                                        <img id="logo" src={logoSrc} alt="Logo" />
                                    </Link>
                                    <button
                                        className={`navbar-toggler ${isNavbarOpen ? 'active' : ''}`}
                                        type="button"
                                        onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                                    // data-toggle="collapse"
                                    // data-target="#navbarSupportedContent"
                                    // aria-controls="navbarSupportedContent"
                                    // aria-expanded="false"
                                    // aria-label="Toggle navigation"
                                    >
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                        <span className="toggler-icon" />
                                    </button>
                                    <div className={`collapse navbar-collapse sub-menu-bar ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav">
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/">Home</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/about">About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="page-scroll"
                                                    data-toggle="collapse"
                                                    data-target="#sub-nav1"
                                                    aria-controls="sub-nav1"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                    to="javascript:void(0)"
                                                >
                                                    Pages
                                                    <div className="sub-nav-toggler">
                                                        <span />
                                                    </div>
                                                </NavLink>
                                                <ul className="sub-menu collapse" id="sub-nav1">
                                                    {/* <li><NavLink to="/about">About</NavLink></li> */}
                                                    <li><NavLink to="/service">Service</NavLink></li>
                                                    {/* <li><NavLink to="/product">Product</NavLink></li>
                                                    <li><NavLink to="/category">Category</NavLink></li> */}
                                                    <li><NavLink to="/pricing">Pricing</NavLink></li>
                                                    {/* <li><NavLink to="/faq">Faq</NavLink></li>
                                                    <li><NavLink to="/product-details">Product Details</NavLink></li> 
                                                    <li><NavLink to="/login">Login</NavLink></li>
                                                    <li><NavLink to="/register">Sign Up</NavLink></li> */}
                                                    {/* <li><NavLink to="/404">404 Page</NavLink></li> */}
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    className="page-scroll"
                                                    data-toggle="collapse"
                                                    data-target="#sub-nav"
                                                    aria-controls="sub-nav"
                                                    aria-expanded="false"
                                                    aria-label="Toggle navigation"
                                                    to="javascript:void(0)"
                                                >
                                                    Product
                                                    <div className="sub-nav-toggler">
                                                        <span />
                                                    </div>
                                                </NavLink>
                                                <ul className="sub-menu collapse" id="sub-nav">
                                                    <li><NavLink to="/product">Product</NavLink></li>
                                                    <li><NavLink to="/category">Category</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="page-scroll" to="/faq">Faq</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className="header-btn d-md-flex">
                                        <li>
                                            {
                                                currentUser ? (
                                                    <>
                                                        <NavLink to="/dashboard" className="main-btn account-btn">
                                                            <span className="d-md-none"><i className="lni lni-user" /></span>
                                                            <span className="d-none d-md-block">My Account</span>
                                                        </NavLink>

                                                        <ul className="dropdown-nav">
                                                            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                                            <li><NavLink to="/profile">Profile</NavLink></li>
                                                            <li><NavLink to="/post-ad">Post Ad</NavLink></li>
                                                            <li><NavLink to="/my-ads">My Ads</NavLink></li>
                                                            <li><NavLink to="/offers">Offers/Messages</NavLink></li>
                                                           {/*<li><NavLink to="/payments">Payments</NavLink></li>*/}
                                                            <li><NavLink to="/favorites">Favorites</NavLink></li>
                                                            {/*<li><NavLink to="/privacy">Privacy</NavLink></li>*/}
                                                            <li><NavLink onClick={() => setLogoutModalShow(true)}>Sign Out</NavLink></li>
                                                        </ul>
                                                    </>
                                                )
                                                    :
                                                    (
                                                        <NavLink to="/login" className="main-btn sign-btn">
                                                            <span className="d-md-none"><MdOutlineLogin size={22} /></span>
                                                            <span className="d-none d-md-block">Sign In</span>
                                                        </NavLink>
                                                    )
                                            }
                                        </li>
                                        <li>
                                            <button type='button' className="main-btn btn-hover d-none d-md-block" onClick={handlePostAd}>Post An Ad</button>
                                        </li>
                                    </ul>
                                </nav> {/* navbar */}
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                </div> {/* header navbar */}
            </header>

            {/* ====== HEADER PART ENDS ====== */}




            { /* ----- LogOut Model ----- */}
            <Logout show={logoutModalShow} handleClose={handleClose} handleLogOut={handleLogOut} />

        </>
    );
}

export default Header;
