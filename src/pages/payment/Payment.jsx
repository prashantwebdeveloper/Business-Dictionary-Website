import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";
import QrCode from "../../assets/images/payment/qrcode.png";

import PricingPage from '../../components/pages/pricing/Pricing';
import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

const Payment = () => {

    const { state } = useLocation();
    console.log(state);

    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Payment</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== PRICING PRODUCT PART START ====== */}
            <section className="pricing-area pt-140 pb-140">

                <div className="text-center section-title mb-20">
                    <h1>Payment</h1>
                </div>

                <div className='container'>

                    <div className='box d-flex justify-content-center align-items-center'>
                        <img src={QrCode} className='img-fluid w-25' />
                        <div className='ms-2'>
                            <h2>{state?.planName || "Basic Pack"}</h2>

                            <h3 className="price mt-4" style={{ color: "#FF6B6B", fontSize: '28px' }}> <sup>$</sup> {state?.planPrice || 20}.00</h3>
                            <span className="time">Monthly</span>

                        </div>
                    </div>
                </div>

            </section>
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

export default Payment;
