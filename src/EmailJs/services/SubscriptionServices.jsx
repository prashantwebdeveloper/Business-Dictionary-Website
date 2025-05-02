import emailjs from '@emailjs/browser';

// Subscription

// Post-Email
export const PostSubscriptionEmailJs = async (data) => {
    try {
        const res = await emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            data,
            {
                publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            }
        );
        console.log("PostSubscription-EmailJs++", res);

        if (res?.status === 200) {
            return res;
        }
    } catch (err) {
        console.error('Error-PostSubscription-EmailJs--', err);
    }
}