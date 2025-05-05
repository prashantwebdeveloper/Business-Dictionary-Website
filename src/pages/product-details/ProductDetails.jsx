import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import productthumb2 from "../../assets/images/product/product-thumb-2.jpg";
import productthumb3 from "../../assets/images/product/product-thumb-3.jpg";
import productdetails1 from "../../assets/images/product/product-details-1.jpg";
import productdetails2 from "../../assets/images/product/product-details-2.jpg";
import productdetails3 from "../../assets/images/product/product-details-3.jpg";
import testimonial1 from "../../assets/images/testimonial/testimonial-1.png";
import testimonial2 from "../../assets/images/testimonial/testimonial-2.png";

import Loader from '../../components/loader/Loader';

import { GetProductDetailsFirebase } from '../../firebase/services/product/ProductServices';
import { convertDateFormat, DetailsconvertDateFormat } from '../../utils/dateUtils';

import { PostOffersFirebase } from '../../firebase/services/offers/OffersServices';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    phone: "",
    message: "",
}

const ProductDetails = () => {

    const { id } = useParams();
    console.log(id);

    const [isLoading, setIsLoading] = useState(false);
    const [productDetail, setProductDetail] = useState({});

    const [formData, setFormData] = useState(initialState)
    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        const customerData = {
            customer: formData,
            ownerId: productDetail?.ownerId,
            product: {
                ...productDetail?.product,
                id: productDetail?.id
            },
            user: productDetail?.user,
        }
        console.log(customerData);

        try {
            const res = await PostOffersFirebase(customerData);
            console.log("Res-Offers++", res);

            if (res?.id) {
                toast.success(`${formData?.name} Your Message sent successfully`);
                setFormData(initialState);
            }
        } catch (err) {
            console.error("Error-Offers", err);
        } finally {
            setIsLoading(false);
        }
    }


    const GetProductDetails = async (ID) => {
        setIsLoading(true);

        try {
            const res = await GetProductDetailsFirebase(ID);
            console.log("Res-Product-Details++", res);

            setProductDetail(res);

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
                                <h1 className="text-white">Product Details</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Product Details</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== PRODUCT DETAILS PART START ====== */}
            <section className="product-details-area">
                <div className="container">
                    <div className="product-details-wrapper box-style">
                        <div className="info-wrapper">
                            <div className="showcase-wrapper">
                                <div className="row">
                                    <div className="order-last col-lg-2 col-xl-2 order-lg-first">
                                        <div className="nav flex-lg-column nav-pills thumb-img-wrapper" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                            <a className="thumb-img active" id="v-pills-tab-1" data-toggle="pill" href="#v-pills-1" role="tab" aria-controls="v-pills-1" aria-selected="true">
                                                <img src={productDetail?.product?.image} alt="" />
                                            </a>
                                            {/* <a className="thumb-img" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">
                                                <img src={productthumb2} alt="" />
                                            </a>
                                           <a className="thumb-img" id="v-pills-tab-2" data-toggle="pill" href="#v-pills-2" role="tab" aria-controls="v-pills-2" aria-selected="false">
                                                <img src={productthumb2} alt="" />
                                            </a>
                                            <a className="thumb-img" id="v-pills-tab-3" data-toggle="pill" href="#v-pills-3" role="tab" aria-controls="v-pills-3" aria-selected="false">
                                                <img src={productthumb3} alt="" />
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-xl-10">
                                        <div className="tab-content" id="v-pills-tabContent">
                                            <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-tab-1">
                                                <div className="showcase-img">
                                                    <img src={productDetail?.product?.image} alt="" />
                                                </div>
                                            </div>
                                            {/* <div className="tab-pane fade show" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-tab-2">
                                                <div className="showcase-img">
                                                    <img src={productdetails2} alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-tab-2">
                                                <div className="showcase-img">
                                                    <img src={productdetails2} alt="" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-tab-3">
                                                <div className="showcase-img">
                                                    <img src={productdetails3} alt="" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper">
                                <div className="mb-20 meta-top">
                                    <Link className="mr-3 date"><i className="mr-2 lni lni-calendar" />
                                        {DetailsconvertDateFormat(productDetail?.createdAt)}
                                    </Link>
                                    <Link className="address"><i className="mr-2 lni lni-map-marker" />
                                        {productDetail?.user?.country}
                                    </Link>
                                </div>
                                <h3 className="title mb-25">{productDetail?.product?.name}</h3>
                                <p className="description mb-30">
                                    {productDetail?.product?.description}
                                </p>

                                {/* <h5 className="subtitle">Specification:</h5>
                                <div className="specification">
                                    <ul>
                                        <li><i className="lni lni-checkmark-circle" />256GB PCIe flash storage</li>
                                        <li><i className="lni lni-checkmark-circle" />Turbo Boost up to 3.1GHz Intel</li>
                                        <li><i className="lni lni-checkmark-circle" />10 hour battery life</li>
                                        <li><i className="lni lni-checkmark-circle" />13.3" Retina Display</li>
                                    </ul>
                                    <ul>
                                        <li><i className="lni lni-checkmark-circle" />2.7 GHz dual-core Intel Core i5</li>
                                        <li><i className="lni lni-checkmark-circle" />Iris Graphics 6100 8GB memory</li>
                                        <li><i className="lni lni-checkmark-circle" />8GB memory</li>
                                        <li><i className="lni lni-checkmark-circle" />1 Year international warranty</li>
                                    </ul>
                                </div> */ }

                                <div className="meta-bottom">
                                    <ul>
                                        <li>
                                            <i className="lni lni-folder" /> <span>Categories: </span> <Link>{productDetail?.product?.category}</Link>
                                        </li>
                                        <li>
                                            <i className="lni lni-link" /> <span>Categories: </span> <Link>{productDetail?.product?.category}</Link>
                                        </li>
                                        <li>
                                            <i className="lni lni-user" /> <span>Business: </span> <Link>{productDetail?.user?.firstName}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="review-wrapper">
                            {/* <div className="review-header">
                                <div className="left-side">
                                    <h5>5 Reviews</h5>
                                </div>
                                <div className="right-side">
                                    <h6>Average Rating <span>4.5</span></h6>
                                    <div className="rating">
                                        <i className="lni lni-star-filled" />
                                        <i className="lni lni-star-filled" />
                                        <i className="lni lni-star-filled" />
                                        <i className="lni lni-star-filled" />
                                        <i className="lni lni-star" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="review-body">
                                {/* <div className="review-item-wrapper">
                                    <div className="review-item">
                                        <div className="image">
                                            <img src={testimonial1} alt="" />
                                        </div>
                                        <div className="media">
                                            <div className="info">
                                                <h6>Nichel Smith <span>Review 20 Minits ago</span></h6>
                                                <div className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                </div>
                                            </div>
                                            <p className="mb-30">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy eirmod tempor invidunt
                                                ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing
                                                elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                                justo duo dolore.</p>
                                            <a href="javascript:void(0)" className="reply"><i className="lni lni-reply" /> Reply</a>
                                        </div>
                                    </div>
                                    <div className="review-item reply-item pt-35">
                                        <div className="image">
                                            <img src={testimonial2} alt="" />
                                        </div>
                                        <div className="media">
                                            <div className="info">
                                                <h6>John Doe <span>Review 20 Minits ago</span></h6>
                                                <div className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                </div>
                                            </div>
                                            <p className="mb-30">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                nonumy eirmod tempor invidunt
                                                ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing
                                                elitr.</p>
                                            <a href="javascript:void(0)" className="reply"><i className="lni lni-reply" /> Reply</a>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="add-review-wrapper">
                                    {/* <h5 className="mb-20">Add a Review</h5>
                                    <p className="mb-30">Your email address will not be published. Required fields are marked</p> */}

                                    <form onSubmit={handleSubmit} className="review-form">
                                        {/* <div className="mb-15 form-check">
                                            <input className="p-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                <span className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <span className="ml-2">(234)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-15 form-check">
                                            <input className="p-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                <span className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <span className="ml-2">(234)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-15 form-check">
                                            <input className="p-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                <span className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <span className="ml-2">(234)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-15 form-check">
                                            <input className="p-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                <span className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <span className="ml-2">(234)</span>
                                                </span>
                                            </label>
                                        </div>
                                        <div className="mb-15 form-check">
                                            <input className="p-0 form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5" />
                                            <label className="form-check-label" htmlFor="flexRadioDefault5">
                                                <span className="rating">
                                                    <i className="lni lni-star-filled" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <i className="lni lni-star" />
                                                    <span className="ml-2">(234)</span>
                                                </span>
                                            </label>
                                        </div> */}
                                        <div className="row mt-30">
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <label htmlFor="name">Your Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        placeholder="Enter Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="single-input">
                                                    <label htmlFor="email">Your Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Enter Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <label htmlFor="phone">Your Phone</label>
                                                    <input
                                                        type="text"
                                                        pattern='\d*'
                                                        maxLength={16}
                                                        id="phone"
                                                        name="phone"
                                                        placeholder="Your Phone"
                                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <label htmlFor="message">Your Message</label>
                                                    <textarea
                                                        type="text"
                                                        name="message"
                                                        id="message"
                                                        placeholder="Type Message"
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="single-input">
                                                    <button type='submit' className="main-btn btn-hover">Submit</button>
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
            {/* ====== PRODUCT DETAILS PART END ====== */}

        </>
    );
}

export default ProductDetails;
