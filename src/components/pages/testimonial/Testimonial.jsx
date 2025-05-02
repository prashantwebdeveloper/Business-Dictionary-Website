import React from 'react';

import uidecklogo from "../../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../../assets/images/client-logo/graygrids-logo.svg";

const Testimonial = () => {
    return (
        <>

            <section className="client-logo-area pt-140 pb-110">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto col-xl-6 col-lg-7 col-md-10">
                            <div className="text-center section-title mb-60">
                                <h1>Trusted By</h1>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed diam nonumy eirmod tempor
                                    invidunt ut labore et
                                    dolore magna.</p>
                            </div>
                        </div>
                    </div>
                    <div className="client-logo-wrapper">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-logo">
                                    <img src={uidecklogo} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-logo">
                                    <img src={pagebulblogo} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-logo">
                                    <img src={lineiconslogo} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="single-logo">
                                    <img src={graygridslogo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Testimonial;
