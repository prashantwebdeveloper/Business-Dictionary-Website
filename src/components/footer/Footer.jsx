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
                                    <p className="text-white mb-25">Buy And Sell Everything From Used Cars To Mobile Phones And
                                        Computers, Search For Property, Jobs And More</p>
                                    <ul className="social">
                                        <li><NavLink><i className="lni lni-facebook-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-twitter-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-instagram-filled" /></NavLink></li>
                                        <li><NavLink><i className="lni lni-linkedin-original" /></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 order-md-2 order-xl-1 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Quick Link</h4>
                                    <ul className="link">
                                        <li><NavLink>Home</NavLink></li>
                                        <li><NavLink>About</NavLink></li>
                                        <li><NavLink>Category</NavLink></li>
                                        <li><NavLink>Product details</NavLink></li>
                                        <li><NavLink>Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 order-md-3 order-xl-2 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Support</h4>
                                    <ul className="link">
                                        <li><NavLink>Live Chat</NavLink></li>
                                        <li><NavLink>Privacy Policy</NavLink></li>
                                        <li><NavLink>Purchase</NavLink></li>
                                        <li><NavLink>Protection</NavLink></li>
                                        <li><NavLink>Support</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 order-md-4 order-xl-3 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Information</h4>
                                    <ul className="link">
                                        <li><NavLink>Company</NavLink></li>
                                        <li><NavLink>Contact Info</NavLink></li>
                                        <li><NavLink>Blog &amp; Articles</NavLink></li>
                                        <li><NavLink>Terms of Service</NavLink></li>
                                        <li><NavLink>Privacy Policy</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-5 order-md-1 order-xl-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4>Contact Us</h4>
                                    <ul>
                                        <li>
                                            <span>Phone:</span>
                                            0345983672937
                                        </li>
                                        <li>
                                            <span>Email:</span>
                                            yourmail@gmail.com
                                        </li>
                                        <li>
                                            <span>Location:</span>
                                            United State of America
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
                                    <p>Designed &amp; Developed By <Link to="https://graygrids.com/" rel="nofollow" target="_blank">GrayGrids</Link></p>
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
