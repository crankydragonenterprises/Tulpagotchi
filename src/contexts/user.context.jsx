import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";

//the actual value you want to access
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
                navigate("/");
            }
        })

        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}