import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";

import Pricing from '../../components/pages/pricing/Pricing';
import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const Service = () => {


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
                                <h1 className="text-white">Service</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Service</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== SERVICE PART START ====== */}
            <section className="service-area pt-60">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>What We Offer</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et
                                    dolore
                                    magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-book" />
                                </div>
                                <div className="service-content">
                                    <h3>FULLY DOCUMENTED</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-leaf" />
                                </div>
                                <div className="service-content">
                                    <h3>CLEAN &amp; MODERN DESIGN</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-map" />
                                </div>
                                <div className="service-content">
                                    <h3>GREAT FEATURES</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-cog" />
                                </div>
                                <div className="service-content">
                                    <h3>COMPLETELY CUSTOMIZABLE</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-pointer-up" />
                                </div>
                                <div className="service-content">
                                    <h3>USER FRIENDLY</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col-11">
                            <div className="single-service">
                                <div className="icon">
                                    <i className="lni lni-layout" />
                                </div>
                                <div className="service-content">
                                    <h3>AWESOME LAYOUT</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== SERVICE PART ENDS ====== */}

            {/* ====== HOW WORK PART START ====== */}
            <section className="how-work-area pt-110 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7">
                            <div className="text-center section-title mb-60">
                                <h1>See How It Works</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore
                                    magna.</p>
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
                                    <h3>Find Interesting Project</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="lni lni-bulb" />
                                </div>
                                <div className="content">
                                    <h3>Chose What To Do</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8">
                            <div className="single-box">
                                <div className="icon">
                                    <i className="lni lni-graph" />
                                </div>
                                <div className="content">
                                    <h3>Analysis What Your Want</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
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
                            <h1 className="text-white mb-60">See Our Classilist Business Tutorial</h1>
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

export default Service;
