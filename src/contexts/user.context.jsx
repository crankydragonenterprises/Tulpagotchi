import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    const navigate = useNavigate();

    useEffect(() => {
        
        const unsubscribe = onAuthStateChangedListener((user)=> {
            if(user)
            {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            if(!user) 
            {
                //redirect to the home page if there is no user signed in
                navigate("/");
            }
        })

        return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}