import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from '../../components/loader/Loader';

import { DeleteProductImageKit, PostProductImageKit } from '../../imageKit/services/product/ProductServices';
import { GetCategoryFirebase } from '../../firebase/services/category/CategoryServices';
import { PutProductFirebase } from '../../firebase/services/product/ProductServices';
import { toast } from 'react-toastify';

const initialState = {
    product: {
        name: "",
        category: "",
        price: "",
        description: "",
        image: null,
        imageFileId: "",
        status: "active",
    },
    user: {
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        country: "",
        state: "",
        city: "",
    }
}

const EditAd = () => {

    const { id } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(id, state);

    const [categoryData, setCategoryData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [imageShow, setImageShow] = useState(state?.product?.image);

    console.log(formData);


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name in formData?.product) {
            setFormData((prev) => ({
                ...prev,
                product: {
                    ...prev.product,
                    [name]: files ? files[0] : value,
                }
            }));

            if (files) {
                setImageShow(URL.createObjectURL(files[0]));
            }
        }
        else if (name in formData?.user) {
            setFormData((prev) => ({
                ...prev,
                user: {
                    ...prev.user,
                    [name]: value,
                }
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);

        setIsLoading(true);

        let imageUrl = formData.product.image;
        let fileId = formData.product.imageFileId;
        try {
            if (typeof formData.product.image === 'object') {
                if (formData.product.imageFileId) {
                    const resDelImg = await DeleteProductImageKit(formData.product.imageFileId);

                    if (resDelImg?.$ResponseMetadata?.statusCode === 204) {
                        const resImg = await PostProductImageKit(formData.product.image);
                        console.log("Res-ImageKit++", resImg);

                        if (resImg?.$ResponseMetadata?.statusCode === 200) {
                            imageUrl = resImg?.url;
                            fileId = resImg?.fileId;
                        }
                    }
                }
            }

            const productData = {
                product: {
                    ...formData.product,
                    image: imageUrl,
                    imageFileId: fileId,
                },
                user: formData.user,
                ownerId: state.ownerId,
                createdAt: state.createdAt,
                updatedAt: state.updatedAt,
            }

            const res = await PutProductFirebase(id, productData);
            console.log("Res-Product++", res);

            if (res?.success) {
                toast.success("Product updated successfully");
                setFormData(initialState);

                navigate("/my-ads");
            }
        } catch (err) {
            console.error("Error-Product", err);
        } finally {
            setIsLoading(false);
        }
    }


    useEffect(() => {
        setFormData({
            product: {
                name: state?.product?.name || "",
                category: state?.product?.category || "",
                price: state?.product?.price || "",
                description: state?.product?.description || "",
                image: state?.product?.image || null,
                imageFileId: state?.product?.imageFileId || "",
                status: state?.product?.status,
            },
            user: {
                firstName: state?.user?.firstName || "",
                lastName: state?.user?.lastName || "",
                phone: state?.user?.phone || "",
                address: state?.user?.address || "",
                country: state?.user?.country || "",
                state: state?.user?.state || "",
                city: state?.user?.city || "",
            }
        });

        setImageShow(state?.product?.image);
    }, [state]);


    const GetCategory = async () => {
        try {
            const res = await GetCategoryFirebase();
            console.log("Res-Category++", res);

            setCategoryData(res?.filter((i) => i.status === "active"));
        } catch (err) {
            console.error("Error-Category", err);
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
                                <h1 className="text-white">Edit Ad</h1>
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
                                    <h3>Edit Ad</h3>
                                </div>
                                <div className="post-ad-form-wrapper">
                                    <form onSubmit={handleSubmit}>
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
                                                            value={formData.product.name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="category" className="mb-1">Categories</label>
                                                        <select
                                                            name="category"
                                                            id="category"
                                                            className="px-3 py-2 border rounded w-100"
                                                            value={formData.product.category}
                                                            onChange={handleChange}
                                                            required
                                                        >
                                                            <option value="">Select Category</option>
                                                            {
                                                                categoryData?.map((i, index) => {
                                                                    return (
                                                                        <option value={i?.category} key={index}>{i?.category}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
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
                                                            value={formData.product.price}
                                                            onChange={handleChange}
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                            required
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
                                                            value={formData.product.description}
                                                            onChange={handleChange}
                                                            required
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
                                                                    checked={formData.product.status === "active"}
                                                                    onChange={handleChange}
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
                                                                    checked={formData.product.status === "deactive"}
                                                                    onChange={handleChange}
                                                                />
                                                                <label htmlFor="Deactive" className='cursor-pointer'>Deactive</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="single-form">
                                                        <div className="upload-input">
                                                            <input
                                                                type="file"
                                                                id="image"
                                                                name="image"
                                                                onChange={handleChange}
                                                                accept="image/*"
                                                            // required
                                                            />
                                                            <label htmlFor="image" className="text-center content">
                                                                <span className="text">
                                                                    <span className="d-block mb-15">Drop files anywhere to
                                                                        Upload</span>
                                                                    <span className="d-block mb-15">Or</span>
                                                                    <span className="main-btn btn-hover">Select File</span>
                                                                    <span className="d-block">Maximum upload file size 10Mb</span>
                                                                </span>
                                                            </label>
                                                            {imageShow && (
                                                                <div className="image-preview mt-3">
                                                                    <img
                                                                        src={imageShow}
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
                                                            value={formData.user.firstName}
                                                            onChange={handleChange}
                                                            required
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
                                                            value={formData.user.lastName}
                                                            onChange={handleChange}
                                                            required
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
                                                            value={formData.user.phone}
                                                            onChange={handleChange}
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                            required
                                                        />
                                                    </div>
                                                    {/* <div className="single-form mb-15">
                                                    <label htmlFor="address1" className="mb-1">Enter Address (Line one)</label>
                                                    <input type="text" id="address1" name="address1" placeholder="Enter Address" className="px-3 py-2 mb-0 border rounded" />
                                                </div> */}
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="address" className="mb-1">Enter Address</label>
                                                        <textarea
                                                            type="text"
                                                            id="address"
                                                            name="address"
                                                            rows={5}
                                                            placeholder="Enter Address"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData.user.address}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="country" className="mb-1">Country</label>
                                                        <input
                                                            type="text"
                                                            name="country"
                                                            id="country"
                                                            placeholder="Country"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData.user.country}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="state" className="mb-1">State</label>
                                                        <input
                                                            type="text"
                                                            name="state"
                                                            id="state"
                                                            placeholder="State"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData.user.state}
                                                            // onChange={handleChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="city" className="mb-1">City</label>
                                                        <input
                                                            type="text"
                                                            name="city"
                                                            id="city"
                                                            placeholder="City"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData.user.city}
                                                            // onChange={handleChange}
                                                            readOnly
                                                        />
                                                    </div>
                                                    {/* <div className="single-form mb-15">
                                                    <div className="form-check check-style">
                                                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault4" />
                                                        <label htmlFor="flexCheckDefault4">I agree to all Terms of Use &amp; Posting
                                                            Rules</label>
                                                    </div>
                                                </div> */}
                                                    <button type='submit' className="main-btn btn-hover d-flex ms-auto" disabled={isLoading}>Update Ad</button>
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

export default EditAd;
