import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>

            {/* ====== BACK TOP TOP PART START ====== */}

            {isVisible && (
                <Link className="back-to-top btn-hover" onClick={scrollToTop}>
                    <i className="lni lni-chevron-up" />
                </Link>
            )}

            {/* ====== BACK TOP TOP PART ENDS ====== */}

        </>
    );
}

export default BackToTop;
