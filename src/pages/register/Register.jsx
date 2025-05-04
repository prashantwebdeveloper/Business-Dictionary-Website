import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

import Loader from '../../components/loader/Loader';

import { PostUsersImageKit } from '../../imageKit/services/users/UsersServices';
import { SignUpUser } from '../../firebase/services/auth/register/RegisterServices';
import { PostUsersFirebase } from '../../firebase/services/users/UsersServices';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    password: "",
    phone: "",
    image: "",
    imageFileId: "",
    organizationName: "",
}

const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const [showpassword, setshowpassword] = useState(false);

    const PasswordShowHide = () => {
        setshowpassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            if (formData.image) {
                const resImg = await PostUsersImageKit(formData.image);
                console.log("Res-ImageKit++", resImg);

                if (resImg?.$ResponseMetadata?.statusCode === 200) {
                    const userFormData = {
                        ...formData,
                        image: resImg?.url,
                        imageFileId: resImg?.fileId,
                    };

                    const resRegister = await SignUpUser(userFormData);
                    console.log("Res-Register++", resRegister);

                    if (resRegister?.user?.accessToken) {
                        const userData = {
                            ...userFormData,
                            uid: resRegister.user.uid
                        };

                        const res = await PostUsersFirebase(userData);
                        console.log("Res-Users++", res);

                        if (res?.success) {
                            toast.success(`${formData.name} Register successfully`);
                            setFormData(initialState);
                        }

                    }
                }
            }

        } catch (err) {
            console.error("Error-Res-Register", err);

            if (err?.code === "auth/email-already-in-use") {
                toast.error("email already use. Please different email use.");
            }
            else if (err?.code === "auth/invalid-email") {
                toast.error("Please enter a valid email address.");
            }
            else if (err?.code === "auth/weak-password") {
                toast.error("Password should be at least 6 characters");
            }
            else if (err?.code === "auth/network-request-failed") {
                toast.error("Network error. Please check your internet connection and try again.");
            } else {
                toast.error("An error occurred. Please try again later.");
            }
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Sign Up</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Sign up</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== 404 PRODUCT PART START ====== */}
            <section className="login-area pt-70 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-10">
                            <div className="login-wrapper box-style">
                                <h3 className="mb-20">Sign Up</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="name" className="mb-2">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    className="py-2 px-3 mb-0 rounded border"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="email" className="mb-2">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    className="py-2 px-3 mb-0 rounded border"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="password" className="mb-2">Password</label>
                                                <div className="input-group">
                                                    <input
                                                        type={showpassword ? "text" : "password"}
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                        className="py-2 px-3 mb-0 rounded border"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                    />

                                                    <span
                                                        onClick={PasswordShowHide}
                                                        style={{
                                                            position: 'absolute',
                                                            right: '10px',
                                                            top: '50%',
                                                            transform: 'translateY(-50%)',
                                                            border: "0",
                                                            color: '#7C869A',
                                                            backgroundColor: "transparent",
                                                            cursor: 'pointer',
                                                            zIndex: "999"
                                                        }}
                                                    >
                                                        {showpassword ? <FaRegEyeSlash size={22} /> : <FaRegEye size={20} />}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="phone" className="mb-2">Phone</label>
                                                <input
                                                    type="text"
                                                    pattern='\d*'
                                                    maxLength={16}
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    className="py-2 px-3 mb-0 rounded border"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="image" className="mb-2">Image</label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    placeholder="Name"
                                                    className="py-2 px-3 mb-0 rounded border"
                                                    onChange={handleChange}
                                                    required
                                                    accept='image/*'
                                                />
                                                {formData.image && (
                                                    <div className="mb-3 mt-3">
                                                        <img
                                                            src={URL.createObjectURL(formData.image)}
                                                            alt="Image"
                                                            className="img-thumbnail img-fluid"
                                                            style={{
                                                                maxWidth: "125px", maxHeight: "125px", marginBottom: "5px"
                                                            }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <label htmlFor="organizationName" className="mb-2">Organization Name</label>
                                                <input
                                                    type="text"
                                                    id="organizationName"
                                                    name="organizationName"
                                                    placeholder="Organization Name"
                                                    className="py-2 px-3 mb-0 rounded border"
                                                    value={formData.organizationName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-30">
                                                <button type='submit' className="main-btn btn-hover py-2 px-5 rounded" disabled={isLoading}>Sign Up</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-30">
                                                <p>Have an Account? <Link to="/login">Sign In</Link></p>
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="single-form text-center mb-30">
                                                <h6>Or</h6>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form">
                                                <p className="mb-20">Sign up with </p>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <Link className="main-btn btn-hover py-2 px-4">
                                                            <i className="lni lni-facebook-filled me-1" />
                                                            Facebook
                                                        </Link>
                                                    </div>
                                                    <div className="col-6">
                                                        <Link className="main-btn btn-hover py-2 px-4">
                                                            <i className="lni lni-google me-2" />
                                                            Google
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== 404 PRODUCT PART ENDS ====== */}

        </>
    );
}

export default Register;
