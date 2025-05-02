import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import Sidebar from '../../components/sidebar/Sidebar';

const Payments = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Payments</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Payments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== DASHBOARD PART START ====== */}
            <section className="dashboard-area pb-110">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <Sidebar />
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="dashboard-wrapper box-style">
                                <div className="title">
                                    <h3>Payments</h3>
                                </div>
                                <div className="payments-wrapper">
                                    <form>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="left-wrapper box-style mb-30">
                                                    <h5 className="mb-25">Your Order</h5>
                                                    <ul className="checkout">
                                                        <li>
                                                            <h6>Product</h6>
                                                            <h6>Total</h6>
                                                        </li>
                                                        <li>
                                                            <p>CCG tv Camera</p>
                                                            <p>$340.00</p>
                                                        </li>
                                                        <li>
                                                            <p>CCG tv Camera</p>
                                                            <p>$340.00</p>
                                                        </li>
                                                        <li>
                                                            <p>CCG tv Camera</p>
                                                            <p>$340.00</p>
                                                        </li>
                                                        <li>
                                                            <p>CCG tv Camera</p>
                                                            <p>$340.00</p>
                                                        </li>
                                                        <li>
                                                            <h6>SubTotal</h6>
                                                            <p>$1220.00</p>
                                                        </li>
                                                        <li>
                                                            <h6>Shipping</h6>
                                                            <div className="right">
                                                                <div className="mb-2 text-right d-block">
                                                                    <div className="form-check check-style">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="none" id="flexCheckDefault1" />
                                                                        <label htmlFor="flexCheckDefault1">Free Shipping</label>
                                                                    </div>
                                                                </div>
                                                                <div className="text-right d-block">
                                                                    <div className="form-check check-style">
                                                                        <input className="form-check-input" type="checkbox" defaultValue="none" id="flexCheckDefault2" />
                                                                        <label htmlFor="flexCheckDefault2">Flat Shipping:
                                                                            $10.00</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <h6>Total</h6>
                                                            <p>$1230.00</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="right-wrapper box-style mb-30">
                                                    <h5 className="mb-25">Payment Method</h5>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="name" className="mb-1">Name on Card *</label>
                                                        <input type="text" id="name" name="name" placeholder="John Doe" className="px-3 py-2 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="card" className="mb-1">Credit Card Type *</label>
                                                        <select name="card" id="card" className="px-3 py-2 border rounded w-100">
                                                            <option value="none">Visa</option>
                                                            <option value="none">Master</option>
                                                            <option value="none">Paypal</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="number" className="mb-1">Credit Card Number *</label>
                                                        <input type="text" id="number" name="number" placeholder="123 456 789" className="px-3 py-2 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="number2" className="mb-1">Card Verification Number*</label>
                                                        <input type="text" id="number2" name="number2" placeholder="* * * *" className="px-3 py-2 border rounded" />
                                                    </div>
                                                </div>
                                                <div className="box-style">
                                                    <div className="mb-20 d-flex justify-content-between">
                                                        <h3>Grand Total: </h3>
                                                        <h3>$1254</h3>
                                                    </div>
                                                    <button className="main-btn btn-hover btn-block">Place Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== DASHBOARD PART END ====== */}

        </>
    );
}

export default Payments;
