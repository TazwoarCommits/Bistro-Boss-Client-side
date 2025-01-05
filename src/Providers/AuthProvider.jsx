import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null); 

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password) ;
    };


    const googleLogin = provider => {
        setLoading(true) ; 
       return signInWithPopup(auth , provider) ;  
    
    }  


    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) ;
    };


    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updataUsersProfile = (name , photo) => {
        return updateProfile(auth.currentUser , {
            displayName : name ,
            photoURL : photo
         }) ;
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                // assign : get Token and store on client side
            }
            else{
                // remove token
            }
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }

    }, []) ;

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logout,updataUsersProfile , 
        googleLogin,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.array.isRequired
}

export default AuthProvider;