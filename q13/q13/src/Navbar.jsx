import { useContext } from "react";
import { DataContext } from "./Datacontext";

function Navbar(){
    const {islogin,setislogin}=useContext(DataContext);
    return(
        <div>
            <button onClick={()=>setislogin(prev=>!prev)}>{islogin?"Log out":"Login"}</button>
        </div>
    )
}

export default Navbar;