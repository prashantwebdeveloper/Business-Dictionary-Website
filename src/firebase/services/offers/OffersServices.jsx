import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";
import { FormatDate } from "../../../utils/dateUtils";

// Offers
// Collection
const offersCollection = collection(firestoreDB, "offers");

// Doc
const offersDoc = (id) => {
    return doc(firestoreDB, "offers", id);
}


// Get
export const GetOffersFirebase = async () => {
    try {
        const res = await getDocs(offersCollection);
        console.log("Get-Offers++", res);

        if (!res?.empty) {
            return res.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))
                .sort((a, b) => {
                    const parseDate = (str) => {
                        const [dateStr, timeStr, ampm] = str.split(/, | /);
                        const [day, month, year] = dateStr.split("-").map(Number);
                        let [hour, minute, second] = timeStr.split(":").map(Number);

                        if (ampm === "PM" && hour < 12) hour += 12;
                        if (ampm === "AM" && hour === 12) hour = 0;

                        return new Date(year, month - 1, day, hour, minute, second);
                    };

                    const dateA = parseDate(a.createdAt);
                    const dateB = parseDate(b.createdAt);

                    return dateB - dateA;
                });
        }
    } catch (err) {
        console.error('Error-Get-Offers--', err);
    }
}


// Get-Detail
export const GetOffersDetailsFirebase = async (id) => {
    try {
        const res = await getDoc(offersDoc(id));
        console.log("Get-Offers-Details++", res);

        if (res?.exists()) {
            return {
                ...res.data(),
                id: res.id,
            };
        }
    } catch (err) {
        console.error('Error-Get-Offers-Details--', err);
    }
}


// Post
export const PostOffersFirebase = async (data) => {
    try {
        const payload = {
            ...data,
            createdAt: FormatDate(new Date()),
        }

        const res = await addDoc(offersCollection, payload);
        console.log("Post-Offers++", res);

        if (res?.id) {
            return res;
        }
    } catch (err) {
        console.error('Error-Post-Offers--', err);
    }
}



// Delete
export const DeleteOffersFirebase = async (id) => {
    try {
        const res = await deleteDoc(offersDoc(id));
        console.log("Delete-Offers++", res);

        return res;
    } catch (err) {
        console.error('Error-Delete-Offers--', err);
    }
}
