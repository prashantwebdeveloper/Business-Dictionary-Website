import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from '../../components/loader/Loader';

import { GetProductDetailsFirebase } from '../../firebase/services/product/ProductServices';

const ViewAd = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({});

    const GetProductDetails = async (ID) => {
        setIsLoading(true);

        try {
            const res = await GetProductDetailsFirebase(ID);
            console.log("Res-Product-Details++", res);

            setFormData(res);
        } catch (err) {
            console.error("Error-Product-Details", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetProductDetails(id);
    }, [id]);

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">View Ad</h1>
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
                                    <h3>View Ad</h3>
                                </div>
                                <div className="post-ad-form-wrapper">
                                    <form>
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="left-wrapper pt-50">
                                                    <h5 className="mb-25">Ad Details</h5>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="name" className="mb-1">Product Name</label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Title"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.product?.name}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="category" className="mb-1">Categories</label>
                                                        <input
                                                            type="text"
                                                            id="category"
                                                            name="category"
                                                            placeholder="Title"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.product?.category}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="price" className="mb-1">Price</label>
                                                        <input
                                                            type="text"
                                                            pattern='\d*'
                                                            id="price"
                                                            name="price"
                                                            placeholder="Price"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.product?.price}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="description" className="mb-1">Description</label>
                                                        <textarea
                                                            type="text"
                                                            name="description"
                                                            id="description"
                                                            rows={5}
                                                            placeholder="Description"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.product?.description}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="status" className="mb-1">Status</label>
                                                        <div class="d-flex">
                                                            <div className="form-check check-style">
                                                                <input
                                                                    type="radio"
                                                                    name="status"
                                                                    id="Active"
                                                                    className="form-check-input cursor-pointer"
                                                                    value="active"
                                                                    checked={formData?.product?.status === "active"}
                                                                    readOnly
                                                                />
                                                                <label htmlFor="Active" className='cursor-pointer'>Active</label>
                                                            </div>
                                                            <div className="form-check check-style">
                                                                <input
                                                                    type="radio"
                                                                    name="status"
                                                                    id="Deactive"
                                                                    className="form-check-input cursor-pointer"
                                                                    value="deactive"
                                                                    checked={formData?.product?.status === "deactive"}
                                                                    readOnly
                                                                />
                                                                <label htmlFor="Deactive" className='cursor-pointer'>Deactive</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-form">
                                                        <div className="upload-input">
                                                            {formData?.product?.image && (
                                                                <div className="image-preview mt-3">
                                                                    <img
                                                                        src={formData?.product?.image}
                                                                        alt="Selected file preview"
                                                                        className="img-thumbnail position-relative"
                                                                        style={{ maxWidth: '100%', maxHeight: '100%', zIndex: "999" }}
                                                                    />
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-5">
                                                <div className="right-wrapper pt-50">
                                                    <h5 className="mb-25">Contact Details</h5>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="firstName" className="mb-1">First Name*</label>
                                                        <input
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                            placeholder="First Name"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.firstName}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="lastName" className="mb-1">Last Name*</label>
                                                        <input
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            placeholder="Last Name"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.lastName}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="phone" className="mb-1">Phone*</label>
                                                        <input
                                                            type="text"
                                                            pattern='\d*'
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="Phone"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.phone}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="address" className="mb-1">Enter Address</label>
                                                        <textarea
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            rows={5}
                                                            placeholder="Enter Address"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.address}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="country" className="mb-1">Country</label>
                                                        <input
                                                            type="text"
                                                            id="country"
                                                            name="country"
                                                            placeholder="Country"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.country}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="state" className="mb-1">State</label>
                                                        <input
                                                            type="text"
                                                            id="state"
                                                            name="state"
                                                            placeholder="State"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.state}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="city" className="mb-1">City</label>
                                                        <input
                                                            type="text"
                                                            id="city"
                                                            name="city"
                                                            placeholder="City"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.user?.city}
                                                            readOnly
                                                        />
                                                    </div>
                                                    {/* <button type='submit' className="main-btn btn-hover d-flex ms-auto">Update Ad</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
            {/* ====== DASHBOARD PART END ====== */}

        </>
    );
}

export default ViewAd;
