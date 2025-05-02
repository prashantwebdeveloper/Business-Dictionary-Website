import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../loader/Loader';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BackToTop from '../back-to-top/BackToTop';

const Layout = () => {
    return (
        <>

            <Loader/>

            <Header />
                <Outlet />
            <Footer />

            <BackToTop />

        </>
    );
}

export default Layout;
