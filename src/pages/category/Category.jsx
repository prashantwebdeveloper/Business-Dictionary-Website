import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";

import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

import Loader from '../../components/loader/Loader';

import { GetCategoryFirebase } from '../../firebase/services/category/CategoryServices';

const Category = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [categoryData, setCategoryData] = useState([]);


    const GetCategory = async () => {
        setIsLoading(true);

        try {
            const res = await GetCategoryFirebase();
            console.log("Res-Category++", res);

            setCategoryData(res?.filter((i) => i.status === "active"));
        } catch (err) {
            console.error("Error-Category", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetCategory();
    }, []);

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">All Category</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Category</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== CATEGORY LIST PART START ====== */}
            <section className="category-list-area pt-60 pb-80">
                <div className="container">
                    <div className="category-list-wrapper">
                       {/* <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-car" />
                                </div>
                                <h3>Vehicles</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-display" />
                                </div>
                                <h3>Electronics</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-mobile" />
                                </div>
                                <h3>Mobiles</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-leaf" />
                                </div>
                                <h3>Furnitures</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-tshirt" />
                                </div>
                                <h3>Fashion</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-briefcase" />
                                </div>
                                <h3>Jobs</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-apartment" />
                                </div>
                                <h3>Real Estates</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-book" />
                                </div>
                                <h3>Education</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-users" />
                                </div>
                                <h3>Matrimony</h3>
                            </Link>
                        </div>
                        <div className="category-list-item">
                            <Link to="/product">
                                <div className="icon">
                                    <i className="lni lni-heart" />
                                </div>
                                <h3>Pets</h3>
                            </Link>
                        </div> */}

                        {
                            categoryData?.map((i, index) => {
                                return (
                                    <div className="category-list-item" key={index}>
                                        <Link to={`/product?category=${i.category}`}>
                                            <div className="icon">
                                                {/* <i className="lni lni-heart" /> */}
                                                <img src={i?.image} alt="image" className='img-fluid object-fit-cover' style={{ width: '45px', height: '45px' }} />
                                            </div>
                                            <h3>{i?.category}</h3>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* ====== CATEGORY LIST PART END ====== */}


            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <Subscription />
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

            {/* ====== TESTIMONIAL PART START ====== */}
            <Testimonial />
            {/* ====== TESTIMONIAL PART ENDS ====== */}
        </>
    );
}

export default Category;
