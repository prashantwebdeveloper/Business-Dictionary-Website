import { Route, Routes } from "react-router-dom";

import './assets/css/style.css';

import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Category from "./pages/category/Category";
import Product from "./pages/product/Product";
import Pricing from "./pages/pricing/Pricing";
import Payment from "./pages/payment/Payment";
import Faq from "./pages/faq/Faq";
import ProductDetails from "./pages/product-details/ProductDetails";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import PageNotFound from "./pages/page-not-found/PageNotFound";

import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import PostAd from "./pages/post-ad/PostAd";
import MyAds from "./pages/my-ads/MyAds";
import EditAd from "./pages/edit-ad/EditAd";
import ViewAd from "./pages/view-ad/ViewAd";
import Offers from "./pages/offers/Offers";
import Payments from "./pages/payments/Payments";
import Favorites from "./pages/favorites/Favorites";
import Privacy from "./pages/privacy/Privacy";

import AuthLayout from "./layouts/auth/AuthLayout";
import UserLayout from "./layouts/user/UserLayout";

function App() {

    return (
        <>

            <ScrollToTop />

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/category" element={<Category />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/product-details/:id" element={<ProductDetails />} />

                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/post-ad" element={<PostAd />} />
                        <Route path="/my-ads" element={<MyAds />} />
                        <Route path="/edit-ad/:id" element={<EditAd />} />
                        <Route path="/view-ad/:id" element={<ViewAd />} />
                        <Route path="/offers" element={<Offers />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/privacy" element={<Privacy />} />
                    </Route>

                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>

        </>
    )
}

export default App;
