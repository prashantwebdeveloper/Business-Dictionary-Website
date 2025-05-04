import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';

import product1 from '../../assets/images/product/l-product-1.jpg';
import product2 from '../../assets/images/product/l-product-2.jpg';
import product3 from '../../assets/images/product/l-product-3.jpg';
import product4 from '../../assets/images/product/l-product-4.jpg';
import product5 from '../../assets/images/product/l-product-5.jpg';
import product6 from '../../assets/images/product/l-product-6.jpg';

import testimonial1 from '../../assets/images/testimonial/testimonial-1.png';
import testimonial2 from '../../assets/images/testimonial/testimonial-2.png';
import testimonial3 from '../../assets/images/testimonial/testimonial-3.png';
import quote from '../../assets/images/testimonial/quote.svg';

import PricingPage from '../../components/pages/pricing/Pricing';
import Subscription from '../../components/pages/subscription/Subscription';
import Loader from '../../components/loader/Loader';

import { GetCategoryFirebase } from '../../firebase/services/category/CategoryServices';
import { GetProductsFirebase } from '../../firebase/services/product/ProductServices';
import { convertDateFormat } from '../../utils/dateUtils';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

import { tns } from 'tiny-slider/src/tiny-slider';
import 'tiny-slider/dist/tiny-slider.css';


const Home = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [productsData, setProductsData] = useState([]);

    const GetCategory = async () => {
        setIsLoading(true);

        try {
            const res = await GetCategoryFirebase();
            console.log("Res-Category++", res);

            setCategoryData(res?.filter((i) => i.status === "active"));
        } catch (err) {
            console.error("Error-Category", err);
        } finally {
            setIsLoading(false);
        }
    }

    const GetProducts = async () => {
        setIsLoading(true);

        try {
            const res = await GetProductsFirebase();
            console.log("Res-Products++", res);

            setProductsData(res?.filter((i) => i.product.status === "active"));

        } catch (err) {
            console.error("Error-Product", err);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        GetCategory();
        GetProducts();
    }, []);

    useEffect(() => {
        // ========= GLightbox =========
        const myGallery = GLightbox({
            selector: '.glightbox',  // Ensure it targets the correct links
            width: 900,
            autoplayVideos: true,    // Enable video autoplay
        });


        let featureProductSlider = null;
        let testimonialSlider = null;

        if (productsData?.length > 0) {
            // ========= Tiny-Slider for feature-product-carousel =========
            featureProductSlider = tns({
                container: ".feature-product-carousel",
                items: 1,
                slideBy: "page",
                // slideBy: 1,
                autoplay: false,
                mouseDrag: false,
                gutter: 20,
                nav: false,
                controls: true,
                controlsPosition: "bottom",
                controlsText: [
                    '<span class="prev"><i class="lni lni-chevron-left"></i></span>',
                    '<span class="next"><i class="lni lni-chevron-right"></i></span>'
                ],
                loop: false,
                edgePadding: 0,
                responsive: {
                    768: {
                        items: 2,
                        // slideBy: 2,
                    },
                    992: {
                        items: 2,
                        // slideBy: 2,
                    },
                    1200: {
                        items: 3,
                        // slideBy: 3,
                    }
                }
            });


            // ========= Tiny-Slider for testimonial =========
            testimonialSlider = tns({
                container: ".testimonial-carousel",
                items: 1,
                // slideBy: 'page',
                slideBy: 1,
                autoplay: false,
                mouseDrag: true,
                gutter: 20,
                nav: true,
                controls: false,
                // center: false,
                autoplayTimeout: 5000,
                swipeAngle: false,
                speed: 400,
                loop: false,
                responsive: {
                    320: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    1200: {
                        items: 3,
                    }
                }
            });

        }

        return () => {
            if (featureProductSlider && featureProductSlider.destroy) {
                featureProductSlider.destroy();
            }


            if (testimonialSlider && testimonialSlider.destroy) {
                testimonialSlider.destroy();
            }
        }
    }, [productsData]);

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== HERO PART START ====== */}
            <section id="home" className="hero-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-7 col-xl-6 col-md-10">
                            <div className="text-center hero-content">
                                <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">Welcome to ClassList</h1>
                                <p className="wow fadeInUp" data-wow-delay=".4s">Buy and sell everything from used cars to mobile
                                    phones and computer or search for property, job and more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== HERO PART END ====== */}

            {/* ====== SEARCH PART START ====== */}
            <div className="search-area">
                <div className="container">
                    <div className="search-wrapper">
                        <form>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-sm-5 col-10">
                                    <div className="search-input">
                                        <label htmlFor="keyword"><i className="lni lni-search-alt theme-color" /></label>
                                        <input type="text" name="keyword" id="keyword" placeholder="Product keyword" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-5 col-10">
                                    <div className="search-input">
                                        <label htmlFor="category"><i className="lni lni-grid-alt theme-color" /></label>
                                        <select name="category" id="category">
                                            <option value="none" selected disabled>Categories</option>
                                            <option value="none">Vehicle</option>
                                            <option value="none">Electronics</option>
                                            <option value="none">Mobiles</option>
                                            <option value="none">Furniture</option>
                                            <option value="none">Fashion</option>
                                            <option value="none">Jobs</option>
                                            <option value="none">Real Estate</option>
                                            <option value="none">Animals</option>
                                            <option value="none">Education</option>
                                            <option value="none">Matrimony</option>
                                            {
                                                categoryData?.map((i) => {
                                                    return (
                                                        <option value={i?.category}>{i?.category}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-5 col-10">
                                    <div className="search-input">
                                        <label htmlFor="location"><i className="lni lni-map-marker theme-color" /></label>
                                        <select name="location" id="location">
                                            <option value="none" selected disabled>Locations</option>
                                            <option value="none">New York</option>
                                            <option value="none">California</option>
                                            <option value="none">Washington</option>
                                            <option value="none">Birmingham</option>
                                            <option value="none">Chicago</option>
                                            <option value="none">Phoenix</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-sm-5 col-10">
                                    <div className="search-btn">
                                        <button className="main-btn btn-hover">Search <i className="lni lni-search-alt" /></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* ====== SEARCH PART END ====== */}

            {/* ====== CATEGORY LIST PART START ====== */}
            <section className="category-list-area pt-130">
                <div className="container">
                    <div className="category-list-wrapper">
                       {/* <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-car" />
                                </div>
                                <h3>Vehicles</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-display" />
                                </div>
                                <h3>Electronics</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-mobile" />
                                </div>
                                <h3>Mobiles</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-leaf" />
                                </div>
                                <h3>Furnitures</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-tshirt" />
                                </div>
                                <h3>Fashion</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-briefcase" />
                                </div>
                                <h3>Jobs</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-apartment" />
                                </div>
                                <h3>Real Estates</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-book" />
                                </div>
                                <h3>Education</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-users" />
                                </div>
                                <h3>Matrimony</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-heart" />
                                </div>
                                <h3>Pets</h3>
                            </Link>
                        </div> */}

                        {
                            categoryData?.slice(0, 10)?.map((i, index) => {
                                return (
                                    <div className="category-list-item" key={index}>
                                        <Link to={`/product?category=${i.category}`}>
                                            <div className="icon">
                                                {/*<i className="lni lni-heart" />*/}
                                                <img src={i?.image} alt="image" className='img-fluid object-fit-cover' style={{ width: '45px', height: '45px' }} />
                                            </div>
                                            <h3>{i?.category}</h3>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* ====== CATEGORY LIST PART END ====== */}

            {/* ====== LATEST PRODUCT PART START ====== */}
            <section className="latest-product-area pt-130 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>Latest Products</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            productsData?.slice(0, 6)?.map((i, index) => {
                                return (
                                    <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                        <div className="single-product">
                                            <div className="product-img">
                                                <Link to={`/product-details/${i.id}`}>
                                                    <img src={i.product.image} alt="" />
                                                </Link>
                                                <div className="product-action">
                                                    <Link><i className="lni lni-heart" /></Link>
                                                    {/*<Link className="share"><i className="lni lni-share" /></Link>*/}
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <h3 className="name">
                                                    <Link to={`/product-details/${i.id}`}>{i.product.name}</Link>
                                                </h3>
                                                <span className="update">Last Update: {moment(i.updatedAt || i.createdAt, "DD-MM-YYYY, hh:mm:ss A").fromNow()}</span>
                                                <ul className="address">
                                                    <li>
                                                        <Link><i className="lni lni-calendar" /> {convertDateFormat(i.createdAt)}</Link>
                                                    </li>
                                                    <li>
                                                        <Link><i className="lni lni-map-marker" /> {i.user.country}</Link>
                                                    </li>
                                                    <li>
                                                        <Link><i className="lni lni-user" /> {i.user.firstName}</Link>
                                                    </li>
                                                    <li>
                                                        <Link><i className="lni lni-package" /> {i.product.category}</Link>
                                                    </li>
                                                </ul>
                                                <div className="product-bottom">
                                                    <h3 className="price">${i.product.price}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* ====== LATEST PRODUCT PART ENDS ====== */}

            {/* ====== VIDEO PART START ====== */}
            <section className="video-area">
                <div className="video-wrapper img-bg">
                    <div className="container">
                        <div className="text-center video-content">
                            <h1 className="text-white mb-60">Learn More About ClassiList</h1>
                            <Link
                                className="glightbox video-btn"
                                data-glightbox="type: video; source: youtube; href: https://youtu.be/FSjZD0-znPs?si=7ESs536WP1QUBYGJ"
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

            {/* ====== SERVICE PART START ====== */}
            <section className="service-area pt-140 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>Why Choose Us</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore
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
                                    <i className="lni lni-laptop-phone" />
                                </div>
                                <div className="service-content">
                                    <h3>FULLY RESPONSIVE</h3>
                                    <p>Buy and sell everything from used cars to mobile phones and computer or search for
                                        property.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== SERVICE PART ENDS ====== */}

            {/* ====== FEATURE PRODUCT PART START ====== */}
            <section className="feature-product-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-lg-6 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>Featured Products</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-carousel-wrapper">
                        <div className="row feature-product-carousel">
                            {productsData?.map((i, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="single-product">
                                            <div className="product-img">
                                                <img src={i.product.image} alt="" />
                                            </div>
                                            <div className="product-content">
                                                <div className="rating-wrapper">
                                                    <h5 className="price theme-color">${i.product.price}</h5>
                                                </div>
                                                <h3 className="name">
                                                    <Link to={`/product-details/${i.id}`}>{i.product.name}</Link>
                                                </h3>
                                                <p className="sort-des">
                                                    {i.product.description}
                                                </p>
                                                <div className="product-bottom">
                                                    <div className="address-link">
                                                        <i className="lni lni-map-marker me-1" />
                                                        {i.user.state}, {i.user.city}
                                                    </div>
                                                    {/*<span className="theme-color"><i className="lni lni-heart" /></span>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </section>
            {/* ====== FEATURE PRODUCT PART ENDS ====== */}

            {/* ====== PRICING PRODUCT PART START ====== */}
            <PricingPage />
            {/* ====== PRICING PRODUCT PART ENDS ====== */}

            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <Subscription />
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

            {/* ====== TESTIMONIAL PART START ====== */}
            <section className="testimonial-area pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>What Our Users Says</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et
                                    dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-wrapper">
                        <div className="row testimonial-carousel">
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial1} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Ena Shah</h6>
                                                <p>Creative Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial2} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Michel Smith</h6>
                                                <p>Product Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial3} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Sarah A. K.</h6>
                                                <p>Graphic Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial2} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Michel Smith</h6>
                                                <p>Product Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial1} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Ena Shah</h6>
                                                <p>Creative Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-testimonial">
                                    <div className="testimonial-top">
                                        <div className="testimonial-info">
                                            <div className="image">
                                                <img src={testimonial1} alt="" />
                                            </div>
                                            <div className="meta">
                                                <h6>Ena Shah</h6>
                                                <p>Creative Designer</p>
                                            </div>
                                        </div>
                                        <div className="quote">
                                            <img src={quote} alt="" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet,consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                            invidunt ut.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== TESTIMONIAL PART ENDS ====== */}

        </>
    );
}

export default Home;
