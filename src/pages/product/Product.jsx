import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

import moment from 'moment';

import product1 from "../../assets/images/product/l-product-1.jpg";
import product2 from "../../assets/images/product/l-product-2.jpg";
import product3 from "../../assets/images/product/l-product-3.jpg";
import product4 from "../../assets/images/product/l-product-4.jpg";
import product5 from "../../assets/images/product/l-product-5.jpg";
import product6 from "../../assets/images/product/l-product-6.jpg";
import adimg from "../../assets/images/product/ad-img.jpg";

import Loader from '../../components/loader/Loader';

import { GetProductsFirebase } from '../../firebase/services/product/ProductServices';
import { convertDateFormat } from '../../utils/dateUtils';

const Product = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const querySearch = queryParams.get('search') || "";
    const queryCategory = queryParams.get('category') || "";

    console.log(location, queryParams, querySearch, queryCategory);


    const [activeCategoryTab, setActiveCategoryTab] = useState("grid");

    const sliderRef = useRef(null);
    const lowerValueRef = useRef(null);
    const upperValueRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current && !sliderRef.current.noUiSlider) {
            noUiSlider.create(sliderRef.current, {
                start: [199, 789],
                connect: true,
                range: {
                    min: 99,
                    max: 999
                }
            });

            sliderRef.current.noUiSlider.on("update", (values) => {
                lowerValueRef.current.innerHTML = parseFloat(values[0]).toFixed(2);
                upperValueRef.current.innerHTML = parseFloat(values[1]).toFixed(2);
            });
        }

        return () => {
            if (sliderRef.current && sliderRef.current.noUiSlider) {
                sliderRef.current.noUiSlider.destroy(); // Cleanup
            }
        };
    }, []);



    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState([]);

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        navigate(`/product?search=${search}`);
        setSearch("");
    }

    const GetProducts = async (querySearch, queryCategory) => {
        setIsLoading(true);

        try {
            const res = await GetProductsFirebase(querySearch, queryCategory);
            console.log("Res-Products++", res);

            setProductsData(res?.filter((i) => i.product.status === "active"));

        } catch (err) {
            console.error("Error-Product", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetProducts(querySearch, queryCategory);
    }, [querySearch, queryCategory]);



    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">All Product</h1>
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

            {/* ====== CATEGORY PART START ====== */}
            <section className="category-area pb-110">
                <div className="container">
                    {/* category top */}
                    <div className="category-top box-style">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="left-wrapper">
                                    <div className="sorting">
                                        <label htmlFor="sort">Show items</label>
                                        <select name="sort" id="sort">
                                            <option value={0}>Popular Items</option>
                                            <option value={1}>By Default</option>
                                            <option value={2}>Newest Items</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-wrapper">
                                    <ul className="nav product-view-btns" id="myTab" role="tablist">
                                        <li className="product-view-item" role="presentation">
                                            <Link
                                                // className="product-view-btn"
                                                className={`product-view-btn ${activeCategoryTab === "list" ? "active" : ""}`}
                                                id="list-tab"
                                                // data-bs-toggle="tab"
                                                // data-bs-target="#list"
                                                role="tab"
                                                aria-controls="list"
                                                // aria-selected="true"
                                                aria-selected={activeCategoryTab === "list"}
                                                onClick={() => setActiveCategoryTab("list")}
                                            >
                                                <i className="lni lni-list" />
                                            </Link>
                                        </li>
                                        <li className="product-view-item" role="presentation">
                                            <Link
                                                // className="product-view-btn active"
                                                className={`product-view-btn ${activeCategoryTab === "grid" ? "active" : ""}`}
                                                id="grid-tab"
                                                // data-bs-toggle="tab"
                                                // data-bs-target="#grid"
                                                role="tab"
                                                aria-controls="grid"
                                                // aria-selected="false"
                                                aria-selected={activeCategoryTab === "grid"}
                                                onClick={() => setActiveCategoryTab("grid")}
                                            >
                                                <i className="lni lni-grid-alt" />
                                            </Link>
                                        </li>
                                    </ul>
                                    <form onSubmit={handleSearch}>
                                        <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} autoFocus required />
                                        <button type='submit'><i className="lni lni-search-alt" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* category wrapper */}
                    <div className="category-wrapper">
                        <div className="row">
                            {/* left-wrapper  */}
                            <div className="col-lg-8">
                                <div className="left-wrapper">
                                    <div className="tab-content" id="myTabContent">
                                        <div
                                            // className="tab-pane fade show active"
                                            className={`tab-pane fade ${activeCategoryTab === "grid" ? "show active" : ""}`}
                                            id="grid"
                                            role="tabpanel"
                                            aria-labelledby="grid-tab"
                                        >
                                            <div className="row">
                                                {
                                                    productsData?.map((i, index) => {
                                                        return (
                                                            <div className="col-lg-6 col-md-6" key={index}>
                                                                <div className="single-product">
                                                                    <div className="product-img">
                                                                        <Link to={`/product-details/${i.id}`}>
                                                                            <img src={i.product.image} alt="" />
                                                                        </Link>
                                                                        <div className="product-action">
                                                                            <Link ><i className="lni lni-heart" /></Link>
                                                                            <Link className="share"><i className="lni lni-share" /></Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="name"><Link to={`/product-details/${i.id}`}>{i.product.name}</Link></h3>
                                                                        <span className="update">Last Update: {moment(i.updatedAt || i.createdAt, "DD-MM-YYYY, hh:mm:ss A").fromNow()} </span>
                                                                        <ul className="address">
                                                                            <li>
                                                                                <Link ><i className="lni lni-calendar" /> {convertDateFormat(i.createdAt)}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-map-marker" /> {i.user.country}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-user" /> {i.user.firstName}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-package" /> Used</Link>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="product-bottom">
                                                                            <h3 className="price">${i.product.price}</h3>
                                                                            <Link className="link-ad"><i className="lni lni-checkmark-circle" /> Verified Ad</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div
                                            // className="tab-pane fade"
                                            className={`tab-pane fade ${activeCategoryTab === "list" ? "show active" : ""}`}
                                            id="list"
                                            role="tabpanel"
                                            aria-labelledby="list-tab"
                                        >
                                            <div className="row">
                                                {
                                                    productsData?.map((i, index) => {
                                                        return (
                                                            <div className="col-lg-12" key={index}>
                                                                <div className="single-product list-view">
                                                                    <div className="product-img">
                                                                        <Link to={`/product-details/${i.id}`}>
                                                                            <img src={i.product.image} alt="" />
                                                                        </Link>
                                                                        <div className="product-action">
                                                                            <Link ><i className="lni lni-heart" /></Link>
                                                                            <Link className="share"><i className="lni lni-share" /></Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-content">
                                                                        <h3 className="name"><Link to={`/product-details/${i.id}`}>{i.product.name}</Link></h3>
                                                                        <span className="update">Last Update: {moment(i.updatedAt || i.createdAt, "DD-MM-YYYY, hh:mm:ss A").fromNow()} </span>
                                                                        <ul className="address">
                                                                            <li>
                                                                                <Link ><i className="lni lni-calendar" /> {convertDateFormat(i.createdAt)}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-map-marker" /> {i.user.country}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-user" /> {i.user.firstName}</Link>
                                                                            </li>
                                                                            <li>
                                                                                <Link ><i className="lni lni-package" /> Used</Link>
                                                                            </li>
                                                                        </ul>
                                                                        <div className="product-bottom">
                                                                            <h3 className="price">      </h3>
                                                                            <Link className="link-ad"><i className="lni lni-checkmark-circle" /> Verified Ad</Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar wrapper  */}
                            <div className="col-lg-4">
                                <div className="sidebar-wrapper">
                                    {/* price range  */}
                                    <div className="box-style price-range">
                                        <h3 className="mb-30">Price Range</h3>
                                        <div className="collapse show" id="pricingOne">
                                            <div className="price-range">
                                                <div className="price-amount">
                                                    <div className="amount-input">
                                                        <label>Minimum Price</label>
                                                        <div
                                                            // id="slider-snap-value-lower"
                                                            ref={lowerValueRef}
                                                            className="amount"
                                                            contentEditable
                                                        />
                                                    </div>
                                                    <div className="amount-input">
                                                        <label>Maximum Price</label>
                                                        <div
                                                            // id="slider-snap-value-upper"
                                                            ref={upperValueRef}
                                                            className="amount"
                                                            contentEditable
                                                        />
                                                    </div>
                                                </div>
                                                <div
                                                    // id="slider-snap"
                                                    ref={sliderRef}
                                                    className="range-slider"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* sidebar category  */}
                                    <div className="box-style sidebar-category">
                                        <h3 className="mb-30">All Categories</h3>
                                        <ul>
                                            <li><Link ><span>Web Design</span> <span className="right">12</span></Link></li>
                                            <li><Link ><span>Branding</span> <span className="right">20</span></Link></li>
                                            <li><Link ><span>Web Development</span> <span className="right">45</span></Link></li>
                                            <li><Link ><span>Graphic Design</span> <span className="right">87</span></Link></li>
                                            <li><Link ><span>Marketing</span> <span className="right">35</span></Link></li>
                                            <li><Link ><span>Wireframing</span> <span className="right">34</span></Link></li>
                                        </ul>
                                    </div>
                                    {/* add box */}
                                    <div className="box-style add-box">
                                        <h3 className="mb-30">Advertisement</h3>
                                        <div className="image">
                                            <Link className="d-block">
                                                <img src={adimg} alt="" className="w-100" />
                                            </Link>
                                        </div>
                                    </div>
                                    {/* social box */}
                                    <div className="box-style social-box">
                                        <h3 className="mb-30">Follow Us</h3>
                                        <ul className="social">
                                            <li><Link ><i className="lni lni-facebook-filled" /></Link></li>
                                            <li><Link ><i className="lni lni-twitter-filled" /></Link></li>
                                            <li><Link ><i className="lni lni-instagram-filled" /></Link></li>
                                            <li><Link ><i className="lni lni-linkedin-original" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== CATEGORY PART END ====== */}

        </>
    );
}

export default Product;






