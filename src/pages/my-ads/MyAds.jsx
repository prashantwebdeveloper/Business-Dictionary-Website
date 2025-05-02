import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import Sidebar from '../../components/sidebar/Sidebar';
import DeleteAds from '../../components/modal/delete-ads/DeleteAds';
import Loader from '../../components/loader/Loader';

import { DeleteProductFirebase, GetProductsFirebase } from '../../firebase/services/product/ProductServices';
import { DeleteProductImageKit } from '../../imageKit/services/product/ProductServices';
import { toast } from 'react-toastify';

const initialState= {
    productId: null,
    imageFileId: null,
}

const MyAds = () => {

    const [selectedProduct, setSelectedProduct] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState([]);

    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(initialState);

    const handleClose = () => {
        setDeleteModalShow(false);
    }

    const GetProducts = async (status) => {
        setIsLoading(true);

        try {
            const res = await GetProductsFirebase(status);
            console.log("Res-Products++", res);

            setProductsData(res);

        } catch (err) {
            console.error("Error-Product", err);
        } finally {
            setIsLoading(false);
        }
    }


    const handleDelete = async () => {
        setIsLoading(true);

        try {
            if (deleteProduct.imageFileId) {
                const resDelImg = await DeleteProductImageKit(deleteProduct.imageFileId);

                if (resDelImg?.$ResponseMetadata?.statusCode === 204) {
                    const res = await DeleteProductFirebase(deleteProduct.productId);
                    console.log("Res-Products++", res);

                    setDeleteProduct(initialState);
                    handleClose();

                    toast.success("product deleted successfully");
                    GetProducts();
                }
            }
        } catch (err) {
            console.error("Error-Product", err);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        GetProducts(selectedProduct);
    }, [selectedProduct]);


    const getStatusClass = (status) => {
        switch (status) {
            case 'active':
                return 'bg-success';
            case 'deactive':
                return 'bg-light text-dark';
            case 'SOLD':
                return 'bg-secondary';
            case 'EXPIRED':
                return 'bg-warning';
            case 'DELETE':
                return 'bg-danger';
            default:
                return '';
        }
    };


    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">
                                    My Ads
                                </h1>
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
                            <div className="dashboard-wrapper box-style">
                                <div className="title">
                                    <h3>My Ads</h3>
                                </div>
                                <div className="cards-wrapper pb-25 mb-15 border-bottom">
                                    <Link
                                        className={`ads-btn ${selectedProduct === "" ? "active" : ""}`}
                                        onClick={() => setSelectedProduct("")}
                                    >
                                        All Ads ({productsData?.length || 0})
                                    </Link>
                                    {/* <Link className="ads-btn">Published (88)</Link>
                                    <Link className="ads-btn">Featured (17)</Link>
                                    <Link className="ads-btn">Sold (32)</Link> */}
                                    <Link
                                        className={`ads-btn ${selectedProduct === "active" ? "active" : ""}`}
                                        onClick={() => setSelectedProduct("active")}
                                    >
                                        Active ({productsData?.filter((i) => i.product.status === "active").length || 0})
                                    </Link>
                                    <Link
                                        className={`ads-btn ${selectedProduct === "deactive" ? "active" : ""}`}
                                        onClick={() => setSelectedProduct("deactive")}
                                    >
                                        Deactive ({productsData?.filter((i) => i.product.status === "deactive").length || 0})
                                    </Link>
                                    {/* <Link className="ads-btn">Expired (02)</Link> */}
                                </div>
                                <div className="table-wrapper table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Photo
                                                </th>
                                                <th>
                                                    Title
                                                </th>
                                                <th>
                                                    Category
                                                </th>
                                                <th>
                                                    Ad Status
                                                </th>
                                                <th>
                                                    Price
                                                </th>
                                                <th>
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                productsData?.map((i, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>
                                                                <div className="image">
                                                                    <div className="form-check check-style">
                                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" />
                                                                    </div>
                                                                    <img src={i.product.image} width={100} alt="" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <h6>{i.product.name}</h6>
                                                                <span className="ad-id">Ad ID: {i.id}</span>
                                                            </td>
                                                            <td>
                                                                <span className="category">{i.product.category}</span>
                                                            </td>
                                                            <td>
                                                                <span className={`status-btn ${getStatusClass(i.product.status)}`}>
                                                                    {i.product.status === "active" ? "Active" : "Deactive"}
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <p>${i.product.price}</p>
                                                            </td>
                                                            <td>
                                                                <div className="action-btns">
                                                                    <Link
                                                                        className="eye-btn"
                                                                        to={`/view-ad/${i.id}`}
                                                                    >
                                                                        <i className="lni lni-eye" /></Link>
                                                                    <Link
                                                                        className="edit-btn"
                                                                        to={`/edit-ad/${i.id}`}
                                                                        state={i}
                                                                    >
                                                                        <i className="lni lni-pencil" />
                                                                    </Link>
                                                                    <Link
                                                                        className="delete-btn"
                                                                        onClick={() => {
                                                                            setDeleteModalShow(true);
                                                                            setDeleteProduct({
                                                                                productId: i?.id,
                                                                                imageFileId: i?.product?.imageFileId,
                                                                            })
                                                                        }}
                                                                    >
                                                                        <i className="lni lni-trash" />
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== DASHBOARD PART END ====== */}




            { /* ----- Delete-Ads Model ----- */}
            <DeleteAds show={deleteModalShow} handleClose={handleClose} handleDelete={handleDelete} />

        </>
    );
}

export default MyAds;





export const MyAdsData = [
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "ACTIVE", price: "20.99" },
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "ACTIVE", price: "20.99" },
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "INACTIVE", price: "20.99" },
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "SOLD", price: "20.99" },
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "EXPIRED", price: "20.99" },
    { title: "8 GB DDR4 Ram, 4th Gen", adId: "ng3D5hAMHPajQrM", category: "Ram &amp; Laptop", status: "DELETE", price: "20.99" },
]




