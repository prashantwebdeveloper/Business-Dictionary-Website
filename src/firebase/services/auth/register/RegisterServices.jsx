import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestoreDB } from "../../../FirebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { FormatDate } from "../../../../utils/dateUtils";


export const SignUpUser = async (data) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        console.log("Register++", res);

        if (res?.user?.accessToken) {
            await updateProfile(res.user, {
                displayName: data.name,
            });

            return res;
        }
    } catch (err) {
        console.error('Error-Register--', err);

        throw err;
    }
}


// Users
// Collection
const usersCollection = collection(firestoreDB, "users");

// Doc
const usersDocId = (id) => {
    return doc(usersCollection, id);
}

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

        return { success : false, error: err };
    }
}