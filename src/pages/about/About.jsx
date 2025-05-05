import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import aboutimg from "../../assets/images/about/about-img.png";
import dotshape from "../../assets/images/about/dot-shape.svg";
import whyus from "../../assets/images/about/why-us.png";
import owner from "../../assets/images/about/owner.jpg";

import Pricing from '../../components/pages/pricing/Pricing';
import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const About = () => {

    useEffect(() => {
        // ========= GLightbox =========
        const myGallery = GLightbox({
            selector: '.glightbox',  // Ensure it targets the correct links
            width: 900,
            autoplayVideos: true,    // Enable video autoplay
        });
    }, []);


    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">About Us</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== WELCOME PART START ====== */}
            <section className="welcome-area pt-60 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="welcome-img">
                                <img src={aboutimg} alt="" className="image" />
                                <img src={dotshape} alt="" className="dot-shape" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome-content">
                                <h1 className="mb-30">Welcome to the ClassiList Directory</h1>
                                <p>
                                    ClassiList is India’s premier online marketplace, offering a comprehensive directory for buying, selling, and discovering businesses and services across the country. Whether you're an entrepreneur looking to list your business, a buyer in search of used cars, mobile phones, computers, or real estate, or someone looking for job opportunities, ClassiList connects you to the best options available.
                                </p>

                                <p>
                                    Wide Range of Listings: From used cars to mobile phones, computers, real estate, jobs, and business services, we provide a platform that caters to all your buying and selling needs across India.
                                </p>

                                <p>
                                    Verified Businesses: We ensure all business listings are carefully vetted, giving you peace of mind while browsing or making purchases.
                                </p>
                                <Link to="/faq" className="main-btn btn-hover">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== WELCOME PART END ====== */}

            {/* ====== WHY CHOSE PART START ====== */}
            <section className="why-chose-area bg_cover">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="why-chose-content">
                                <div className="section-title">
                                    <h1>Why Choose Us?</h1>
                                    <p>
                                        At ClassiList, we strive to provide the best marketplace experience for businesses and individuals across India. Here’s why we stand out:
                                    </p>
                                </div>
                                <div className="why-chose-item">
                                    <div className="icon">
                                        <i className="lni lni-layers" />
                                    </div>
                                    <div className="content">
                                        <h3>Large Community</h3>
                                        <p>
                                            Join a growing network of buyers and sellers across India, offering diverse products and services.
                                        </p>
                                    </div>
                                </div>
                                <div className="why-chose-item">
                                    <div className="icon">
                                        <i className="lni lni-code" />
                                    </div>
                                    <div className="content">
                                        <h3>Secure and Safe</h3>
                                        <p>
                                            Enjoy safe transactions with verified listings to ensure a trustworthy marketplace.
                                        </p>
                                    </div>
                                </div>
                                <div className="why-chose-item">
                                    <div className="icon">
                                        <i className="lni lni-mobile" />
                                    </div>
                                    <div className="content">
                                        <h3>Free and Premium Options</h3>
                                        <p>
                                            Buy and sell everything from used cars to mobile phones and computers with flexible listing options.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center why-chose-img">
                                <img src={owner} alt="" style={{ borderRadius: '50%' }} />
                                <div className='text-center mt-3'>
                                    <p className='fw-bold' style={{ fontSize: '18px' }}>Founder : Raj Kumar Sharma</p>
                                    <p className='fw-bold' style={{ fontSize: '18px' }}>Co-Founder : Prashant Moliya</p>
                                    <p className='fw-bold' style={{ fontSize: '18px' }}>Start Your Business Journey with Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== WHY CHOSE PART END ====== */}

            {/* ====== HOW WORK PART START ====== */}
            <section className="how-work-area pt-140 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7">
                            <div className="text-center section-title mb-60">
                                <h1>See How It Works</h1>
                                <p>
                                    At ClassiList, we make it easy to buy, sell, and discover a wide range of products and services. Follow these simple steps to get started:
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="lni lni-target" />
                                </div>
                                <div className="content">
                                    <h3>Sign Up</h3>
                                    <p>
                                        Create an account to buy and sell everything from used cars, mobile phones, computers, and more. You can also search for properties.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="lni lni-bulb" />
                                </div>
                                <div className="content">
                                    <h3>Post Ads</h3>
                                    <p>
                                        Easily list your products or services—whether it’s a used car, electronics, or real estate. Reach potential buyers with our user-friendly ad posting feature.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="lni lni-graph" />
                                </div>
                                <div className="content">
                                    <h3>Get Sold</h3>
                                    <p>
                                        Connect with buyers quickly and securely. Once your ad is live, start receiving inquiries and make your sale!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== HOW WORK PART ENDS ====== */}

            {/* ====== VIDEO PART START ====== */}
            <section className="video-area">
                <div className="video-wrapper img-bg">
                    <div className="container">
                        <div className="text-center video-content">
                            <h1 className="text-white mb-60">Learn More About ClassiList</h1>
                            <Link
                                className="glightbox video-btn"
                                data-glightbox="type: video; source: youtube; to: https://youtu.be/FSjZD0-znPs?si=7ESs536WP1QUBYGJ"
                            >
                                <i className="lni lni-play" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="count-up-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter">
                                    <div className="icon">
                                        <i className="lni lni-layers" />
                                    </div>
                                    <span className="count">34864</span>
                                    <span>Regular Ads</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter">
                                    <div className="icon">
                                        <i className="lni lni-map-marker" />
                                    </div>
                                    <span className="count">867</span>
                                    <span>Locations</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter">
                                    <div className="icon">
                                        <i className="lni lni-users" />
                                    </div>
                                    <span className="count">56743</span>
                                    <span>Regular Members</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-counter">
                                    <div className="icon">
                                        <i className="lni lni-briefcase" />
                                    </div>
                                    <span className="count">4583</span>
                                    <span>Premium Ads</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== VIDEO PART ENDS ====== */}

            {/* ====== PRICING PRODUCT PART START ====== */}
            <Pricing />
            {/* ====== PRICING PRODUCT PART ENDS ====== */}

            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <Subscription />
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

            {/* ====== TESTIMONIAL PART START ====== */}
            <Testimonial />
            {/* ====== TESTIMONIAL PART ENDS ====== */}

        </>
    );
}

export default About;
