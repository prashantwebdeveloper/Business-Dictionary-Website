import React from 'react';
import { Link } from 'react-router-dom';

import uidecklogo from "../../assets/images/client-logo/uideck-logo.svg";
import pagebulblogo from "../../assets/images/client-logo/pagebulb-logo.svg";
import lineiconslogo from "../../assets/images/client-logo/lineicons-logo.svg";
import graygridslogo from "../../assets/images/client-logo/graygrids-logo.svg";

import Subscription from '../../components/pages/subscription/Subscription';
import Testimonial from '../../components/pages/testimonial/Testimonial';

const Faq = () => {

    const faqData = [
        {
            question: "How can I list my business on your platform?",
            answer: "To list your business, start by clicking on the 'Add Business' button located on our homepage. You will be prompted to fill out a form with key information such as your business name, category, contact details, location, and a brief description. Once submitted, our team will review your application to ensure accuracy and relevance. The verification process typically takes 24–48 hours. After approval, your business will go live on the platform and be visible to all users."
        },
        {
            question: "Is there a fee to list my business?",
            answer: "We offer a free basic listing option that allows businesses to appear in relevant search results and be discovered by users. However, for businesses looking to increase visibility, attract more customers, and take advantage of advanced features, we provide premium subscription plans. These plans include benefits such as priority placement, enhanced SEO tools, access to analytics, promotional opportunities, and more. Pricing details for premium plans can be found on our 'Pricing' page."
        },
        {
            question: "How do I update my business information?",
            answer: "To update your business information, first log in to your account using your registered email and password. Once logged in, navigate to your dashboard, where you'll find the 'Edit Business Info' section. From there, you can make changes to your contact information, operating hours, business description, photos, and more. After submitting the changes, our team may review the updates for accuracy before they go live, especially if they involve core business details."
        },
        {
            question: "Can users leave reviews for businesses?",
            answer: "Yes, our platform allows registered users to leave reviews and ratings for businesses they've interacted with. This feature helps foster transparency and trust within the community. Users can provide a star rating (from 1 to 5 stars) along with a written review sharing their experience. Businesses are also able to respond to reviews, allowing for meaningful engagement and the opportunity to address feedback directly. Reviews are moderated to ensure they meet our content guidelines."
        }
    ];



    return (
        <>

            {/* ====== BANNER PART START ====== */}
            <section className="banner-area bg_cover">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <h1 className="text-white">FAQ</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">FAQ</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== BANNER PART END ====== */}

            {/* ====== ACCORDIONS PART START ====== */}
            <section className="accordions-area pt-60 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion-wrapper">
                                <h1 className="text-center mb-50">Frequently Asked Questions</h1>
                                <div className="accordion" id="accordionExample">

                                    {faqData.map((item, index) => (
                                        <div className="single-accordion" key={index}>
                                            <button
                                                className={`text-left accordion-btn btn-block ${index === 0 ? '' : 'collapsed'}`}
                                                type="button"
                                                data-toggle="collapse"
                                                data-target={`#collapse${index}`}
                                                aria-expanded={index === 0 ? 'true' : 'false'}
                                                aria-controls={`collapse${index}`}
                                            >
                                                {item.question}
                                            </button>
                                            <div
                                                id={`collapse${index}`}
                                                className={`collapse ${index === 0 ? 'show' : ''}`}
                                                data-parent="#accordionExample"
                                            >
                                                <div className="accordion-content">
                                                    {item.answer}
                                                </div>
                                            </div>
                                        </div>
                                    ))}


                                    {/* <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Rerum enim nulla harum ipsa labore?
                                        </button>
                                        <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Commodi in verit atis quo illum inventore dolore officiis?
                                        </button>
                                        <div id="collapseTwo" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Officiis minima sequi porro quae, ipsum iure?
                                        </button>
                                        <div id="collapseThree" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-accordion">
                                        <button className="text-left accordion-btn btn-block collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Alias aperiam dolorem nulla distinctio similique sed?
                                        </button>
                                        <div id="collapseFour" className="collapse" data-parent="#accordionExample">
                                            <div className="accordion-content">
                                                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                                sapiente ea proident. Ad vegan excepteur
                                                butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                                aesthetic synth nesciunt you probably
                                                haven't heard of them accusamus labore sustainable VHS.
                                            </div>
                                        </div>
                                    </div> */}

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ====== ACCORDIONS PART END ====== */}

            {/* ====== SUBSCRIBE PRODUCT PART START ====== */}
            <Subscription />
            {/* ====== SUBSCRIBE PRODUCT PART ENDS ====== */}

            {/* ====== TESTIMONIAL PART START ====== */}
            <Testimonial />
            {/* ====== TESTIMONIAL PART ENDS ====== */}

        </>
    );
}

export default Faq;
