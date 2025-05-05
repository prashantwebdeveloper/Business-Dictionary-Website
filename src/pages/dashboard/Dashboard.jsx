import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import Sidebar from '../../components/sidebar/Sidebar';
import DeleteAds from '../../components/modal/delete-ads/DeleteAds';
import Loader from '../../components/loader/Loader';

import { useAuth } from '../../context/auth/AuthContext';
import { DeleteProductFirebase, GetProductsFirebase } from '../../firebase/services/product/ProductServices';
import { DeleteProductImageKit } from '../../imageKit/services/product/ProductServices';
import { GetOffersFirebase } from '../../firebase/services/offers/OffersServices';
import { toast } from 'react-toastify';

const initialState = {
    productId: null,
    imageFileId: null,
}

const Dashboard = () => {

    const { currentUser } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [productsData, setProductsData] = useState([]);
    const [offersData, setOffersData] = useState([]);

    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(initialState);

    const handleClose = () => {
        setDeleteModalShow(false);
    }

    const GetProducts = async () => {
        setIsLoading(true);

        try {
            const res = await GetProductsFirebase();
            console.log("Res-Products++", res);

            setProductsData(res?.filter((i) => i.ownerId === currentUser?.uid));

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

    const GetOffers = async () => {
        setIsLoading(true);

        try {
            const res = await GetOffersFirebase();
            console.log("Res-Offers++", res);

            setOffersData(res?.filter((i) => i.ownerId === currentUser?.uid));

        } catch (err) {
            console.error("Error-Offers", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetProducts();
        GetOffers();
    }, []);


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
                                <h1 className="text-white"> Dashboard </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
                                    <h3>Dashboard</h3>
                                    {/*<span className="main-btn">Last 15 Days</span>*/ }
                                </div>
                                <div className="cards-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="box-style single-card">
                                                <div className="icon">
                                                    <i className="lni lni-notepad" />
                                                </div>
                                                <div className="text">
                                                    <h5>Total Ad Posted</h5>
                                                    <p>{productsData?.length || 0} Add Posted</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="box-style single-card">
                                                <div className="icon">
                                                    <i className="lni lni-envelope" />
                                                </div>
                                                <div className="text">
                                                    <h5>Offers / Message</h5>
                                                    <p>{offersData?.length || 0} Messages</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                productsData?.length > 0 ? (
                                                    productsData?.map((i, index) => {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    <div className="image">
                                                                        {/*<div className="form-check check-style">
                                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" />
                                                                    </div>*/}
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
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6" className="text-center nodata">
                                                            Data Not Found
                                                        </td>
                                                    </tr>
                                                )
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

export default Dashboard;
