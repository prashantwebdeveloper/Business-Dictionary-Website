import React, { useEffect, useState } from 'react';

const Loader = ({ isLoading }) => {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 500);

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>

            {/* ====== PRELOADER PART START ====== */}

            <div className={`preloader ${isLoading ? "d-block" : "d-none"}`}>
                <div className="loader">
                    <div className="ytp-spinner">
                        <div className="ytp-spinner-container">
                            <div className="ytp-spinner-rotator">
                                <div className="ytp-spinner-left">
                                    <div className="ytp-spinner-circle" />
                                </div>
                                <div className="ytp-spinner-right">
                                    <div className="ytp-spinner-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====== PRELOADER PART ENDS ====== */}

        </>
    );
}

export default Loader;
