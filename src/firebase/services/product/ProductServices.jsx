import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, Timestamp, updateDoc, where } from "firebase/firestore";
import { firestoreDB } from "../../FirebaseConfig";
import { FormatDate } from "../../../utils/dateUtils";

// Product
// Collection
const productCollection = collection(firestoreDB, "products");

// Doc
const productDoc = (id) => {
    return doc(firestoreDB, "products", id);
}


// Get
export const GetProductsFirebase = async (search= "", category= "", status= "") => {

    // console.warn(search, category, status);
    
    try {
        let productQuery = query(productCollection);

        if (search) {
            productQuery = query(
                productCollection, 
                where("product.name", ">=", search.toLowerCase()),
                where("product.name", "<=", search.toLowerCase() + "\uf8ff"),
            );
        }

        if (category) {
            productQuery = query(productCollection, where("product.category", "==", category));
        }

        if (status) {
            productQuery = query(productCollection, where("product.status", "==", status));
        }

        // else {
        //     productQuery = query(
        //         productCollection,
        //         // orderBy("createdAt", "desc")
        //     );
        // }

        const res = await getDocs(productQuery);
        console.log("Get-Product++", res);

        if (!res?.empty) {
            return res.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
                // createdAt: ConvertDate(doc._document?.createTime?.timestamp),
                // updatedAt: ConvertDate(doc._document?.updateTime?.timestamp)
            }))
                .sort((a, b) => {
                    
                    // const timestampA = new Date(a.createdAt).getTime();
                    // const timestampB = new Date(b.createdAt).getTime();

                    // return timestampB - timestampA; 

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
        console.error('Error-Get-Product--', err);
    }
}


// Get-Detail
export const GetProductDetailsFirebase = async (id) => {
    try {
        const res = await getDoc(productDoc(id));
        console.log("Get-Product-Details++", res);

        if (res?.exists()) {
            return {
                ...res.data(),
                id: res.id,
                // createdAt: ConvertDate(res._document?.createTime?.timestamp)
            };
        }
    } catch (err) {
        console.error('Error-Get-Product-Details--', err);
    }
}


// Post
export const PostProductFirebase = async (data) => {
    try {
        const payload = {
            ...data,
            createdAt: FormatDate(new Date()),
            updatedAt: null,
        }

        const res = await addDoc(productCollection, payload);
        console.log("Post-Product++", res);

        if (res?.id) {
            return res;
        }
    } catch (err) {
        console.error('Error-Post-Product--', err);
    }
}


// Update
export const PutProductFirebase = async (id, data) => {
    console.warn(data);
    
    try {
        const payload = {
            ...data,
            updatedAt: FormatDate(new Date()),
        }

        const res = await updateDoc(productDoc(id), payload);
        console.log("Put-Product++", res);

        return { success : true };
    } catch (err) {
        console.error('Error-Put-Product--', err);

        return { success : false, error: err };
    }
}


// Delete
export const DeleteProductFirebase = async (id) => {
    try {
        const res = await deleteDoc(productDoc(id));
        console.log("Delete-Product++", res);

        return res;
    } catch (err) {
        console.error('Error-Delete-Product--', err);
    }
}
