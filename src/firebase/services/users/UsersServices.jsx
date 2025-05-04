import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";
import { FormatDate } from "../../../utils/dateUtils";


// Users
// Collection
const usersCollection = collection(firestoreDB, "users");

// Doc
const usersDocId = (id) => {
    return doc(usersCollection, id);
}


// Post
export const PostUsersFirebase = async (data) => {
    try {
        const payload = {
            ...data,
            createdAt: FormatDate(new Date()),
            updatedAt: null,
        }

        const res = await setDoc(usersDocId(data.uid), payload);
        console.log("Post-Users++", res);

        return { success: true };
    } catch (err) {
        console.error('Error-Post-Users--', err);

        return { success: false, error: err };
    }
}


// Get-Detail
export const GetUsersDetailsFirebase = async (id) => {
    try {
        const res = await getDoc(usersDocId(id));
        console.log("Get-Users-Details++", res);

        if (res?.exists()) {
            return {
                ...res.data(),
                id: res.id,
            };
        }
    } catch (err) {
        console.error('Error-Get-Users-Details--', err);
    }
}


// Update
export const PutUsersFirebase = async (uid, data) => {
    try {
        const payload = {
            ...data,
            updatedAt: FormatDate(new Date()),
        }

        const res = await updateDoc(usersDocId(uid), payload);
        console.log("Put-Users++", res);

        return { success: true };
    } catch (err) {
        console.error('Error-Put-Users--', err);

        return { success: false, error: err };
    }
}