import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import profileimg from "../../assets/images/dashboard/profile-img.png";
import Sidebar from '../../components/sidebar/Sidebar';
import Loader from '../../components/loader/Loader';

import { useAuth } from '../../context/auth/AuthContext';
import { SignOutUser } from '../../firebase/services/auth/logout/LogoutServices';
import { toast } from 'react-toastify';

import { GetUsersDetailsFirebase, PutUsersFirebase } from '../../firebase/services/users/UsersServices';
import { DeleteUsersImageKit, PostUsersImageKit } from '../../imageKit/services/users/UsersServices';
import { ProfileUpdateUser } from '../../firebase/services/auth/register/RegisterServices';

const initialState = {
    name: "",
    email: "",
    phone: "",
    image: "",
    imageFileId: "",
    organizationName: "",
    createdAt: "",
    updatedAt: "",
}

const Profile = () => {

    const { currentUser } = useAuth();
    // console.log(currentUser);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);

    const [imageShow, setImageShow] = useState(currentUser?.photoURL);
    console.log(formData);


    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));

        if (files) {
            setImageShow(URL.createObjectURL(files[0]));
        }
    }




    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        let imageUrl = formData.image;
        let fileId = formData.imageFileId;
        try {
            if (typeof formData.image === 'object') {
                if (formData.imageFileId) {
                    const resDelImg = await DeleteUsersImageKit(formData.imageFileId);

                    if (resDelImg?.$ResponseMetadata?.statusCode === 204) {
                        const resImg = await PostUsersImageKit(formData.image);
                        console.log("Res-ImageKit++", resImg);

                        if (resImg?.$ResponseMetadata?.statusCode === 200) {
                            imageUrl = resImg?.url;
                            fileId = resImg?.fileId;
                        }
                    }
                }
            }

            const userFormData = {
                ...formData,
                image: imageUrl,
                imageFileId: fileId,
            }

            const resProfileUpdate = await ProfileUpdateUser(currentUser, userFormData);
            console.log("Res-ProfileUpdate++", resProfileUpdate);

            if (resProfileUpdate?.success) {
                const res = await PutUsersFirebase(currentUser?.uid, userFormData);
                console.log("Res-Product++", res);

                if (res?.success) {
                    toast.success("Profile updated successfully");
                    GetUserProfile(currentUser?.uid);
                }
            }

        } catch (err) {
            console.error("Error-ProfileUpdate", err);
        } finally {
            setIsLoading(false);
        }
    }






    const GetUserProfile = async (UID) => {
        setIsLoading(true);

        try {
            const res = await GetUsersDetailsFirebase(UID);
            console.log("Res-Users-Details++", res);

            setFormData({
                name: res?.name,
                email: res?.email,
                phone: res?.phone,
                image: res?.image,
                imageFileId: res?.imageFileId,
                organizationName: res?.organizationName,
                createdAt: res?.createdAt,
                updatedAt: res?.updatedAt,
            });

        } catch (err) {
            console.error("Error-Users-Details", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        GetUserProfile(currentUser?.uid);

        setImageShow(currentUser?.photoURL);
    }, [currentUser?.uid]);

    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">Profile</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
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
                                    <h3>Profile</h3>
                                </div>
                                <div className="post-ad-form-wrapper">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-7">
                                                <div className="right-wrapper pt-50">
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="name" className="mb-1">Name</label>
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Name"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.name}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="email" className="mb-1">Email</label>
                                                        <input
                                                            type="text"
                                                            id="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.email}
                                                            readOnly
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="phone" className="mb-1">Phone*</label>
                                                        <input
                                                            type="text"
                                                            pattern='\d*'
                                                            maxLength={16}
                                                            id="phone"
                                                            name="phone"
                                                            placeholder="Phone"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.phone}
                                                            onChange={handleChange}
                                                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="single-form mb-15">
                                                        <div className="single-form mb-20">
                                                            <label htmlFor="image" className="mb-2">Image</label>
                                                            <input
                                                                type="file"
                                                                id="image"
                                                                name="image"
                                                                placeholder="Name"
                                                                className="py-2 px-3 mb-0 rounded border"
                                                                onChange={handleChange}
                                                                // required
                                                                accept='image/*'
                                                            />
                                                            {imageShow && (
                                                                <div className="mb-3 mt-3">
                                                                    <img
                                                                        src={imageShow}
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
                                                    <div className="single-form mb-15">
                                                        <label htmlFor="organizationName" className="mb-1">Organization Name</label>
                                                        <input
                                                            type="text"
                                                            id="organizationName"
                                                            name="organizationName"
                                                            placeholder="Organization Name"
                                                            className="px-3 py-2 mb-0 border rounded"
                                                            value={formData?.organizationName}
                                                            onChange={handleChange}
                                                            required
                                                        />
                                                    </div>
                                                    <button className="main-btn btn-hover">Update</button>
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

export default Profile;
