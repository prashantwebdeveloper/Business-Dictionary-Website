import React from 'react';
import { Link } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";

import PricingPage from '../../components/pages/pricing/Pricing';
import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

const Pricing = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Pricing</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== PRICING PRODUCT PART START ====== */}
            <PricingPage />
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

export default Pricing;
