import React, { useRef, useState } from 'react';

import Loader from '../../loader/Loader';


import { PostSubscriptionEmailJs } from '../../../EmailJs/services/SubscriptionServices';
import { PostSubscriptionFirebase } from '../../../firebase/services/subscription/SubscriptionServices';
import { toast } from 'react-toastify';


const initialState = {
    email: ""
}

const Subscription = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const formRef = useRef();

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
            const resMail = await PostSubscriptionEmailJs(formData);
            console.log("Res-EmailJs++", resMail);

            if (resMail?.status === 200) {
                const res = await PostSubscriptionFirebase(formData);
                console.log("Res-Subscription++", res);

                if (res?.id) {
                    toast.success("Thanks for Subscribe");
                    setFormData(initialState);
                }
            }
        } catch (err) {
            console.error("Error-Subscription", err);
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>

            {isLoading && <Loader isLoading={isLoading} />}

            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <section className="subscribe-area">
                <div className="container">
                    <div className="subscribe-wrapper bg_cover">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="subscribe-content section-title">
                                    <h1 className="text-white">Subscribe Our Newsletter</h1>
                                    <p className="text-white">Buy and sell everything from used cars to mobile phones and computer
                                        or search for property.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="subscribe-form-wrapper">
                                    <form className="subscribe-form" onSubmit={handleSubmit}>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                        <button type='submit'><i className="lni lni-telegram-original" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

        </>
    );
}

export default Subscription;
