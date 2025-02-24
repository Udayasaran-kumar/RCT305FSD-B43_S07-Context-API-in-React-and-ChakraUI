import { createContext, useState } from "react";

export const DataContext=createContext();

export const DataContextprovider=({children})=>{
    const [islogin,setislogin]=useState(false);
    return(
        <DataContext.Provider value={{islogin,setislogin}}>
            {children}
        </DataContext.Provider>
    );
}

