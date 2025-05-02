import { createContext, useContext, useEffect, useState } from "react";

import Loader from '../../components/loader/Loader';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/FirebaseConfig";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // const user = auth.currentUser;
        // console.log("currentUser-->", user);

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("onAuthStateChanged++", currentUser);

            setCurrentUser(currentUser);

            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {isLoading ? <Loader isLoading={isLoading} /> : children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    return useContext(AuthContext);
};