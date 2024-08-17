import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from './firebase.config';


export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)


    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    };




    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });

        return () => unsubscribe();
    }, []);



    const userInfo = {
        user,
        loader,
        createUser,
        signIn,
        logOut,
       
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;