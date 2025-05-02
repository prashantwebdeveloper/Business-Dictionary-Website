import React from 'react';
import { Link } from 'react-router-dom';

import notfoundimg from "../../assets/images/404/404-img.svg";

const PageNotFound = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">404 Page</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">404 Page</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== 404 PRODUCT PART START ====== */}
            <section className="page-404-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="text-center content-404">
                                <div className="image mb-50">
                                    <img src={notfoundimg} alt="" />
                                </div>
                                <h1>Page Not Found</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== 404 PRODUCT PART ENDS ====== */}

        </>
    );
}

export default PageNotFound;
