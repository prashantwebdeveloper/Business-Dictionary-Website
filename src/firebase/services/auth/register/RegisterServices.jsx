import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../FirebaseConfig";


export const SignUpUser = async (data) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        console.log("Register++", res);

        if (res?.user?.accessToken) {
            await updateProfile(res.user, {
                displayName: data.name,
                photoURL: data.image
            });

            return res;
        }
    } catch (err) {
        console.error('Error-Register--', err);

        throw err;
    }
}



export const ProfileUpdateUser = async (currentUser, data) => {
    try {
        const res = await updateProfile(currentUser, {
            displayName: data.name,
            photoURL: data.image
        });
        console.log("updateProfile++", res);

        return { success: true };
    } catch (err) {
        console.error('Error-updateProfile--', err);

        return { success: false, error: err };
    }
}
