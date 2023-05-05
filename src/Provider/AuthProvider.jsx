import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';



 export const  AuthContext = createContext(null);
const  auth = getAuth(app)

const AuthProvider = ({children}) => {

  
const users = {displayName:"Muri khan"}


    const authInfo={
        users,
}
    


    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>

     
    );
};

export default AuthProvider;