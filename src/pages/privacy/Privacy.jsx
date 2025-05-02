import React from 'react'
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import Sidebar from '../../components/sidebar/Sidebar';

const Privacy = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Privacy</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Privacy</li>
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
                                    <h3>Privacy</h3>
                                </div>
                                <div className="privacy-wrapper">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="left-wrapper box-style mb-30">
                                                    <h5 className="mb-25">Settings</h5>
                                                    <ul>
                                                        <li>
                                                            <div className="form-check check-style">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" />
                                                                <label htmlFor="flexCheckDefault1">Make my profile photo
                                                                    public</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check check-style">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault2" />
                                                                <label htmlFor="flexCheckDefault2">I want to receive monthly
                                                                    newsletter</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check check-style">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault3" />
                                                                <label htmlFor="flexCheckDefault3">I want to receive e-mail
                                                                    notifications of offers/messages</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check check-style">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault4" />
                                                                <label htmlFor="flexCheckDefault4">I want to receive e-mail alerts
                                                                    about new listings</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="form-check check-style">
                                                                <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault5" />
                                                                <label htmlFor="flexCheckDefault5">Enable offers/messages option in
                                                                    all my ads Post</label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <button className="main-btn btn-hover">Update</button>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="right-wrapper box-style mb-30">
                                                    <h5 className="mb-25">Delete Account</h5>
                                                    <select name="state" id="state" className="px-3 py-2 rounded w-100 mb-25">
                                                        <option value="none">State select</option>
                                                        <option value="none">State select</option>
                                                        <option value="none">State select</option>
                                                        <option value="none">State select</option>
                                                    </select>
                                                    <textarea name="desc" id="desc" rows={3} placeholder="Description" className="border" defaultValue={""} />
                                                    <button className="main-btn btn-hover">Delete</button>
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
    )
}

export default Privacy;
