import { createContext, useState } from "react";

export const DragondexContext = createContext({
    usersDragondex: null,
    setUsersDragondex: () => null,
});

export const DragondexProvider = ({ children }) => {
    const [usersDragondex, setUsersDragondex] = useState([]);
    const value = { usersDragondex, setUsersDragondex };

    return <DragondexContext.Provider value={value}>{children}</DragondexContext.Provider>
}