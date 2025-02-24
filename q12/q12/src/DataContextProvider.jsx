import { useState, createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [isdark, setIsDark] = useState(false);

    return (
        <DataContext.Provider value={{ isdark, setIsDark }}>
            {children}
        </DataContext.Provider>
    )
};
