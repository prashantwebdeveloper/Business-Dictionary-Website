import { addDoc, collection } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig"; 
import { FormatDate } from "../../../utils/dateUtils";

// Subscription
// Collection
const subscriptionCollection = collection(firestoreDB, "subscription");


// Post
export const PostSubscriptionFirebase = async (data) => {
    try {
        const payload = {
            ...data,
            createdAt: FormatDate(new Date()),
        }

        const res = await addDoc(subscriptionCollection, payload);
        console.log("Post-Subscription++", res);

        if (res?.id) {
            return res;
        }
    } catch (err) {
        console.error('Error-Post-Subscription--', err);
    }
}