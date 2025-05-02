import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";

// Category
// Collection
const categoryCollection = collection(firestoreDB, "category");

// Doc
const categoryDoc = (id) => {
    return doc(firestoreDB, "category", id);
}


// Get
export const GetCategoryFirebase = async () => {
    try {
        const res = await getDocs(categoryCollection);
        console.log("Get-Category++", res);

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
        console.error('Error-Get-Category--', err);
    }
}