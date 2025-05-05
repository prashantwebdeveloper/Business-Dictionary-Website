import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Pricing = () => {

    const navigate = useNavigate();

    const handlePayment = (planName, planPrice) => {
        navigate("/payment", { state: { planName, planPrice } });
    }

    return (
        <>

            <section className="pricing-area pt-140 pb-140">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-90">
                                <h1>Select a Package</h1>
                                <p>
                                    Choose a listing package that fits your needs, from free listings to premium options for greater visibility. Find the perfect plan to help your business grow.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-8 col-sm-10 col-11">
                            <div className="single-pricing">
                                <div className="icon">
                                    <i className="lni lni-layers" />
                                </div>
                                <h3 className="name">Basic Pack</h3>
                                <ul>
                                    <li>Free ad posting</li>
                                    <li>6 Featured ads availability</li>
                                    <li>For 30 days</li>
                                    <li>100% Secure!</li>
                                </ul>
                                <h2 className="price"> <sup>$</sup> 20.00</h2>
                                <span className="time">Monthly</span>
                                <button className="main-btn btn-hover" onClick={()=> handlePayment("Basic Pack", 20)}>Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10 col-11">
                            <div className="single-pricing standard">
                                <div className="icon">
                                    <i className="lni lni-leaf" />
                                </div>
                                <h3 className="name">Standard Pack</h3>
                                <ul>
                                    <li>Free ad posting</li>
                                    <li>9 Featured ads availability</li>
                                    <li>For 30 days</li>
                                    <li>100% Secure!</li>
                                </ul>
                                <h2 className="price"> <sup>$</sup> 29.00</h2>
                                <span className="time">Monthly</span>
                                <button className="main-btn btn-hover" onClick={()=> handlePayment("Standard Pack", 29)}>Buy Now</button>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-8 col-sm-10 col-11">
                            <div className="single-pricing">
                                <div className="icon">
                                    <i className="lni lni-diamond-alt" />
                                </div>
                                <h3 className="name">Premium Pack</h3>
                                <ul>
                                    <li>Free ad posting</li>
                                    <li>20 Featured ads availability</li>
                                    <li>For 30 days</li>
                                    <li>100% Secure!</li>
                                </ul>
                                <h2 className="price"> <sup>$</sup> 49.00</h2>
                                <span className="time">Monthly</span>
                                <button className="main-btn btn-hover" onClick={()=> handlePayment("Premium Pack", 49)}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Pricing;
