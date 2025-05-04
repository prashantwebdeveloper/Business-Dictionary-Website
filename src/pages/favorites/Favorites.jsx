import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";
import Sidebar from '../../components/sidebar/Sidebar';

const Favorites = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white"> Favorites </h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Favorites</li>
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
                                    <h3>Favorites</h3>
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
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault1" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn">ACTIVE</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault2" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn">ACTIVE</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault3" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn bg-light text-dark">INACTIVE</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault4" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn bg-secondary">SOLD</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault5" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn bg-warning">EXPIRED</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="image">
                                                        <div className="form-check check-style">
                                                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault6" />
                                                        </div>
                                                        <img src={productthumb1} width={100} alt="" />
                                                    </div>
                                                </td>
                                                <td>
                                                    <h6>8 GB DDR4 Ram, 4th Gen</h6>
                                                    <span className="ad-id">Ad ID: ng3D5hAMHPajQrM</span>
                                                </td>
                                                <td>
                                                    <span className="category">Ram &amp; Laptop</span>
                                                </td>
                                                <td>
                                                    <span className="status-btn bg-danger">DELETE</span>
                                                </td>
                                                <td>
                                                    <p>$20.99</p>
                                                </td>
                                                <td>
                                                    <div className="action-btns">
                                                        <Link className="eye-btn"><i className="lni lni-eye" /></Link>
                                                        <Link className="edit-btn"><i className="lni lni-pencil" /></Link>
                                                        <Link className="delete-btn"><i className="lni lni-trash" /></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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

export default Favorites;
