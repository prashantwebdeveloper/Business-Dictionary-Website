import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

import Loader from '../../components/loader/Loader';

import { SignInUser } from '../../firebase/services/auth/login/LoginServices';
import { toast } from 'react-toastify';

const initialState = {
    email: "",
    password: "",
}

const Login = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const [showpassword, setshowpassword] = useState(false);

    const PasswordShowHide = () => {
        setshowpassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const resLogin = await SignInUser(formData);
            console.log("Res-Login++", resLogin);

            if (resLogin?.user?.accessToken) {
                // const userData = {
                //     ...formData,
                //     uid: resRegister.user.uid
                // };

                // const res = await PostUsersFirebase(userData);
                // console.log("Res-Users++", res);

                // if (res?.success) {
                toast.success("Login successfully");
                setFormData(initialState);

                localStorage.setItem("business-user-token", resLogin.user.accessToken);
                navigate("/dashboard");
                // }

            }

        } catch (err) {
            console.error("Error-Res-Login", err);
            console.log(err.code);
            console.log(err.message);

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
            }
            else if (err?.code === "auth/invalid-credential") {
                toast.error("Invalid email or password.");
            }
            else {
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
                                <h1 className="text-white">Sign In</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Sign In</li>
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
                                <h3 className="mb-20">Sign In</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
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
                                                        {showpassword ? <FaRegEye size={22} /> : <FaRegEyeSlash size={20} />}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-30">
                                                <button type='submit' className="main-btn btn-hover py-2 px-5 rounded" disabled={isLoading}>Sign In</button>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-20">
                                                <p>Forget Password? <Link>Reset Now</Link></p>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form mb-30">
                                                <p>Don't have an Account? <Link to="/register">Sing Up</Link></p>
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="single-form text-center mb-30">
                                                <h6>Or</h6>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="single-form">
                                                <p className="mb-20">Login with </p>
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

export default Login;
