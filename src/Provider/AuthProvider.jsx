import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from './../FireBase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

     const [user , setUser] = useState(null);
     const [loading , setloading] = useState();

     const createuser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
     }
    
    const signin = (email,password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ( ) => {
        setloading(true);
        return signOut(auth)
       
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            console.log("user on the Auth state chamge ", currentUser)
            setUser(currentUser);
            setloading(false);
        }) ;
        return () => {
            unSubscribe();
        }

    }, [])

    







     const authInfo = {
        user,
        createuser,
        signin,
        logout,
        loading
     }



    return (
        <AuthContext.Provider value= {authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;