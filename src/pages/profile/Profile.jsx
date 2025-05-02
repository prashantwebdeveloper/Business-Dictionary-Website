import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import Sidebar from '../../components/sidebar/Sidebar';

const Profile = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Profile Settings</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Ads</li>
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
                            <div className="post-ad-wrapper box-style">
                                <div className="title">
                                    <h3>Profile Settings</h3>
                                </div>
                                <div className="post-ad-form-wrapper">
                                    <form >
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="right-wrapper pt-50">
                                                    <h5 className="mb-25">Edit Profile</h5>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="name" className="mb-1">Name</label>
                                                        <input type="text" id="name" name="name" placeholder="Name" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="email" className="mb-1">Email</label>
                                                        <input type="text" id="email" name="email" placeholder="Email" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="password" className="mb-1">Old Password</label>
                                                        <input type="password" id="password" name="password" placeholder="Password" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="password2" className="mb-1">Chose Password</label>
                                                        <input type="password" id="password2" name="password2" placeholder="Password" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="phone" className="mb-1">Phone*</label>
                                                        <input type="text" id="phone" name="phone" placeholder="Phone" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="address" className="mb-1">Enter Address</label>
                                                        <input type="text" id="address" name="address" placeholder="Enter Address" className="px-3 py-2 mb-0 border rounded" />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="country" className="mb-1">Country</label>
                                                        <select name="country" id="country" className="px-3 py-2 border rounded w-100">
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="state" className="mb-1">State</label>
                                                        <select name="state" id="state" className="px-3 py-2 border rounded w-100">
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                        </select>
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="city" className="mb-1">City</label>
                                                        <select name="city" id="city" className="px-3 py-2 border rounded w-100">
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                            <option value="none">Select state</option>
                                                        </select>
                                                    </div>
                                                    <button className="main-btn btn-hover">Update</button>
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

export default Profile;
