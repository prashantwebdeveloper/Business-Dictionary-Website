import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.svg';
import map from '../../assets/images/footer/map-img.svg';

const Footer = () => {
    return (
        <>

            {/* ====== FOOTER PART START ====== */}

            <footer className="footer-area">
                <div className="widget-wrapper">
                    <div className="map-img">
                        <img src={map} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-md-7">
                                <div className="footer-widget about">
                                    <Link to="/" className="d-inline-block mb-30">
                                        <img src={logo} alt="" />
                                    </Link>
                                    <p className="text-white mb-25">
                                        Explore a wide range of products—from used cars, mobile phones, and computers to real estate and job opportunities. Everything you need, all in one place.
                                    </p>
                                    <ul className="social">
                                        <li><NavLink><i className="lni lni-facebook-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-twitter-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-instagram-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-linkedin-original" /></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 order-md-2 order-xl-1 col-6">
                                <div className="footer-widget">
                                    <h4>Quick Link</h4>
                                    <ul className="link">
                                        <li><NavLink to="/">Home</NavLink></li>
                                        <li><NavLink to="/about">About</NavLink></li>
                                        <li><NavLink to="/category">Category</NavLink></li>
                                        <li><NavLink to="/product">Product</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 order-md-3 order-xl-2 col-6">
                                <div className="footer-widget">
                                    <h4>Support</h4>
                                    <ul className="link">
                                        <li><NavLink to="/faq">FAQ's</NavLink></li>
                                        <li><NavLink to="/service">Service</NavLink></li>
                                        <li><NavLink to="/pricing">Pricing</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            {/*<div className="col-xl-2 col-md-4 order-md-4 order-xl-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Information</h4>
                                    <ul className="link                                        <li><NavLink>Company</NavLink></li>
                                        <li><NavLink>Contact Info</NavLink></li>
                                        <li><NavLink>Blog &amp; Articles</NavLink></li>
                                        <li><NavLink>Terms of Service</NavLink></li>
                                        <li><NavLink>Privacy Policy</NavLink></li>
                                    </ul>
                                </div>
                            </div>*/}
                            <div className="col-xl-2 col-md-5 order-md-1 order-xl-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            +91 90604 85591
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            kraj111058@gmail.com
                                        </li>
                                        <li>
                                            <span>Location:</span>
                                            India
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copy-right">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="text-center">
                                    <p>Designed &amp; Developed By <Link to="https://graygrids.com/" rel="nofollow" target="_blank">ListIndia</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* ====== FOOTER PART ENDS ====== */}

        </>
    );
}

export default Footer;
