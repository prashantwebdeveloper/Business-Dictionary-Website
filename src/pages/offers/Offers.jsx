import React from 'react';
import { Link } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import productthumb1 from "../../assets/images/product/product-thumb-1.jpg";

import testimonial1 from "../../assets/images/testimonial/testimonial-1.png";
import testimonial2 from "../../assets/images/testimonial/testimonial-2.png";
import testimonial3 from "../../assets/images/testimonial/testimonial-3.png";
import Sidebar from '../../components/sidebar/Sidebar';


const Offers = () => {
    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Offers and Messages</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Offers and Messages</li>
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
                                    <h3>Offers and Messages</h3>
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
                                        </tbody>
                                    </table>
                                </div>
                                {/* <div className="chat-wrapper">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-10 col-xl-4">
                                                <div className="chat-list-wrapper">
                                                    <h5 className="mb-25">Users</h5>
                                                    <ul className="chat-list">
                                                        <li className="chat-item">
                                                            <Link className="chat-link">
                                                                <div className="image active">
                                                                    <img src={testimonial1} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <h5>Sarah A. K.</h5>
                                                                    <span>Online</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="chat-item">
                                                            <Link className="chat-link">
                                                                <div className="image active">
                                                                    <img src={testimonial2} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <h5>John Doe</h5>
                                                                    <span>Online</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="chat-item">
                                                            <Link className="chat-link">
                                                                <div className="image">
                                                                    <img src={testimonial3} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <h5>Alone Musk</h5>
                                                                    <span>Offline</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="chat-item">
                                                            <Link className="chat-link">
                                                                <div className="image active">
                                                                    <img src={testimonial1} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <h5>Ena Shah</h5>
                                                                    <span>Online</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                        <li className="chat-item">
                                                            <Link className="chat-link">
                                                                <div className="image">
                                                                    <img src={testimonial2} alt="" />
                                                                </div>
                                                                <div className="info">
                                                                    <h5>John Doe</h5>
                                                                    <span>Offline</span>
                                                                </div>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-xl-8 col-lg-12">
                                                <div className="message-wrapper">
                                                    <h5 className="mb-25">Message</h5>
                                                    <ul className="message-list">
                                                        <li className="message-item">
                                                            <div className="image">
                                                                <img src={testimonial2} alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <div className="text">
                                                                    <h5>John Doe</h5>
                                                                    <p>Minus archi tecto quo velit enim shayik harum totam quod
                                                                        volu ptas quasi.</p>
                                                                </div>
                                                                <span>5 Mins ago</span>
                                                            </div>
                                                        </li>
                                                        <li className="message-item right">
                                                            <div className="content">
                                                                <div className="text">
                                                                    <h5>John Doe</h5>
                                                                    <p>Minus archi tecto quo velit enim shayik harum hm nayem
                                                                        segufa taranjum totam quod volu ptas quasi.</p>
                                                                </div>
                                                            </div>
                                                            <div className="image">
                                                                <img src={testimonial2} alt="" />
                                                            </div>
                                                        </li>
                                                        <li className="message-item">
                                                            <div className="image">
                                                                <img src={testimonial2} alt="" />
                                                            </div>
                                                            <div className="content">
                                                                <div className="text">
                                                                    <h5>John Doe</h5>
                                                                    <p>Shayik harum totam quod volu ptas quasi.</p>
                                                                </div>
                                                                <span>5 Mins ago</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <textarea name="message" id="message" rows={2} placeholder="Type here and press Enter" defaultValue={""} />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== DASHBOARD PART END ====== */}

        </>
    );
}

export default Offers;
