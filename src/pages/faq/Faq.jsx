import React from 'react';
import { Link } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";

import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

const Faq = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">FAQ</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== ACCORDIONS PART START ====== */}
            <section className="accordions-area pt-60 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion-wrapper">
                                <h1 className="text-center mb-50">Frequently Asked Questions</h1>
                                <div className="accordion" id="accordionExample">
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Rerum enim nulla harum ipsa labore?
                                        </button>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Commodi in verit atis quo illum inventore dolore officiis?
                                        </button>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Officiis minima sequi porro quae, ipsum iure?
                                        </button>
                                        <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Alias aperiam dolorem nulla distinctio similique sed?
                                        </button>
                                        <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== ACCORDIONS PART END ====== */}

            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <Subscription />
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

            {/* ====== TESTIMONIAL PART START ====== */}
            <Testimonial />
            {/* ====== TESTIMONIAL PART ENDS ====== */}

        </>
    );
}

export default Faq;
