import { createContext, useState } from "react";

export const UserDataContext = createContext({
    userData: {},
    setUserData: () => null,
});



export const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const value = { userData, setUserData };

    return <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider>
}
